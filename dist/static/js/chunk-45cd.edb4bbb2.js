(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-45cd"],{"+Lc1":function(t,e,a){"use strict";a.d(e,"i",function(){return n}),a.d(e,"h",function(){return o}),a.d(e,"d",function(){return r}),a.d(e,"f",function(){return l}),a.d(e,"m",function(){return s}),a.d(e,"k",function(){return d}),a.d(e,"l",function(){return u}),a.d(e,"j",function(){return c}),a.d(e,"e",function(){return p}),a.d(e,"b",function(){return m}),a.d(e,"a",function(){return f}),a.d(e,"g",function(){return h}),a.d(e,"c",function(){return b});var i=a("t3Un");function n(t){return Object(i.a)({url:"/order/getDetail/page",method:"post",data:t})}function o(t){return Object(i.a)({url:"/order/getDetail/all",method:"post",data:t})}function r(t){return t.endTime=t.timestamp.getTime(),Object(i.a)({url:"/order/create",method:"post",data:t})}function l(t){return Object(i.a)({url:"/order/delete",method:"post",data:t})}function s(t){return t.endTime=t.timestamp.getTime(),Object(i.a)({url:"/order/buyer/update",method:"post",data:t})}function d(t){return Object(i.a)({url:"/order/supplier/confirm",method:"post",data:t})}function u(t){return Object(i.a)({url:"/order/publish",method:"post",data:t})}function c(t){return Object(i.a)({url:"/order/get/page",method:"post",data:t})}function p(t){return Object(i.a)({url:"/order/create/detail",method:"post",data:t})}function m(t){return Object(i.a)({url:"/order/confirm/detail",method:"post",data:t})}function f(t){return Object(i.a)({url:"/order/back/send",method:"post",data:t})}function h(t){return Object(i.a)({url:"/order/end",method:"post",data:t})}function b(t){return Object(i.a)({url:"/order/confirm/send",method:"post",data:t})}},"9V8q":function(t,e,a){},FyfS:function(t,e,a){t.exports={default:a("Rp86"),__esModule:!0}},JCNI:function(t,e,a){"use strict";a.d(e,"a",function(){return n}),a.d(e,"b",function(){return o});var i=a("t3Un");function n(t){return Object(i.a)({url:"/article/pv",method:"get",params:{pv:t}})}function o(t){return Object(i.a)({url:"/article/update",method:"post",data:t})}},Mz3J:function(t,e,a){"use strict";Math.easeInOutQuad=function(t,e,a,i){return(t/=i/2)<1?a/2*t*t+e:-a/2*(--t*(t-2)-1)+e};var i=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};function n(t,e,a){var n=document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop,o=t-n,r=0;e=void 0===e?500:e;!function t(){r+=20,function(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}(Math.easeInOutQuad(r,n,o,e)),r<e?i(t):a&&"function"==typeof a&&a()}()}var o={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[5,10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&n(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&n(0,800)}}},r=(a("ob+D"),a("KHd+")),l=Object(r.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[a("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},[],!1,null,"28cacb51",null);l.options.__file="index.vue";e.a=l.exports},OFqo:function(t,e,a){"use strict";a.r(e);var i=a("FyfS"),n=a.n(i),o=a("P2sY"),r=a.n(o),l=a("YEIV"),s=a.n(l),d=a("JCNI"),u=(a("wk8/"),a("+Lc1")),c=a("ZySA"),p=a("7Qib"),m=a("Mz3J"),f=[{key:"CN",display_name:"Chinaaaa"},{key:"US",display_name:"USA"},{key:"JP",display_name:"Japan"},{key:"EU",display_name:"Eurozone"}],h=(f.reduce(function(t,e){return t[e.key]=e.display_name,t},{}),{name:"ComplexTable",components:{Pagination:m.a},directives:{waves:c.a},filters:{thransformStatus:function(t){return{0:"11",1:"22",2:"33"}[t]},statusFilter:function(t){return{0:"success",1:"info",2:"danger"}[t]},statusNameFilter:function(t){return{0:"未发布",1:"等待供应商确认",2:"待完善发货表",3:"等待采购方确认发货表",4:"发货表确认发货中",5:"已完成"}[t]},typeFilter:function(t){return"sss"}},data:function(){return{tableKey:0,list:null,orderTitle:"",detailList:null,detail:{},total:0,listLoading:!0,detailTotal:0,detailListQuery:{page:1,limit:10,importance:void 0,title:void 0,type:void 0,sort:"+id",orderId:void 0},listQuery:{page:1,limit:5,importance:void 0,title:void 0,type:void 0,sort:"+id"},detailInfo:[{time:"t0",num:"n0"}],importanceOptions:[1,2,3,4,5],calendarTypeOptions:f,sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],statusOptions:["published","draft","deleted"],showReviewer:!1,temp:s()({id:void 0,importance:1,remark:"",timestamp:new Date,startTime:new Date,endTime:void 0,orderNumber:"",type:void 0,orderStat:void 0,goodsName:"",buyerName:"",buyerID:void 0,supplierName:"",supplierID:void 0,needNum:void 0,undoNum:void 0},"remark",""),dialogFormVisible:!1,dialogDataVisible:!1,dialogStatus:"",dialogMsg:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,pvData:[],rules:{type:[{required:!0,message:"请选择供应商,如果无供应商请先创建",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"请输入时间",trigger:"change"}],orderNumber:[{required:!0,message:"请输入订单号",trigger:"blur"}]},downloadLoading:!1}},created:function(){this.getList()},methods:{addrow:function(){var t=this.detailInfo.length,e="t"+t,a="n"+t;this.detailInfo.push({time:e,num:a})},deleterow:function(){this.detailInfo.pop()},getDetailList:function(){var t=this;Object(u.i)(this.detailListQuery).then(function(e){t.detailTotal=0,t.detailList=[],null!=e.data&&(t.detailList=e.data.items,t.detailTotal=e.data.total)})},getList:function(){var t=this;this.listLoading=!0,Object(u.j)(this.listQuery).then(function(e){t.total=0,t.list=[],null!=e.data&&(t.list=e.data.items,t.total=e.data.total),setTimeout(function(){t.listLoading=!1},1e3)})},handleFilter:function(){this.listQuery.page=1,this.getList()},handlePublishStatus:function(t,e){var a=this,i=new Object;i.orderId=t.orderId,i.type=e,Object(u.l)(i).then(function(e){a.$message({message:"操作成功",type:"success"}),t.orderStat=e.data})},handleDeleteOrder:function(t){var e=this,a={orderId:t.orderId};Object(u.f)(a).then(function(a){for(var i=0;i<e.list.length;i++)e.list[i].orderId==t.orderId&&e.list.splice(i,1);e.$message({message:"操作成功",type:"success"})})},handleModifyStatus:function(t,e){this.$message({message:"操作成功",type:"success"}),t.orderStat=e},sortChange:function(t){var e=t.prop,a=t.order;"id"===e&&this.sortByID(a)},sortByID:function(t){this.listQuery.sort="ascending"===t?"+id":"-id",this.handleFilter()},resetTemp:function(){this.temp={id:void 0,importance:1,remark:"",timestamp:new Date,title:"",status:0,type:""}},resetDetail:function(){this.detailInfo.length=1,this.detail.orderId=0},handleCreate:function(){this.resetDetail(),this.dialogFormVisible=!0},createDetail:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&Object(u.e)(t.detail).then(function(e){t.dialogFormVisible=!1,t.$notify({title:"成功",message:"创建成功",type:"success",duration:1500}),t.getList()})})},handleAddDetail:function(t){this.resetDetail(),this.detail.orderId=t.orderId,this.orderTitle="订单号"+t.orderNumber+"      采购商:"+t.buyerName+"      货物名称:"+t.goodsName+"      数量:"+t.needNum+"      未交数量:"+t.undoNum+"      交货期限:"+Object(p.c)(t.endTime,"{y}-{m}-{d} "),this.dialogFormVisible=!0},handleConfirmStatus:function(t,e){var a=this,i=new Object;i.orderId=t.orderId,i.type=e,Object(u.k)(i).then(function(e){a.$message({message:"操作成功",type:"success"}),t.orderStat=e.data})},handleShowDetail:function(t){var e=this;t.orderStat<2||(this.detailListQuery.orderId=t.orderId,Object(u.i)(this.detailListQuery).then(function(t){if(e.detailTotal=0,e.detailList=[],e.orderTitle="",null!=t.data){e.detailList=t.data.items,e.detailTotal=t.data.total;var a=t.data.ext;e.orderTitle="订单号"+a.orderNumber+"      采购商:"+a.buyerName+"      货物名称:"+a.goodsName+"      数量:"+a.needNum+"      交货期限:"+Object(p.c)(a.endTime,"{y}-{m}-{d} {h}:{i}")}e.dialogDataVisible=!0}))},handleUpdate:function(t){var e=this;this.detailListQuery.orderId=t.orderId,Object(u.i)(this.detailListQuery).then(function(t){e.detailTotal=0,e.detailList=[],null!=t.data&&(e.detailList=t.data.items,e.detailTotal=t.data.total),e.dialogStatus="update",e.dialogFormVisible=!0})},updateData:function(){var t=this;this.$refs.dataForm.validate(function(e){if(e){var a=r()({},t.temp);Object(u.m)(a).then(function(e){t.temp.endTime=e.data.endTime,t.temp.startTime=e.data.startTime;var a=!0,i=!1,o=void 0;try{for(var r,l=n()(t.list);!(a=(r=l.next()).done);a=!0){var s=r.value;if(s.orderId===t.temp.orderId){var d=t.list.indexOf(s);t.list.splice(d,1,t.temp);break}}}catch(t){i=!0,o=t}finally{try{!a&&l.return&&l.return()}finally{if(i)throw o}}t.dialogFormVisible=!1,t.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3})})}})},handleDelete:function(t){this.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3});var e=this.list.indexOf(t);this.list.splice(e,1)},handleFetchPv:function(t){var e=this;Object(d.a)(t).then(function(t){e.pvData=t.data.pvData,e.dialogPvVisible=!0})},handleDownload:function(){var t=this;this.downloadLoading=!0,Promise.all([a.e("chunk-c7fa"),a.e("chunk-92d5")]).then(a.bind(null,"S/jZ")).then(function(e){var a=t.formatJson(["timestamp","title","type","importance","status"],t.list);e.export_json_to_excel({header:["timestamp","title","type","importance","status"],data:a,filename:"table-list"}),t.downloadLoading=!1})},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){return"timestamp"===t?Object(p.c)(e[t]):e[t]})})}}}),b=a("KHd+"),g=Object(b.a)(h,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""},on:{"sort-change":t.sortChange}},[a("el-table-column",{attrs:{label:t.$t("table.orderNumber"),prop:"orderNumber",sortable:"custom",align:"center",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"link-type",on:{click:function(a){t.handleShowDetail(e.row)}}},[t._v(t._s(e.row.orderNumber))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.goodsName"),width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.goodsName))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.startTime"),width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("parseTime")(e.row.startTime,"{y}-{m}-{d} {h}:{i}")))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.endTime"),width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("parseTime")(e.row.endTime,"{y}-{m}-{d} {h}:{i}")))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.needNum"),width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.needNum))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.undoNum"),width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.undoNum))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.buyer"),width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.buyerName))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.orderStat"),"class-name":"status-col",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:t._f("statusFilter")(e.row.orderStat)}},[t._v(t._s(t._f("statusNameFilter")(e.row.orderStat)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.actions"),align:"center","min-width":"200","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.orderStat?a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){t.handleConfirmStatus(e.row,1)}}},[t._v(t._s(t.$t("table.confirm"))+"\n          ")]):t._e(),t._v(" "),0==e.row.orderStat?a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.handleDeleteOrder(e.row)}}},[t._v(t._s(t.$t("table.delete"))+"\n          ")]):t._e(),t._v(" "),e.row.orderStat>=3?a("el-button",{attrs:{size:"small"},on:{click:function(a){t.handleShowDetail(e.row)}}},[t._v(t._s(t.$t("table.showDetail"))+"\n          ")]):t._e(),t._v(" "),2==e.row.orderStat?a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){t.handleAddDetail(e.row)}}},[t._v(t._s(t.$t("table.addDetail"))+"\n          ")]):t._e(),t._v(" "),2==e.row.orderStat?a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){t.handleConfirmStatus(e.row,0)}}},[t._v(t._s(t.$t("table.cancelConfirm"))+"\n          ")]):t._e()]}}])})],1),t._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){t.$set(t.listQuery,"page",e)},"update:limit":function(e){t.$set(t.listQuery,"limit",e)},pagination:t.getList}}),t._v(" "),a("el-dialog",{attrs:{title:t.orderTitle,visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"600px","margin-left":"50px"},attrs:{rules:t.rules,model:t.detail,"label-width":"140px"}},t._l(t.detailInfo,function(e){return a("el-form-item",{key:e.key,attrs:{label:t.$t("table.deliver"),prop:e.value}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{attrs:{type:"date",placeholder:"Please pick a date","value-format":"timestamp"},model:{value:t.detail[e.time],callback:function(a){t.$set(t.detail,e.time,a)},expression:"detail[item.time]"}})],1),t._v(" "),a("el-col",{attrs:{span:5,offset:1}},[a("el-input",{model:{value:t.detail[e.num],callback:function(a){t.$set(t.detail,e.num,a)},expression:"detail[item.num]"}})],1)],1)})),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v(t._s(t.$t("table.cancel")))]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.createDetail()}}},[t._v(t._s(t.$t("table.confirm")))]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.addrow()}}},[t._v(t._s(t.$t("table.addDetailItem")))]),t._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(e){t.deleterow()}}},[t._v(t._s(t.$t("table.deleteDetailItem")))])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:t.orderTitle,visible:t.dialogDataVisible},on:{"update:visible":function(e){t.dialogDataVisible=e}}},[a("el-table",{key:t.tableKey,staticStyle:{width:"820px"},attrs:{data:t.detailList,border:"",fit:"","highlight-current-row":""},on:{"sort-change":t.sortChange}},[a("el-table-column",{attrs:{label:t.$t("table.endTime"),"min-width":"50",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("parseTime")(e.row.time,"{y}-{m}-{d}")))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.expectNum"),"min-width":"50",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.expectNum))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.actualNum"),"min-width":"50",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.actualNum))])]}}])})],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogDataVisible=!1}}},[t._v(t._s(t.$t("table.confirm")))])],1),t._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.detailTotal,page:t.detailListQuery.page,limit:t.detailListQuery.limit},on:{"update:page":function(e){t.$set(t.detailListQuery,"page",e)},"update:limit":function(e){t.$set(t.detailListQuery,"limit",e)},pagination:t.getDetailList}})],1),t._v(" "),a("el-dialog",{attrs:{visible:t.dialogPvVisible,title:"Reading statistics"},on:{"update:visible":function(e){t.dialogPvVisible=e}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.pvData,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"key",label:"Channel"}}),t._v(" "),a("el-table-column",{attrs:{prop:"pv",label:"Pv"}})],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogPvVisible=!1}}},[t._v(t._s(t.$t("table.confirm")))])],1)],1)],1)},[],!1,null,null,null);g.options.__file="supplierTable.vue";e.default=g.exports},"RU/L":function(t,e,a){a("Rqdy");var i=a("WEpk").Object;t.exports=function(t,e,a){return i.defineProperty(t,e,a)}},Rp86:function(t,e,a){a("bBy9"),a("FlQf"),t.exports=a("fXsU")},Rqdy:function(t,e,a){var i=a("Y7ZC");i(i.S+i.F*!a("jmDH"),"Object",{defineProperty:a("2faE").f})},SEkw:function(t,e,a){t.exports={default:a("RU/L"),__esModule:!0}},YEIV:function(t,e,a){"use strict";e.__esModule=!0;var i=function(t){return t&&t.__esModule?t:{default:t}}(a("SEkw"));e.default=function(t,e,a){return e in t?(0,i.default)(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}},ZySA:function(t,e,a){"use strict";var i=a("P2sY"),n=a.n(i),o=(a("jUE0"),{bind:function(t,e){t.addEventListener("click",function(a){var i=n()({},e.value),o=n()({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),r=o.ele;if(r){r.style.position="relative",r.style.overflow="hidden";var l=r.getBoundingClientRect(),s=r.querySelector(".waves-ripple");switch(s?s.className="waves-ripple":((s=document.createElement("span")).className="waves-ripple",s.style.height=s.style.width=Math.max(l.width,l.height)+"px",r.appendChild(s)),o.type){case"center":s.style.top=l.height/2-s.offsetHeight/2+"px",s.style.left=l.width/2-s.offsetWidth/2+"px";break;default:s.style.top=(a.pageY-l.top-s.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",s.style.left=(a.pageX-l.left-s.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return s.style.backgroundColor=o.color,s.className="waves-ripple z-active",!1}},!1)}}),r=function(t){t.directive("waves",o)};window.Vue&&(window.waves=o,Vue.use(r)),o.install=r;e.a=o},fXsU:function(t,e,a){var i=a("5K7Z"),n=a("fNZA");t.exports=a("WEpk").getIterator=function(t){var e=n(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return i(e.call(t))}},jUE0:function(t,e,a){},"ob+D":function(t,e,a){"use strict";var i=a("9V8q");a.n(i).a}}]);