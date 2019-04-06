<template>
  <div class="app-container">
    <div class="filter-container">
      <!-- <el-input :placeholder="$t('table.title')" v-model="listQuery.title" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter"/>
      <el-select v-model="listQuery.importance" :placeholder="$t('table.importance')" clearable style="width: 90px" class="filter-item">
        <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item"/>
      </el-select> -->
      <el-select v-model="listQuery.type" :placeholder="$t('table.supplier')" clearable class="filter-item" style="width: 130px">
        <el-option v-for="item in supplierTypeOptions" :key="item.key" :label="item.key" :value="item.value"/>
      </el-select>
      <!-- <el-select v-model="listQuery.sort" :placeholder="$t('table.type')"  style="width: 140px" class="filter-item" @change="handleFilter">
        <el-option v-for="item in sortOptions" :key="item.key" :label="item.label" :value="item.key"/>
      </el-select> -->
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ $t('table.search') }}</el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">{{ $t('table.add') }}</el-button>
      <!-- <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">{{ $t('table.export') }}</el-button>
      <el-checkbox v-model="showReviewer" class="filter-item" style="margin-left:15px;" @change="tableKey=tableKey+1">{{ $t('table.reviewer') }}</el-checkbox> -->
    </div>

    <el-table
      v-loading="listLoading"
      :key="tableKey"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;"
      @sort-change="sortChange">
      <el-table-column :label="$t('table.orderNumber')" prop="orderNumber" sortable="custom" align="center" min-width="70">
        <template slot-scope="scope">
          <span class="link-type" @click="handleShowDetail(scope.row)">{{ scope.row.orderNumber }}</span>
        </template>
      </el-table-column>

      <el-table-column :label="$t('table.goodsName')" width="100" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.goodsName }}</span>
        </template>
      </el-table-column>


      <el-table-column :label="$t('table.startTime')" min-width="70" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.startTime | parseTime('{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      
      <el-table-column :label="$t('table.endTime')" min-width="60" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.endTime | parseTime('{y}-{m}-{d}')}}</span>
        </template>
      </el-table-column>


      <el-table-column :label="$t('table.needNum')" width="100" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.needNum}}</span>
        </template>
      </el-table-column>


      <el-table-column :label="$t('table.undoNum')" width="100" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.needNum}}</span>
        </template>
      </el-table-column>

      <el-table-column :label="$t('table.supplier')" width="100" align="center">
        <template slot-scope="scope">
          <!-- <span class="link-type" @click="handleUpdate(scope.row)">{{ scope.row.supplierID | typeFilter }}</span> -->
          <span>{{ scope.row.supplierID | typeFilter }}</span>
          <!-- <el-tag>{{ scope.row.supplierID | typeFilter }}</el-tag> -->
        </template>
      </el-table-column>

      <el-table-column :label="$t('table.orderStat')" class-name="status-col" min-width="100">
        <template slot-scope="scope">
          <el-tag :type="scope.row.orderStat | statusFilter">{{ scope.row.orderStat| statusNameFilter }}</el-tag>
        </template>
      </el-table-column>


      <!-- <el-table-column :label="$t('table.title')" min-width="150px">
        <template slot-scope="scope">
          <span class="link-type" @click="handleUpdate(scope.row)">{{ scope.row.title }}</span>
          <el-tag>{{ scope.row.type | typeFilter }}</el-tag>
        </template>
      </el-table-column> -->


      <!-- <el-table-column v-if="showReviewer" :label="$t('table.reviewer')" width="110px" align="center">
        <template slot-scope="scope">
          <span style="color:red;">{{ scope.row.reviewer }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.importance')" width="80px">
        <template slot-scope="scope">
          <svg-icon v-for="n in +scope.row.importance" :key="n" icon-class="star" class="meta-item__icon"/>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.readings')" align="center" width="95">
        <template slot-scope="scope">
          <span v-if="scope.row.pageviews" class="link-type" @click="handleFetchPv(scope.row.pageviews)">{{ scope.row.pageviews }}</span>
          <span v-else>0</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.status')" class-name="status-col" width="100">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column> -->
      <el-table-column :label="$t('table.actions')" align="center" min-width="100" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.orderStat==0"  size="mini" @click="handleUpdate(scope.row)">{{ $t('table.edit') }}</el-button>
          <el-button v-if="scope.row.orderStat==0" size="mini" type="success" @click="handlePublishStatus(scope.row,1)">{{ $t('table.publish') }}
          </el-button>
          <el-button v-if="scope.row.orderStat==0" size="mini" type="danger" @click="handleDeleteOrder(scope.row)">{{ $t('table.delete') }}
          </el-button>

          <el-button v-if="scope.row.orderStat==2" size="mini" @click="handleModifyStatus(scope.row,'draft')">{{ $t('table.draft') }}
          </el-button>
          <el-button v-if="scope.row.orderStat==1" size="mini" type="danger" @click="handlePublishStatus(scope.row,0)">{{$t('table.cancelPub')}}
          </el-button>


          <el-button  v-if="scope.row.orderStat>=3" size="small" @click="handleShowDetail(scope.row)">{{ $t('table.showDetail') }}
          </el-button>

           <el-button type="primary" v-if="scope.row.orderStat==3" size="small" @click="handleConfirmOrder(scope.row)">{{ $t('table.confirmOrder') }}
          </el-button>

          <el-button  type="success" v-if="scope.row.orderStat==4" size="small" @click="handleConfirmDetail(scope.row)">{{ $t('table.confirmDetail') }}
          </el-button>
      

        
          
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />



 <!-- 确认交货表 -->
    <el-dialog  :title="orderTitle" :visible.sync="detailFormVisible">
    
      <!-- <el-form ref="dataForm" :rules="rules" :model="detail"  label-width="140px" style="width: 600px; margin-left:50px;">
        <el-form-item  v-for="item in detailInfo " :key="item.key" :label="$t('table.deliver2')" :prop="item.value">
            <el-col :span="11">
          <el-date-picker v-model="detail[item.time]" type="date" placeholder="Please pick a date" value-format="timestamp"/>
            </el-col>
            <el-col :span="5" :offset="1">
             <el-input v-model="detail[item.num]"/>
            </el-col>
            <el-col :span="5" :offset="1">
             <el-input v-model="detail[item.actnum]"/>
            </el-col>
        </el-form-item>   
      
      </el-form> -->

       <el-form ref="dataForm" :rules="rules" :model="detail"  label-width="140px" style="width: 600px; margin-left:50px;">
        <el-form-item  v-for="item in detailInfos " :key="item.key" :label="$t('table.deliver2')" :prop="item.value">
            <el-col :span="11" :offset="1">
          <el-date-picker v-if="item.state==0" v-model="item.time" type="date" placeholder="Please pick a date" :disabled="true" value-format="timestamp"/>
          <el-date-picker v-if="item.state==1" v-model="item.time" type="date" placeholder="Please pick a date"  value-format="timestamp"/>
            </el-col>
            <el-col :span="4" :offset="1">
             <el-input v-model="item.expectNum" :disabled="true"/>
            </el-col>
            <el-col :span="4" :offset="1">
             <el-input v-model="item.actualNum"/>
            </el-col>
        </el-form-item>   
      
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="detailFormVisible=false">{{ $t('table.cancel') }}</el-button>
        <el-button type="primary" @click="confirmDetail()">{{ $t('table.confirm') }}</el-button>
        <el-button type="primary" @click="addrow()">{{ $t('table.addDetailItem') }}</el-button>
         <el-button type="danger" @click="deleterow()">{{ $t('table.deleteDetailItem') }}</el-button>
      </div>
    </el-dialog>



<!-- 更新和创建  -->
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form ref="dataForm" :rules="rules" :model="temp" label-position="left" label-width="140px" style="width: 400px; margin-left:50px;">
        <el-form-item :label="$t('table.type')" prop="type">
          <el-select v-model="temp.type" class="filter-item" placeholder="Please select">
            <el-option v-for="item in supplierTypeOptions" :key="item.value" :label="item.key" :value="item.value"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="$t('table.orderNumber')" prop="orderNumber">
          <el-input v-model="temp.orderNumber"/>
        </el-form-item>

        <el-form-item :label="$t('table.endTime')" prop="timestamp">
          <el-date-picker v-model="temp.timestamp" type="datetime" value-format="yyyy-MM-dd" format="yyyy-MM-dd" placeholder="Please pick a date"/>
        </el-form-item>
        <el-form-item :label="$t('table.goodsName')" prop="goodsName">
          <el-input v-model="temp.goodsName"/>
        </el-form-item>
        
        <el-form-item :label="$t('table.needNum')" prop="needNum">
          <el-input v-model="temp.needNum" />
        </el-form-item>


        <!-- <el-form-item :label="$t('table.status')">
          <el-select v-model="temp.status" class="filter-item" placeholder="Please select">
            <el-option v-for="item in statusOptions" :key="item" :label="item" :value="item"/>
          </el-select>
        </el-form-item> -->
        <!-- <el-form-item :label="$t('table.importance')">
          <el-rate v-model="temp.importance" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" :max="3" style="margin-top:8px;"/>
        </el-form-item> -->
        <el-form-item :label="$t('table.remark')">
          <el-input :autosize="{ minRows: 2, maxRows: 4}" v-model="temp.remark" type="textarea" placeholder="Please input"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">{{ $t('table.cancel') }}</el-button>
        <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">{{ $t('table.confirm') }}</el-button>
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
      style="width: 100%;"
      @sort-change="sortChange">


       <el-table-column :label="$t('table.endTime')" min-width="50" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.time | parseTime('{y}-{m}-{d}')}}</span>
        </template>
      </el-table-column>

      <el-table-column :label="$t('table.expectNum')" min-width="50" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.expectNum}}</span>
        </template>
      </el-table-column>


      <el-table-column :label="$t('table.actualNum')" min-width="50" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.actualNum}}</span>
        </template>
      </el-table-column>




       </el-table>

      <div slot="footer" class="dialog-footer">
       <el-button type="primary" @click="dialogDataVisible = false">{{ $t('table.confirm') }}</el-button>
        <!-- <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">{{ $t('table.confirm') }}</el-button> -->
      </div>
       <pagination v-show="total>0" :total="detailTotal" :page.sync="detailListQuery.page" :limit.sync="detailListQuery.limit" />
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
import {confirmOrderSend,createOrder,getOrderList,orderPublish,orderCancelPublish,updateOrder,deleteOrder,getOrderDetail,confirmOrderDetail,getAllOrderDetail} from '@/api/order'
import waves from '@/directive/waves' // Waves directive
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination

