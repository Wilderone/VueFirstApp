(function(t){function o(o){for(var a,n,i=o[0],r=o[1],c=o[2],l=0,f=[];l<i.length;l++)n=i[l],Object.prototype.hasOwnProperty.call(d,n)&&d[n]&&f.push(d[n][0]),d[n]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(o);while(f.length)f.shift()();return s.push.apply(s,c||[]),e()}function e(){for(var t,o=0;o<s.length;o++){for(var e=s[o],a=!0,i=1;i<e.length;i++){var r=e[i];0!==d[r]&&(a=!1)}a&&(s.splice(o--,1),t=n(n.s=e[0]))}return t}var a={},d={app:0},s=[];function n(o){if(a[o])return a[o].exports;var e=a[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=a,n.d=function(t,o,e){n.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,o){if(1&o&&(t=n(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var a in t)n.d(e,a,function(o){return t[o]}.bind(null,a));return e},n.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(o,"a",o),o},n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=o,i=i.slice();for(var c=0;c<i.length;c++)o(i[c]);var u=r;s.push([0,"chunk-vendors"]),e()})({0:function(t,o,e){t.exports=e("56d7")},"4de0":function(t,o,e){},"56d7":function(t,o,e){"use strict";e.r(o);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("a026"),d=e("8c4f"),s=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"container",attrs:{id:"app"}},[e("div",{staticClass:"col-sm-10 text-center"},[e("h1",[t._v("Задачи")]),e("b-alert",{attrs:{dismissible:"",fade:"",message:t.message,show:t.showConfirmation},on:{dismissed:function(o){t.showConfirmation=!1}}},[t._v(t._s(t.message))]),e("counter",{attrs:{todos:t.todos}}),e("button",{directives:[{name:"b-modal",rawName:"v-b-modal.todo-modal",modifiers:{"todo-modal":!0}}],staticClass:"btn-success btn-sm align-left-d-block",attrs:{type:"button",id:"task-add"},on:{click:t.changeText}},[t._v("Добавить задачу")]),e("table",{staticClass:"table table-dark table-stripped table-hover"},[t._m(0),e("tbody",t._l(t.todos,(function(o,a){return e("tr",{key:a},[e("td",{staticClass:"todo-uid"},[t._v(t._s(o["uid"]))]),e("td",[t._v(t._s(o["data"].description))]),e("td",[o.data.is_completed[0]?e("span",[t._v("Выполнено")]):e("span",[t._v("Не выполнено")])]),e("td",[e("button",{directives:[{name:"b-modal",rawName:"v-b-modal.todo-modal",modifiers:{"todo-modal":!0}}],staticClass:"btn btn-secondary btn-sm",attrs:{type:"button"},on:{click:function(e){return t.updateTodo(o)}}},[t._v("Обновить")]),t._v(" "),e("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:function(e){return t.deleteTodo(o)}}},[t._v("X")])])])})),0)])],1),e("b-modal",{ref:"addTodoModal",attrs:{id:"todo-modal",title:t.modalHeader,"hide-footer":""}},[e("b-form",{staticClass:"w-100",on:{submit:t.chooseModal,reset:t.onReset}},[e("b-form-group",{attrs:{id:"form-description-group",label:"Описание:","label-for":"form-description-input"}},[e("b-form-input",{attrs:{id:"form-description-input",type:"text",required:"",placeholder:"Завести задачу"},model:{value:t.addTodoForm.data.description,callback:function(o){t.$set(t.addTodoForm.data,"description",o)},expression:"addTodoForm.data.description"}})],1),e("b-form-group",{attrs:{id:"form-complete-group"}},[e("b-form-checkbox-group",{attrs:{id:"form-checks"},model:{value:t.addTodoForm.data.is_completed,callback:function(o){t.$set(t.addTodoForm.data,"is_completed",o)},expression:"addTodoForm.data.is_completed"}},[e("b-form-checkbox",{attrs:{value:"true"}},[t._v("Задача выполнена?")])],1)],1),e("b-button",{staticClass:"mr-5",attrs:{type:"submit",variant:"primary"}},[t._v(t._s(t.addOrUpdateText))]),e("b-button",{attrs:{type:"reset",varian:"danger"}},[t._v("Сброс")])],1)],1)],1)},n=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("thead",{staticClass:"thead-light"},[e("tr",[e("th",[t._v("ID")]),e("th",[t._v("Описание")]),e("th",[t._v("Статус")]),e("th")])])}],i=(e("a4d3"),e("e01a"),e("4160"),e("a434"),e("159b"),function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"container d-flex justify-content-around"},[e("div",{staticClass:"d-flex"},[e("b-alert",{attrs:{show:"",variant:"primary"}},[e("div",[t._v("Всего задач:")]),e("div",[e("span",{staticClass:"num"},[t._v(t._s(t.todos.length))])])])],1),e("div",{staticClass:"d-flex"},[e("b-alert",{attrs:{show:"",variant:"success"}},[e("div",[t._v("Выполненных задач:")]),e("div",[e("span",{staticClass:"num"},[t._v(t._s(t.countCompleted))])])])],1),e("div",{staticClass:"d-flex"},[e("b-alert",{attrs:{show:"",variant:"danger"}},[e("div",[t._v("Невыполненных задач:")]),e("div",[e("span",{staticClass:"num"},[t._v(t._s(t.countUncompleted))])])])],1)])}),r=[],c={props:["todos"],name:"Counter",data:function(){return{uncompleted:0,completed:0}},computed:{countCompleted:function(){var t=0;return this.todos.forEach((function(o){o.data.is_completed[0]&&t++})),t},countUncompleted:function(){var t=0;return this.todos.forEach((function(o){o.data.is_completed[0]||t++})),t}}},u=c,l=(e("e141"),e("2877")),f=Object(l["a"])(u,i,r,!1,null,null,null),m=f.exports;localStorage.getItem("todos")||localStorage.setItem("todos",JSON.stringify([]));var p={name:"Todo",data:function(){return{modalHeader:"Добавить задачу",addOrUpdateText:"Добавить",todos:[],addTodoForm:{uid:-1,data:{description:"",is_completed:[]}},message:"",showConfirmation:!1}},methods:{getTodos:function(){this.todos=JSON.parse(localStorage.todos).sort((function(t,o){return+t["uid"]<+o["uid"]?-1:+t["uid"]==+o["uid"]?0:+t["uid"]>+o["uid"]?1:void 0}))},chooseModal:function(t){t.preventDefault(),-1==this.addTodoForm.uid?this.onSubmit(t):this.onUpdateSubmit(t)},getTodosLength:function(t){var o=[0];t.forEach((function(t){o.push(t.uid)})),o.sort((function(t,o){if(t<o)return-1}));for(var e=0;e<=o.length;e++)if(o[e]!=e)return e;return t.length+1},deleteFromLocalStorage:function(t){var o=this;this.todos.forEach((function(e,a,d){e["uid"]===t&&d.splice(a,1),o.message="Задача ".concat(e.data.description," удалена"),o.showConfirmation=!0})),localStorage.setItem("todos",JSON.stringify(this.todos)),this.getTodos()},resetForm:function(){this.addTodoForm.uid=-1,this.addTodoForm.data.description="",this.addTodoForm.data.is_completed=[]},onSubmit:function(t){t.preventDefault(),this.$refs.addTodoModal.hide();var o={},e=this.addTodoForm.data;o.uid=this.getTodosLength(this.todos),o.data=e,this.todos.push(o);try{localStorage.setItem("todos",JSON.stringify(this.todos))}catch(a){this.message="Ошибка при добавлении задания",this.showConfirmation=!0}this.message="Задача ".concat(o.data.description," добавлена!"),this.showConfirmation=!0,this.resetForm(),this.getTodos()},onReset:function(t){t.preventDefault(),this.resetForm()},updateTodo:function(t){this.addOrUpdateText="Обновить",this.modalHeader="Обновить задачу",this.addTodoForm.data.description=t.data.description,this.addTodoForm.uid=t.uid,this.addTodoForm.data.is_completed=t.data.is_completed},onUpdateSubmit:function(t){var o=this;t.preventDefault(),this.$refs.addTodoModal.hide(),this.todos.forEach((function(t){t.uid==o.addTodoForm.uid&&(t.data=o.addTodoForm.data)}));try{localStorage.setItem("todos",JSON.stringify(this.todos))}catch(e){this.message="Ошибка обновления задачи ".concat(this.addTodoForm.data.description),this.showConfirmation=!0}this.message="Задача ".concat(this.addTodoForm.data.description," обновлена"),this.showConfirmation=!0,this.getTodos(),this.onUpdateReset(t)},onUpdateReset:function(t){t.preventDefault(),this.$refs.addTodoModal.hide(),this.resetForm()},deleteTodo:function(t){this.message="Задача ".concat(t.data.description," удалена"),this.showConfirmation=!0,this.deleteFromLocalStorage(t.uid)},changeText:function(){this.addOrUpdateText="Добавить",this.modalHeader="Добавить задачу"}},components:{counter:m},created:function(){this.getTodos()}},h=p,v=(e("b548"),Object(l["a"])(h,s,n,!1,null,null,null)),b=v.exports;a["default"].use(d["a"]);var g=[{path:"/",name:"todos",component:b}],_=new d["a"]({mode:"history",base:"/",routes:g}),T=_,y=(e("f9e3"),e("5f5b")),C=e("e736"),w=e.n(C),F=e("d18d"),x=e.n(F);a["default"].use(y["a"]),a["default"].use(w.a,{todos:[]}),a["default"].use(x.a,{name:"vls",bind:!0}),a["default"].config.productionTip=!0,new a["default"]({router:T,render:function(t){return t(b)}}).$mount("#todo")},"678d":function(t,o,e){},b548:function(t,o,e){"use strict";var a=e("678d"),d=e.n(a);d.a},e141:function(t,o,e){"use strict";var a=e("4de0"),d=e.n(a);d.a}});
//# sourceMappingURL=app.03e5dc01.js.map