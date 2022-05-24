(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{135:function(t,e,i){"use strict";i.r(e);i(53);var n=i(81),r=i(71),o=i(92),s=i(93),a=i(91),l=i(90),c=i(36),u=new n.a({target:"map",view:new r.a({projection:"EPSG:3857",center:[-551019,4481347],zoom:8})});u.addControl(new l.a),u.addControl(new a.a),u.addControl(new o.a),u.addControl(new s.a),Object(c.a)(u,"https://ws205.juntadeandalucia.es/tileserver/styles/mapa_andalucia_gray_scale_fondo_negro/style.json")},90:function(t,e,i){"use strict";var n,r=i(34),o=i(22),s=i(20),a=i(3),l=i(11),c=i(17),u=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),d="degrees",h="imperial",p="nautical",_="metric",f="us",m=[1,2,5],g=function(t){function e(e){var i=this,n=e||{},r=void 0!==n.className?n.className:n.bar?"ol-scale-bar":"ol-scale-line";return(i=t.call(this,{element:document.createElement("div"),render:n.render,target:n.target})||this).innerElement_=document.createElement("div"),i.innerElement_.className=r+"-inner",i.element.className=r+" "+s.d,i.element.appendChild(i.innerElement_),i.viewState_=null,i.minWidth_=void 0!==n.minWidth?n.minWidth:64,i.renderedVisible_=!1,i.renderedWidth_=void 0,i.renderedHTML_="",i.addEventListener(Object(c.b)("units"),i.handleUnitsChanged_),i.setUnits(n.units||_),i.scaleBar_=n.bar||!1,i.scaleBarSteps_=n.steps||4,i.scaleBarText_=n.text||!1,i.dpi_=n.dpi||void 0,i}return u(e,t),e.prototype.getUnits=function(){return this.get("units")},e.prototype.handleUnitsChanged_=function(){this.updateElement_()},e.prototype.setUnits=function(t){this.set("units",t)},e.prototype.setDpi=function(t){this.dpi_=t},e.prototype.updateElement_=function(){var t=this.viewState_;if(t){var e=t.center,i=t.projection,n=this.getUnits(),r=n==d?o.b.DEGREES:o.b.METERS,s=Object(a.h)(i,t.resolution,e,r),c=this.minWidth_*(this.dpi_||25.4/.28)/(25.4/.28),u=c*s,g="";if(n==d){var v=a.a[o.b.DEGREES];(u*=v)<v/60?(g="″",s*=3600):u<v?(g="′",s*=60):g="°"}else n==h?u<.9144?(g="in",s/=.0254):u<1609.344?(g="ft",s/=.3048):(g="mi",s/=1609.344):n==p?(s/=1852,g="nm"):n==_?u<.001?(g="μm",s*=1e6):u<1?(g="mm",s*=1e3):u<1e3?g="m":(g="km",s/=1e3):n==f?u<.9144?(g="in",s*=39.37):u<1609.344?(g="ft",s/=.30480061):(g="mi",s/=1609.3472):Object(l.a)(!1,33);for(var b,y,E,M,w=3*Math.floor(Math.log(c*s)/Math.log(10));;){E=Math.floor(w/3);var j=Math.pow(10,E);if(b=m[(w%3+3)%3]*j,y=Math.round(b/s),isNaN(y))return this.element.style.display="none",void(this.renderedVisible_=!1);if(y>=c)break;++w}M=this.scaleBar_?this.createScaleBar(y,b,g):b.toFixed(E<0?-E:0)+" "+g,this.renderedHTML_!=M&&(this.innerElement_.innerHTML=M,this.renderedHTML_=M),this.renderedWidth_!=y&&(this.innerElement_.style.width=y+"px",this.renderedWidth_=y),this.renderedVisible_||(this.element.style.display="",this.renderedVisible_=!0)}else this.renderedVisible_&&(this.element.style.display="none",this.renderedVisible_=!1)},e.prototype.createScaleBar=function(t,e,i){for(var n="1 : "+Math.round(this.getScaleForResolution()).toLocaleString(),r=[],o=t/this.scaleBarSteps_,s="#ffffff",a=0;a<this.scaleBarSteps_;a++)0===a&&r.push(this.createMarker("absolute",a)),r.push('<div><div class="ol-scale-singlebar" style="width: '+o+"px;background-color: "+s+';"></div>'+this.createMarker("relative",a)+(a%2==0||2===this.scaleBarSteps_?this.createStepText(a,t,!1,e,i):"")+"</div>"),a===this.scaleBarSteps_-1&&r.push(this.createStepText(a+1,t,!0,e,i)),s="#ffffff"===s?"#000000":"#ffffff";return'<div style="display: flex;">'+(this.scaleBarText_?'<div class="ol-scale-text" style="width: '+t+'px;">'+n+"</div>":"")+r.join("")+"</div>"},e.prototype.createMarker=function(t,e){return'<div class="ol-scale-step-marker" style="position: '+t+";top: "+("absolute"===t?3:-10)+'px;"></div>'},e.prototype.createStepText=function(t,e,i,n,r){var o=(0===t?0:Math.round(n/this.scaleBarSteps_*t*100)/100)+(0===t?"":" "+r);return'<div class="ol-scale-step-text" style="margin-left: '+(0===t?-3:e/this.scaleBarSteps_*-1)+"px;text-align: "+(0===t?"left":"center")+"; min-width: "+(0===t?0:e/this.scaleBarSteps_*2)+"px;left: "+(i?e+"px":"unset")+';">'+o+"</div>"},e.prototype.getScaleForResolution=function(){var t=Object(a.h)(this.viewState_.projection,this.viewState_.resolution,this.viewState_.center),e=this.dpi_||25.4/.28,i=this.viewState_.projection.getMetersPerUnit();return parseFloat(t.toString())*i*39.37*e},e.prototype.render=function(t){var e=t.frameState;this.viewState_=e?e.viewState:null,this.updateElement_()},e}(r.a);e.a=g},91:function(t,e,i){"use strict";var n,r=i(34),o=i(7),s=i(20),a=i(6),l=i(15),c=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),u=["fullscreenchange","webkitfullscreenchange","MSFullscreenChange"],d="enterfullscreen",h="leavefullscreen",p=function(t){function e(e){var i=this,n=e||{};(i=t.call(this,{element:document.createElement("div"),target:n.target})||this).cssClassName_=void 0!==n.className?n.className:"ol-full-screen";var r=void 0!==n.label?n.label:"⤢";i.labelNode_="string"==typeof r?document.createTextNode(r):r;var a=void 0!==n.labelActive?n.labelActive:"×";i.labelActiveNode_="string"==typeof a?document.createTextNode(a):a,i.button_=document.createElement("button");var l=n.tipLabel?n.tipLabel:"Toggle full-screen";i.setClassName_(i.button_,f()),i.button_.setAttribute("type","button"),i.button_.title=l,i.button_.appendChild(i.labelNode_),i.button_.addEventListener(o.a.CLICK,i.handleClick_.bind(i),!1);var c=i.cssClassName_+" "+s.d+" "+s.b+" "+(_()?"":s.e),u=i.element;return u.className=c,u.appendChild(i.button_),i.keys_=void 0!==n.keys&&n.keys,i.source_=n.source,i}return c(e,t),e.prototype.handleClick_=function(t){t.preventDefault(),this.handleFullScreen_()},e.prototype.handleFullScreen_=function(){if(_()){var t=this.getMap();if(t)if(f())document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitExitFullscreen&&document.webkitExitFullscreen();else{var e=void 0;e=this.source_?"string"==typeof this.source_?document.getElementById(this.source_):this.source_:t.getTargetElement(),this.keys_?function(t){t.webkitRequestFullscreen?t.webkitRequestFullscreen():m(t)}(e):m(e)}}},e.prototype.handleFullScreenChange_=function(){var t=this.getMap();f()?(this.setClassName_(this.button_,!0),Object(l.e)(this.labelActiveNode_,this.labelNode_),this.dispatchEvent(d)):(this.setClassName_(this.button_,!1),Object(l.e)(this.labelNode_,this.labelActiveNode_),this.dispatchEvent(h)),t&&t.updateSize()},e.prototype.setClassName_=function(t,e){var i=this.cssClassName_+"-true",n=this.cssClassName_+"-false",r=e?i:n;t.classList.remove(i),t.classList.remove(n),t.classList.add(r)},e.prototype.setMap=function(e){if(t.prototype.setMap.call(this,e),e)for(var i=0,n=u.length;i<n;++i)this.listenerKeys.push(Object(a.a)(document,u[i],this.handleFullScreenChange_,this))},e}(r.a);function _(){var t=document.body;return!!(t.webkitRequestFullscreen||t.msRequestFullscreen&&document.msFullscreenEnabled||t.requestFullscreen&&document.fullscreenEnabled)}function f(){return!!(document.webkitIsFullScreen||document.msFullscreenElement||document.fullscreenElement)}function m(t){t.requestFullscreen?t.requestFullscreen():t.msRequestFullscreen?t.msRequestFullscreen():t.webkitRequestFullscreen&&t.webkitRequestFullscreen()}e.a=p},92:function(t,e,i){"use strict";var n,r=i(34),o=i(42),s=i(17),a=i(3),l=i(6),c=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),u=function(t){function e(e){var i=this,n=e||{},r=document.createElement("div");return r.className=void 0!==n.className?n.className:"ol-mouse-position",(i=t.call(this,{element:r,render:n.render,target:n.target})||this).addEventListener(Object(s.b)("projection"),i.handleProjectionChanged_),n.coordinateFormat&&i.setCoordinateFormat(n.coordinateFormat),n.projection&&i.setProjection(n.projection),i.undefinedHTML_=void 0!==n.undefinedHTML?n.undefinedHTML:"&#160;",i.renderOnMouseOut_=!!i.undefinedHTML_,i.renderedHTML_=r.innerHTML,i.mapProjection_=null,i.transform_=null,i}return c(e,t),e.prototype.handleProjectionChanged_=function(){this.transform_=null},e.prototype.getCoordinateFormat=function(){return this.get("coordinateFormat")},e.prototype.getProjection=function(){return this.get("projection")},e.prototype.handleMouseMove=function(t){var e=this.getMap();this.updateHTML_(e.getEventPixel(t))},e.prototype.handleMouseOut=function(t){this.updateHTML_(null)},e.prototype.setMap=function(e){if(t.prototype.setMap.call(this,e),e){var i=e.getViewport();this.listenerKeys.push(Object(l.a)(i,o.a.POINTERMOVE,this.handleMouseMove,this)),this.renderOnMouseOut_&&this.listenerKeys.push(Object(l.a)(i,o.a.POINTEROUT,this.handleMouseOut,this))}},e.prototype.setCoordinateFormat=function(t){this.set("coordinateFormat",t)},e.prototype.setProjection=function(t){this.set("projection",Object(a.g)(t))},e.prototype.updateHTML_=function(t){var e=this.undefinedHTML_;if(t&&this.mapProjection_){if(!this.transform_){var i=this.getProjection();this.transform_=i?Object(a.j)(this.mapProjection_,i):a.l}var n=this.getMap().getCoordinateFromPixelInternal(t);if(n){var r=Object(a.k)();r&&(this.transform_=Object(a.j)(this.mapProjection_,r)),this.transform_(n,n);var o=this.getCoordinateFormat();e=o?o(n):n.toString()}}this.renderedHTML_&&e===this.renderedHTML_||(this.element.innerHTML=e,this.renderedHTML_=e)},e.prototype.render=function(t){var e=t.frameState;e?this.mapProjection_!=e.viewState.projection&&(this.mapProjection_=e.viewState.projection,this.transform_=null):this.mapProjection_=null},e}(r.a);e.a=u},93:function(t,e,i){"use strict";var n,r=i(34),o=i(7),s=i(42),a=i(20),l=i(8),c=i(28),u=i(6),d=i(30),h=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),p=0,_=1,f=function(t){function e(e){var i=this,n=e||{};(i=t.call(this,{element:document.createElement("div"),render:n.render})||this).dragListenerKeys_=[],i.currentResolution_=void 0,i.direction_=p,i.dragging_,i.heightLimit_=0,i.widthLimit_=0,i.startX_,i.startY_,i.thumbSize_=null,i.sliderInitialized_=!1,i.duration_=void 0!==n.duration?n.duration:200;var r=void 0!==n.className?n.className:"ol-zoomslider",l=document.createElement("button");l.setAttribute("type","button"),l.className=r+"-thumb "+a.d;var c=i.element;return c.className=r+" "+a.d+" "+a.b,c.appendChild(l),c.addEventListener(s.a.POINTERDOWN,i.handleDraggerStart_.bind(i),!1),c.addEventListener(s.a.POINTERMOVE,i.handleDraggerDrag_.bind(i),!1),c.addEventListener(s.a.POINTERUP,i.handleDraggerEnd_.bind(i),!1),c.addEventListener(o.a.CLICK,i.handleContainerClick_.bind(i),!1),l.addEventListener(o.a.CLICK,d.b,!1),i}return h(e,t),e.prototype.setMap=function(e){t.prototype.setMap.call(this,e),e&&e.render()},e.prototype.initSlider_=function(){var t=this.element,e=t.offsetWidth,i=t.offsetHeight;if(0===e&&0===i)return this.sliderInitialized_=!1;var n=t.firstElementChild,r=getComputedStyle(n),o=n.offsetWidth+parseFloat(r.marginRight)+parseFloat(r.marginLeft),s=n.offsetHeight+parseFloat(r.marginTop)+parseFloat(r.marginBottom);return this.thumbSize_=[o,s],e>i?(this.direction_=_,this.widthLimit_=e-o):(this.direction_=p,this.heightLimit_=i-s),this.sliderInitialized_=!0},e.prototype.handleContainerClick_=function(t){var e=this.getMap().getView(),i=this.getRelativePosition_(t.offsetX-this.thumbSize_[0]/2,t.offsetY-this.thumbSize_[1]/2),n=this.getResolutionForPosition_(i),r=e.getConstrainedZoom(e.getZoomForResolution(n));e.animateInternal({zoom:r,duration:this.duration_,easing:c.b})},e.prototype.handleDraggerStart_=function(t){if(!this.dragging_&&t.target===this.element.firstElementChild){var e=this.element.firstElementChild;if(this.getMap().getView().beginInteraction(),this.startX_=t.clientX-parseFloat(e.style.left),this.startY_=t.clientY-parseFloat(e.style.top),this.dragging_=!0,0===this.dragListenerKeys_.length){var i=this.handleDraggerDrag_,n=this.handleDraggerEnd_;this.dragListenerKeys_.push(Object(u.a)(document,s.a.POINTERMOVE,i,this),Object(u.a)(document,s.a.POINTERUP,n,this))}}},e.prototype.handleDraggerDrag_=function(t){if(this.dragging_){var e=t.clientX-this.startX_,i=t.clientY-this.startY_,n=this.getRelativePosition_(e,i);this.currentResolution_=this.getResolutionForPosition_(n),this.getMap().getView().setResolution(this.currentResolution_)}},e.prototype.handleDraggerEnd_=function(t){this.dragging_&&(this.getMap().getView().endInteraction(),this.dragging_=!1,this.startX_=void 0,this.startY_=void 0,this.dragListenerKeys_.forEach(u.c),this.dragListenerKeys_.length=0)},e.prototype.setThumbPosition_=function(t){var e=this.getPositionForResolution_(t),i=this.element.firstElementChild;this.direction_==_?i.style.left=this.widthLimit_*e+"px":i.style.top=this.heightLimit_*e+"px"},e.prototype.getRelativePosition_=function(t,e){var i;return i=this.direction_===_?t/this.widthLimit_:e/this.heightLimit_,Object(l.a)(i,0,1)},e.prototype.getResolutionForPosition_=function(t){return this.getMap().getView().getResolutionForValueFunction()(1-t)},e.prototype.getPositionForResolution_=function(t){var e=this.getMap().getView().getValueForResolutionFunction();return Object(l.a)(1-e(t),0,1)},e.prototype.render=function(t){if(t.frameState&&(this.sliderInitialized_||this.initSlider_())){var e=t.frameState.viewState.resolution;this.currentResolution_=e,this.setThumbPosition_(e)}},e}(r.a);e.a=f}},[[135,0]]]);
//# sourceMappingURL=multiescala.js.map
