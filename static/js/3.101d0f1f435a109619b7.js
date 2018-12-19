webpackJsonp([3],{OjyR:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("oG3u"),n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[a("v-layout",{attrs:{row:"",wrap:"","fill-height":""}},[a("v-flex",{attrs:{xs12:""}},[a("v-flex",{attrs:{xs7:""}},[a("v-card-title",[a("h1",[e._v("Викладачі")]),e._v(" "),a("v-spacer"),e._v(" "),a("v-text-field",{staticClass:"search-field",attrs:{"append-icon":"search",label:"Пошук"},model:{value:e.searchFilter,callback:function(t){e.searchFilter=t},expression:"searchFilter"}})],1)],1)],1),e._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs7:""}},[a("div",{staticClass:"data-table"},[a("v-data-table",{staticClass:"elevation-1 data-table",attrs:{headers:e.headers,items:e.tableData,search:e.searchFilter,"hide-actions":"","disable-initial-sort":""},scopedSlots:e._u([{key:"items",fn:function(t){var i=t.item;return[a("tr",{attrs:{active:i.Id===e.model.Id},on:{click:function(t){e.rowSelected(i)}}},[a("td",{staticClass:"text-xs-left"},[e._v(e._s(i.Name))]),e._v(" "),a("td",{staticClass:"text-xs-left"},[e._v(e._s(i.Email))]),e._v(" "),a("td",{staticClass:"text-xs-left"},[e._v(e._s(i.Phone))])])]}}])})],1),e._v(" "),a("v-layout",{attrs:{"align-center":"","justify-space-between":"",row:"","mt-3":""}},[a("div",[a("v-btn",{directives:[{name:"show",rawName:"v-show",value:!e.isChanged,expression:"!isChanged"}],attrs:{color:"success"},on:{click:e.addEvent}},[e._v("Додати")]),e._v(" "),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:!e.isChanged,expression:"!isChanged"}],attrs:{color:"error"},on:{click:e.deleteEvent}},[e._v("Видалити")])],1),e._v(" "),a("div",[a("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.isChanged,expression:"isChanged"}],attrs:{color:"normal"},on:{click:e.cancelEvent}},[e._v("Скасувати")]),e._v(" "),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.isChanged,expression:"isChanged"}],attrs:{color:"info"},on:{click:e.saveEvent}},[e._v("Зберегти")])],1)])],1),e._v(" "),a("v-flex",{attrs:{"xs-6":"","offset-xs1":""}},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{rules:e.rules.Name,counter:250,label:"ПІБ",required:"","validate-on-blur":""},model:{value:e.model.Name,callback:function(t){e.$set(e.model,"Name",t)},expression:"model.Name"}}),e._v(" "),a("v-text-field",{attrs:{counter:250,rules:e.rules.Description,label:"Опис","validate-on-blur":""},model:{value:e.model.Description,callback:function(t){e.$set(e.model,"Description",t)},expression:"model.Description"}}),e._v(" "),a("v-text-field",{attrs:{rules:e.rules.Email,label:"Email",required:"","validate-on-blur":""},model:{value:e.model.Email,callback:function(t){e.$set(e.model,"Email",t)},expression:"model.Email"}}),e._v(" "),a("v-text-field",{attrs:{rules:e.rules.Phone,label:"Номер телефону",required:"","validate-on-blur":""},model:{value:e.model.Phone,callback:function(t){e.$set(e.model,"Phone",t)},expression:"model.Phone"}}),e._v(" "),a("v-select",{attrs:{items:e.userKeyValues,rules:e.rules.ApplicationUserId,label:"Користувач",required:"","validate-on-blur":""},model:{value:e.model.ApplicationUserId,callback:function(t){e.$set(e.model,"ApplicationUserId",t)},expression:"model.ApplicationUserId"}})],1)],1)],1)],1)],1),e._v(" "),a("confirm-dialog",{ref:"confirm",attrs:{title:"Ви впевнені?",text:"Відмінити видалення неможливо."}})],1)},staticRenderFns:[]};var s=function(e){a("miGA")},r=a("VU/8")(i.a,n,!1,s,"data-v-15f4d0d8",null);t.default=r.exports},gb7a:function(e,t,a){"use strict";var i=a("//Fk"),n=a.n(i),s=a("IcnI"),r=a("JjA1"),l={getAll:function(e){return new n.a(function(t,a){r.h.getAll(function(a){t(a),e.commit("setTeacherList",a)},a)})},getById:function(e,t){return new n.a(function(e,a){r.h.getById(t,e,a)})},getUsers:function(e){return new n.a(function(t,a){r.i.getAll(function(a){t(a),e.commit("setUserList",a)},a)})},add:function(e,t){var a={Name:t.Name,Description:t.Description,Email:t.Email,Phone:t.Phone,ApplicationUserId:t.ApplicationUserId};return new n.a(function(t,i){r.h.add(a,function(a){t(a),e.commit("addTeacher",a)},i)})},update:function(e,t){var a={Id:t.Id,Name:t.Name,Description:t.Description,Email:t.Email,Phone:t.Phone,ApplicationUserId:t.ApplicationUserId};return new n.a(function(t,i){r.h.update(a,function(a){t(a),e.commit("updateTeacher",a)},i)})},delete:function(e,t){var a={Id:t.Id,Name:t.Name,Description:t.Description,Email:t.Email,Phone:t.Phone,ApplicationUserId:t.ApplicationUserId};return new n.a(function(i,n){r.h.delete(a,function(){i(),e.commit("deleteTeacher",t.Id)},n)})}},o={setTeacherList:function(e,t){e.teacherList=t},setUserList:function(e,t){e.userList=t},addTeacher:function(e,t){e.teacherListList.push(t)},updateTeacher:function(e,t){var a=e.teacherList.findIndex(function(e){return e.Id===t.Id});a>=0&&e.teacherList.splice(a,1,t)},deleteTeacher:function(e,t){var a=e.teacherList.findIndex(function(e){return e.Id===r.h.Id});a>=0&&e.teacherList.splice(a,1)}};s.a.registerModule(["admin","teacher"],{namespaced:!0,state:{teacherList:[],userList:[]},actions:l,getters:{teacherList:function(e){return e.teacherList},userKeyValues:function(e){return e.userList.map(function(e){return{value:e.Id,text:e.UserName}})}},mutations:o})},miGA:function(e,t){},oG3u:function(e,t,a){"use strict";(function(e){var i=a("Dd8w"),n=a.n(i),s=(a("gb7a"),a("XhAJ")),r=a("NYxO"),l=a("OzJ6");t.a={mixins:[s.a],components:{ConfirmDialog:l.a},constants:{headers:[{text:"ПІБ",value:"Name"},{text:"Email",value:"Email"},{text:"Номер телефону",value:"Phone"}],rules:{Name:[function(e){return!!e||"Поле Ім'я є обовязковим"},function(e){return e&&e.length<=250||"Ім'я має містити не більше 250 символів"}],Description:[function(e){return e&&e.length<=500||"Опис має містити не більше 500 символів"}],Phone:[function(e){return/^[0-9]*$/.test(e)||"Телефон повинен містити тільки цифри"}],Email:[function(e){return!!e||"Поле E-mail є обовязковим"},function(e){return/.+@.+/.test(e)||"Електронна пошта повинна бути дійсною"}]}},computed:n()({},Object(r.c)("admin/teacher",{tableData:"teacherList",userKeyValues:"userKeyValues"}),{modelsEqual:function(){return e.valueEquals(this.model.Name,this.modelCopy.Name)&&e.valueEquals(this.model.ApplicationUserId,this.modelCopy.ApplicationUserId)&&e.valueEquals(this.model.Email,this.modelCopy.Email)&&e.valueEquals(this.model.Phone,this.modelCopy.Phone)&&e.valueEquals(this.model.Description,this.modelCopy.Description)}}),methods:n()({},Object(r.b)("admin/teacher",["getAll","getById","getUsers","add","update","delete"])),created:function(){this.getUsers()}}}).call(t,a("DuR2"))}});
//# sourceMappingURL=3.101d0f1f435a109619b7.js.map