const calendarTypeOptions = [
  { key: 'CN', display_name: 'Chinaaaa' },
  { key: 'US', display_name: 'USA' },
  { key: 'JP', display_name: 'Japan' },
  { key: 'EU', display_name: 'Eurozone' }
]

const supplierTypeOptions =[]


var supplierTypeKeyValue=undefined;

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
        2: '等待供应商填写发货表',
        3: '等待确认发货表',
        4: '发货进行中'
      }
       // alert('statusFilter:'+statusNameMap[status]+"||"+JSON.stringify(status))
      return statusNameMap[status]
    },
    typeFilter(type) { 
      return supplierTypeKeyValue[type]
    }
  },
  data() {
    return {
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      detailTotal: 0,
      orderTitle: '',
      detailList:null,
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
      detail:{},
      detailInfos:[{ time: 't0', num: 'n0',actnum:"an0" }],
      importanceOptions: [1, 2, 3],
      calendarTypeOptions,
      supplierTypeOptions,
      sortOptions: [{ label: '交货时间顺序', key: '0' }, { label: '交货时间倒序', key: '1' }],
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
      dialogStatus: '',
      dialogDataVisible: false,
      detailFormVisible: false,
      textMap: {
        update: 'Edit',
        create: 'Create'
      },
      addOrderId:0,
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
    this.getType()
    this.getList()
  },
  methods: {
      resetDetail(){
    this.detailInfos.length=1
    this.detail.orderId=0
    this.addOrderId = 0;
    },

     addrow(){
      this.detailInfos.push({time:new Date().getTime(),expectNum:0,actualNum:0,state:1,orderId:this.addOrderId})
    },
      deleterow(){
      // var size = this.detailInfo.length;
      // var t = 't'+size
      // var n =  'n'+size
      if(this.detailInfos[this.detailInfos.length-1].state==0){
         this.$message({
        message: '不能移除基本订单',
        type: 'success'
          })
          return;
      }
      this.detailInfos.pop();
    },
    getType(){
          supplierTypeOptions.length=0;
          getSupplierType().then(response => {
          var data = response.data.data  

        
          for(var i in data){
            supplierTypeOptions.push(data[i])
          }
      
          supplierTypeKeyValue = supplierTypeOptions.reduce((acc, cur) => {
                    acc[cur.value] = cur.key
                    return acc
                }, {})
          // supplierTypeOptions.push(response.data.data);
          })
    },
    handleShowDetail(row) {

       if(row.orderStat<2)return
       this.detailListQuery.orderId=row.orderId
       getOrderDetail(this.detailListQuery).then(response =>{

        //alert(JSON.stringify(response))
        this.detailTotal=0;
        this.detailList = [];
        this.orderTitle ="";
        if(response.data!=null){
            this.detailList = response.data.items
            this.detailTotal = response.data.total
            var row = response.data.ext;
            this.orderTitle="订单号"+row.orderNumber+'\xa0\xa0\xa0\xa0\xa0\xa0'+"供应商:"+supplierTypeKeyValue[row.supplierID]+'\xa0\xa0\xa0\xa0\xa0\xa0'+"货物名称:"+row.goodsName+'\xa0\xa0\xa0\xa0\xa0\xa0'+"数量:"+row.needNum
      +'\xa0\xa0\xa0\xa0\xa0\xa0'+"交货期限:"+parseTime(row.endTime,'{y}-{m}-{d} {h}:{i}')
        }

        this.dialogDataVisible = true

       })
    },
    confirmDetail(){
       this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          //this.temp.id = parseInt(Math.random() * 100) + 1024 // mock a id
          //this.temp.author = 'vue-element-admin'
          //alert(JSON.stringify(this.detailInfos))

          confirmOrderDetail(this.detailInfos).then((response) => {
           // alert(JSON.stringify(response))
               this.$notify({
              title: '成功',
              message: '创建成功',
              type: 'success',
              duration: 1500
            })
            this.detailFormVisible = false;
            getList()
          })
        }
      })
    },

    handleConfirmOrder(row){
      var data = new Object()
      data.orderId = row.orderId;
      confirmOrderSend(data).then(response=>{
        this.$message({
        message: '确认成功',
        type: 'success'
          })
        row.state=4;
      })

    },
    handleConfirmDetail(row){
        this.orderTitle="订单号"+row.orderNumber+'\xa0\xa0\xa0\xa0\xa0\xa0'+"采购商:"+supplierTypeKeyValue[row.supplierID]+'\xa0\xa0\xa0\xa0\xa0\xa0'+"货物名称:"+row.goodsName+'\xa0\xa0\xa0\xa0\xa0\xa0'+"订购数量:"+row.needNum
      +'\xa0\xa0\xa0\xa0\xa0\xa0'+'未交数量:'+row.undoNum+'\xa0\xa0\xa0\xa0\xa0\xa0'+"交货期限:"+parseTime(row.endTime,'{y}-{m}-{d} {h}:{i}')
        this.resetDetail()

        var data = new Object()
        data.orderId = row.orderId;
        this.addOrderId = row.orderId;
        getAllOrderDetail(data).then(response =>{
          this.detailInfos = response.data;
          this.detailFormVisible=true;
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
      //alert(JSON.stringify(this.listQuery))
      this.listQuery.page = 1
      this.getType()
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

        //alert(JSON.stringify(response))
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
    resetTemp2(row) {
          
      //拉取所有供应商名
      this.temp = {
        goodsName:row.goodsName,
        orderId: row.orderId,
        orderNumber:row.orderNumber,
        buyerID:row.buyerID,
        supplierID:row.supplierID,
        needNum:row.needNum,
        undoNum:row.undoNum,
        importance: 1,
        remark: row.remark,
        timestamp: new Date(row.endTime),
        orderStat: row.orderStat,
        type: row.supplierID,
      }
    },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    createData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          //this.temp.id = parseInt(Math.random() * 100) + 1024 // mock a id
          //this.temp.author = 'vue-element-admin'
          //alert(JSON.stringify(this.temp))
          createOrder(this.temp).then((response) => {
              if(this.list.length==0){
              this.list.push(response.data)
            }else{
              this.list.unshift(response.data)
            }
            this.dialogFormVisible = false
            this.$notify({
              title: '成功',
              message: '创建成功',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    },
    handleUpdate(row) {

      //alert(JSON.stringify(this.temp))
      this.resetTemp2(row)
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })


      // this.temp = Object.assign({}, row) // copy obj  行数
      // //this.temp.timestamp = new Date(this.temp.endTime) //endTime
      // this.temp.timestamp = new Date(0);

      // //alert(JSON.stringify(this.temp.timestamp))
      // //this.temp.type=this.temp.supplierID;
      // alert(11111)
      // alert(JSON.stringify(this.temp))
      // this.dialogStatus = 'update'
      // this.dialogFormVisible = true
      // this.$nextTick(() => {
      //   this.$refs['dataForm'].clearValidate()
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
