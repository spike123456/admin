(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{cp0P:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var s=n("HDdC"),i=n("DH7j"),r=n("lJxs"),o=n("XoHu"),a=n("Cfvw");function l(...t){if(1===t.length){const e=t[0];if(Object(i.a)(e))return h(e,null);if(Object(o.a)(e)&&Object.getPrototypeOf(e)===Object.prototype){const t=Object.keys(e);return h(t.map(t=>e[t]),t)}}if("function"==typeof t[t.length-1]){const e=t.pop();return h(t=1===t.length&&Object(i.a)(t[0])?t[0]:t,null).pipe(Object(r.a)(t=>e(...t)))}return h(t,null)}function h(t,e){return new s.a(n=>{const s=t.length;if(0===s)return void n.complete();const i=new Array(s);let r=0,o=0;for(let l=0;l<s;l++){const h=Object(a.a)(t[l]);let u=!1;n.add(h.subscribe({next:t=>{u||(u=!0,o++),i[l]=t},error:t=>n.error(t),complete:()=>{r++,r!==s&&u||(o===s&&n.next(e?e.reduce((t,e,n)=>(t[e]=i[n],t),{}):i),n.complete())}}))}})}},s7LF:function(t,e,n){"use strict";n.d(e,"a",function(){return d}),n.d(e,"b",function(){return J}),n.d(e,"c",function(){return rt}),n.d(e,"d",function(){return at}),n.d(e,"e",function(){return mt}),n.d(e,"f",function(){return h}),n.d(e,"g",function(){return S}),n.d(e,"h",function(){return P}),n.d(e,"i",function(){return Q}),n.d(e,"j",function(){return et}),n.d(e,"k",function(){return ct}),n.d(e,"l",function(){return yt}),n.d(e,"m",function(){return ut}),n.d(e,"n",function(){return gt});var s=n("8Y7J"),i=n("SVse"),r=n("Cfvw"),o=n("cp0P"),a=n("lJxs");class l{}const h=new s.r("NgValueAccessor"),u={provide:h,useExisting:Object(s.V)(()=>d),multi:!0},c=new s.r("CompositionEventMode");let d=(()=>{class t{constructor(t,e,n){this._renderer=t,this._elementRef=e,this._compositionMode=n,this.onChange=t=>{},this.onTouched=()=>{},this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function(){const t=Object(i.w)()?Object(i.w)().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}())}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"value",null==t?"":t)}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}}return t.\u0275fac=function(e){return new(e||t)(s.Pb(s.F),s.Pb(s.l),s.Pb(c,8))},t.\u0275dir=s.Kb({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,e){1&t&&s.cc("input",function(t){return e._handleInput(t.target.value)})("blur",function(){return e.onTouched()})("compositionstart",function(){return e._compositionStart()})("compositionend",function(t){return e._compositionEnd(t.target.value)})},features:[s.Cb([u])]}),t})();const p=new s.r("NgValidators"),_=new s.r("NgAsyncValidators");function g(t){return null!=t}function f(t){const e=Object(s.ub)(t)?Object(r.a)(t):t;return Object(s.tb)(e),e}function m(t){let e={};return t.forEach(t=>{e=null!=t?Object.assign(Object.assign({},e),t):e}),0===Object.keys(e).length?null:e}function y(t,e){return e.map(e=>e(t))}function C(t){return t.map(t=>function(t){return!t.validate}(t)?t:e=>t.validate(e))}function V(t){return null!=t?function(t){if(!t)return null;const e=t.filter(g);return 0==e.length?null:function(t){return m(y(t,e))}}(C(t)):null}function b(t){return null!=t?function(t){if(!t)return null;const e=t.filter(g);return 0==e.length?null:function(t){const n=y(t,e).map(f);return Object(o.a)(n).pipe(Object(a.a)(m))}}(C(t)):null}function v(t,e){return null===t?[e]:Array.isArray(t)?[...t,e]:[t,e]}function A(t){return t._rawValidators}function O(t){return t._rawAsyncValidators}let w=(()=>{class t{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=V(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=b(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=s.Kb({type:t}),t})(),E=(()=>{class t extends w{get formDirective(){return null}get path(){return null}}return t.\u0275fac=function(e){return D(e||t)},t.\u0275dir=s.Kb({type:t,features:[s.Ab]}),t})();const D=s.Xb(E);class S extends w{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}let P=(()=>{class t extends class{constructor(t){this._cd=t}is(t){var e,n;return!!(null===(n=null===(e=this._cd)||void 0===e?void 0:e.control)||void 0===n?void 0:n[t])}}{constructor(t){super(t)}}return t.\u0275fac=function(e){return new(e||t)(s.Pb(S,2))},t.\u0275dir=s.Kb({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,e){2&t&&s.Hb("ng-untouched",e.is("untouched"))("ng-touched",e.is("touched"))("ng-pristine",e.is("pristine"))("ng-dirty",e.is("dirty"))("ng-valid",e.is("valid"))("ng-invalid",e.is("invalid"))("ng-pending",e.is("pending"))},features:[s.Ab]}),t})();function M(t,e){j(t,e,!0),e.valueAccessor.writeValue(t.value),function(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,"change"===t.updateOn&&x(t,e)})}(t,e),function(t,e){const n=(t,n)=>{e.valueAccessor.writeValue(t),n&&e.viewToModelUpdate(t)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}(t,e),function(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,"blur"===t.updateOn&&t._pendingChange&&x(t,e),"submit"!==t.updateOn&&t.markAsTouched()})}(t,e),function(t,e){if(e.valueAccessor.setDisabledState){const n=t=>{e.valueAccessor.setDisabledState(t)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}(t,e)}function k(t,e,n=!0){const s=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(s),e.valueAccessor.registerOnTouched(s)),T(t,e,!0),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function F(t,e){t.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function j(t,e,n){const s=A(t);null!==e.validator?t.setValidators(v(s,e.validator)):"function"==typeof s&&t.setValidators([s]);const i=O(t);if(null!==e.asyncValidator?t.setAsyncValidators(v(i,e.asyncValidator)):"function"==typeof i&&t.setAsyncValidators([i]),n){const n=()=>t.updateValueAndValidity();F(e._rawValidators,n),F(e._rawAsyncValidators,n)}}function T(t,e,n){let s=!1;if(null!==t){if(null!==e.validator){const n=A(t);if(Array.isArray(n)&&n.length>0){const i=n.filter(t=>t!==e.validator);i.length!==n.length&&(s=!0,t.setValidators(i))}}if(null!==e.asyncValidator){const n=O(t);if(Array.isArray(n)&&n.length>0){const i=n.filter(t=>t!==e.asyncValidator);i.length!==n.length&&(s=!0,t.setAsyncValidators(i))}}}if(n){const t=()=>{};F(e._rawValidators,t),F(e._rawAsyncValidators,t)}return s}function x(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function I(t,e){j(t,e,!1)}function N(t,e){if(!t.hasOwnProperty("model"))return!1;const n=t.model;return!!n.isFirstChange()||!Object.is(e,n.currentValue)}function U(t,e){t._syncPendingControls(),e.forEach(t=>{const e=t.control;"submit"===e.updateOn&&e._pendingChange&&(t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1)})}function R(t,e){if(!e)return null;let n,s,i;return Array.isArray(e),e.forEach(t=>{t.constructor===d?n=t:Object.getPrototypeOf(t.constructor)===l?s=t:i=t}),i||s||n||null}function W(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}function B(t){return($(t)?t.validators:t)||null}function L(t){return Array.isArray(t)?V(t):t||null}function G(t,e){return($(e)?e.asyncValidators:t)||null}function K(t){return Array.isArray(t)?b(t):t||null}function $(t){return null!=t&&!Array.isArray(t)&&"object"==typeof t}class H{constructor(t,e){this._hasOwnPendingAsyncValidator=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=L(this._rawValidators),this._composedAsyncValidatorFn=K(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return"VALID"===this.status}get invalid(){return"INVALID"===this.status}get pending(){return"PENDING"==this.status}get disabled(){return"DISABLED"===this.status}get enabled(){return"DISABLED"!==this.status}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=L(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=K(t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status="PENDING",!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status="DISABLED",this.errors=null,this._forEachChild(e=>{e.disable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status="VALID",this._forEachChild(e=>{e.enable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),"VALID"!==this.status&&"PENDING"!==this.status||this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?"DISABLED":"VALID"}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status="PENDING",this._hasOwnPendingAsyncValidator=!0;const e=f(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(e=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(e,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){return function(t,e,n){if(null==e)return null;if(Array.isArray(e)||(e=e.split(".")),Array.isArray(e)&&0===e.length)return null;let s=t;return e.forEach(t=>{s=s instanceof X?s.controls.hasOwnProperty(t)?s.controls[t]:null:s instanceof Y&&s.at(t)||null}),s}(this,t)}getError(t,e){const n=e?this.get(e):this;return n&&n.errors?n.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new s.n,this.statusChanges=new s.n}_calculateStatus(){return this._allControlsDisabled()?"DISABLED":this.errors?"INVALID":this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus("PENDING")?"PENDING":this._anyControlsHaveStatus("INVALID")?"INVALID":"VALID"}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){$(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class J extends H{constructor(t=null,e,n){super(B(e),G(n,e)),this._onChange=[],this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!n})}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(t=>t(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=null,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){W(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){W(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class X extends H{constructor(t,e,n){super(B(e),G(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!n})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e){this.registerControl(t,e),this.updateValueAndValidity(),this._onCollectionChange()}removeControl(t){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity(),this._onCollectionChange()}setControl(t,e){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity(),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){this._checkAllValuesPresent(t),Object.keys(t).forEach(n=>{this._throwIfControlMissing(n),this.controls[n].setValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(n=>{this.controls[n]&&this.controls[n].patchValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((n,s)=>{n.reset(t[s],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,n)=>(t[n]=e instanceof J?e.value:e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(t,e)=>!!e._syncPendingControls()||t);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!Object.keys(this.controls).length)throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.controls[t])throw new Error(`Cannot find form control with name: ${t}.`)}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const n=this.controls[e];n&&t(n,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const e of Object.keys(this.controls)){const n=this.controls[e];if(this.contains(e)&&t(n))return!0}return!1}_reduceValue(){return this._reduceChildren({},(t,e,n)=>((e.enabled||this.disabled)&&(t[n]=e.value),t))}_reduceChildren(t,e){let n=t;return this._forEachChild((t,s)=>{n=e(n,t,s)}),n}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control with name: '${n}'.`)})}}class Y extends H{constructor(t,e,n){super(B(e),G(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!n})}at(t){return this.controls[t]}push(t){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity(),this._onCollectionChange()}insert(t,e){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity()}removeAt(t){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity()}setControl(t,e){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity(),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){this._checkAllValuesPresent(t),t.forEach((t,n)=>{this._throwIfControlMissing(n),this.at(n).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(t.forEach((t,n)=>{this.at(n)&&this.at(n).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((n,s)=>{n.reset(t[s],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>t instanceof J?t.value:t.getRawValue())}clear(){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity())}_syncPendingControls(){let t=this.controls.reduce((t,e)=>!!e._syncPendingControls()||t,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!this.controls.length)throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.at(t))throw new Error(`Cannot find form control at index ${t}`)}_forEachChild(t){this.controls.forEach((e,n)=>{t(e,n)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control at index: ${n}.`)})}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}}const q={provide:E,useExisting:Object(s.V)(()=>Q)},z=(()=>Promise.resolve(null))();let Q=(()=>{class t extends E{constructor(t,e){super(),this.submitted=!1,this._directives=[],this.ngSubmit=new s.n,this.form=new X({},V(t),b(e))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){z.then(()=>{const e=this._findContainer(t.path);t.control=e.registerControl(t.name,t.control),M(t.control,t),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.push(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){z.then(()=>{const e=this._findContainer(t.path);e&&e.removeControl(t.name),W(this._directives,t)})}addFormGroup(t){z.then(()=>{const e=this._findContainer(t.path),n=new X({});I(n,t),e.registerControl(t.name,n),n.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){z.then(()=>{const e=this._findContainer(t.path);e&&e.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,e){z.then(()=>{this.form.get(t.path).setValue(e)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submitted=!0,U(this.form,this._directives),this.ngSubmit.emit(t),!1}onReset(){this.resetForm()}resetForm(t){this.form.reset(t),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}}return t.\u0275fac=function(e){return new(e||t)(s.Pb(p,10),s.Pb(_,10))},t.\u0275dir=s.Kb({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,e){1&t&&s.cc("submit",function(t){return e.onSubmit(t)})("reset",function(){return e.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[s.Cb([q]),s.Ab]}),t})();const Z={provide:S,useExisting:Object(s.V)(()=>et)},tt=(()=>Promise.resolve(null))();let et=(()=>{class t extends S{constructor(t,e,n,i){super(),this.control=new J,this._registered=!1,this.update=new s.n,this._parent=t,this._setValidators(e),this._setAsyncValidators(n),this.valueAccessor=R(0,i)}ngOnChanges(t){this._checkForErrors(),this._registered||this._setUpControl(),"isDisabled"in t&&this._updateDisabled(t),N(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._parent?[...this._parent.path,this.name]:[this.name]}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){M(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(t){tt.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1})})}_updateDisabled(t){const e=t.isDisabled.currentValue,n=""===e||e&&"false"!==e;tt.then(()=>{n&&!this.control.disabled?this.control.disable():!n&&this.control.disabled&&this.control.enable()})}}return t.\u0275fac=function(e){return new(e||t)(s.Pb(E,9),s.Pb(p,10),s.Pb(_,10),s.Pb(h,10))},t.\u0275dir=s.Kb({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[s.Cb([Z]),s.Ab,s.Bb]}),t})(),nt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Nb({type:t}),t.\u0275inj=s.Mb({}),t})();const st=new s.r("NgModelWithFormControlWarning"),it={provide:S,useExisting:Object(s.V)(()=>rt)};let rt=(()=>{class t extends S{constructor(t,e,n,i){super(),this._ngModelWarningConfig=i,this.update=new s.n,this._ngModelWarningSent=!1,this._setValidators(t),this._setAsyncValidators(e),this.valueAccessor=R(0,n)}set isDisabled(t){}ngOnChanges(t){if(this._isControlChanged(t)){const e=t.form.previousValue;e&&k(e,this,!1),M(this.form,this),this.control.disabled&&this.valueAccessor.setDisabledState&&this.valueAccessor.setDisabledState(!0),this.form.updateValueAndValidity({emitEvent:!1})}N(t,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&k(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_isControlChanged(t){return t.hasOwnProperty("form")}}return t.\u0275fac=function(e){return new(e||t)(s.Pb(p,10),s.Pb(_,10),s.Pb(h,10),s.Pb(st,8))},t.\u0275dir=s.Kb({type:t,selectors:[["","formControl",""]],inputs:{isDisabled:["disabled","isDisabled"],form:["formControl","form"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[s.Cb([it]),s.Ab,s.Bb]}),t._ngModelWarningSentOnce=!1,t})();const ot={provide:E,useExisting:Object(s.V)(()=>at)};let at=(()=>{class t extends E{constructor(t,e){super(),this.validators=t,this.asyncValidators=e,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new s.n,this._setValidators(t),this._setAsyncValidators(e)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(T(this.form,this,!1),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){const e=this.form.get(t.path);return M(e,t),e.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),e}getControl(t){return this.form.get(t.path)}removeControl(t){k(t.control||null,t,!1),W(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,e){this.form.get(t.path).setValue(e)}onSubmit(t){return this.submitted=!0,U(this.form,this.directives),this.ngSubmit.emit(t),!1}onReset(){this.resetForm()}resetForm(t){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{const e=t.control,n=this.form.get(t.path);e!==n&&(k(e||null,t),n instanceof J&&(M(n,t),t.control=n))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){const e=this.form.get(t.path);I(e,t),e.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){const e=this.form.get(t.path);if(e){const n=function(t,e){return T(t,e,!1)}(e,t);n&&e.updateValueAndValidity({emitEvent:!1})}}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){j(this.form,this,!1),this._oldForm&&T(this._oldForm,this,!1)}_checkFormPresent(){}}return t.\u0275fac=function(e){return new(e||t)(s.Pb(p,10),s.Pb(_,10))},t.\u0275dir=s.Kb({type:t,selectors:[["","formGroup",""]],hostBindings:function(t,e){1&t&&s.cc("submit",function(t){return e.onSubmit(t)})("reset",function(){return e.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[s.Cb([ot]),s.Ab,s.Bb]}),t})();const lt={provide:h,useExisting:Object(s.V)(()=>ut),multi:!0};function ht(t,e){return null==t?`${e}`:(e&&"object"==typeof e&&(e="Object"),`${t}: ${e}`.slice(0,50))}let ut=(()=>{class t extends l{constructor(t,e){super(),this._renderer=t,this._elementRef=e,this._optionMap=new Map,this._idCounter=0,this.onChange=t=>{},this.onTouched=()=>{},this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;const e=this._getOptionId(t);null==e&&this._renderer.setProperty(this._elementRef.nativeElement,"selectedIndex",-1);const n=ht(e,t);this._renderer.setProperty(this._elementRef.nativeElement,"value",n)}registerOnChange(t){this.onChange=e=>{this.value=this._getOptionValue(e),t(this.value)}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_registerOption(){return(this._idCounter++).toString()}_getOptionId(t){for(const e of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(e),t))return e;return null}_getOptionValue(t){const e=function(t){return t.split(":")[0]}(t);return this._optionMap.has(e)?this._optionMap.get(e):t}}return t.\u0275fac=function(e){return new(e||t)(s.Pb(s.F),s.Pb(s.l))},t.\u0275dir=s.Kb({type:t,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(t,e){1&t&&s.cc("change",function(t){return e.onChange(t.target.value)})("blur",function(){return e.onTouched()})},inputs:{compareWith:"compareWith"},features:[s.Cb([lt]),s.Ab]}),t})(),ct=(()=>{class t{constructor(t,e,n){this._element=t,this._renderer=e,this._select=n,this._select&&(this.id=this._select._registerOption())}set ngValue(t){null!=this._select&&(this._select._optionMap.set(this.id,t),this._setElementValue(ht(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._setElementValue(t),this._select&&this._select.writeValue(this._select.value)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}return t.\u0275fac=function(e){return new(e||t)(s.Pb(s.l),s.Pb(s.F),s.Pb(ut,9))},t.\u0275dir=s.Kb({type:t,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}}),t})();const dt={provide:h,useExisting:Object(s.V)(()=>_t),multi:!0};function pt(t,e){return null==t?`${e}`:("string"==typeof e&&(e=`'${e}'`),e&&"object"==typeof e&&(e="Object"),`${t}: ${e}`.slice(0,50))}let _t=(()=>{class t extends l{constructor(t,e){super(),this._renderer=t,this._elementRef=e,this._optionMap=new Map,this._idCounter=0,this.onChange=t=>{},this.onTouched=()=>{},this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){let e;if(this.value=t,Array.isArray(t)){const n=t.map(t=>this._getOptionId(t));e=(t,e)=>{t._setSelected(n.indexOf(e.toString())>-1)}}else e=(t,e)=>{t._setSelected(!1)};this._optionMap.forEach(e)}registerOnChange(t){this.onChange=e=>{const n=[];if(void 0!==e.selectedOptions){const t=e.selectedOptions;for(let e=0;e<t.length;e++){const s=t.item(e),i=this._getOptionValue(s.value);n.push(i)}}else{const t=e.options;for(let e=0;e<t.length;e++){const s=t.item(e);if(s.selected){const t=this._getOptionValue(s.value);n.push(t)}}}this.value=n,t(n)}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_registerOption(t){const e=(this._idCounter++).toString();return this._optionMap.set(e,t),e}_getOptionId(t){for(const e of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(e)._value,t))return e;return null}_getOptionValue(t){const e=function(t){return t.split(":")[0]}(t);return this._optionMap.has(e)?this._optionMap.get(e)._value:t}}return t.\u0275fac=function(e){return new(e||t)(s.Pb(s.F),s.Pb(s.l))},t.\u0275dir=s.Kb({type:t,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(t,e){1&t&&s.cc("change",function(t){return e.onChange(t.target)})("blur",function(){return e.onTouched()})},inputs:{compareWith:"compareWith"},features:[s.Cb([dt]),s.Ab]}),t})(),gt=(()=>{class t{constructor(t,e,n){this._element=t,this._renderer=e,this._select=n,this._select&&(this.id=this._select._registerOption(this))}set ngValue(t){null!=this._select&&(this._value=t,this._setElementValue(pt(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._select?(this._value=t,this._setElementValue(pt(this.id,t)),this._select.writeValue(this._select.value)):this._setElementValue(t)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}_setSelected(t){this._renderer.setProperty(this._element.nativeElement,"selected",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}return t.\u0275fac=function(e){return new(e||t)(s.Pb(s.l),s.Pb(s.F),s.Pb(_t,9))},t.\u0275dir=s.Kb({type:t,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}}),t})(),ft=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Nb({type:t}),t.\u0275inj=s.Mb({imports:[[nt]]}),t})(),mt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Nb({type:t}),t.\u0275inj=s.Mb({imports:[ft]}),t})(),yt=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:st,useValue:e.warnOnNgModelWithFormControl}]}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Nb({type:t}),t.\u0275inj=s.Mb({imports:[ft]}),t})()}}]);