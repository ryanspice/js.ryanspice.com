(function(root,factory){'object'==typeof exports&&'object'==typeof module?module.exports=factory():'function'==typeof define&&define.amd?define('ATRender',[],factory):'object'==typeof exports?exports.ATRender=factory():root.ATRender=factory()})(window,function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(exports,'__esModule',{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&'object'==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,'default',{enumerable:!0,value:value}),2&mode&&'string'!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module['default']}:function(){return module};return __webpack_require__.d(getter,'a',getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p='',__webpack_require__(__webpack_require__.s=0)}({"./node_modules/loglevel/lib/loglevel.js":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_RESULT__;(function(root,definition){'use strict';__WEBPACK_AMD_DEFINE_FACTORY__=definition,__WEBPACK_AMD_DEFINE_RESULT__='function'==typeof __WEBPACK_AMD_DEFINE_FACTORY__?__WEBPACK_AMD_DEFINE_FACTORY__.call(exports,__webpack_require__,exports,module):__WEBPACK_AMD_DEFINE_FACTORY__,!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))})(this,function(){'use strict';function bindMethod(obj,methodName){var method=obj[methodName];if('function'==typeof method.bind)return method.bind(obj);try{return Function.prototype.bind.call(method,obj)}catch(e){return function(){return Function.prototype.apply.apply(method,[obj,arguments])}}}function realMethod(methodName){return'debug'===methodName&&(methodName='log'),typeof console!==undefinedType&&(void 0===console[methodName]?void 0===console.log?noop:bindMethod(console,'log'):bindMethod(console,methodName))}function replaceLoggingMethods(level,loggerName){for(var methodName,i=0;i<logMethods.length;i++)methodName=logMethods[i],this[methodName]=i<level?noop:this.methodFactory(methodName,level,loggerName);this.log=this.debug}function enableLoggingWhenConsoleArrives(methodName,level,loggerName){return function(){typeof console!==undefinedType&&(replaceLoggingMethods.call(this,level,loggerName),this[methodName].apply(this,arguments))}}function defaultMethodFactory(methodName){return realMethod(methodName)||enableLoggingWhenConsoleArrives.apply(this,arguments)}function Logger(name,defaultLevel,factory){function persistLevelIfPossible(levelNum){var levelName=(logMethods[levelNum]||'silent').toUpperCase();if(typeof window!==undefinedType){try{return void(window.localStorage[storageKey]=levelName)}catch(ignore){}try{window.document.cookie=encodeURIComponent(storageKey)+'='+levelName+';'}catch(ignore){}}}function getPersistedLevel(){var storedLevel;if(typeof window!==undefinedType){try{storedLevel=window.localStorage[storageKey]}catch(ignore){}if(typeof storedLevel===undefinedType)try{var cookie=window.document.cookie,location=cookie.indexOf(encodeURIComponent(storageKey)+'=');-1!==location&&(storedLevel=/^([^;]+)/.exec(cookie.slice(location))[1])}catch(ignore){}return void 0===self.levels[storedLevel]&&(storedLevel=void 0),storedLevel}}var currentLevel,self=this,storageKey='loglevel';name&&(storageKey+=':'+name),self.name=name,self.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},self.methodFactory=factory||defaultMethodFactory,self.getLevel=function(){return currentLevel},self.setLevel=function(level,persist){if('string'==typeof level&&void 0!==self.levels[level.toUpperCase()]&&(level=self.levels[level.toUpperCase()]),!('number'==typeof level&&0<=level&&level<=self.levels.SILENT))throw'log.setLevel() called with invalid level: '+level;else if(currentLevel=level,!1!==persist&&persistLevelIfPossible(level),replaceLoggingMethods.call(self,level,name),typeof console===undefinedType&&level<self.levels.SILENT)return'No console available for logging'},self.setDefaultLevel=function(level){getPersistedLevel()||self.setLevel(level,!1)},self.enableAll=function(persist){self.setLevel(self.levels.TRACE,persist)},self.disableAll=function(persist){self.setLevel(self.levels.SILENT,persist)};var initialLevel=getPersistedLevel();null==initialLevel&&(initialLevel=null==defaultLevel?'WARN':defaultLevel),self.setLevel(initialLevel,!1)}var noop=function(){},undefinedType='undefined',logMethods=['trace','debug','info','warn','error'],defaultLogger=new Logger,_loggersByName={};defaultLogger.getLogger=function(name){if('string'!=typeof name||''===name)throw new TypeError('You must supply a name when creating a logger.');var logger=_loggersByName[name];return logger||(logger=_loggersByName[name]=new Logger(name,defaultLogger.getLevel(),defaultLogger.methodFactory)),logger};var _log=typeof window==undefinedType?void 0:window.log;return defaultLogger.noConflict=function(){return typeof window!=undefinedType&&window.log===defaultLogger&&(window.log=_log),defaultLogger},defaultLogger.getLoggers=function(){return _loggersByName},defaultLogger})},"./src/core/def/loop.js":function(module,__webpack_exports__){'use strict';let _loop_iterator,_data=[],_length=0,_iterator=0,_iteratorId=0,_action=()=>{};const _dataMap=[];class _template{constructor(id,value){return this.id=void 0,this.value=void 0,this.id=id,this.value=value,this}}const _dataTemplate=async function(i,data){return await(_dataMap[i]=await new _template(i,data))},_layer=async function(){return _iteratorId++,_data[_iterator]=await _dataTemplate(_iterator,_data[_iterator]),_data[_iterator]},_loop=async function(data,action){if(null===_data)for(_loop_iterator=_data.length=0,_loop_iterator;0<=_loop_iterator;_loop_iterator--)_data[_loop_iterator]=_dataTemplate(-1,{});for(_data=data[0],_length=_data.length||0,_action=action,_iterator;_iterator<_length;_iterator++)await _action((await _layer()));_iterator=0};__webpack_exports__.a=_loop},"./src/core/def/pipe.js":function(module,__webpack_exports__,__webpack_require__){'use strict';__webpack_require__.d(__webpack_exports__,'c',function(){return pipe}),__webpack_require__.d(__webpack_exports__,'d',function(){return view}),__webpack_require__.d(__webpack_exports__,'b',function(){return mvc});var _loop__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__('./src/core/def/loop.js'),loglevel__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__('./node_modules/loglevel/lib/loglevel.js'),loglevel__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(loglevel__WEBPACK_IMPORTED_MODULE_1__),_template_empty_data__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__('./src/core/template/empty.data.js');__webpack_require__.d(__webpack_exports__,'a',function(){return _template_empty_data__WEBPACK_IMPORTED_MODULE_2__.a});let trace=0;const _props=['id','ref','value','class','className','click','mounted','onclick','onresize','oninput','activity',`innerHTML`];class pipe{constructor(template=mvc.entry,pre=pipe.pre,post=pipe.post){this.context=document,this.template=_template_empty_data__WEBPACK_IMPORTED_MODULE_2__.a,this.props=_props,this.elms=[],this.defer=[],this.elements=[],this.trace=0,this.scrollcount=0,this.createTemplateItem=async item=>{const element=await this.createElementOfType(item.value);element&&(this.elms[item.id]=this.elements[item.id]=element,element.template=item.id)},this.check=async temp=>{const id=temp.id;let elm=this.elms[id];if(elm&&elm.renderTo){switch(typeof elm.renderTo){case'string':let a=this.elms[id];elm=this.elms[id]=await this.createElementOfType(a);}if(this.scrollcount++,'scroll'==elm.renderTo.id){if(0==elm.renderTo.children.length)return void elm.renderTo.appendChild(elm,null);if(elm.renderTo.appendBefore=(element,t)=>{element.parentNode.insertBefore(t,element)},elm.renderTo.appendAfter=(element,t)=>{element.parentNode.insertBefore(t,element.nextSibling)},'plus'==elm.id)return void elm.renderTo.appendBefore(elm.renderTo.children[0],elm);elm.renderTo.insertBefore(elm,elm.renderTo.children[0].nextSibling)}else this.elms[id].renderTo.appendChild(this.elms[id],null);this.elms[id].mounted&&this.elms[id].mounted(temp,this),this.elms[id]=null}},this.mounted=()=>{};const ors=this.context.onreadystatechange;return(this.context.state=0,'complete'===this.context.readyState)?(ors&&ors(),pre&&pre(),post&&post(),this.template[0]=template,void this.init()):void(this.context.onreadystatechange=async()=>{switch(ors&&ors(),this.context.state){case 0:pre&&pre(),this.context.state++;break;case 1:post&&post(),this.context.state++,this.template[0]=template,this.init();}})}a(){trace--}async init(){return this.context=document,await this.iterateTemplate()}async update(){await trace--,this.defer.length=0,this.elms.length=0,this.template[0]=await window['async-2018-mvc'].entry.filter(elm=>elm.id!==+elm.id),await this.init()}async iterateTemplate(){return trace?(loglevel__WEBPACK_IMPORTED_MODULE_1___default.a.warn(`renderer::`+trace),loglevel__WEBPACK_IMPORTED_MODULE_1___default.a.warn(`renderer::`+trace),!1):(trace++,await Object(_loop__WEBPACK_IMPORTED_MODULE_0__.a)(this.template,this.createTemplateItem),await Object(_loop__WEBPACK_IMPORTED_MODULE_0__.a)(this.template,this.check),this.elms=await this.defer,await Object(_loop__WEBPACK_IMPORTED_MODULE_0__.a)([this.defer],this.createTemplateItem),await Object(_loop__WEBPACK_IMPORTED_MODULE_0__.a)(this.template,this.check),this.elms=this.defer,!(0<(this.defer=await this.elms.filter(elm=>elm?elm.ref:null)).length)||(trace--,this.template=await[this.defer],this.defer=[],this.elms=await[],await this.iterateTemplate()))}async createElementOfType(template){const type=template.type;type||loglevel__WEBPACK_IMPORTED_MODULE_1___default.a.warn('Async.2018 tried to render an `undefined` element');const target=await this.createRenderTarget(template);target||loglevel__WEBPACK_IMPORTED_MODULE_1___default.a.warn('Async.2018 cannot find a target to render to');const elm=await this.context.createElement(template.type);switch(elm||loglevel__WEBPACK_IMPORTED_MODULE_1___default.a.warn('Async.2018 could not create element',template),elm.ref=template.ref,elm.afterConstruct=template.afterConstruct,type){case'style':elm.innerHTML=template.value,elm.renderTo=await this.context.head;break;default:elm.oninput=template.oninput,template.onclick&&(elm.onclick=evt=>{evt.stopPropagation(),'function'==typeof template.onclick?template.onclick():(console.warn('eval disabled'),eval(template.onclick))}),elm.setAttribute('style',template.style),elm.value=template.value,elm.renderTo=target;}return'2430'===target?(await this.defer.push(template),!1):(await this.populateProps(this.props,template,elm),this.afterConstruct(elm),elm)}async createRenderTarget(template){return void 0!=template.renderTo&&void 0==this.context.querySelectorAll(template.renderTo)[0]?'2430':this.context.querySelectorAll(template.renderTo)[0]||this.context.body}async populateProps(props,template,elm){for(let prop in props){const temp=props[prop];template[temp]&&(elm[temp]=template[temp])}}afterConstruct(elm){elm.afterConstruct?elm.afterConstruct():null}}pipe.pre=()=>{},pipe.post=()=>{};class mvcc{constructor(){return this.count=0,this.append=val=>this.entry=val,window['async-2018-mvc']?(loglevel__WEBPACK_IMPORTED_MODULE_1___default.a.warn('DUPLICATE MVC INSTANCES'),this):window['async-2018-mvc']=this}get entry(){return mvcc.entries}set entry(val){this.count++,mvcc.entries.push(val)}get last(){return mvcc.entries[this.count-1]}}mvcc.ref=void 0,mvcc.entries=[];const _c=new mvcc,_mvc=e=>_c[e],_mvcCmd=e=>_mvc(e),_mvcAppend=e=>_mvcCmd('append')(e),_mvcLast=()=>_mvcCmd('last'),mvc=(()=>_c)();class view{constructor(val){return this.mvc=mvc,this.assign(val)}assign(val){return _mvcAppend(Object.assign({ref:this,type:'template',style:'',id:999},val)),_mvcLast()}mounted(){}}},"./src/core/template/empty.data.js":function(module,__webpack_exports__){'use strict';__webpack_exports__.a=[{type:`section`,style:`text-align:center;`,innerHTML:`
			<p>No Template Loaded</p>
		`}]},"./src/index.js":function(module,__webpack_exports__,__webpack_require__){'use strict';__webpack_require__.r(__webpack_exports__);var _core_def_pipe__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__('./src/core/def/pipe.js');__webpack_require__.d(__webpack_exports__,'data',function(){return _core_def_pipe__WEBPACK_IMPORTED_MODULE_0__.a}),__webpack_require__.d(__webpack_exports__,'pipe',function(){return _core_def_pipe__WEBPACK_IMPORTED_MODULE_0__.c}),__webpack_require__.d(__webpack_exports__,'view',function(){return _core_def_pipe__WEBPACK_IMPORTED_MODULE_0__.d}),__webpack_require__.d(__webpack_exports__,'mvc',function(){return _core_def_pipe__WEBPACK_IMPORTED_MODULE_0__.b})},0:function(module,exports,__webpack_require__){module.exports=__webpack_require__('./src/index.js')}})});