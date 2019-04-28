<template>
  <div class="app-container">
    <!-- <div class="filter-container">
      <el-input :placeholder="$t('table.title')" v-model="listQuery.title" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter"/>
      <el-select v-model="listQuery.importance" :placeholder="$t('table.importance')" clearable style="width: 90px" class="filter-item">
        <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item"/>
      </el-select>
      <el-select v-model="listQuery.type" :placeholder="$t('table.type')" clearable class="filter-item" style="width: 130px">
        <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key"/>
      </el-select>
      <el-select v-model="listQuery.sort" style="width: 140px" class="filter-item" @change="handleFilter">
        <el-option v-for="item in sortOptions" :key="item.key" :label="item.label" :value="item.key"/>
      </el-select>
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ $t('table.search') }}</el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">{{ $t('table.add') }}</el-button>
      <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">{{ $t('table.export') }}</el-button>
      <el-checkbox v-model="showReviewer" class="filter-item" style="margin-left:15px;" @change="tableKey=tableKey+1">{{ $t('table.reviewer') }}</el-checkbox>
    </div> -->

    <el-table
      v-loading="listLoading"
      :key="tableKey"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;"
      @sort-change="sortChange">

      <el-table-column :label="$t('table.orderNumber')" prop="orderNumber" sortable="custom" align="center" width="150">
        <template slot-scope="scope">
          <span class="link-type" @click="handleShowDetail(scope.row)">{{ scope.row.orderNumber }}</span>
        </template>
      </el-table-column>

      <el-table-column :label="$t('table.goodsName')" width="150" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.goodsName }}</span>
        </template>
      </el-table-column>


      <el-table-column :label="$t('table.startTime')" width="150" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.startTime | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      
      <el-table-column :label="$t('table.endTime')" width="150" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.endTime | parseTime('{y}-{m}-{d} {h}:{i}')}}</span>
        </template>
      </el-table-column>


      <el-table-column :label="$t('table.needNum')" width="150" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.needNum}}</span>
        </template>
      </el-table-column>


      <el-table-column :label="$t('table.undoNum')" width="150" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.undoNum}}</span>
        </template>
      </el-table-column>

      <el-table-column :label="$t('table.buyer')" width="150" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.buyerName }}</span>
        </template>
      </el-table-column>

      <el-table-column :label="$t('table.orderStat')" class-name="status-col" width="200">
        <template slot-scope="scope">
          <el-tag :type="scope.row.orderStat | statusFilter">{{ scope.row.orderStat| statusNameFilter }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column :label="$t('table.actions')" align="center" min-width="200" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <!-- <el-button type="primary" v-if="scope.row.orderStat==0"  size="mini" @click="handleUpdate(scope.row)">{{ $t('table.edit') }}</el-button> -->
          <el-button v-if="scope.row.orderStat==1" size="mini" type="success" @click="handleConfirmStatus(scope.row,1)">{{ $t('table.confirm') }}
          </el-button>
          <el-button v-if="scope.row.orderStat==0" size="mini" type="danger" @click="handleDeleteOrder(scope.row)">{{ $t('table.delete') }}
          </el-button>

          <el-button  v-if="scope.row.orderStat>=3" size="small" @click="handleShowDetail(scope.row)">{{ $t('table.showDetail') }}
          </el-button>
          <el-button type="primary" v-if="scope.row.orderStat==2" size="small" @click="handleAddDetail(scope.row)">{{ $t('table.addDetail') }}
          </el-button>
          <el-button v-if="scope.row.orderStat==2" size="small" type="danger" @click="handleConfirmStatus(scope.row,0)">{{$t('table.cancelConfirm')}}
          </el-button>
          
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />





    <!-- 创建交货表 -->
    <el-dialog  :title="orderTitle" :visible.sync="dialogFormVisible">
    
      <el-form ref="dataForm" :rules="rules" :model="detail"  label-width="140px" style="width: 600px; margin-left:50px;">
        <el-form-item  v-for="item in detailInfo " :key="item.key" :label="$t('table.deliver')" :prop="item.value">
            <el-col :span="11">
          <el-date-picker v-model="detail[item.time]" type="date" placeholder="Please pick a date" value-format="timestamp"/>
            </el-col>
            <el-col :span="5" :offset="1">
             <el-input v-model="detail[item.num]"/>
            </el-col>
        </el-form-item>   
      
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">{{ $t('table.cancel') }}</el-button>
        <el-button type="primary" @click="createDetail()">{{ $t('table.confirm') }}</el-button>
        <el-button type="primary" @click="addrow()">{{ $t('table.addDetailItem') }}</el-button>
         <el-button type="danger" @click="deleterow()">{{ $t('table.deleteDetailItem') }}</el-button>
      </div>
    </el-dialog>


<!-- 订单细节数据  -->
    <el-dialog :title="orderTitle" :visible.sync="dialogDataVisible">
      <el-table
      :key="tableKey"
      :data="detailList"
      border
      fit
      highlight-current-row
      style="width: 820px;"
      @sort-change="sortChange">


       <el-table-column :label="$t('table.endTime')" min-width="50" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.time | parseTime('{y}-{m}-{d}')}}</span>
        </template>
      </el-table-column>

      <el-table-column :label="$t('table.expectNum')"  min-width="50" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.expectNum}}</span>
        </template>
      </el-table-column>


      <el-table-column :label="$t('table.actualNum')"  min-width="50" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.actualNum}}</span>
        </template>
      </el-table-column>




       </el-table>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogDataVisible = false">{{ $t('table.confirm') }}</el-button>
        <!-- <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">{{ $t('table.confirm') }}</el-button> -->
      </div>
       <pagination v-show="total>0" :total="detailTotal" :page.sync="detailListQuery.page" :limit.sync="detailListQuery.limit" @pagination="getDetailList" />
    </el-dialog>

    <el-dialog :visible.sync="dialogPvVisible" title="Reading statistics">
      <el-table :data="pvData" border fit highlight-current-row style="width: 100%">
        <el-table-column prop="key" label="Channel"/>
        <el-table-column prop="pv" label="Pv"/>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogPvVisible = false">{{ $t('table.confirm') }}</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import { fetchList, fetchPv, createArticle, updateArticle } from '@/api/article'
