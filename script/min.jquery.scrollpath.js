/* jQuery Scroll Path Plugin by Joel Besada (http://joelb.me/scrollpath). Version 1.1, MIT LICENSED */
(function(j,u,s,M){function N(a,b){function C(a,b){g=Math.min(a,g);m=Math.min(b,m);c=Math.max(a,c);f=Math.max(b,f)}var d=0,e=0,o=0,c=0,f=0,g=0,m=0,v=[{method:"moveTo",args:[0,0]}],n=[],s={rotate:null,callback:null,name:null};this.rotate=function(a,C){var k=j.extend({},s,C),h=Math.abs(a-o),h=Math.round(h/b)*p,c=(a-o)/h,r=1;if(F){for(;r<=h;r++)n.push({x:d,y:e,rotate:o+c*r,callback:r===h?k.callback:null,name:r===h?k.name:null});o=a%(2*Math.PI)}else(k.name||k.callback)&&this.moveTo(d,e,{callback:k.callback,
name:k.name})};this.moveTo=function(a,b,k){var h=j.extend({},s,k),c=n.length?p:1;for(i=0;i<c;i++)n.push({x:a,y:b,rotate:null!==h.rotate?h.rotate:o,callback:i===c-1?h.callback:null,name:i===c-1?h.name:null});d=a;e=b;C(a,b);v.push({method:"moveTo",args:arguments})};this.lineTo=function(b,c,k){for(var h=j.extend({},s,k),f=b-d,r=c-e,g=Math.sqrt(f*f+r*r),g=Math.round(g/a)*p,f=f/g,r=r/g,m=null!==h.rotate&&F,l=m?(h.rotate-o)/g:0,t=1;t<=g;t++)n.push({x:d+f*t,y:e+r*t,rotate:o+l*t,callback:t===g?h.callback:
null,name:t===g?h.name:null});o=m?h.rotate:o;d=b;e=c;C(b,c);v.push({method:"lineTo",args:arguments})};this.arc=function(b,c,k,h,g,f,m){var l=j.extend({},s,m),y=b+Math.cos(h)*k,t=c+Math.sin(h)*k,A=b+Math.cos(g)*k,B=c+Math.sin(g)*k,w,x=h;w=g;var u=f,D=G(x),q=G(w),z=Math.abs(D-q),E=2*Math.PI-z;w=u&&D<q||!u&&D>q||D===q&&x!==w?E:z;x=Math.round(k*w/a)*p;w=w/x*(f?-1:1);D=(u=null!==l.rotate&&F)?(l.rotate-o)/x:0;q=1;for((d!==y||e!==t)&&this.lineTo(y,t);q<=x;q++)n.push({x:b+k*Math.cos(h+w*q),y:c+k*Math.sin(h+
w*q),rotate:o+D*q,callback:q===x?l.callback:null,name:q===x?l.name:null});o=u?l.rotate:o;d=A;e=B;C(b+k,c+k);C(b-k,c-k);v.push({method:"arc",args:arguments})};this.getPath=function(){return n};this.getCanvasPath=function(){for(var a=0;a<v.length;a++)v[a].args[0]-=this.getPathOffsetX(),v[a].args[1]-=this.getPathOffsetY();return v};this.getPathWidth=function(){return c-g+40};this.getPathHeight=function(){return f-m+40};this.getPathOffsetX=function(){return g-20};this.getPathOffsetY=function(){return m-
20}}function O(){l.scrollBar&&(g=j("<div>").addClass("sp-scroll-bar").on("click",function(a){var b=Math.round(a.offsetY/g.height()*(e.length-1));5<Math.abs(b-c)&&(b=c+5*p*(b>c?1:-1));m(b);a.preventDefault();return!1}),y=j("<div>").addClass("sp-scroll-handle").on({click:function(a){a.preventDefault();return!1},mousedown:function(a){E=!0;a.preventDefault();return!1}}),j(s).on({mouseup:function(){E=!1},mousemove:function(a){if(E){var a=a.clientY-g.offset().top,a=Math.round(a/g.height()*(e.length-1)),
b=e.length-1,a=a>b?b:0>a?0:a,b=a%p;m(b>p/2?a+p-b:a-b)}}}),j("body").prepend(g.append(y)))}function P(){if(l.drawPath&&Q){var a;a={position:"absolute","z-index":9998,left:f.getPathOffsetX(),top:f.getPathOffsetY(),"pointer-events":"none"};a[n+"user-select"]=a["user-select"]="none";a[n+"user-drag"]=a["user-drag"]="none";a=j("<canvas>").addClass("sp-canvas").css(a).prependTo(z);a[0].width=f.getPathWidth();a[0].height=f.getPathHeight();a=a[0].getContext("2d");var b=f.getCanvasPath(),c=0;a.shadowBlur=15;
a.shadowColor="black";a.strokeStyle="white";a.lineJoin="round";a.lineCap="round";for(a.lineWidth=10;c<b.length;c++)a[b[c].method].apply(a,b[c].args);a.stroke()}}function J(a){var b=a.originalEvent.wheelDelta||-a.originalEvent.detail,b=b/Math.abs(b);a.preventDefault();j(u).scrollTop(0).scrollLeft(0);A(-b*p)}function R(a){if(!/^text/.test(a.target.type))switch(a.keyCode){case 40:A(p);break;case 38:A(-p);break;case 32:A(5*p*(a.shiftKey?-1:1))}}function A(a){m(K(c+a))}function S(a,b,e){if(!(0===a||B)){if(!b)return A(a);
B=!0;var d=b/1E3*T,g=c,f=0,l,n=setInterval(function(){l=Math.round((j.easing[e]||j.easing.swing)(++f/d,b/d*f,0,a,b));m(K(g+l),!0);f===d&&(clearInterval(n),B=!1)},b/d)}}function m(a,b){if(!B||b){var f=e[a].callback;z.css(U(e[a]));y&&y.css("top",a/(e.length-1)*(g.height()-y.height())+"px");f&&a!==c&&f();c=a}}function K(a){if(l.wrapAround)if(B){for(;0>a;)a+=e.length;for(;a>=e.length;)a-=e.length}else 0>a&&(a=e.length-1),a>=e.length&&(a=0);else a=a>e.length-1?e.length-1:0>a?0:a;return a}function U(a){var b=
a.x-j(u).width()/2,c=a.y-j(u).height()/2,d={};0===G(a.rotate)?(d.left=-b,d.top=-c,d[n+"transform-origin"]=d["transform-origin"]="",d[n+"transform"]=d.transform=""):(d.left=d.top="",d[n+"transform-origin"]=d["transform-origin"]=a.x+"px "+a.y+"px",d[n+"transform"]=d.transform="translate("+-b+"px, "+-c+"px) rotate("+a.rotate+"rad)");return d}function G(a){for(;0>a;)a+=2*Math.PI;return a%(2*Math.PI)}var n="-"+function(){var a=/^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,b=s.getElementsByTagName("script")[0],
c;for(c in b.style)if(a.test(c))return c.match(a)[0];return"WebkitOpacity"in b.style?"Webkit":"KhtmlOpacity"in b.style?"Khtml":""}().toLowerCase()+"-",F=function(){for(var a=s.createElement("dummy").style,b="transform,WebkitTransform,MozTransform,OTransform,msTransform,KhtmlTransform".split(","),c=0;c<b.length;c++)if(a[b[c]]!==M)return!0;return!1}(),Q=!!s.createElement("canvas").getContext,T=30,p=10,L=!1,E=!1,B=!1,c,f,e,z,g,y,H={scrollSpeed:50,rotationSpeed:Math.PI/15},l={wrapAround:!1,drawPath:!1,
scrollBar:!0},I={init:function(a){(1<this.length||L)&&j.error("jQuery.scrollPath can only initialized on *one* element *once*");j.extend(l,a);L=!0;z=this;e=f.getPath();P();O();m(0);z.css("position","relative");j(s).on({mousewheel:J,DOMMouseScroll:J,keydown:R});j(u).on("resize",function(){m(c)});return this},getPath:function(a){j.extend(H,a);return f||(f=new N(H.scrollSpeed,H.rotationSpeed))},scrollTo:function(a,b,f){var d;a:{for(d=0;d<e.length;d++)if(e[d].name===a)break a;d=null}null===d&&j.error("jQuery.scrollPath could not find scroll target with name '"+
a+"'");a=d-c;l.wrapAround&&Math.abs(a)>e.length/2&&(a=d>c?-c-e.length+d:e.length-c+d);S(a,b,f)}};j.fn.scrollPath=function(a){if(I[a])return I[a].apply(this,Array.prototype.slice.call(arguments,1));if("object"===typeof a||!a)return I.init.apply(this,arguments);j.error("Method "+a+" does not exist on jQuery.scrollPath")}})(jQuery,window,document);