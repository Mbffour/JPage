(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c5ce"],{"+Lc1":function(t,e,a){"use strict";a.d(e,"g",function(){return n}),a.d(e,"f",function(){return r}),a.d(e,"c",function(){return o}),a.d(e,"e",function(){return l}),a.d(e,"k",function(){return s}),a.d(e,"i",function(){return d}),a.d(e,"j",function(){return u}),a.d(e,"h",function(){return c}),a.d(e,"d",function(){return p}),a.d(e,"a",function(){return m}),a.d(e,"b",function(){return f});var i=a("t3Un");function n(t){return Object(i.a)({url:"/order/getDetail/page",method:"post",data:t})}function r(t){return Object(i.a)({url:"/order/getDetail/all",method:"post",data:t})}function o(t){return t.endTime=t.timestamp.getTime(),Object(i.a)({url:"/order/create",method:"post",data:t})}function l(t){return Object(i.a)({url:"/order/delete",method:"post",data:t})}function s(t){return t.endTime=t.timestamp.getTime(),Object(i.a)({url:"/order/buyer/update",method:"post",data:t})}function d(t){return Object(i.a)({url:"/order/supplier/confirm",method:"post",data:t})}function u(t){return Object(i.a)({url:"/order/publish",method:"post",data:t})}function c(t){return Object(i.a)({url:"/order/get/page",method:"post",data:t})}function p(t){return Object(i.a)({url:"/order/create/detail",method:"post",data:t})}function m(t){return Object(i.a)({url:"/order/confirm/detail",method:"post",data:t})}function f(t){return Object(i.a)({url:"/order/confirm/send",method:"post",data:t})}},"9V8q":function(t,e,a){},FyfS:function(t,e,a){t.exports={default:a("Rp86"),__esModule:!0}},JCNI:function(t,e,a){"use strict";a.d(e,"a",function(){return n}),a.d(e,"b",function(){return r});var i=a("t3Un");function n(t){return Object(i.a)({url:"/article/pv",method:"get",params:{pv:t}})}function r(t){return Object(i.a)({url:"/article/update",method:"post",data:t})}},Mz3J:function(t,e,a){"use strict";Math.easeInOutQuad=function(t,e,a,i){return(t/=i/2)<1?a/2*t*t+e:-a/2*(--t*(t-2)-1)+e};var i=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};function n(t,e,a){var n=document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop,r=t-n,o=0;e=void 0===e?500:e;!function t(){o+=20,function(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}(Math.easeInOutQuad(o,n,r,e)),o<e?i(t):a&&"function"==typeof a&&a()}()}var r={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[5,10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&n(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&n(0,800)}}},o=(a("ob+D"),a("KHd+")),l=Object(o.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[a("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},[],!1,null,"28cacb51",null);l.options.__file="index.vue";e.a=l.exports},"RU/L":function(t,e,a){a("Rqdy");var i=a("WEpk").Object;t.exports=function(t,e,a){return i.defineProperty(t,e,a)}},Rp86:function(t,e,a){a("bBy9"),a("FlQf"),t.exports=a("fXsU")},Rqdy:function(t,e,a){var i=a("Y7ZC");i(i.S+i.F*!a("jmDH"),"Object",{defineProperty:a("2faE").f})},SEkw:function(t,e,a){t.exports={default:a("RU/L"),__esModule:!0}},YEIV:function(t,e,a){"use strict";e.__esModule=!0;var i=function(t){return t&&t.__esModule?t:{default:t}}(a("SEkw"));e.default=function(t,e,a){return e in t?(0,i.default)(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}},ZySA:function(t,e,a){"use strict";var i=a("P2sY"),n=a.n(i),r=(a("jUE0"),{bind:function(t,e){t.addEventListener("click",function(a){var i=n()({},e.value),r=n()({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),o=r.ele;if(o){o.style.position="relative",o.style.overflow="hidden";var l=o.getBoundingClientRect(),s=o.querySelector(".waves-ripple");switch(s?s.className="waves-ripple":((s=document.createElement("span")).className="waves-ripple",s.style.height=s.style.width=Math.max(l.width,l.height)+"px",o.appendChild(s)),r.type){case"center":s.style.top=l.height/2-s.offsetHeight/2+"px",s.style.left=l.width/2-s.offsetWidth/2+"px";break;default:s.style.top=(a.pageY-l.top-s.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",s.style.left=(a.pageX-l.left-s.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return s.style.backgroundColor=r.color,s.className="waves-ripple z-active",!1}},!1)}}),o=function(t){t.directive("waves",r)};window.Vue&&(window.waves=r,Vue.use(o)),r.install=o;e.a=r},fXsU:function(t,e,a){var i=a("5K7Z"),n=a("fNZA");t.exports=a("WEpk").getIterator=function(t){var e=n(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return i(e.call(t))}},jUE0:function(t,e,a){},"ob+D":function(t,e,a){"use strict";var i=a("9V8q");a.n(i).a},rjJM:function(t,e,a){"use strict";a.r(e);var i=a("FyfS"),n=a.n(i),r=a("P2sY"),o=a.n(r),l=a("YEIV"),s=a.n(l),d=a("JCNI"),u=a("wk8/"),c=a("+Lc1"),p=a("ZySA"),m=a("7Qib"),f=a("Mz3J"),b=[{key:"CN",display_name:"Chinaaaa"},{key:"US",display_name:"USA"},{key:"JP",display_name:"Japan"},{key:"EU",display_name:"Eurozone"}],h=[],v=void 0,g=(b.reduce(function(t,e){return t[e.key]=e.display_name,t},{}),{name:"ComplexTable",components:{Pagination:f.a},directives:{waves:p.a},filters:{thransformStatus:function(t){return{0:"11",1:"22",2:"33"}[t]},statusFilter:function(t){return{0:"success",1:"info",2:"danger"}[t]},statusNameFilter:function(t){return{0:"未发布",1:"等待供应商确认",2:"等待供应商填写发货表",3:"等待确认发货表",4:"发货进行中"}[t]},typeFilter:function(t){return v[t]}},data:function(){return{tableKey:0,list:null,total:0,listLoading:!0,detailTotal:0,orderTitle:"",detailList:null,detailListQuery:{page:1,limit:10,importance:void 0,title:void 0,type:void 0,sort:"+id",orderId:void 0},listQuery:{page:1,limit:5,importance:void 0,title:void 0,type:void 0,sort:"+id"},detail:{},detailInfos:[{time:"t0",num:"n0",actnum:"an0"}],importanceOptions:[1,2,3],calendarTypeOptions:b,supplierTypeOptions:h,sortOptions:[{label:"交货时间顺序",key:"0"},{label:"交货时间倒序",key:"1"}],statusOptions:["published","draft","deleted"],showReviewer:!1,temp:s()({id:void 0,importance:1,remark:"",timestamp:new Date,startTime:new Date,endTime:void 0,orderNumber:"",type:void 0,orderStat:void 0,goodsName:"",buyerName:"",buyerID:void 0,supplierName:"",supplierID:void 0,needNum:void 0,undoNum:void 0},"remark",""),dialogFormVisible:!1,dialogStatus:"",dialogDataVisible:!1,detailFormVisible:!1,textMap:{update:"Edit",create:"Create"},addOrderId:0,dialogPvVisible:!1,pvData:[],rules:{type:[{required:!0,message:"请选择供应商,如果无供应商请先创建",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"请输入时间",trigger:"change"}],orderNumber:[{required:!0,message:"请输入订单号",trigger:"blur"}]},downloadLoading:!1}},created:function(){this.getType(),this.getList()},methods:{resetDetail:function(){this.detailInfos.length=1,this.detail.orderId=0,this.addOrderId=0},addrow:function(){this.detailInfos.push({time:(new Date).getTime(),expectNum:0,actualNum:0,state:1,orderId:this.addOrderId})},deleterow:function(){0!=this.detailInfos[this.detailInfos.length-1].state?this.detailInfos.pop():this.$message({message:"不能移除基本订单",type:"success"})},getType:function(){h.length=0,Object(u.e)().then(function(t){var e=t.data.data;for(var a in e)h.push(e[a]);v=h.reduce(function(t,e){return t[e.value]=e.key,t},{})})},handleShowDetail:function(t){var e=this;t.orderStat<2||(this.detailListQuery.orderId=t.orderId,Object(c.g)(this.detailListQuery).then(function(t){if(e.detailTotal=0,e.detailList=[],e.orderTitle="",null!=t.data){e.detailList=t.data.items,e.detailTotal=t.data.total;var a=t.data.ext;e.orderTitle="订单号"+a.orderNumber+"      供应商:"+v[a.supplierID]+"      货物名称:"+a.goodsName+"      数量:"+a.needNum+"      交货期限:"+Object(m.c)(a.endTime,"{y}-{m}-{d} {h}:{i}")}e.dialogDataVisible=!0}))},confirmDetail:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&Object(c.a)(t.detailInfos).then(function(e){t.$notify({title:"成功",message:"创建成功",type:"success",duration:1500}),t.detailFormVisible=!1,getList()})})},handleConfirmOrder:function(t){var e=this,a=new Object;a.orderId=t.orderId,Object(c.b)(a).then(function(a){e.$message({message:"确认成功",type:"success"}),t.state=4})},handleConfirmDetail:function(t){var e=this;this.orderTitle="订单号"+t.orderNumber+"      采购商:"+v[t.supplierID]+"      货物名称:"+t.goodsName+"      订购数量:"+t.needNum+"      未交数量:"+t.undoNum+"      交货期限:"+Object(m.c)(t.endTime,"{y}-{m}-{d} {h}:{i}"),this.resetDetail();var a=new Object;a.orderId=t.orderId,this.addOrderId=t.orderId,Object(c.f)(a).then(function(t){e.detailInfos=t.data,e.detailFormVisible=!0})},getList:function(){var t=this;this.listLoading=!0,Object(c.h)(this.listQuery).then(function(e){t.total=0,t.list=[],null!=e.data&&(t.list=e.data.items,t.total=e.data.total),setTimeout(function(){t.listLoading=!1},1e3)})},handleFilter:function(){this.listQuery.page=1,this.getType(),this.getList()},handlePublishStatus:function(t,e){var a=this,i=new Object;i.orderId=t.orderId,i.type=e,Object(c.j)(i).then(function(e){a.$message({message:"操作成功",type:"success"}),t.orderStat=e.data})},handleDeleteOrder:function(t){var e=this,a={orderId:t.orderId};Object(c.e)(a).then(function(a){for(var i=0;i<e.list.length;i++)e.list[i].orderId==t.orderId&&e.list.splice(i,1);e.$message({message:"操作成功",type:"success"})})},handleModifyStatus:function(t,e){this.$message({message:"操作成功",type:"success"}),t.orderStat=e},sortChange:function(t){var e=t.prop,a=t.order;"id"===e&&this.sortByID(a)},sortByID:function(t){this.listQuery.sort="ascending"===t?"+id":"-id",this.handleFilter()},resetTemp:function(){this.temp={id:void 0,importance:1,remark:"",timestamp:new Date,title:"",status:0,type:""}},resetTemp2:function(t){this.temp={goodsName:t.goodsName,orderId:t.orderId,orderNumber:t.orderNumber,buyerID:t.buyerID,supplierID:t.supplierID,needNum:t.needNum,undoNum:t.undoNum,importance:1,remark:t.remark,timestamp:new Date(t.endTime),orderStat:t.orderStat,type:t.supplierID}},handleCreate:function(){var t=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},createData:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&Object(c.c)(t.temp).then(function(e){0==t.list.length?t.list.push(e.data):t.list.unshift(e.data),t.dialogFormVisible=!1,t.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})})})},handleUpdate:function(t){var e=this;this.resetTemp2(t),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},updateData:function(){var t=this;this.$refs.dataForm.validate(function(e){if(e){var a=o()({},t.temp);Object(c.k)(a).then(function(e){t.temp.endTime=e.data.endTime,t.temp.startTime=e.data.startTime;var a=!0,i=!1,r=void 0;try{for(var o,l=n()(t.list);!(a=(o=l.next()).done);a=!0){var s=o.value;if(s.orderId===t.temp.orderId){var d=t.list.indexOf(s);t.list.splice(d,1,t.temp);break}}}catch(t){i=!0,r=t}finally{try{!a&&l.return&&l.return()}finally{if(i)throw r}}t.dialogFormVisible=!1,t.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3})})}})},handleDelete:function(t){this.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3});var e=this.list.indexOf(t);this.list.splice(e,1)},handleFetchPv:function(t){var e=this;Object(d.a)(t).then(function(t){e.pvData=t.data.pvData,e.dialogPvVisible=!0})},handleDownload:function(){var t=this;this.downloadLoading=!0,Promise.all([a.e("chunk-c7fa"),a.e("chunk-92d5")]).then(a.bind(null,"S/jZ")).then(function(e){var a=t.formatJson(["timestamp","title","type","importance","status"],t.list);e.export_json_to_excel({header:["timestamp","title","type","importance","status"],data:a,filename:"table-list"}),t.downloadLoading=!1})},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){return"timestamp"===t?Object(m.c)(e[t]):e[t]})})}}}),y=a("KHd+"),_=Object(y.a)(g,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{placeholder:t.$t("table.supplier"),clearable:""},model:{value:t.listQuery.type,callback:function(e){t.$set(t.listQuery,"type",e)},expression:"listQuery.type"}},t._l(t.supplierTypeOptions,function(t){return a("el-option",{key:t.key,attrs:{label:t.key,value:t.value}})})),t._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v(t._s(t.$t("table.search")))]),t._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v(t._s(t.$t("table.add")))])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""},on:{"sort-change":t.sortChange}},[a("el-table-column",{attrs:{label:t.$t("table.orderNumber"),prop:"orderNumber",sortable:"custom",align:"center","min-width":"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"link-type",on:{click:function(a){t.handleShowDetail(e.row)}}},[t._v(t._s(e.row.orderNumber))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.goodsName"),width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.goodsName))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.startTime"),"min-width":"70",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("parseTime")(e.row.startTime,"{y}-{m}-{d}")))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.endTime"),"min-width":"60",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("parseTime")(e.row.endTime,"{y}-{m}-{d}")))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.needNum"),width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.needNum))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.undoNum"),width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.needNum))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.supplier"),width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("typeFilter")(e.row.supplierID)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.orderStat"),"class-name":"status-col","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:t._f("statusFilter")(e.row.orderStat)}},[t._v(t._s(t._f("statusNameFilter")(e.row.orderStat)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.actions"),align:"center","min-width":"100","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.orderStat?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.handleUpdate(e.row)}}},[t._v(t._s(t.$t("table.edit")))]):t._e(),t._v(" "),0==e.row.orderStat?a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){t.handlePublishStatus(e.row,1)}}},[t._v(t._s(t.$t("table.publish"))+"\n          ")]):t._e(),t._v(" "),0==e.row.orderStat?a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.handleDeleteOrder(e.row)}}},[t._v(t._s(t.$t("table.delete"))+"\n          ")]):t._e(),t._v(" "),2==e.row.orderStat?a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.handleModifyStatus(e.row,"draft")}}},[t._v(t._s(t.$t("table.draft"))+"\n          ")]):t._e(),t._v(" "),1==e.row.orderStat?a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.handlePublishStatus(e.row,0)}}},[t._v(t._s(t.$t("table.cancelPub"))+"\n          ")]):t._e(),t._v(" "),e.row.orderStat>=3?a("el-button",{attrs:{size:"small"},on:{click:function(a){t.handleShowDetail(e.row)}}},[t._v(t._s(t.$t("table.showDetail"))+"\n          ")]):t._e(),t._v(" "),3==e.row.orderStat?a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){t.handleConfirmOrder(e.row)}}},[t._v(t._s(t.$t("table.confirmOrder"))+"\n          ")]):t._e(),t._v(" "),4==e.row.orderStat?a("el-button",{attrs:{type:"success",size:"small"},on:{click:function(a){t.handleConfirmDetail(e.row)}}},[t._v(t._s(t.$t("table.confirmDetail"))+"\n          ")]):t._e()]}}])})],1),t._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){t.$set(t.listQuery,"page",e)},"update:limit":function(e){t.$set(t.listQuery,"limit",e)},pagination:t.getList}}),t._v(" "),a("el-dialog",{attrs:{title:t.orderTitle,visible:t.detailFormVisible},on:{"update:visible":function(e){t.detailFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"600px","margin-left":"50px"},attrs:{rules:t.rules,model:t.detail,"label-width":"140px"}},t._l(t.detailInfos,function(e){return a("el-form-item",{key:e.key,attrs:{label:t.$t("table.deliver2"),prop:e.value}},[a("el-col",{attrs:{span:11,offset:1}},[0==e.state?a("el-date-picker",{attrs:{type:"date",placeholder:"Please pick a date",disabled:!0,"value-format":"timestamp"},model:{value:e.time,callback:function(a){t.$set(e,"time",a)},expression:"item.time"}}):t._e(),t._v(" "),1==e.state?a("el-date-picker",{attrs:{type:"date",placeholder:"Please pick a date","value-format":"timestamp"},model:{value:e.time,callback:function(a){t.$set(e,"time",a)},expression:"item.time"}}):t._e()],1),t._v(" "),a("el-col",{attrs:{span:4,offset:1}},[a("el-input",{attrs:{disabled:!0},model:{value:e.expectNum,callback:function(a){t.$set(e,"expectNum",a)},expression:"item.expectNum"}})],1),t._v(" "),a("el-col",{attrs:{span:4,offset:1}},[a("el-input",{model:{value:e.actualNum,callback:function(a){t.$set(e,"actualNum",a)},expression:"item.actualNum"}})],1)],1)})),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.detailFormVisible=!1}}},[t._v(t._s(t.$t("table.cancel")))]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.confirmDetail()}}},[t._v(t._s(t.$t("table.confirm")))]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.addrow()}}},[t._v(t._s(t.$t("table.addDetailItem")))]),t._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(e){t.deleterow()}}},[t._v(t._s(t.$t("table.deleteDetailItem")))])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.temp,"label-position":"left","label-width":"140px"}},[a("el-form-item",{attrs:{label:t.$t("table.type"),prop:"type"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select"},model:{value:t.temp.type,callback:function(e){t.$set(t.temp,"type",e)},expression:"temp.type"}},t._l(t.supplierTypeOptions,function(t){return a("el-option",{key:t.value,attrs:{label:t.key,value:t.value}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.orderNumber"),prop:"orderNumber"}},[a("el-input",{model:{value:t.temp.orderNumber,callback:function(e){t.$set(t.temp,"orderNumber",e)},expression:"temp.orderNumber"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.endTime"),prop:"timestamp"}},[a("el-date-picker",{attrs:{type:"datetime","value-format":"yyyy-MM-dd",format:"yyyy-MM-dd",placeholder:"Please pick a date"},model:{value:t.temp.timestamp,callback:function(e){t.$set(t.temp,"timestamp",e)},expression:"temp.timestamp"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.goodsName"),prop:"goodsName"}},[a("el-input",{model:{value:t.temp.goodsName,callback:function(e){t.$set(t.temp,"goodsName",e)},expression:"temp.goodsName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.needNum"),prop:"needNum"}},[a("el-input",{model:{value:t.temp.needNum,callback:function(e){t.$set(t.temp,"needNum",e)},expression:"temp.needNum"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.remark")}},[a("el-input",{attrs:{autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"Please input"},model:{value:t.temp.remark,callback:function(e){t.$set(t.temp,"remark",e)},expression:"temp.remark"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v(t._s(t.$t("table.cancel")))]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){"create"===t.dialogStatus?t.createData():t.updateData()}}},[t._v(t._s(t.$t("table.confirm")))])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:t.orderTitle,visible:t.dialogDataVisible},on:{"update:visible":function(e){t.dialogDataVisible=e}}},[a("el-table",{key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.detailList,border:"",fit:"","highlight-current-row":""},on:{"sort-change":t.sortChange}},[a("el-table-column",{attrs:{label:t.$t("table.endTime"),"min-width":"50",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("parseTime")(e.row.time,"{y}-{m}-{d}")))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.expectNum"),"min-width":"50",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.expectNum))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.actualNum"),"min-width":"50",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.actualNum))])]}}])})],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogDataVisible=!1}}},[t._v(t._s(t.$t("table.confirm")))])],1),t._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.detailTotal,page:t.detailListQuery.page,limit:t.detailListQuery.limit},on:{"update:page":function(e){t.$set(t.detailListQuery,"page",e)},"update:limit":function(e){t.$set(t.detailListQuery,"limit",e)}}})],1),t._v(" "),a("el-dialog",{attrs:{visible:t.dialogPvVisible,title:"Reading statistics"},on:{"update:visible":function(e){t.dialogPvVisible=e}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.pvData,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"key",label:"Channel"}}),t._v(" "),a("el-table-column",{attrs:{prop:"pv",label:"Pv"}})],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogPvVisible=!1}}},[t._v(t._s(t.$t("table.confirm")))])],1)],1)],1)},[],!1,null,null,null);_.options.__file="buyerTable.vue";e.default=_.exports}}]);