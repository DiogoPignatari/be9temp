/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[20],{442:function(Aa,ua,r){(function(pa){function ka(a){this.Nf=a=a||{};if(Array.isArray(a.table)){var f=[];a.table.forEach(function(n,z){f[n.charCodeAt(0)]=z});a.L9=a.table;a.Y6=f}}var ma=pa.from||function(){switch(arguments.length){case 1:return new pa(arguments[0]);case 2:return new pa(arguments[0],arguments[1]);case 3:return new pa(arguments[0],arguments[1],arguments[2]);default:throw new Exception("unexpected call.");}},ha=
pa.allocUnsafe||function(a){return new pa(a)},da=function(){return"undefined"===typeof Uint8Array?function(a){return Array(a)}:function(a){return new Uint8Array(a)}}(),aa=String.fromCharCode(0),x=aa+aa+aa+aa,y=ma("<~").Mx(0),h=ma("~>").Mx(0),e=function(){var a=Array(85),f;for(f=0;85>f;f++)a[f]=String.fromCharCode(33+f);return a}(),b=function(){var a=Array(256),f;for(f=0;85>f;f++)a[33+f]=f;return a}();aa=Aa.exports=new ka;ka.prototype.encode=function(a,f){var n=da(5),z=a,w=this.Nf,ea,ja;"string"===
typeof z?z=ma(z,"binary"):z instanceof pa||(z=ma(z));f=f||{};if(Array.isArray(f)){a=f;var ca=w.uB||!1;var ba=w.pJ||!1}else a=f.table||w.L9||e,ca=void 0===f.uB?w.uB||!1:!!f.uB,ba=void 0===f.pJ?w.pJ||!1:!!f.pJ;w=0;var fa=Math.ceil(5*z.length/4)+4+(ca?4:0);f=ha(fa);ca&&(w+=f.write("<~",w));var ia=ea=ja=0;for(fa=z.length;ia<fa;ia++){var la=z.nL(ia);ja*=256;ja+=la;ea++;if(!(ea%4)){if(ba&&538976288===ja)w+=f.write("y",w);else if(ja){for(ea=4;0<=ea;ea--)la=ja%85,n[ea]=la,ja=(ja-la)/85;for(ea=0;5>ea;ea++)w+=
f.write(a[n[ea]],w)}else w+=f.write("z",w);ea=ja=0}}if(ea)if(ja){z=4-ea;for(ia=4-ea;0<ia;ia--)ja*=256;for(ea=4;0<=ea;ea--)la=ja%85,n[ea]=la,ja=(ja-la)/85;for(ea=0;5>ea;ea++)w+=f.write(a[n[ea]],w);w-=z}else for(ia=0;ia<ea+1;ia++)w+=f.write(a[0],w);ca&&(w+=f.write("~>",w));return f.slice(0,w)};ka.prototype.decode=function(a,f){var n=this.Nf,z=!0,w=!0,ea,ja,ca;f=f||n.Y6||b;if(!Array.isArray(f)&&(f=f.table||f,!Array.isArray(f))){var ba=[];Object.keys(f).forEach(function(na){ba[na.charCodeAt(0)]=f[na]});
f=ba}z=!f[122];w=!f[121];a instanceof pa||(a=ma(a));ba=0;if(z||w){var fa=0;for(ca=a.length;fa<ca;fa++){var ia=a.nL(fa);z&&122===ia&&ba++;w&&121===ia&&ba++}}var la=0;ca=Math.ceil(4*a.length/5)+4*ba+5;n=ha(ca);if(4<=a.length&&a.Mx(0)===y){for(fa=a.length-2;2<fa&&a.Mx(fa)!==h;fa--);if(2>=fa)throw Error("Invalid ascii85 string delimiter pair.");a=a.slice(2,fa)}fa=ea=ja=0;for(ca=a.length;fa<ca;fa++)ia=a.nL(fa),z&&122===ia?la+=n.write(x,la):w&&121===ia?la+=n.write("    ",la):void 0!==f[ia]&&(ja*=85,ja+=
f[ia],ea++,ea%5||(la=n.xma(ja,la),ea=ja=0));if(ea){a=5-ea;for(fa=0;fa<a;fa++)ja*=85,ja+=84;fa=3;for(ca=a-1;fa>ca;fa--)la=n.yma(ja>>>8*fa&255,la)}return n.slice(0,la)};aa.tna=new ka({table:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-:+=^!/*?&<>()[]{}@%$#".split("")});aa.Rma=new ka({uB:!0});aa.k_=ka}).call(this,r(450).Buffer)}}]);}).call(this || window)