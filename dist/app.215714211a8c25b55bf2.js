webpackJsonp([1,0],[function(e,t,a){e.exports=a(8)},function(e,t){e.exports=function a(e){return Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(t){!e.hasOwnProperty(t)||null===e[t]||"object"!=typeof e[t]&&"function"!=typeof e[t]||Object.isFrozen(e[t])||a(e[t])}),e}},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.left=t.opposite=t.STATES_ARRAY=t.STATES=void 0;var r=a(1),i=n(r),l={uf:"uf",ur:"ur",ub:"ub",ul:"ul",fu:"fu",fl:"fl",fd:"fd",fr:"fr",ru:"ru",rf:"rf",rd:"rd",rb:"rb",df:"df",dl:"dl",db:"db",dr:"dr",bu:"bu",br:"br",bd:"bd",bl:"bl",lu:"lu",lb:"lb",ld:"ld",lf:"lf"};(0,i["default"])(l);var o=[];Object.keys(l).forEach(function(e,t){return o.push(e)}),(0,i["default"])(o);var d=[];d.u="d",d.d="u",d.r="l",d.l="r",d.f="b",d.b="f";var s=[];s.uf="l",s.ur="f",s.ub="r",s.ul="b",s.fu="r",s.fl="u",s.fd="l",s.fr="d",s.ru="b",s.rf="u",s.rd="f",s.rb="d",s.df="r",s.dl="f",s.db="l",s.dr="b",s.bu="l",s.br="u",s.bd="r",s.bl="d",s.lu="f",s.lb="u",s.ld="b",s.lf="d",t.STATES=l,t.STATES_ARRAY=o,t.opposite=d,t.left=s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.log=console.log.bind(console),t.error=console.error.bind(console),t.debug=console.debug.bind(console)},function(e,t,a){"use strict";function n(e){return e[0]}function r(e){return e[1]}function i(e){return c.opposite[l(e)]}function l(e){return c.left[e]}function o(e){return c.opposite[e[0]]}function d(e){return c.opposite[e[1]]}function s(e){return Object.assign({},e)}function u(){var e=[];e.push("uf"),e.push("ur"),e.push("ub"),e.push("ul"),e.push("fu"),e.push("fl"),e.push("fd"),e.push("fr"),e.push("ru"),e.push("rf"),e.push("rd"),e.push("rb"),e.push("df"),e.push("dl"),e.push("db"),e.push("dr"),e.push("bu"),e.push("br"),e.push("bd"),e.push("bl"),e.push("lu"),e.push("lb"),e.push("ld"),e.push("lf"),this.first="uf",this.last="lf",this.stateCount=e.length,this.get=function(t){var a=e.indexOf(t);if(a>=0)return a===e.length-1?{state:e[0],index:0}:{state:e[a+1],index:a+1}}}Object.defineProperty(t,"__esModule",{value:!0}),t.nextState=void 0,t.getUp=n,t.getFront=r,t.getRight=i,t.getLeft=l,t.getDown=o,t.getBack=d,t.cloneObject=s;var c=a(2),g=(a(3),new u);t.nextState=g},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(1),i=n(r),l=[],o=1;l.u="rgba(255, 255, 255, "+o+")",l.f="rgba(0, 158, 96, "+o+")",l.r="rgba(196, 30, 58, "+o+")",l.l="rgba(255, 88, 0, "+o+")",l.b="rgba(0, 81, 186, "+o+")",l.d="rgba(255, 213, 0, "+o+")",o=.3,l["u-dark"]="rgba(255, 255, 255, "+o+")",l["f-dark"]="rgba(0, 158, 96, "+o+")",l["r-dark"]="rgba(196, 30, 58, "+o+")",l["l-dark"]="rgba(255, 88, 0, "+o+")",l["b-dark"]="rgba(0, 81, 186, "+o+")",l["d-dark"]="rgba(255, 213, 0, "+o+")";var d="/src/assets/images/";l["u-img"]="url('"+d+"lion.svg')",l["f-img"]="url('"+d+"lion.svg')",l["r-img"]="url('"+d+"lion.svg')",l["l-img"]="url('"+d+"fox.svg')",l["b-img"]="url('"+d+"fox.svg')",l["d-img"]="url('"+d+"fox.svg')",l["u-img"]="",l["f-img"]="",l["r-img"]="",l["l-img"]="",l["b-img"]="",l["d-img"]="",(0,i["default"])(l),t["default"]=l},function(e,t){"use strict";function a(e,t){return(t||document).querySelector(e)}function n(e,t){return[].slice.call((t||document).querySelectorAll(e),0)}function r(e){return document.getElementById(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.qs=a,t.qsa=n,t.byId=r},function(e,t){},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){b[t.cube.id]=t.currentStateCode,l();var a=f[t.cube.id];a&&(a.innerHTML='<label>State: </label><span class="state"> '+t.currentStateCode+"</span>")}function i(e,t){}function l(){var e=Object.keys(b),t=!1,a=void 0;if(e.length>=4&&(t=!0,e.forEach(function(e,n,r){0===n?a=b[e]:b[e]!==a&&(t=!1)})),t){p.classList.add("with-background-image");var n=a[1];p.style.backgroundColor=g["default"][n+"-dark"]}else p.classList.remove("with-background-image"),p.style.backgroundColor=""}a(7);var o=a(3),d=a(6),s=a(9),u=n(s),c=a(5),g=n(c),b={},f={"cubeone-component-1":(0,d.qs)(".js-state-info-1"),"cubeone-component-2":(0,d.qs)(".js-state-info-2"),"cubeone-component-3":(0,d.qs)(".js-state-info-3"),"cubeone-component-4":(0,d.qs)(".js-state-info-4")},p=(0,d.qs)(".body-wrapper"),h=(0,d.qs)(".cubeone-scene"),v={cubes:[]},y=new u["default"]({cubeComponent:(0,d.byId)("cubeone-component-1")}),k=new u["default"]({cubeComponent:(0,d.byId)("cubeone-component-2")}),E=new u["default"]({cubeComponent:(0,d.byId)("cubeone-component-3")}),w=new u["default"]({cubeComponent:(0,d.byId)("cubeone-component-4")});y.addCallbackForEvent("init",i),y.addCallbackForEvent("statechange",r),y.init(),y.setToRandomState(),v.cubes.push(y),y.addCallbackForEvent("beforerotate",function(e,t){"x"===t.action?E.x({skipTriggerEvent:!0}):"-x"===t.action?E.X({skipTriggerEvent:!0}):"y"===t.action?k.y({skipTriggerEvent:!0}):"-y"===t.action&&k.Y({skipTriggerEvent:!0})}),k.addCallbackForEvent("init",i),k.addCallbackForEvent("statechange",r),k.init(),k.setToRandomState(),v.cubes.push(k),k.addCallbackForEvent("beforerotate",function(e,t){"x"===t.action?w.x({skipTriggerEvent:!0}):"-x"===t.action?w.X({skipTriggerEvent:!0}):"y"===t.action?y.y({skipTriggerEvent:!0}):"-y"===t.action&&y.Y({skipTriggerEvent:!0})}),E.addCallbackForEvent("init",i),E.addCallbackForEvent("statechange",r),E.init(),E.setToRandomState(),v.cubes.push(E),E.addCallbackForEvent("beforerotate",function(e,t){"x"===t.action?y.x({skipTriggerEvent:!0}):"-x"===t.action?y.X({skipTriggerEvent:!0}):"y"===t.action?w.y({skipTriggerEvent:!0}):"-y"===t.action&&w.Y({skipTriggerEvent:!0})}),w.addCallbackForEvent("init",i),w.addCallbackForEvent("statechange",r),w.init(),w.setToRandomState(),v.cubes.push(w),w.addCallbackForEvent("beforerotate",function(e,t){"x"===t.action?k.x({skipTriggerEvent:!0}):"-x"===t.action?k.X({skipTriggerEvent:!0}):"y"===t.action?E.y({skipTriggerEvent:!0}):"-y"===t.action&&E.Y({skipTriggerEvent:!0})}),v.solve=function(){v.cubes.forEach(function(e){return e.gotoState("uf")})},window.cubeOne=v;var Z=(0,d.byId)("btn-cube-one");Z.addEventListener("click",function(e){h.classList.contains("left-side")?(h.classList.remove("left-side"),h.classList.add("down-side")):h.classList.contains("down-side")?(h.classList.remove("down-side"),h.classList.add("left-down-side")):h.classList.contains("left-down-side")?h.classList.remove("left-down-side"):h.classList.add("left-side")}),(0,o.log)("cubeOne is available in console")},function(e,t,a){(function(e){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){window.requestAnimationFrame(e)}function l(e){i(function(){i(e)})}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(3),s=a(6),u=a(5),c=n(u),g=a(4),b=a(11),f=n(b),p=a(10),h=n(p),v=a(2),y={LEFT:37,UP:38,RIGHT:39,DOWN:40,a:65,d:68,e:69,q:81,s:83,w:87},k={init:"init",statechange:"statechange",beforerotate:"beforerotate",afterrotate:"afterrotate"},E=function(){function t(e){return r(this,t),e&&e.cubeComponent?(this.cubeComponentEl=e.cubeComponent,this._appState={code:g.nextState.first,rotateEnabled:!0},void this._initCallbacks()):void(0,d.error)("CubeOne element was not provided: "+e.cubeComponent)}return o(t,[{key:"_initCallbacks",value:function(){var e=this;this.callbacks={},Object.keys(k).forEach(function(t,a){return e.callbacks[t]=[]})}},{key:"addCallbackForEvent",value:function(e,t){var a=this.callbacks[e=e.toLowerCase()];a&&"function"==typeof t&&a.push(t)}},{key:"_triggerEvent",value:function(e,t){var a=this.callbacks[e]||[],n=void 0,r=void 0;for(n=0,r=a.length;n<r;n++)a[n].call(this,e,t)}},{key:"getState",value:function(){return(0,g.cloneObject)(this._appState)}},{key:"_setState",value:function(e){var t=this._appState.code,a=e.code;this._appState=e,t!==a&&this._triggerEvent("statechange",{cube:this.cubeComponentEl,previousStateCode:t,currentStateCode:a})}},{key:"_transitionEnd",value:function(e){var t=this,a=this.cubeEl;a.style.transition="0s",l(function(e){t._updateUiFaces(),a.style.transform="",i(function(e){a.style.transition="";var n=t.getState();n.rotateEnabled=!0,t._setState(n),t._triggerEvent("afterrotate",{cube:t.cubeComponentEl,stateCode:n.code})})})}},{key:"init",value:function(){var t=this;this._handleKeyEvent.bind(this);var a=this.cubeComponentEl,n=(0,s.qs)('[data-type="up"].cubeone-js-touch',a),r=(0,s.qs)('[data-type="front"].cubeone-js-touch',a),i=(0,s.qs)('[data-type="right"].cubeone-js-touch',a),l=(0,s.qs)('[data-type="left"].cubeone-js-touch',a),o=((0,s.qs)('[data-type="back"].cubeone-js-touch',a),(0,s.qs)('[data-type="down"].cubeone-js-touch',a)),u=(0,s.qs)(".cubeone-js-cube",a);this.cubeEl=u,this.frontEl=(0,s.qs)(".cubeone-front > div",u),this.upEl=(0,s.qs)(".cubeone-up > div",u),this.rightEl=(0,s.qs)(".cubeone-right > div",u),this.leftEl=(0,s.qs)(".cubeone-left > div",u),this.backEl=(0,s.qs)(".cubeone-back > div",u),this.downEl=(0,s.qs)(".cubeone-down > div",u);var c=new e.Swipe;c.set({direction:e.DIRECTION_ALL});var g=new e.Swipe;g.set({direction:e.DIRECTION_ALL});var b=new e.Swipe;b.set({direction:e.DIRECTION_ALL});var f=new e.Swipe;f.set({direction:e.DIRECTION_ALL});var p=new e.Swipe;p.set({direction:e.DIRECTION_ALL});var h=new e.Swipe;h.set({direction:e.DIRECTION_ALL});var v=new e.Manager(r,{});v.add(c);var y=new e.Manager(n,{});y.add(g);var k=new e.Manager(i,{});k.add(b);var E=new e.Manager(l,{});E.add(f);var w=new e.Manager(o,{});w.add(p);var Z=new e.Manager(o,{});Z.add(h),v.add(new e.Tap({event:"doubletap",taps:2})),v.add(new e.Tap({event:"singletap"})),v.get("doubletap").recognizeWith("singletap"),v.get("singletap").requireFailure("doubletap"),y.add(new e.Tap({event:"doubletap",taps:2})),y.add(new e.Tap({event:"singletap"})),y.get("doubletap").recognizeWith("singletap"),y.get("singletap").requireFailure("doubletap"),k.add(new e.Tap({event:"doubletap",taps:2})),k.add(new e.Tap({event:"singletap"})),k.get("doubletap").recognizeWith("singletap"),k.get("singletap").requireFailure("doubletap"),E.add(new e.Tap({event:"doubletap",taps:2})),E.add(new e.Tap({event:"singletap"})),E.get("doubletap").recognizeWith("singletap"),E.get("singletap").requireFailure("doubletap"),w.add(new e.Tap({event:"doubletap",taps:2})),w.add(new e.Tap({event:"singletap"})),w.get("doubletap").recognizeWith("singletap"),w.get("singletap").requireFailure("doubletap"),Z.add(new e.Tap({event:"doubletap",taps:2})),Z.add(new e.Tap({event:"singletap"})),Z.get("doubletap").recognizeWith("singletap"),Z.get("singletap").requireFailure("doubletap"),v.on("singletap doubletap swipeup swipedown swiperight swipeleft",function(e){var a=e.type,n=e.target;switch("cubeone"!==n.dataset.type&&(n=n.parentElement,"cubeone"!==n.dataset.type&&(n=n.parentElement)),a){case"singletap":break;case"doubletap":t.tapped(n,e.target.dataset.type);break;case"swipeup":t.x();break;case"swiperight":t.y();break;case"swipedown":t.X();break;case"swipeleft":t.Y()}}),y.on("singletap doubletap swipeup swipedown swiperight swipeleft",function(e){var a=e.type,n=e.target;switch("cubeone"!==n.dataset.type&&(n=n.parentElement,"cubeone"!==n.dataset.type&&(n=n.parentElement)),a){case"singletap":break;case"doubletap":t.tapped(n,e.target.dataset.type);break;case"swipeup":t.x();break;case"swiperight":t.z();break;case"swipedown":t.X();break;case"swipeleft":t.Z()}}),k.on("singletap doubletap swipeup swipedown swiperight swipeleft",function(e){var a=e.type,n=e.target;switch("cubeone"!==n.dataset.type&&(n=n.parentElement,"cubeone"!==n.dataset.type&&(n=n.parentElement)),a){case"singletap":break;case"doubletap":t.tapped(n,e.target.dataset.type);break;case"swipeup":t.Z();break;case"swiperight":t.y();break;case"swipedown":t.z();break;case"swipeleft":t.Y()}}),E.on("singletap doubletap swipeup swipedown swiperight swipeleft",function(e){var a=e.type,n=e.target;switch((0,d.debug)(a+" "+n.dataset.type),"cubeone"!==n.dataset.type&&(n=n.parentElement,"cubeone"!==n.dataset.type&&(n=n.parentElement)),a){case"singletap":break;case"doubletap":t.tapped(n,e.target.dataset.type);break;case"swipeup":t.z();break;case"swiperight":t.y();break;case"swipedown":t.Z();break;case"swipeleft":t.Y()}}),w.on("singletap doubletap swipeup swipedown swiperight swipeleft",function(e){var a=e.type,n=e.target;switch("cubeone"!==n.dataset.type&&(n=n.parentElement,"cubeone"!==n.dataset.type&&(n=n.parentElement)),a){case"singletap":break;case"doubletap":t.tapped(n,e.target.dataset.type);break;case"swipeup":t.x();break;case"swiperight":t.Z();break;case"swipedown":t.X();break;case"swipeleft":t.z()}}),Z.on("singletap doubletap swipeup swipedown swiperight swipeleft",function(e){var t=e.type,a=e.target;(0,d.log)(t+" "+a.dataset.type)}),this.cubeComponentEl.addEventListener("keydown",this._handleKeyEvent.bind(this),!1),this._updateUiFaces(),u.addEventListener("transitionend",this._transitionEnd.bind(this)),this._triggerEvent("init",{cube:this.cubeComponentEl})}},{key:"_updateUiFaces",value:function(){var e=void 0,t=void 0,a=void 0,n=void 0,r=void 0,i=void 0,l=this.getState();e=(0,g.getUp)(l.code),t=(0,g.getFront)(l.code),a=(0,g.getRight)(l.code),n=(0,g.getLeft)(l.code),r=(0,g.getBack)(l.code),i=(0,g.getDown)(l.code),this.upEl.style.backgroundColor=c["default"][e],this.frontEl.style.backgroundColor=c["default"][t],this.rightEl.style.backgroundColor=c["default"][a],this.leftEl.style.backgroundColor=c["default"][n],this.backEl.style.backgroundColor=c["default"][r],this.downEl.style.backgroundColor=c["default"][i];var o="";this.upEl.style.backgroundImage=o=c["default"][e+"-img"]?o:"",this.frontEl.style.backgroundImage=o=c["default"][t+"-img"]?o:"",this.rightEl.style.backgroundImage=o=c["default"][a+"-img"]?o:"",this.leftEl.style.backgroundImage=o=c["default"][n+"-img"]?o:"",this.backEl.style.backgroundImage=o=c["default"][r+"-img"]?o:"",this.downEl.style.backgroundImage=o=c["default"][i+"-img"]?o:"";var d=h["default"][l.code].u;this.upEl.style.transform=d?"rotate"+d.dir+"("+d.angle+"deg)":"",d=h["default"][l.code].f,this.frontEl.style.transform=d?"rotate"+d.dir+"("+d.angle+"deg)":"",d=h["default"][l.code].r,this.rightEl.style.transform=d?"rotate"+d.dir+"("+d.angle+"deg)":"",d=h["default"][l.code].l,this.leftEl.style.transform=d?"rotate"+d.dir+"("+d.angle+"deg)":"",d=h["default"][l.code].b,this.backEl.style.transform=d?"rotate"+d.dir+"("+d.angle+"deg)":"",d=h["default"][l.code].d,this.downEl.style.transform=d?"rotate"+d.dir+"("+d.angle+"deg)":""}},{key:"tapped",value:function(e,t){(0,s.qs)(".cubeone-"+t+".cubeone-face",e).classList.toggle("tapped")}},{key:"_actionInvoke",value:function(e,t){var a=this.getState(),n=a.code;a.rotateEnabled&&(a.code=f["default"][n][e],a.rotateEnabled=!1,this._setState(a),(t=t.bind(this))())}},{key:"gotoState",value:function(e){if(v.STATES[e]){var t=this.getState();t.code=e,this._setState(t),this._updateUiFaces()}}},{key:"setToRandomState",value:function(){var e=this.getState();e.code=v.STATES_ARRAY[v.STATES_ARRAY.length*Math.random()|0],this._setState(e),this._updateUiFaces()}},{key:"x",value:function(e){e&&e.skipTriggerEvent||this._triggerEvent("beforerotate",{cube:this.cubeComponentEl,action:"x"}),this._actionInvoke("x",this._uix)}},{key:"X",value:function(e){e&&e.skipTriggerEvent||this._triggerEvent("beforerotate",{cube:this.cubeComponentEl,action:"-x"}),this._actionInvoke("-x",this._uiX)}},{key:"y",value:function(e){e&&e.skipTriggerEvent||this._triggerEvent("beforerotate",{cube:this.cubeComponentEl,action:"y"}),this._actionInvoke("y",this._uiy)}},{key:"Y",value:function(e){e&&e.skipTriggerEvent||this._triggerEvent("beforerotate",{cube:this.cubeComponentEl,action:"-y"}),this._actionInvoke("-y",this._uiY)}},{key:"z",value:function(e){e&&e.skipTriggerEvent||this._triggerEvent("beforerotate",{cube:this.cubeComponentEl,action:"z"}),this._actionInvoke("z",this._uiz)}},{key:"Z",value:function(e){e&&e.skipTriggerEvent||this._triggerEvent("beforerotate",{cube:this.cubeComponentEl,action:"-z"}),this._actionInvoke("-z",this._uiZ)}},{key:"_uix",value:function(){this.cubeEl.style.transform="rotateX(90deg)"}},{key:"_uiy",value:function(){this.cubeEl.style.transform="rotateY(90deg)"}},{key:"_uiX",value:function(){this.cubeEl.style.transform="rotateX(-90deg)"}},{key:"_uiY",value:function(){this.cubeEl.style.transform="rotateY(-90deg)"}},{key:"_uiz",value:function(){this.cubeEl.style.transform="rotateZ(90deg)"}},{key:"_uiZ",value:function(){this.cubeEl.style.transform="rotateZ(-90deg)"}},{key:"reset",value:function(){return this.gotoState("uf"),"reset"}},{key:"_handleKeyEvent",value:function(e){switch(e.keyCode){case y.LEFT:case y.a:this.Y();break;case y.UP:e.preventDefault();case y.w:this.x();break;case y.RIGHT:case y.d:this.y();break;case y.DOWN:e.preventDefault();case y.s:this.X();break;case y.q:this.Z();break;case y.e:this.z()}}}]),t}();t["default"]=E}).call(t,a(12))},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(2),i=a(1),l=n(i),o=[];Object.keys(r.STATES).forEach(function(e,t){return o[e]=[]}),o.lf.u={angle:90,dir:"Z"},o.rf.u={angle:-90,dir:"Z"},o.fl.u={angle:-90,dir:"Z"},o.fu.u={angle:180,dir:"Z"},o.fr.u={angle:90,dir:"Z"},o.bl.u={angle:90,dir:"Z"},o.dl.u={angle:-90,dir:"Z"},o.rb.u={angle:90,dir:"Z"},o.lu.u={angle:-90,dir:"Z"},o.lf.f={angle:90,dir:"Z"},o.rf.f={angle:-90,dir:"Z"},o.db.f={angle:180,dir:"Z"},o.fl.f={angle:-90,dir:"Z"},o.dl.f={angle:180,dir:"Z"},o.bl.f={angle:90,dir:"Z"},o.rd.f={angle:-90,dir:"Z"},o.ld.f={angle:90,dir:"Z"},o.bd.f={angle:180,dir:"Z"},o.br.f={angle:-90,dir:"Z"},o.fu.f={angle:180,dir:"Z"},o.lu.f={angle:90,dir:"Z"},o.ru.f={angle:-90,dir:"Z"},o.fr.f={angle:90,dir:"Z"},o.df.f={angle:180,dir:"Z"},o.dr.f={angle:180,dir:"Z"},o.rb.f={angle:90,dir:"Z"},o.lb.f={angle:-90,dir:"Z"},o.fd.r={angle:90,dir:"Z"},o.db.r={angle:180,dir:"Z"},o.bu.r={angle:-90,dir:"Z"},o.ld.r={angle:90,dir:"Z"},o.rd.r={angle:90,dir:"Z"},o.dl.r={angle:180,dir:"Z"},o.lu.r={angle:-90,dir:"Z"},o.lf.r={angle:90,dir:"Z"},o.rf.r={angle:-90,dir:"Z"},o.bd.r={angle:90,dir:"Z"},o.br.r={angle:180,dir:"Z"},o.lb.r={angle:90,dir:"Z"},o.fu.r={angle:-90,dir:"Z"},o.df.r={angle:180,dir:"Z"},o.fr.r={angle:180,dir:"Z"},o.ru.r={angle:-90,dir:"Z"},o.dr.r={angle:180,dir:"Z"},o.rb.r={angle:-90,dir:"Z"},o.fd.l={angle:-90,dir:"Z"},o.db.l={angle:180,dir:"Z"},o.bu.l={angle:90,dir:"Z"},o.rf.l={angle:-90,dir:"Z"},o.fl.l={angle:180,dir:"Z"},o.rd.l={angle:-90,dir:"Z"},o.bl.l={angle:180,dir:"Z"},o.bd.l={angle:-90,dir:"Z"},o.fu.l={angle:90,dir:"Z"},o.lf.l={angle:90,dir:"Z"},o.df.l={angle:180,dir:"Z"},o.rb.l={angle:-90,dir:"Z"},o.ru.l={angle:90,dir:"Z"},o.ld.l={angle:-90,dir:"Z"},o.dr.l={angle:180,dir:"Z"},o.lu.l={angle:90,dir:"Z"},o.dl.l={angle:180,dir:"Z"},o.lb.l={angle:90,dir:"Z"},o.ul.u={angle:-90,dir:"Z"},o.ur.u={angle:90,dir:"Z"},o.ub.u={angle:180,dir:"Z"},o.bu.u={angle:180,dir:"Z"},o.dr.u={angle:90,dir:"Z"},o.ru.u={angle:180,dir:"Z"},o.br.u={angle:-90,dir:"Z"},o.lb.u={angle:-90,dir:"Z"},o.lu.u={angle:180,dir:"Z"},o.df.u={angle:180,dir:"Z"},o.fd.b={angle:180,dir:"Z"},o.dr.b={angle:180,dir:"Z"},o.db.b={angle:180,dir:"Z"},o.bu.b={angle:180,dir:"Z"},o.bl.b={angle:-90,dir:"Z"},o.fl.b={angle:90,dir:"Z"},o.lb.b={angle:90,dir:"Z"},o.rd.b={angle:-90,dir:"Z"},o.ld.b={angle:90,dir:"Z"},o.ru.b={angle:-90,dir:"Z"},o.br.b={angle:90,dir:"Z"},o.fr.b={angle:-90,dir:"Z"},o.lf.b={angle:-90,dir:"Z"},o.df.b={angle:180,dir:"Z"},o.rf.b={angle:90,dir:"Z"},o.rb.b={angle:-90,dir:"Z"},o.dl.b={angle:180,dir:"Z"},o.lu.b={angle:90,dir:"Z"},o.lf.d={angle:90,dir:"Z"},o.fd.d={angle:180,dir:"Z"},o.dl.d={angle:90,dir:"Z"},o.ul.d={angle:90,dir:"Z"},o.bl.d={angle:90,dir:"Z"},o.ur.d={angle:-90,dir:"Z"},o.ub.d={angle:180,dir:"Z"},o.br.d={angle:-90,dir:"Z"},o.bd.d={angle:180,dir:"Z"},o.rf.d={angle:-90,dir:"Z"},o.df.d={angle:180,dir:"Z"},o.dr.d={angle:-90,dir:"Z"},o.ld.d={angle:180,dir:"Z"},o.fl.d={angle:-90,dir:"Z"},o.fr.d={angle:90,dir:"Z"},o.rd.d={angle:180,dir:"Z"},o.rb.d={angle:90,dir:"Z"},o.lb.d={angle:-90,dir:"Z"},(0,l["default"])(o),t["default"]=o},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(2),i=a(4),l=a(1),o=n(l),d=[];Object.keys(r.STATES).forEach(function(e,t){return d[e]=[]});var s=void 0,u=void 0,c=void 0,g=void 0,b=i.nextState.first;for(s=0;s<i.nextState.stateCount;s++)u=b[0],c=b[1],d[b].x=""+c+r.opposite[u],d[b]["-x"]=""+r.opposite[c]+u,d[b].y=""+u+(0,i.getLeft)(b),d[b]["-y"]=""+u+(0,i.getRight)(b),d[b].z=""+(0,i.getLeft)(b)+c,d[b]["-z"]=""+(0,i.getRight)(b)+c,g=i.nextState.get(b),b=g.state;(0,o["default"])(d),t["default"]=d},function(e,t){e.exports=Hammer}]);