/*!
 * Premium Cryptocurrency Widgets
 * ------------------------------
 * Version 2.15.0, built on Monday, April 6, 2020
 * Copyright (c) Financial Apps and Plugins <info@financialplugins.com>. All rights reserved.
 * Demo: https://cryptowidgets.financialplugins.com/
 * Purchase (WordPress version): https://1.envato.market/mvJYM
 * Purchase (JavaScript version): https://1.envato.market/xvjY1
 * Like: https://www.facebook.com/financialplugins/
 * 
 */
(window.webpackJsonp3870=window.webpackJsonp3870||[]).push([[40],{547:function(t,e,i){(function(i){var o,n,s;void 0!==i||window||this.window||this.global,n=[],o=function(t){"use strict";var e={},i=(document.querySelector("body"),!!/Mobi/.test(navigator.userAgent)),o=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),n="undefined"!=typeof InstallTrigger,s="ontouchstart"in document.documentElement,a=["bottomRight","bottomLeft","bottomCenter","topRight","topLeft","topCenter","center"],r={};e.children={};var l={id:null,class:"",title:"",titleColor:"",titleSize:"",titleLineHeight:"",message:"",messageColor:"",messageSize:"",messageLineHeight:"",backgroundColor:"",theme:"light",color:"",icon:"",iconText:"",iconColor:"",iconUrl:null,image:"",imageWidth:50,maxWidth:null,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,displayMode:0,position:"bottomRight",target:"",targetFirst:!0,timeout:5e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}};if("remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),"function"!=typeof window.CustomEvent){var d=function(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var i=document.createEvent("CustomEvent");return i.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),i};d.prototype=window.Event.prototype,window.CustomEvent=d}var c=function(t,e,i){if("[object Object]"===Object.prototype.toString.call(t))for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(i,t[o],o,t);else if(t)for(var n=0,s=t.length;n<s;n++)e.call(i,t[n],n,t)},u=function(t,e){var i={};return c(t,function(e,o){i[o]=t[o]}),c(e,function(t,o){i[o]=e[o]}),i},p=function(t){var e=document.createDocumentFragment(),i=document.createElement("div");for(i.innerHTML=t;i.firstChild;)e.appendChild(i.firstChild);return e},m={move:function(t,e,i,s){var a;0!==s&&(t.classList.add("iziToast-dragged"),t.style.transform="translateX("+s+"px)",s>0?(a=(180-s)/180)<.3&&e.hide(u(i,{transitionOut:"fadeOutRight",transitionOutMobile:"fadeOutRight"}),t,"drag"):(a=(180+s)/180)<.3&&e.hide(u(i,{transitionOut:"fadeOutLeft",transitionOutMobile:"fadeOutLeft"}),t,"drag"),t.style.opacity=a,a<.3&&((o||n)&&(t.style.left=s+"px"),t.parentNode.style.opacity=.3,this.stopMoving(t,null)))},startMoving:function(t,e,i,o){o=o||window.event;var n=s?o.touches[0].clientX:o.clientX,a=t.style.transform.replace("px)","");a=a.replace("translateX(","");var r=n-a;i.transitionIn&&t.classList.remove(i.transitionIn),i.transitionInMobile&&t.classList.remove(i.transitionInMobile),t.style.transition="",s?document.ontouchmove=function(o){o.preventDefault();var n=(o=o||window.event).touches[0].clientX,s=n-r;m.move(t,e,i,s)}:document.onmousemove=function(o){o.preventDefault();var n=(o=o||window.event).clientX,s=n-r;m.move(t,e,i,s)}},stopMoving:function(t,e){s?document.ontouchmove=function(){}:document.onmousemove=function(){},t.style.opacity="",t.style.transform="",t.classList.contains("iziToast-dragged")&&(t.classList.remove("iziToast-dragged"),t.style.transition="transform 0.4s ease, opacity 0.4s ease",setTimeout(function(){t.style.transition=""},400))}};return e.setSetting=function(t,i,o){e.children[t][i]=o},e.getSetting=function(t,i){return e.children[t][i]},e.destroy=function(){c(document.querySelectorAll(".iziToast-overlay"),function(t,e){t.remove()}),c(document.querySelectorAll(".iziToast-wrapper"),function(t,e){t.remove()}),c(document.querySelectorAll(".iziToast"),function(t,e){t.remove()}),this.children={},document.removeEventListener("iziToast-opened",{},!1),document.removeEventListener("iziToast-opening",{},!1),document.removeEventListener("iziToast-closing",{},!1),document.removeEventListener("iziToast-closed",{},!1),document.removeEventListener("keyup",{},!1),r={}},e.settings=function(t){e.destroy(),r=t,l=u(l,t||{})},c({info:{color:"blue",icon:"ico-info"},success:{color:"green",icon:"ico-success"},warning:{color:"orange",icon:"ico-warning"},error:{color:"red",icon:"ico-error"},question:{color:"yellow",icon:"ico-question"}},function(t,i){e[i]=function(e){var i=u(r,e||{});i=u(t,i||{}),this.show(i)}}),e.progress=function(t,e,i){var o=this,n=e.getAttribute("data-iziToast-ref"),s=u(this.children[n],t||{}),a=e.querySelector(".iziToast-progressbar div");return{start:function(){void 0===s.time.REMAINING&&(e.classList.remove("iziToast-reseted"),null!==a&&(a.style.transition="width "+s.timeout+"ms "+s.progressBarEasing,a.style.width="0%"),s.time.START=(new Date).getTime(),s.time.END=s.time.START+s.timeout,s.time.TIMER=setTimeout(function(){clearTimeout(s.time.TIMER),e.classList.contains("iziToast-closing")||(o.hide(s,e,"timeout"),"function"==typeof i&&i.apply(o))},s.timeout),o.setSetting(n,"time",s.time))},pause:function(){if(void 0!==s.time.START&&!e.classList.contains("iziToast-paused")&&!e.classList.contains("iziToast-reseted")){if(e.classList.add("iziToast-paused"),s.time.REMAINING=s.time.END-(new Date).getTime(),clearTimeout(s.time.TIMER),o.setSetting(n,"time",s.time),null!==a){var t=window.getComputedStyle(a).getPropertyValue("width");a.style.transition="none",a.style.width=t}"function"==typeof i&&setTimeout(function(){i.apply(o)},10)}},resume:function(){void 0!==s.time.REMAINING?(e.classList.remove("iziToast-paused"),null!==a&&(a.style.transition="width "+s.time.REMAINING+"ms "+s.progressBarEasing,a.style.width="0%"),s.time.END=(new Date).getTime()+s.time.REMAINING,s.time.TIMER=setTimeout(function(){clearTimeout(s.time.TIMER),e.classList.contains("iziToast-closing")||(o.hide(s,e,"timeout"),"function"==typeof i&&i.apply(o))},s.time.REMAINING),o.setSetting(n,"time",s.time)):this.start()},reset:function(){clearTimeout(s.time.TIMER),delete s.time.REMAINING,o.setSetting(n,"time",s.time),e.classList.add("iziToast-reseted"),e.classList.remove("iziToast-paused"),null!==a&&(a.style.transition="none",a.style.width="100%"),"function"==typeof i&&setTimeout(function(){i.apply(o)},10)}}},e.hide=function(t,e,o){"object"!=typeof e&&(e=document.querySelector(e));var n=this,s=u(this.children[e.getAttribute("data-iziToast-ref")],t||{});s.closedBy=o||null,delete s.time.REMAINING,e.classList.add("iziToast-closing"),function(){var t=document.querySelector(".iziToast-overlay");if(null!==t){var e=t.getAttribute("data-iziToast-ref"),i=(e=e.split(",")).indexOf(String(s.ref));-1!==i&&e.splice(i,1),t.setAttribute("data-iziToast-ref",e.join()),0===e.length&&(t.classList.remove("fadeIn"),t.classList.add("fadeOut"),setTimeout(function(){t.remove()},700))}}(),s.transitionIn&&e.classList.remove(s.transitionIn),s.transitionInMobile&&e.classList.remove(s.transitionInMobile),i||window.innerWidth<=568?s.transitionOutMobile&&e.classList.add(s.transitionOutMobile):s.transitionOut&&e.classList.add(s.transitionOut);var a=e.parentNode.offsetHeight;e.parentNode.style.height=a+"px",e.style.pointerEvents="none",(!i||window.innerWidth>568)&&(e.parentNode.style.transitionDelay="0.2s");try{var r=new CustomEvent("iziToast-closing",{detail:s,bubbles:!0,cancelable:!0});document.dispatchEvent(r)}catch(t){console.warn(t)}setTimeout(function(){e.parentNode.style.height="0px",e.parentNode.style.overflow="",setTimeout(function(){delete n.children[s.ref],e.parentNode.remove();try{var t=new CustomEvent("iziToast-closed",{detail:s,bubbles:!0,cancelable:!0});document.dispatchEvent(t)}catch(t){console.warn(t)}void 0!==s.onClosed&&s.onClosed.apply(null,[s,e,o])},1e3)},200),void 0!==s.onClosing&&s.onClosing.apply(null,[s,e,o])},e.show=function(t){var o=this,n=u(r,t||{});if((n=u(l,n)).time={},null===n.id&&(n.id=function(t){return btoa(encodeURIComponent(t)).replace(/=/g,"")}(n.title+n.message+n.color)),1===n.displayMode||"once"==n.displayMode)try{if(document.querySelectorAll(".iziToast#"+n.id).length>0)return!1}catch(t){console.warn("[iziToast] Could not find an element with this selector: #"+n.id+". Try to set an valid id.")}if(2===n.displayMode||"replace"==n.displayMode)try{c(document.querySelectorAll(".iziToast#"+n.id),function(t,e){o.hide(n,t,"replaced")})}catch(t){console.warn("[iziToast] Could not find an element with this selector: #"+n.id+". Try to set an valid id.")}n.ref=(new Date).getTime()+Math.floor(1e7*Math.random()+1),e.children[n.ref]=n;var d,g={body:document.querySelector("body"),overlay:document.createElement("div"),toast:document.createElement("div"),toastBody:document.createElement("div"),toastTexts:document.createElement("div"),toastCapsule:document.createElement("div"),cover:document.createElement("div"),buttons:document.createElement("div"),inputs:document.createElement("div"),icon:n.iconUrl?document.createElement("img"):document.createElement("i"),wrapper:null};g.toast.setAttribute("data-iziToast-ref",n.ref),g.toast.appendChild(g.toastBody),g.toastCapsule.appendChild(g.toast),function(){if(g.toast.classList.add("iziToast"),g.toast.classList.add("iziToast-opening"),g.toastCapsule.classList.add("iziToast-capsule"),g.toastBody.classList.add("iziToast-body"),g.toastTexts.classList.add("iziToast-texts"),i||window.innerWidth<=568?n.transitionInMobile&&g.toast.classList.add(n.transitionInMobile):n.transitionIn&&g.toast.classList.add(n.transitionIn),n.class){var t=n.class.split(" ");c(t,function(t,e){g.toast.classList.add(t)})}n.id&&(g.toast.id=n.id),n.rtl&&(g.toast.classList.add("iziToast-rtl"),g.toast.setAttribute("dir","rtl")),n.layout>1&&g.toast.classList.add("iziToast-layout"+n.layout),n.balloon&&g.toast.classList.add("iziToast-balloon"),n.maxWidth&&(isNaN(n.maxWidth)?g.toast.style.maxWidth=n.maxWidth:g.toast.style.maxWidth=n.maxWidth+"px"),""===n.theme&&"light"===n.theme||g.toast.classList.add("iziToast-theme-"+n.theme),n.color&&(function(t){return"#"==t.substring(0,1)||"rgb"==t.substring(0,3)||"hsl"==t.substring(0,3)}(n.color)?g.toast.style.background=n.color:g.toast.classList.add("iziToast-color-"+n.color)),n.backgroundColor&&(g.toast.style.background=n.backgroundColor,n.balloon&&(g.toast.style.borderColor=n.backgroundColor))}(),n.image&&(g.cover.classList.add("iziToast-cover"),g.cover.style.width=n.imageWidth+"px",function(t){try{return btoa(atob(t))==t}catch(t){return!1}}(n.image.replace(/ /g,""))?g.cover.style.backgroundImage="url(data:image/png;base64,"+n.image.replace(/ /g,"")+")":g.cover.style.backgroundImage="url("+n.image+")",n.rtl?g.toastBody.style.marginRight=n.imageWidth+10+"px":g.toastBody.style.marginLeft=n.imageWidth+10+"px",g.toast.appendChild(g.cover)),n.close?(g.buttonClose=document.createElement("button"),g.buttonClose.type="button",g.buttonClose.classList.add("iziToast-close"),g.buttonClose.addEventListener("click",function(t){t.target,o.hide(n,g.toast,"button")}),g.toast.appendChild(g.buttonClose)):n.rtl?g.toast.style.paddingLeft="18px":g.toast.style.paddingRight="18px",n.progressBar&&(g.progressBar=document.createElement("div"),g.progressBarDiv=document.createElement("div"),g.progressBar.classList.add("iziToast-progressbar"),g.progressBarDiv.style.background=n.progressBarColor,g.progressBar.appendChild(g.progressBarDiv),g.toast.appendChild(g.progressBar)),n.timeout&&(n.pauseOnHover&&!n.resetOnHover&&(g.toast.addEventListener("mouseenter",function(t){o.progress(n,g.toast).pause()}),g.toast.addEventListener("mouseleave",function(t){o.progress(n,g.toast).resume()})),n.resetOnHover&&(g.toast.addEventListener("mouseenter",function(t){o.progress(n,g.toast).reset()}),g.toast.addEventListener("mouseleave",function(t){o.progress(n,g.toast).start()}))),n.iconUrl?(g.icon.setAttribute("class","iziToast-icon"),g.icon.setAttribute("src",n.iconUrl)):n.icon&&(g.icon.setAttribute("class","iziToast-icon "+n.icon),n.iconText&&g.icon.appendChild(document.createTextNode(n.iconText)),n.iconColor&&(g.icon.style.color=n.iconColor)),(n.icon||n.iconUrl)&&(n.rtl?g.toastBody.style.paddingRight="33px":g.toastBody.style.paddingLeft="33px",g.toastBody.appendChild(g.icon)),n.title.length>0&&(g.strong=document.createElement("strong"),g.strong.classList.add("iziToast-title"),g.strong.appendChild(p(n.title)),g.toastTexts.appendChild(g.strong),n.titleColor&&(g.strong.style.color=n.titleColor),n.titleSize&&(isNaN(n.titleSize)?g.strong.style.fontSize=n.titleSize:g.strong.style.fontSize=n.titleSize+"px"),n.titleLineHeight&&(isNaN(n.titleSize)?g.strong.style.lineHeight=n.titleLineHeight:g.strong.style.lineHeight=n.titleLineHeight+"px")),n.message.length>0&&(g.p=document.createElement("p"),g.p.classList.add("iziToast-message"),g.p.appendChild(p(n.message)),g.toastTexts.appendChild(g.p),n.messageColor&&(g.p.style.color=n.messageColor),n.messageSize&&(isNaN(n.titleSize)?g.p.style.fontSize=n.messageSize:g.p.style.fontSize=n.messageSize+"px"),n.messageLineHeight&&(isNaN(n.titleSize)?g.p.style.lineHeight=n.messageLineHeight:g.p.style.lineHeight=n.messageLineHeight+"px")),n.title.length>0&&n.message.length>0&&(n.rtl?g.strong.style.marginLeft="10px":2===n.layout||n.rtl||(g.strong.style.marginRight="10px")),g.toastBody.appendChild(g.toastTexts),n.inputs.length>0&&(g.inputs.classList.add("iziToast-inputs"),c(n.inputs,function(t,e){g.inputs.appendChild(p(t[0])),(d=g.inputs.childNodes)[e].classList.add("iziToast-inputs-child"),t[3]&&setTimeout(function(){d[e].focus()},300),d[e].addEventListener(t[1],function(e){return(0,t[2])(o,g.toast,this,e)})}),g.toastBody.appendChild(g.inputs)),n.buttons.length>0&&(g.buttons.classList.add("iziToast-buttons"),c(n.buttons,function(t,e){g.buttons.appendChild(p(t[0]));var i=g.buttons.childNodes;i[e].classList.add("iziToast-buttons-child"),t[2]&&setTimeout(function(){i[e].focus()},300),i[e].addEventListener("click",function(e){return e.preventDefault(),(0,t[1])(o,g.toast,this,e,d)})})),g.toastBody.appendChild(g.buttons),n.message.length>0&&(n.inputs.length>0||n.buttons.length>0)&&(g.p.style.marginBottom="0"),(n.inputs.length>0||n.buttons.length>0)&&(n.rtl?g.toastTexts.style.marginLeft="10px":g.toastTexts.style.marginRight="10px",n.inputs.length>0&&n.buttons.length>0&&(n.rtl?g.inputs.style.marginLeft="8px":g.inputs.style.marginRight="8px")),g.toastCapsule.style.visibility="hidden",setTimeout(function(){var t=g.toast.offsetHeight,e=g.toast.currentStyle||window.getComputedStyle(g.toast),i=e.marginTop;i=i.split("px"),i=parseInt(i[0]);var s=e.marginBottom;s=s.split("px"),s=parseInt(s[0]),g.toastCapsule.style.visibility="",g.toastCapsule.style.height=t+s+i+"px",setTimeout(function(){g.toastCapsule.style.height="auto",n.target&&(g.toastCapsule.style.overflow="visible")},500),n.timeout&&o.progress(n,g.toast).start()},100),function(){var t=n.position;if(n.target)g.wrapper=document.querySelector(n.target),g.wrapper.classList.add("iziToast-target"),n.targetFirst?g.wrapper.insertBefore(g.toastCapsule,g.wrapper.firstChild):g.wrapper.appendChild(g.toastCapsule);else{if(-1==a.indexOf(n.position))return void console.warn("[iziToast] Incorrect position.\nIt can be › "+a);t=i||window.innerWidth<=568?"bottomLeft"==n.position||"bottomRight"==n.position||"bottomCenter"==n.position?"iziToast-wrapper-bottomCenter":"topLeft"==n.position||"topRight"==n.position||"topCenter"==n.position?"iziToast-wrapper-topCenter":"iziToast-wrapper-center":"iziToast-wrapper-"+t,g.wrapper=document.querySelector(".iziToast-wrapper."+t),g.wrapper||(g.wrapper=document.createElement("div"),g.wrapper.classList.add("iziToast-wrapper"),g.wrapper.classList.add(t),document.body.appendChild(g.wrapper)),"topLeft"==n.position||"topCenter"==n.position||"topRight"==n.position?g.wrapper.insertBefore(g.toastCapsule,g.wrapper.firstChild):g.wrapper.appendChild(g.toastCapsule)}isNaN(n.zindex)?console.warn("[iziToast] Invalid zIndex."):g.wrapper.style.zIndex=n.zindex}(),n.overlay&&(null!==document.querySelector(".iziToast-overlay.fadeIn")?(g.overlay=document.querySelector(".iziToast-overlay"),g.overlay.setAttribute("data-iziToast-ref",g.overlay.getAttribute("data-iziToast-ref")+","+n.ref),isNaN(n.zindex)||null===n.zindex||(g.overlay.style.zIndex=n.zindex-1)):(g.overlay.classList.add("iziToast-overlay"),g.overlay.classList.add("fadeIn"),g.overlay.style.background=n.overlayColor,g.overlay.setAttribute("data-iziToast-ref",n.ref),isNaN(n.zindex)||null===n.zindex||(g.overlay.style.zIndex=n.zindex-1),document.querySelector("body").appendChild(g.overlay)),n.overlayClose?(g.overlay.removeEventListener("click",{}),g.overlay.addEventListener("click",function(t){o.hide(n,g.toast,"overlay")})):g.overlay.removeEventListener("click",{})),function(){if(n.animateInside){g.toast.classList.add("iziToast-animateInside");var t=[200,100,300];"bounceInLeft"!=n.transitionIn&&"bounceInRight"!=n.transitionIn||(t=[400,200,400]),n.title.length>0&&setTimeout(function(){g.strong.classList.add("slideIn")},t[0]),n.message.length>0&&setTimeout(function(){g.p.classList.add("slideIn")},t[1]),(n.icon||n.iconUrl)&&setTimeout(function(){g.icon.classList.add("revealIn")},t[2]);var e=150;n.buttons.length>0&&g.buttons&&setTimeout(function(){c(g.buttons.childNodes,function(t,i){setTimeout(function(){t.classList.add("revealIn")},e),e+=150})},n.inputs.length>0?150:0),n.inputs.length>0&&g.inputs&&(e=150,c(g.inputs.childNodes,function(t,i){setTimeout(function(){t.classList.add("revealIn")},e),e+=150}))}}(),n.onOpening.apply(null,[n,g.toast]);try{var v=new CustomEvent("iziToast-opening",{detail:n,bubbles:!0,cancelable:!0});document.dispatchEvent(v)}catch(t){console.warn(t)}setTimeout(function(){g.toast.classList.remove("iziToast-opening"),g.toast.classList.add("iziToast-opened");try{var t=new CustomEvent("iziToast-opened",{detail:n,bubbles:!0,cancelable:!0});document.dispatchEvent(t)}catch(t){console.warn(t)}n.onOpened.apply(null,[n,g.toast])},1e3),n.drag&&(s?(g.toast.addEventListener("touchstart",function(t){m.startMoving(this,o,n,t)},!1),g.toast.addEventListener("touchend",function(t){m.stopMoving(this,t)},!1)):(g.toast.addEventListener("mousedown",function(t){t.preventDefault(),m.startMoving(this,o,n,t)},!1),g.toast.addEventListener("mouseup",function(t){t.preventDefault(),m.stopMoving(this,t)},!1))),n.closeOnEscape&&document.addEventListener("keyup",function(t){27==(t=t||window.event).keyCode&&o.hide(n,g.toast,"esc")}),n.closeOnClick&&g.toast.addEventListener("click",function(t){o.hide(n,g.toast,"toast")}),o.toast=g.toast},e}(),void 0===(s="function"==typeof o?o.apply(e,n):o)||(t.exports=s)}).call(this,i(52))}}]);