import {getSupplierType} from '@/api/user'
import {createOrder,getOrderList,orderPublish,orderCancelPublish,updateOrder,deleteOrder,getOrderDetail,orderConfirm,createOrderDetail} from '@/api/order'
import waves from '@/directive/waves' // Waves directive
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination

const calendarTypeOptions = [
  { key: 'CN', display_name: 'Chinaaaa' },
  { key: 'US', display_name: 'USA' },
  { key: 'JP', display_name: 'Japan' },
  { key: 'EU', display_name: 'Eurozone' }
]



// arr to obj ,such as { CN : "China", US : "USA" }
const calendarTypeKeyValue = calendarTypeOptions.reduce((acc, cur) => {
  acc[cur.key] = cur.display_name
  return acc
}, {})

export default {
  name: 'ComplexTable',
  components: { Pagination },
  directives: { waves },
  filters: {
    thransformStatus(status){
       const tsfStatusMap = {
        0: '11',
        1: '22',
        2: '33'
       }
      return tsfStatusMap[status]
    },
    statusFilter(status) {
   
      const statusMap = {
        0: 'success',
        1: 'info',
        2: 'danger'
      }
      return statusMap[status]
    },
    statusNameFilter(status){
      const statusNameMap = {
        0: '未发布',
        1: '等待供应商确认',
        2: '待完善发货表',
        3: '等待采购方确认发货表',
        4: '发货表确认发货中',
        5: '已完成'
      }
       // alert('statusFilter:'+statusNameMap[status]+"||"+JSON.stringify(status))
      return statusNameMap[status]
    },
    typeFilter(type) { 
      return "sss"
    }
  },
  data() {
    return {
      tableKey: 0,
      list: null,
      orderTitle: '',
      detailList:null,
      detail:{},
      total: 0,
      listLoading: true,
      detailTotal: 0,
      detailListQuery: {
        page: 1,
        limit: 10,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: '+id',
        orderId:undefined
      },
      listQuery: {
        page: 1,
        limit: 5,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: '+id'
      },
      detailInfo:[{ time: 't0', num: 'n0' }],
      importanceOptions: [1, 2, 3,4,5],
      calendarTypeOptions,
      sortOptions: [{ label: 'ID Ascending', key: '+id' }, { label: 'ID Descending', key: '-id' }],
      statusOptions: ['published', 'draft', 'deleted'],
      showReviewer: false,
      temp: {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        startTime: new Date(),
        endTime:undefined,
        orderNumber: '',
        type: undefined,
        orderStat: undefined,
        goodsName:'',
        buyerName:'',
        buyerID:undefined,
        supplierName:'',
        supplierID: undefined,
        needNum: undefined,
        undoNum: undefined,
        remark:'',
      },
      dialogFormVisible: false,
      dialogDataVisible: false,
      dialogStatus: '',
      dialogMsg:"",
      textMap: {
        update: 'Edit',
        create: 'Create'
      },
      dialogPvVisible: false,
      pvData: [],
      rules: {
        type: [{ required: true, message: '请选择供应商,如果无供应商请先创建', trigger: 'change' }],
        timestamp: [{ type: 'date', required: true, message: '请输入时间', trigger: 'change' }],
        orderNumber: [{ required: true, message: '请输入订单号', trigger: 'blur' }]
      },
      downloadLoading: false
    }
  },
  created() {
    this.getList()
  },
  methods: {

    addrow(){
      var size = this.detailInfo.length;
      var t = 't'+size
      var n =  'n'+size
      this.detailInfo.push({time:t,num:n})
     // alert(JSON.stringify(this.detailInfo))
    },
      deleterow(){
      // var size = this.detailInfo.length;
      // var t = 't'+size
      // var n =  'n'+size
      this.detailInfo.pop();
     // alert(JSON.stringify(this.detailInfo))
    },
    
     

    getDetailList() {
       //alert("调用getDetailList接口")
       getOrderDetail(this.detailListQuery).then(response =>{

       // alert(JSON.stringify(response))

        this.detailTotal=0;
        this.detailList = [];
        if(response.data!=null){
            this.detailList = response.data.items
            this.detailTotal = response.data.total
        }
       })
    },

    getList() {
      this.listLoading = true
      getOrderList(this.listQuery).then(response => {
        
        
        this.total=0;
        this.list = [];
        if(response.data!=null){
            this.list = response.data.items
            this.total = response.data.total
        }
        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1 * 1000)

      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },

    handlePublishStatus(row,type){
       var data = new Object()
       data.orderId = row.orderId;
       data.type = type 
      orderPublish(data).then(response =>{
        this.$message({
        message: '操作成功',
        type: 'success'
          })
        row.orderStat = response.data
      })
    },

    handleDeleteOrder(row){
       var data = {orderId:row.orderId}
       deleteOrder(data).then(response=>{

       // alert(JSON.stringify(response))
        for (var i = 0; i < this.list.length; i++) {
              if (this.list[i].orderId == row.orderId) {
                    this.list.splice(i, 1);
             }
         }
      this.$message({
        message: '操作成功',
        type: 'success'
        })

       })
    },

    handleModifyStatus(row, status) {
      this.$message({
        message: '操作成功',
        type: 'success'
      })
      row.orderStat = status
    },


    sortChange(data) {
      const { prop, order } = data
      if (prop === 'id') {
        this.sortByID(order)
      }
    },
    sortByID(order) {
      if (order === 'ascending') {
        this.listQuery.sort = '+id'
      } else {
        this.listQuery.sort = '-id'
      }
      this.handleFilter()
    },
    resetTemp() {
      //拉取所有供应商名
      this.temp = {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        status: 0,
        type: ''
      }
    },
    resetDetail(){
    this.detailInfo.length=1
    this.detail.orderId=0
    },
    handleCreate() {
      this.resetDetail()
      this.dialogFormVisible = true
      //拉取订单细节



      // this.$nextTick(() => {
      //   this.$refs['dataForm'].clearValidate()
      // })
    },
    createDetail() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          //this.temp.id = parseInt(Math.random() * 100) + 1024 // mock a id
          //this.temp.author = 'vue-element-admin'
         // alert(JSON.stringify(this.detail))

          createOrderDetail(this.detail).then((response) => {
            //alert(JSON.stringify(response))
            this.dialogFormVisible = false
            this.$notify({
              title: '成功',
              message: '创建成功',
              type: 'success',
              duration: 1500
            })
             this.getList()
          })
        }
      })
    },

    handleAddDetail(row){
     // alert(JSON.stringify(row))
      this.resetDetail()
      this.detail.orderId=row.orderId
    
    //’未交数量:'+row.undoNum+
      this.orderTitle="订单号"+row.orderNumber+'\xa0\xa0\xa0\xa0\xa0\xa0'+"采购商:"+row.buyerName+'\xa0\xa0\xa0\xa0\xa0\xa0'+"货物名称:"+row.goodsName+'\xa0\xa0\xa0\xa0\xa0\xa0'+"数量:"+row.needNum
      +'\xa0\xa0\xa0\xa0\xa0\xa0'+'未交数量:'+row.undoNum+'\xa0\xa0\xa0\xa0\xa0\xa0'+"交货期限:"+parseTime(row.endTime,'{y}-{m}-{d} ')
      this.dialogFormVisible = true
    },
    handleConfirmStatus(row,type) {
        var data = new Object()
        data.orderId = row.orderId;
        data.type = type 
        orderConfirm(data).then(response =>{
        this.$message({
        message: '操作成功',
        type: 'success'
          })
        row.orderStat = response.data
      })
    },

    handleShowDetail(row) {

       if(row.orderStat<2)return
       this.detailListQuery.orderId=row.orderId
       getOrderDetail(this.detailListQuery).then(response =>{

       // alert(JSON.stringify(response))
        this.detailTotal=0;
        this.detailList = [];
        this.orderTitle ="";
        if(response.data!=null){
            this.detailList = response.data.items
            this.detailTotal = response.data.total
            var row = response.data.ext;
            this.orderTitle="订单号"+row.orderNumber+'\xa0\xa0\xa0\xa0\xa0\xa0'+"采购商:"+row.buyerName+'\xa0\xa0\xa0\xa0\xa0\xa0'+"货物名称:"+row.goodsName+'\xa0\xa0\xa0\xa0\xa0\xa0'+"数量:"+row.needNum
      +'\xa0\xa0\xa0\xa0\xa0\xa0'+"交货期限:"+parseTime(row.endTime,'{y}-{m}-{d} {h}:{i}')
        }

        this.dialogDataVisible = true

       })
    },

    handleUpdate(row) {
       this.detailListQuery.orderId=row.orderId
       getOrderDetail(this.detailListQuery).then(response =>{
        this.detailTotal=0;
        this.detailList = [];
        if(response.data!=null){
            this.detailList = response.data.items
            this.detailTotal = response.data.total
        }
        this.dialogStatus = 'update'
        this.dialogFormVisible = true

       })

      //alert(JSON.stringify(this.temp))
      //this.resetTemp2(row)

      // var data ={orderId:row.orderId}
      // getOrderDetail(data).then((response) =>{

      // alert(JSON.stringify(response))

      // this.dialogStatus = 'update'
      // this.dialogFormVisible = true
      // this.$nextTick(() => {
      //   this.$refs['dataForm'].clearValidate()
      // })

      // })
    },
    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          const tempData = Object.assign({}, this.temp)
          //tempData.timestamp = +new Date(tempData.timestamp) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
          updateOrder(tempData).then((response) => {
            this.temp.endTime=response.data.endTime
            this.temp.startTime=response.data.startTime

            for (const v of this.list) {
              if (v.orderId === this.temp.orderId) {
                const index = this.list.indexOf(v)
                this.list.splice(index, 1, this.temp)
                break
              }
            }
            this.dialogFormVisible = false
            this.$notify({
              title: '成功',
              message: '更新成功',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    },
    handleDelete(row) {
      this.$notify({
        title: '成功',
        message: '删除成功',
        type: 'success',
        duration: 2000
      })
      const index = this.list.indexOf(row)
      this.list.splice(index, 1)
    },
    handleFetchPv(pv) {
      fetchPv(pv).then(response => {
        this.pvData = response.data.pvData
        this.dialogPvVisible = true
      })
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['timestamp', 'title', 'type', 'importance', 'status']
        const filterVal = ['timestamp', 'title', 'type', 'importance', 'status']
        const data = this.formatJson(filterVal, this.list)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: 'table-list'
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    }
  }
}
</script>
