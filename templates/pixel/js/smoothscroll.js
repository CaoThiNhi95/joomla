!function(){function m(){b.keyboardSupport&&F("keydown",u)}function n(){if(!f&&document.body){f=!0;var a=document.body,e=document.documentElement,j=window.innerHeight,k=a.scrollHeight;if(g=document.compatMode.indexOf("CSS")>=0?e:a,h=a,m(),top!=self)d=!0;else if(k>j&&(a.offsetHeight<=j||e.offsetHeight<=j)){var l=document.createElement("div");l.style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+g.scrollHeight+"px",document.body.appendChild(l);var n,o=function(){n||(n=setTimeout(function(){c||(l.style.height="0",l.style.height=g.scrollHeight+"px",n=null)},500))};setTimeout(o,10);var p={attributes:!0,childList:!0,characterData:!1};if(i=new P(o),i.observe(a,p),g.offsetHeight<=j){var q=document.createElement("div");q.style.clear="both",a.appendChild(q)}}b.fixedBackground||c||(a.style.backgroundAttachment="scroll",e.style.backgroundAttachment="scroll")}}function s(a,c,d){if(I(c,d),1!=b.accelerationMax){var e=Date.now(),f=e-r;if(f<b.accelerationDelta){var g=(1+50/f)/2;g>1&&(g=Math.min(g,b.accelerationMax),c*=g,d*=g)}r=Date.now()}if(p.push({x:c,y:d,lastX:c<0?.99:-.99,lastY:d<0?.99:-.99,start:Date.now()}),!q){var h=a===document.body,i=function(e){for(var f=Date.now(),g=0,j=0,k=0;k<p.length;k++){var l=p[k],m=f-l.start,n=m>=b.animationTime,o=n?1:m/b.animationTime;b.pulseAlgorithm&&(o=S(o));var r=l.x*o-l.lastX>>0,s=l.y*o-l.lastY>>0;g+=r,j+=s,l.lastX+=r,l.lastY+=s,n&&(p.splice(k,1),k--)}h?window.scrollBy(g,j):(g&&(a.scrollLeft+=g),j&&(a.scrollTop+=j)),c||d||(p=[]),p.length?O(i,a,1e3/b.frameRate+1):q=!1};O(i,a,0),q=!0}}function t(a){f||n();var c=a.target,d=B(c);if(!d||a.defaultPrevented||a.ctrlKey)return!0;if(H(h,"embed")||H(c,"embed")&&/\.pdf/i.test(c.src)||H(h,"object"))return!0;var e=-a.wheelDeltaX||a.deltaX||0,g=-a.wheelDeltaY||a.deltaY||0;return k&&(a.wheelDeltaX&&L(a.wheelDeltaX,120)&&(e=-120*(a.wheelDeltaX/Math.abs(a.wheelDeltaX))),a.wheelDeltaY&&L(a.wheelDeltaY,120)&&(g=-120*(a.wheelDeltaY/Math.abs(a.wheelDeltaY)))),e||g||(g=-a.wheelDelta||0),1===a.deltaMode&&(e*=40,g*=40),!(b.touchpadSupport||!K(g))||(Math.abs(e)>1.2&&(e*=b.stepSize/120),Math.abs(g)>1.2&&(g*=b.stepSize/120),s(d,e,g),a.preventDefault(),void z())}function u(a){var c=a.target,d=a.ctrlKey||a.altKey||a.metaKey||a.shiftKey&&a.keyCode!==l.spacebar;document.contains(h)||(h=document.activeElement);var e=/^(textarea|select|embed|object)$/i,f=/^(button|submit|radio|checkbox|file|color|image)$/i;if(e.test(c.nodeName)||H(c,"input")&&!f.test(c.type)||H(h,"video")||N(a)||c.isContentEditable||a.defaultPrevented||d)return!0;if((H(c,"button")||H(c,"input")&&f.test(c.type))&&a.keyCode===l.spacebar)return!0;var g,i=0,j=0,k=B(h),m=k.clientHeight;switch(k==document.body&&(m=window.innerHeight),a.keyCode){case l.up:j=-b.arrowScroll;break;case l.down:j=b.arrowScroll;break;case l.spacebar:g=a.shiftKey?1:-1,j=-g*m*.9;break;case l.pageup:j=.9*-m;break;case l.pagedown:j=.9*m;break;case l.home:j=-k.scrollTop;break;case l.end:var n=k.scrollHeight-k.scrollTop-m;j=n>0?n+10:0;break;case l.left:i=-b.arrowScroll;break;case l.right:i=b.arrowScroll;break;default:return!0}s(k,i,j),a.preventDefault(),z()}function v(a){h=a.target}function z(){clearTimeout(y),y=setInterval(function(){x={}},1e3)}function A(a,b){for(var c=a.length;c--;)x[w(a[c])]=b;return b}function B(a){var b=[],c=document.body,e=g.scrollHeight;do{var f=x[w(a)];if(f)return A(b,f);if(b.push(a),e===a.scrollHeight){var h=D(g)&&D(c),i=h||E(g);if(d&&C(g)||!d&&i)return A(b,Q())}else if(C(a)&&E(a))return A(b,a)}while(a=a.parentElement)}function C(a){return a.clientHeight+10<a.scrollHeight}function D(a){var b=getComputedStyle(a,"").getPropertyValue("overflow-y");return"hidden"!==b}function E(a){var b=getComputedStyle(a,"").getPropertyValue("overflow-y");return"scroll"===b||"auto"===b}function F(a,b){window.addEventListener(a,b,!1)}function H(a,b){return(a.nodeName||"").toLowerCase()===b.toLowerCase()}function I(a,b){a=a>0?1:-1,b=b>0?1:-1,e.x===a&&e.y===b||(e.x=a,e.y=b,p=[],r=0)}function K(a){if(a)return j.length||(j=[a,a,a]),a=Math.abs(a),j.push(a),j.shift(),clearTimeout(J),J=setTimeout(function(){window.localStorage&&(localStorage.SS_deltaBuffer=j.join(","))},1e3),!M(120)&&!M(100)}function L(a,b){return Math.floor(a/b)==a/b}function M(a){return L(j[0],a)&&L(j[1],a)&&L(j[2],a)}function N(a){var b=a.target,c=!1;if(document.URL.indexOf("www.youtube.com/watch")!=-1)do if(c=b.classList&&b.classList.contains("html5-video-controls"))break;while(b=b.parentNode);return c}function R(a){var c,d,e;return a*=b.pulseScale,a<1?c=a-(1-Math.exp(-a)):(d=Math.exp(-1),a-=1,e=1-Math.exp(-a),c=d+e*(1-d)),c*b.pulseNormalize}function S(a){return a>=1?1:a<=0?0:(1==b.pulseNormalize&&(b.pulseNormalize/=R(1)),R(a))}var h,i,y,J,a={frameRate:150,animationTime:400,stepSize:120,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,accelerationDelta:20,accelerationMax:1,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!0,fixedBackground:!0,excluded:""},b=a,c=!1,d=!1,e={x:0,y:0},f=!1,g=document.documentElement,j=[],k=/^Mac/.test(navigator.platform),l={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},b=a,p=[],q=!1,r=Date.now(),w=function(){var a=0;return function(b){return b.uniqueID||(b.uniqueID=a++)}}(),x={};window.localStorage&&localStorage.SS_deltaBuffer&&(j=localStorage.SS_deltaBuffer.split(","));var T,O=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a,b,c){window.setTimeout(a,c||1e3/60)}}(),P=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,Q=function(){var a;return function(){if(!a){var b=document.createElement("div");b.style.cssText="height:10000px;width:1px;",document.body.appendChild(b);var c=document.body.scrollTop;document.documentElement.scrollTop;window.scrollBy(0,1),a=document.body.scrollTop!=c?document.body:document.documentElement,window.scrollBy(0,-1),document.body.removeChild(b)}return a}}();"onwheel"in document.createElement("div")?T="wheel":"onmousewheel"in document.createElement("div")&&(T="mousewheel"),T&&(F(T,t),F("mousedown",v),F("load",n))}();