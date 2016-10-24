webpackJsonp([1,0],[function(e,t,a){e.exports=a(8)},function(e,t){e.exports=function a(e){return Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(t){!e.hasOwnProperty(t)||null===e[t]||"object"!=typeof e[t]&&"function"!=typeof e[t]||Object.isFrozen(e[t])||a(e[t])}),e}},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.EVENT_NAMES=t.KEY=t.left=t.opposite=t.STATES_ARRAY=t.STATES=void 0;var i=a(1),r=n(i),o={uf:"uf",ur:"ur",ub:"ub",ul:"ul",fu:"fu",fl:"fl",fd:"fd",fr:"fr",ru:"ru",rf:"rf",rd:"rd",rb:"rb",df:"df",dl:"dl",db:"db",dr:"dr",bu:"bu",br:"br",bd:"bd",bl:"bl",lu:"lu",lb:"lb",ld:"ld",lf:"lf"};(0,r["default"])(o);var s=[];Object.keys(o).forEach(function(e,t){return s.push(e)}),(0,r["default"])(s);var l={LEFT:37,UP:38,RIGHT:39,DOWN:40,a:65,d:68,e:69,q:81,s:83,w:87};(0,r["default"])(l);var d={init:"init",statechange:"statechange",beforerotate:"beforerotate",afterrotate:"afterrotate"};(0,r["default"])(d);var u=[];u.u="d",u.d="u",u.r="l",u.l="r",u.f="b",u.b="f";var c=[];c.uf="l",c.ur="f",c.ub="r",c.ul="b",c.fu="r",c.fl="u",c.fd="l",c.fr="d",c.ru="b",c.rf="u",c.rd="f",c.rb="d",c.df="r",c.dl="f",c.db="l",c.dr="b",c.bu="l",c.br="u",c.bd="r",c.bl="d",c.lu="f",c.lb="u",c.ld="b",c.lf="d",t.STATES=o,t.STATES_ARRAY=s,t.opposite=u,t.left=c,t.KEY=l,t.EVENT_NAMES=d},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.log=console.log.bind(console),t.error=console.error.bind(console),t.debug=console.debug.bind(console)},function(e,t,a){"use strict";function n(e){return e[0]}function i(e){return e[1]}function r(e){return c.opposite[o(e)]}function o(e){return c.left[e]}function s(e){return c.opposite[e[0]]}function l(e){return c.opposite[e[1]]}function d(e){return Object.assign({},e)}function u(){var e=[];e.push("uf"),e.push("ur"),e.push("ub"),e.push("ul"),e.push("fu"),e.push("fl"),e.push("fd"),e.push("fr"),e.push("ru"),e.push("rf"),e.push("rd"),e.push("rb"),e.push("df"),e.push("dl"),e.push("db"),e.push("dr"),e.push("bu"),e.push("br"),e.push("bd"),e.push("bl"),e.push("lu"),e.push("lb"),e.push("ld"),e.push("lf"),this.first="uf",this.last="lf",this.stateCount=e.length,this.get=function(t){var a=e.indexOf(t);if(a>=0)return a===e.length-1?{state:e[0],index:0}:{state:e[a+1],index:a+1}}}Object.defineProperty(t,"__esModule",{value:!0}),t.nextState=void 0,t.getUp=n,t.getFront=i,t.getRight=r,t.getLeft=o,t.getDown=s,t.getBack=l,t.cloneObject=d;var c=a(2),b=(a(3),new u);t.nextState=b},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(1),r=n(i),o=[],s=1;o.u="rgba(255, 255, 255, "+s+")",o.f="rgba(0, 158, 96, "+s+")",o.r="rgba(196, 30, 58, "+s+")",o.l="rgba(255, 88, 0, "+s+")",o.b="rgba(0, 81, 186, "+s+")",o.d="rgba(255, 213, 0, "+s+")",s=.3,o["u-dark"]="rgba(255, 255, 255, "+s+")",o["f-dark"]="rgba(0, 158, 96, "+s+")",o["r-dark"]="rgba(196, 30, 58, "+s+")",o["l-dark"]="rgba(255, 88, 0, "+s+")",o["b-dark"]="rgba(0, 81, 186, "+s+")",o["d-dark"]="rgba(255, 213, 0, "+s+")";(0,r["default"])(o),t["default"]=o},function(e,t){"use strict";function a(e,t){return(t||document).querySelector(e)}function n(e,t){return[].slice.call((t||document).querySelectorAll(e),0)}function i(e){return document.getElementById(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.qs=a,t.qsa=n,t.byId=i},function(e,t){},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){g[t.cube.id]=t.currentStateCode,o();var a=f[t.cube.id];a&&(a.innerHTML='<label></label><span class="state"> '+t.currentStateCode+"</span>")}function r(e,t){}function o(){var e=Object.keys(g),t=!1,a=void 0;if(e.length>=4&&(t=!0,e.forEach(function(e,n,i){0===n?a=g[e]:g[e]!==a&&(t=!1)})),t){p.classList.add("with-background-image");var n=a[1];p.style.backgroundColor=b["default"][n+"-dark"]}else p.classList.contains("with-background-image")&&(p.classList.remove("with-background-image"),p.style.backgroundColor="")}a(7);var s=a(3),l=a(6),d=a(9),u=n(d),c=a(5),b=n(c),g={},f={"cubeone-component-1":(0,l.qs)(".js-state-info-1"),"cubeone-component-2":(0,l.qs)(".js-state-info-2"),"cubeone-component-3":(0,l.qs)(".js-state-info-3"),"cubeone-component-4":(0,l.qs)(".js-state-info-4")},p=(0,l.qs)(".body-wrapper"),h=(0,l.qs)(".cubeone-scene"),v={cubes:[]},E=new u["default"]({cubeComponent:(0,l.byId)("cubeone-component-1")}),k=new u["default"]({cubeComponent:(0,l.byId)("cubeone-component-2")}),y=new u["default"]({cubeComponent:(0,l.byId)("cubeone-component-3")}),w=new u["default"]({cubeComponent:(0,l.byId)("cubeone-component-4")});E.addCallbackForEvent("init",r),E.addCallbackForEvent("statechange",i),E.init(),E.setToRandomState(),v.cubes.push(E),E.addCallbackForEvent("beforerotate",function(e,t){"x"===t.action?y.x({skipTriggerEvent:!0}):"-x"===t.action?y.X({skipTriggerEvent:!0}):"y"===t.action?k.y({skipTriggerEvent:!0}):"-y"===t.action&&k.Y({skipTriggerEvent:!0})}),k.addCallbackForEvent("init",r),k.addCallbackForEvent("statechange",i),k.init(),k.setToRandomState(),v.cubes.push(k),k.addCallbackForEvent("beforerotate",function(e,t){"x"===t.action?w.x({skipTriggerEvent:!0}):"-x"===t.action?w.X({skipTriggerEvent:!0}):"y"===t.action?E.y({skipTriggerEvent:!0}):"-y"===t.action&&E.Y({skipTriggerEvent:!0})}),y.addCallbackForEvent("init",r),y.addCallbackForEvent("statechange",i),y.init(),y.setToRandomState(),v.cubes.push(y),y.addCallbackForEvent("beforerotate",function(e,t){"x"===t.action?E.x({skipTriggerEvent:!0}):"-x"===t.action?E.X({skipTriggerEvent:!0}):"y"===t.action?w.y({skipTriggerEvent:!0}):"-y"===t.action&&w.Y({skipTriggerEvent:!0})}),w.addCallbackForEvent("init",r),w.addCallbackForEvent("statechange",i),w.init(),w.setToRandomState(),v.cubes.push(w),w.addCallbackForEvent("beforerotate",function(e,t){"x"===t.action?k.x({skipTriggerEvent:!0}):"-x"===t.action?k.X({skipTriggerEvent:!0}):"y"===t.action?y.y({skipTriggerEvent:!0}):"-y"===t.action&&y.Y({skipTriggerEvent:!0})}),v.solve=function(){v.cubes.forEach(function(e){return e.gotoState("uf")})},v.random=function(){v.cubes.forEach(function(e){return e.setToRandomState()})},window.cubeOne=v;var Z=(0,l.byId)("btn-cube-one-rotate");Z.addEventListener("click",function(e){h.classList.contains("left-side")?(h.classList.remove("left-side"),h.classList.add("down-side")):h.classList.contains("down-side")?(h.classList.remove("down-side"),h.classList.add("back-side")):h.classList.contains("back-side")?(h.classList.remove("back-side"),h.classList.add("back-left-side")):h.classList.contains("back-left-side")?(h.classList.remove("back-left-side"),h.classList.add("back-down-side")):h.classList.contains("back-down-side")?h.classList.remove("back-down-side"):h.classList.add("left-side")});var _=(0,l.byId)("btn-cube-one-solve");_.addEventListener("click",function(e){v.solve()});var m=(0,l.byId)("btn-cube-one-random");m.addEventListener("click",function(e){v.random()}),(0,s.log)("cubeOne is available in console")},function(e,t,a){(function(e){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e){window.requestAnimationFrame(e)}function o(e){r(function(){r(e)})}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(3),d=a(6),u=a(5),c=n(u),b=a(1),g=n(b),f=a(4),p=a(11),h=n(p),v=a(10),E=n(v),k=a(2),y=function(){function t(e){return i(this,t),e&&e.cubeComponent?(this._appState={},this._config=e,(0,g["default"])(this._config),this.cubeComponentEl=e.cubeComponent,this._updateEventBindings(),this._initCallbacks(),void this._setState({code:f.nextState.first,rotateEnabled:!0})):void(0,l.error)("CubeOne element was not provided: "+e.cubeComponent)}return s(t,[{key:"_updateEventBindings",value:function(){this._handleKeyEvent=this._handleKeyEvent.bind(this),this._transitionEnd=this._transitionEnd.bind(this)}},{key:"_initCallbacks",value:function(){var e=this;this.callbacks={},Object.keys(k.EVENT_NAMES).forEach(function(t,a){return e.callbacks[t]=[]})}},{key:"addCallbackForEvent",value:function(e,t){var a=this.callbacks[e=e.toLowerCase()];a&&"function"==typeof t&&a.push(t)}},{key:"_triggerEvent",value:function(e,t){var a=this.callbacks[e]||[],n=void 0,i=void 0;for(n=0,i=a.length;n<i;n++)a[n].call(this,e,t)}},{key:"getState",value:function(){return(0,f.cloneObject)(this._appState)}},{key:"_setState",value:function(e){var t=this._appState.code,a=e.code;this._appState=(0,f.cloneObject)(e),t!==a&&this._triggerEvent("statechange",{cube:this.cubeComponentEl,previousStateCode:t,currentStateCode:a})}},{key:"_transitionEnd",value:function(e){var t=this,a=this.cubeEl,n=a.style.transition;a.style.transition="0s",o(function(e){t._updateUiFaces(),a.style.transform=n,r(function(e){a.style.transition=n;var i=t.getState();i.rotateEnabled=!0,t._setState(i),t._triggerEvent("afterrotate",{cube:t.cubeComponentEl,stateCode:i.code})})})}},{key:"destroy",value:function(){this.cubeComponentEl.removeEventListener("keydown",this._handleKeyEvent,!1),this.cubeEl.removeEventListener("transitionend",this._transitionEnd)}},{key:"init",value:function(){var t=this;this._handleKeyEvent.bind(this);var a=this.cubeComponentEl,n=(0,d.qs)('[data-type="up"].cubeone-js-touch',a),i=(0,d.qs)('[data-type="front"].cubeone-js-touch',a),r=(0,d.qs)('[data-type="right"].cubeone-js-touch',a),o=(0,d.qs)('[data-type="left"].cubeone-js-touch',a),s=(0,d.qs)('[data-type="back"].cubeone-js-touch',a),u=(0,d.qs)('[data-type="down"].cubeone-js-touch',a),c=(0,d.qs)(".cubeone-js-cube",a);this.cubeEl=c,this.frontEl=(0,d.qs)(".cubeone-front > div",c),this.upEl=(0,d.qs)(".cubeone-up > div",c),this.rightEl=(0,d.qs)(".cubeone-right > div",c),this.leftEl=(0,d.qs)(".cubeone-left > div",c),this.backEl=(0,d.qs)(".cubeone-back > div",c),this.downEl=(0,d.qs)(".cubeone-down > div",c);var b=new e.Swipe;b.set({direction:e.DIRECTION_ALL});var g=new e.Swipe;g.set({direction:e.DIRECTION_ALL});var f=new e.Swipe;f.set({direction:e.DIRECTION_ALL});var p=new e.Swipe;p.set({direction:e.DIRECTION_ALL});var h=new e.Swipe;h.set({direction:e.DIRECTION_ALL});var v=new e.Swipe;v.set({direction:e.DIRECTION_ALL});var E=new e.Manager(i,{});E.add(b);var k=new e.Manager(n,{});k.add(g);var y=new e.Manager(r,{});y.add(f);var w=new e.Manager(o,{});w.add(p);var Z=new e.Manager(u,{});Z.add(h);var _=new e.Manager(s,{});_.add(v),E.add(new e.Tap({event:"doubletap",taps:2})),E.add(new e.Tap({event:"singletap"})),E.get("doubletap").recognizeWith("singletap"),E.get("singletap").requireFailure("doubletap"),k.add(new e.Tap({event:"doubletap",taps:2})),k.add(new e.Tap({event:"singletap"})),k.get("doubletap").recognizeWith("singletap"),k.get("singletap").requireFailure("doubletap"),y.add(new e.Tap({event:"doubletap",taps:2})),y.add(new e.Tap({event:"singletap"})),y.get("doubletap").recognizeWith("singletap"),y.get("singletap").requireFailure("doubletap"),w.add(new e.Tap({event:"doubletap",taps:2})),w.add(new e.Tap({event:"singletap"})),w.get("doubletap").recognizeWith("singletap"),w.get("singletap").requireFailure("doubletap"),Z.add(new e.Tap({event:"doubletap",taps:2})),Z.add(new e.Tap({event:"singletap"})),Z.get("doubletap").recognizeWith("singletap"),Z.get("singletap").requireFailure("doubletap"),_.add(new e.Tap({event:"doubletap",taps:2})),_.add(new e.Tap({event:"singletap"})),_.get("doubletap").recognizeWith("singletap"),_.get("singletap").requireFailure("doubletap"),E.on("singletap doubletap swipeup swipedown swiperight swipeleft",function(e){var a=e.type,n=e.target;switch("cubeone"!==n.dataset.type&&(n=n.parentElement,"cubeone"!==n.dataset.type&&(n=n.parentElement)),a){case"singletap":break;case"doubletap":t.tapped(n,e.target.dataset.type);break;case"swipeup":t.x();break;case"swiperight":t.y();break;case"swipedown":t.X();break;case"swipeleft":t.Y()}}),k.on("singletap doubletap swipeup swipedown swiperight swipeleft",function(e){var a=e.type,n=e.target;switch("cubeone"!==n.dataset.type&&(n=n.parentElement,"cubeone"!==n.dataset.type&&(n=n.parentElement)),a){case"singletap":break;case"doubletap":t.tapped(n,e.target.dataset.type);break;case"swipeup":t.x();break;case"swiperight":t.z();break;case"swipedown":t.X();break;case"swipeleft":t.Z()}}),y.on("singletap doubletap swipeup swipedown swiperight swipeleft",function(e){var a=e.type,n=e.target;switch("cubeone"!==n.dataset.type&&(n=n.parentElement,"cubeone"!==n.dataset.type&&(n=n.parentElement)),a){case"singletap":break;case"doubletap":t.tapped(n,e.target.dataset.type);break;case"swipeup":t.Z();break;case"swiperight":t.y();break;case"swipedown":t.z();break;case"swipeleft":t.Y()}}),w.on("singletap doubletap swipeup swipedown swiperight swipeleft",function(e){var a=e.type,n=e.target;switch((0,l.debug)(a+" "+n.dataset.type),"cubeone"!==n.dataset.type&&(n=n.parentElement,"cubeone"!==n.dataset.type&&(n=n.parentElement)),a){case"singletap":break;case"doubletap":t.tapped(n,e.target.dataset.type);break;case"swipeup":t.z();break;case"swiperight":t.y();break;case"swipedown":t.Z();break;case"swipeleft":t.Y()}}),Z.on("singletap doubletap swipeup swipedown swiperight swipeleft",function(e){var a=e.type,n=e.target;switch("cubeone"!==n.dataset.type&&(n=n.parentElement,"cubeone"!==n.dataset.type&&(n=n.parentElement)),a){case"singletap":break;case"doubletap":t.tapped(n,e.target.dataset.type);break;case"swipeup":t.x();break;case"swiperight":t.Z();break;case"swipedown":t.X();break;case"swipeleft":t.z()}}),_.on("singletap doubletap swipeup swipedown swiperight swipeleft",function(e){var a=e.type,n=e.target;switch((0,l.debug)(a+" "+n.dataset.type),"cubeone"!==n.dataset.type&&(n=n.parentElement,"cubeone"!==n.dataset.type&&(n=n.parentElement)),a){case"singletap":break;case"doubletap":t.tapped(n,e.target.dataset.type);break;case"swipeup":t.X();break;case"swiperight":t.y();break;case"swipedown":t.x();break;case"swipeleft":t.Y()}}),this._updateUiFaces(),this.cubeComponentEl.addEventListener("keydown",this._handleKeyEvent,!1),c.addEventListener("transitionend",this._transitionEnd),this._triggerEvent("init",{cube:this.cubeComponentEl})}},{key:"_updateUiFaces",value:function(){var e=void 0,t=void 0,a=void 0,n=void 0,i=void 0,r=void 0,o=this.getState();e=(0,f.getUp)(o.code),t=(0,f.getFront)(o.code),a=(0,f.getRight)(o.code),n=(0,f.getLeft)(o.code),i=(0,f.getBack)(o.code),r=(0,f.getDown)(o.code);var s=this._config.faceSkins;if(s){var l="";this.upEl.style.backgroundColor=(l=s[e].bgColor)?l:c["default"][e],this.frontEl.style.backgroundColor=(l=s[t].bgColor)?l:c["default"][t],this.rightEl.style.backgroundColor=(l=s[a].bgColor)?l:c["default"][a],this.leftEl.style.backgroundColor=(l=s[n].bgColor)?l:c["default"][n],this.backEl.style.backgroundColor=(l=s[i].bgColor)?l:c["default"][i],this.downEl.style.backgroundColor=(l=s[r].bgColor)?l:c["default"][r],this.upEl.style.backgroundImage=(l=s[e].bgImg)?l:"",this.frontEl.style.backgroundImage=(l=s[t].bgImg)?l:"",this.rightEl.style.backgroundImage=(l=s[a].bgImg)?l:"",this.leftEl.style.backgroundImage=(l=s[n].bgImg)?l:"",this.backEl.style.backgroundImage=(l=s[i].bgImg)?l:"",this.downEl.style.backgroundImage=(l=s[r].bgImg)?l:""}else this.upEl.style.backgroundColor=c["default"][e],this.frontEl.style.backgroundColor=c["default"][t],this.rightEl.style.backgroundColor=c["default"][a],this.leftEl.style.backgroundColor=c["default"][n],this.backEl.style.backgroundColor=c["default"][i],this.downEl.style.backgroundColor=c["default"][r];var d=E["default"][o.code].u;this.upEl.style.transform=d?"rotate"+d.dir+"("+d.angle+"deg)":"",d=E["default"][o.code].f,this.frontEl.style.transform=d?"rotate"+d.dir+"("+d.angle+"deg)":"",d=E["default"][o.code].r,this.rightEl.style.transform=d?"rotate"+d.dir+"("+d.angle+"deg)":"",d=E["default"][o.code].l,this.leftEl.style.transform=d?"rotate"+d.dir+"("+d.angle+"deg)":"",d=E["default"][o.code].b,this.backEl.style.transform=d?"rotate"+d.dir+"("+d.angle+"deg)":"",d=E["default"][o.code].d,this.downEl.style.transform=d?"rotate"+d.dir+"("+d.angle+"deg)":""}},{key:"tapped",value:function(e,t){(0,d.qs)(".cubeone-"+t+".cubeone-face",e).classList.toggle("tapped")}},{key:"_actionInvoke",value:function(e,t,a){var n=this.getState(),i=n.code;if(n.rotateEnabled){var r=a&&a.skipAnimation;n.code=h["default"][i][e],r||(n.rotateEnabled=!1),this._setState(n),r||(t=t.bind(this))(),r&&this._updateUiFaces()}}},{key:"gotoState",value:function(e){if(k.STATES[e]){var t=this.getState();t.code=e,this._setState(t),this._updateUiFaces()}}},{key:"setToRandomState",value:function(){var e=this.getState();e.code=k.STATES_ARRAY[k.STATES_ARRAY.length*Math.random()|0],this._setState(e),this._updateUiFaces()}},{key:"x",value:function(e){e&&e.skipTriggerEvent||this._triggerEvent("beforerotate",{cube:this.cubeComponentEl,action:"x"}),this._actionInvoke("x",this._uix,e)}},{key:"X",value:function(e){e&&e.skipTriggerEvent||this._triggerEvent("beforerotate",{cube:this.cubeComponentEl,action:"-x"}),this._actionInvoke("-x",this._uiX,e)}},{key:"y",value:function(e){e&&e.skipTriggerEvent||this._triggerEvent("beforerotate",{cube:this.cubeComponentEl,action:"y"}),this._actionInvoke("y",this._uiy,e)}},{key:"Y",value:function(e){e&&e.skipTriggerEvent||this._triggerEvent("beforerotate",{cube:this.cubeComponentEl,action:"-y"}),this._actionInvoke("-y",this._uiY,e)}},{key:"z",value:function(e){e&&e.skipTriggerEvent||this._triggerEvent("beforerotate",{cube:this.cubeComponentEl,action:"z"}),this._actionInvoke("z",this._uiz,e)}},{key:"Z",value:function(e){e&&e.skipTriggerEvent||this._triggerEvent("beforerotate",{cube:this.cubeComponentEl,action:"-z"}),this._actionInvoke("-z",this._uiZ,e)}},{key:"_uix",value:function(){this.cubeEl.style.transform="rotateX(90deg)"}},{key:"_uiy",value:function(){this.cubeEl.style.transform="rotateY(90deg)"}},{key:"_uiX",value:function(){this.cubeEl.style.transform="rotateX(-90deg)"}},{key:"_uiY",value:function(){this.cubeEl.style.transform="rotateY(-90deg)"}},{key:"_uiz",value:function(){this.cubeEl.style.transform="rotateZ(90deg)"}},{key:"_uiZ",value:function(){this.cubeEl.style.transform="rotateZ(-90deg)"}},{key:"reset",value:function(){return this.gotoState("uf"),"reset"}},{key:"_handleKeyEvent",value:function(e){switch(e.keyCode){case k.KEY.LEFT:case k.KEY.a:this.Y();break;case k.KEY.UP:e.preventDefault();case k.KEY.w:this.x();break;case k.KEY.RIGHT:case k.KEY.d:this.y();break;case k.KEY.DOWN:e.preventDefault();case k.KEY.s:this.X();break;case k.KEY.q:this.Z();break;case k.KEY.e:this.z()}}}]),t}();t["default"]=y}).call(t,a(12))},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(2),r=a(1),o=n(r),s=[];Object.keys(i.STATES).forEach(function(e,t){return s[e]=[]}),s.lf.u={angle:90,dir:"Z"},s.rf.u={angle:-90,dir:"Z"},s.fl.u={angle:-90,dir:"Z"},s.fu.u={angle:180,dir:"Z"},s.fr.u={angle:90,dir:"Z"},s.bl.u={angle:90,dir:"Z"},s.dl.u={angle:-90,dir:"Z"},s.rb.u={angle:90,dir:"Z"},s.lu.u={angle:-90,dir:"Z"},s.lf.f={angle:90,dir:"Z"},s.rf.f={angle:-90,dir:"Z"},s.db.f={angle:180,dir:"Z"},s.fl.f={angle:-90,dir:"Z"},s.dl.f={angle:180,dir:"Z"},s.bl.f={angle:90,dir:"Z"},s.rd.f={angle:-90,dir:"Z"},s.ld.f={angle:90,dir:"Z"},s.bd.f={angle:180,dir:"Z"},s.br.f={angle:-90,dir:"Z"},s.fu.f={angle:180,dir:"Z"},s.lu.f={angle:90,dir:"Z"},s.ru.f={angle:-90,dir:"Z"},s.fr.f={angle:90,dir:"Z"},s.df.f={angle:180,dir:"Z"},s.dr.f={angle:180,dir:"Z"},s.rb.f={angle:90,dir:"Z"},s.lb.f={angle:-90,dir:"Z"},s.fd.r={angle:90,dir:"Z"},s.db.r={angle:180,dir:"Z"},s.bu.r={angle:-90,dir:"Z"},s.ld.r={angle:90,dir:"Z"},s.rd.r={angle:90,dir:"Z"},s.dl.r={angle:180,dir:"Z"},s.lu.r={angle:-90,dir:"Z"},s.lf.r={angle:90,dir:"Z"},s.rf.r={angle:-90,dir:"Z"},s.bd.r={angle:90,dir:"Z"},s.br.r={angle:180,dir:"Z"},s.lb.r={angle:90,dir:"Z"},s.fu.r={angle:-90,dir:"Z"},s.df.r={angle:180,dir:"Z"},s.fr.r={angle:180,dir:"Z"},s.ru.r={angle:-90,dir:"Z"},s.dr.r={angle:180,dir:"Z"},s.rb.r={angle:-90,dir:"Z"},s.fd.l={angle:-90,dir:"Z"},s.db.l={angle:180,dir:"Z"},s.bu.l={angle:90,dir:"Z"},s.rf.l={angle:-90,dir:"Z"},s.fl.l={angle:180,dir:"Z"},s.rd.l={angle:-90,dir:"Z"},s.bl.l={angle:180,dir:"Z"},s.bd.l={angle:-90,dir:"Z"},s.fu.l={angle:90,dir:"Z"},s.lf.l={angle:90,dir:"Z"},s.df.l={angle:180,dir:"Z"},s.rb.l={angle:-90,dir:"Z"},s.ru.l={angle:90,dir:"Z"},s.ld.l={angle:-90,dir:"Z"},s.dr.l={angle:180,dir:"Z"},s.lu.l={angle:90,dir:"Z"},s.dl.l={angle:180,dir:"Z"},s.lb.l={angle:90,dir:"Z"},s.ul.u={angle:-90,dir:"Z"},s.ur.u={angle:90,dir:"Z"},s.ub.u={angle:180,dir:"Z"},s.bu.u={angle:180,dir:"Z"},s.dr.u={angle:90,dir:"Z"},s.ru.u={angle:180,dir:"Z"},s.br.u={angle:-90,dir:"Z"},s.lb.u={angle:-90,dir:"Z"},s.lu.u={angle:180,dir:"Z"},s.df.u={angle:180,dir:"Z"},s.fd.b={angle:180,dir:"Z"},s.dr.b={angle:180,dir:"Z"},s.db.b={angle:180,dir:"Z"},s.bu.b={angle:180,dir:"Z"},s.bl.b={angle:-90,dir:"Z"},s.fl.b={angle:90,dir:"Z"},s.lb.b={angle:90,dir:"Z"},s.rd.b={angle:-90,dir:"Z"},s.ld.b={angle:90,dir:"Z"},s.ru.b={angle:-90,dir:"Z"},s.br.b={angle:90,dir:"Z"},s.fr.b={angle:-90,dir:"Z"},s.lf.b={angle:-90,dir:"Z"},s.df.b={angle:180,dir:"Z"},s.rf.b={angle:90,dir:"Z"},s.rb.b={angle:-90,dir:"Z"},s.dl.b={angle:180,dir:"Z"},s.lu.b={angle:90,dir:"Z"},s.lf.d={angle:90,dir:"Z"},s.fd.d={angle:180,dir:"Z"},s.dl.d={angle:90,dir:"Z"},s.ul.d={angle:90,dir:"Z"},s.bl.d={angle:90,dir:"Z"},s.ur.d={angle:-90,dir:"Z"},s.ub.d={angle:180,dir:"Z"},s.br.d={angle:-90,dir:"Z"},s.bd.d={angle:180,dir:"Z"},s.rf.d={angle:-90,dir:"Z"},s.df.d={angle:180,dir:"Z"},s.dr.d={angle:-90,dir:"Z"},s.ld.d={angle:180,dir:"Z"},s.fl.d={angle:-90,dir:"Z"},s.fr.d={angle:90,dir:"Z"},s.rd.d={angle:180,dir:"Z"},s.rb.d={angle:90,dir:"Z"},s.lb.d={angle:-90,dir:"Z"},(0,o["default"])(s),t["default"]=s},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(2),r=a(4),o=a(1),s=n(o),l=[];Object.keys(i.STATES).forEach(function(e,t){return l[e]=[]});var d=void 0,u=void 0,c=void 0,b=void 0,g=r.nextState.first;for(d=0;d<r.nextState.stateCount;d++)u=g[0],c=g[1],l[g].x=""+c+i.opposite[u],l[g]["-x"]=""+i.opposite[c]+u,l[g].y=""+u+(0,r.getLeft)(g),l[g]["-y"]=""+u+(0,r.getRight)(g),l[g].z=""+(0,r.getLeft)(g)+c,l[g]["-z"]=""+(0,r.getRight)(g)+c,b=r.nextState.get(g),g=b.state;(0,s["default"])(l),t["default"]=l},function(e,t){e.exports=Hammer}]);