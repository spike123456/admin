(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{WVqY:function(t,c,e){"use strict";e.r(c),e.d(c,"SecretModule",function(){return p});var n=e("SVse"),a=e("d2mR"),i=e("s7LF"),r=e("iInd"),u=e("mrSG"),s=e("Z93F"),o=e("8Y7J");const l=[{path:"secret",component:(()=>{class t{constructor(t){this.commonService=t,this.htmlStatus="",this.articleId="",this.backup="",this.backupStatus=""}ngOnInit(){}clearHtmlCache(){return Object(u.__awaiter)(this,void 0,void 0,function*(){this.htmlStatus="Start";const t=yield this.commonService.clearHtmlCache();this.htmlStatus=t?"Success":"Fail"})}updateBackup(){return Object(u.__awaiter)(this,void 0,void 0,function*(){this.backupStatus="Start";const t=yield this.commonService.updateBackup(this.articleId,this.backup);this.backupStatus=t?"Success":"Fail"})}}return t.\u0275fac=function(c){return new(c||t)(o.Pb(s.a))},t.\u0275cmp=o.Jb({type:t,selectors:[["app-secret"]],decls:13,vars:4,consts:[["type","button",3,"click"],["type","text","placeholder","Article Id",3,"ngModel","ngModelChange"],["type","text","placeholder","Backup...",3,"ngModel","ngModelChange"]],template:function(t,c){1&t&&(o.Vb(0,"div"),o.Vb(1,"button",0),o.cc("click",function(){return c.clearHtmlCache()}),o.Ec(2,"X\xf3a html"),o.Ub(),o.Vb(3,"div"),o.Ec(4),o.Ub(),o.Qb(5,"br"),o.Qb(6,"br"),o.Vb(7,"input",1),o.cc("ngModelChange",function(t){return c.articleId=t}),o.Ub(),o.Vb(8,"input",2),o.cc("ngModelChange",function(t){return c.backup=t}),o.Ub(),o.Vb(9,"button",0),o.cc("click",function(){return c.updateBackup()}),o.Ec(10,"Update backup"),o.Ub(),o.Vb(11,"div"),o.Ec(12),o.Ub(),o.Ub()),2&t&&(o.Db(4),o.Fc(c.htmlStatus),o.Db(3),o.lc("ngModel",c.articleId),o.Db(1),o.lc("ngModel",c.backup),o.Db(4),o.Fc(c.backupStatus))},directives:[i.a,i.h,i.j],encapsulation:2}),t})(),data:{title:"Secret"}}];let b=(()=>{class t{}return t.\u0275fac=function(c){return new(c||t)},t.\u0275mod=o.Nb({type:t}),t.\u0275inj=o.Mb({imports:[[r.g.forChild(l)],r.g]}),t})(),p=(()=>{class t{}return t.\u0275fac=function(c){return new(c||t)},t.\u0275mod=o.Nb({type:t}),t.\u0275inj=o.Mb({imports:[[n.c,b,a.a,i.e]]}),t})()}}]);