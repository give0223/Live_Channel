!function(n){var e={};function t(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return n[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,i){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(i,o,function(e){return n[e]}.bind(null,o));return i},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=2)}([function(n,e){n.exports={TITLE:"中文直播頻道"}},function(n,e){n.exports={TITLE:"English Live Channel"}},function(n,e,t){var i,o="zh-TW",a={en:t(1),"zh-TW":t(0)},r={_isloading:!1,channel_Index:0,limit:9};function l(n){$(".contain h1").text(a[n].TITLE),o=n,r.channel_Index=0,$(".channel_row").empty(),c(o,r)}function c(n,e){!function(n,e,t){e._isloading=!0;var i=`https://api.twitch.tv/kraken/streams/?&stream_type=live&language=${n}&limit=${e.limit}&offset=${e.channel_Index}`,o=new XMLHttpRequest;o.open("GET",i,!0),o.setRequestHeader("Client-ID","tlhkyl4jw6dvwl4lamhmcll4aq79ur"),o.onreadystatechange=function(){if(4===this.readyState&&200===this.status){var n=JSON.parse(this.responseText);t(null,n)}},o.send()}(n,e,function(n,e){var t,i=e.streams,o=document.querySelector(".channel_row");i.forEach(n=>{var e=`\n            <div class='col'>\n                <a href='${(t=n).channel.url}' target='_blank' title='${t.channel.status}'>\n                    <div class='preview'>\n                        <img src='${t.preview.medium}'>\n                    </div>\n                    <div class='button'>\n                        <div class='avator'>\n                            <img src='${t.channel.logo}'>\n                        </div>\n                        <div class='intor'>\n                            <div class='channel_name'>\n                                ${t.channel.status}\n                            </div>\n                            <div class='owner_name'>\n                                ${t.channel.display_name}\n                            </div>\n                        </div>\n                    </div>\n                </a>\n            </div>`;o.innerHTML+=e})}),e._isloading=!1,e.channel_Index=e.channel_Index+10,console.log("Data_Obj.channel_Index = "+e.channel_Index)}$(window).ready(function(){c(o,r),$(window).scroll(function(){clearTimeout(i),i=setTimeout(function(){$(window).scrollTop()+$(window).height()>$(document).height()-100&&(r._isloading||(c(o,r),console.log("TW_Obj.channel_Index = "+r.channel_Index)))},500)}),$(".zh-TW").click(function(){l("zh-TW")}),$(".en").click(function(){l("en")})})}]);