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
(window.webpackJsonp3870=window.webpackJsonp3870||[]).push([[15],{468:function(t,n,e){"use strict";var o=e(474),a=e(476);function r(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=[],o=!0,a=!1,r=void 0;try{for(var c,u=t[Symbol.iterator]();!(o=(c=u.next()).done)&&(e.push(c.value),!n||e.length!==n);o=!0);}catch(t){a=!0,r=t}finally{try{o||null==u.return||u.return()}finally{if(a)throw r}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var c={data:function(){return{display:!1}},computed:{config:function(){return this.$store.getters[this.code+"/config"]},text:function(){return this.$store.getters[this.code+"/text"]},globalStaticData:function(){return this.$store.getters[this.code+"/staticData"]},globalMarketData:function(){return this.$store.getters[this.code+"/marketData"]},code:function(){return this.$root.code},type:function(){return this.$attrs.type},api:function(){return this.$attrs.api},realtime:function(){return this.checkBoolean(this.$attrs.realtime)},assets:function(){var t=[];if(this.config.assetRecognitionRegexp){var n=new RegExp(this.config.assetRecognitionRegexp,"i"),e=location.href.replace(this.config.websiteUrl+"/","").match(n);e&&void 0!==e[1]&&void 0!==e[2]&&(t=[e[1].toUpperCase()+"~"+e[2].toUpperCase()])}return 0==t.length&&void 0!==this.$attrs.assets&&(t=this.$attrs.assets.toString().split(",")),t},from:function(){return this.assets.length?this.assets.map(function(t){return t.split("~")[0]}):[]},to:function(){return this.assets.length?this.assets.map(function(t){return t.split("~")[1]}):[]},assetsSubscription:function(){var t={type:this.marketDataType,subType:this.marketDataSubType,assets:this.assets,api:this.api,realtime:this.realtime};return"order-book"==this.marketDataType?t.exchange=this.$attrs.exchange:"rankings"==this.marketDataType&&"table-rankings"==this.type?(t.currency=this.$attrs.currency,t.page=1,t.limit=parseInt(this.$attrs.rows_per_page,10)):"rankings"==this.marketDataType&&"treemap"==this.type&&(t.page=1,t.limit=2e3),t},fields:function(){return this.$attrs.fields?this.$attrs.fields.split(","):[]},animation:function(){return this.$attrs.animation},classes:function(){return[this.code+"-"+this.$attrs.type,this.code+"-"+this.$attrs.template,this.code+"-"+this.$attrs.color]},classesWithIndicator:function(){var t=this.classes,n=this.quoteValue(this.assets[0],"change_abs_24h"),e=n<0?this.code+"-down":n>0?this.code+"-up":"";return e&&-1==t.indexOf(e)&&t.push(e),t},marketDataLoaded:function(){var t=this,n=!1;if("table-history"==this.type||"chart"==this.type){var e=this.marketData(this.assets[0]);n=!!(e&&e.length>1&&e[0].period==this.$attrs.period)}else if("table-trades"==this.type||"table-exchanges-quotes"==this.type)n=!!this.marketData(this.assets[0]);else if(["table-rankings","table-exchanges","table-wallets","table-mining-pools","order-book","treemap","ticker-news","typed-news","news-block"].indexOf(this.type)>-1)n=!!this.marketData();else if("button-link"==this.type&&"rankings"==this.marketDataType)n=!0;else if("info"==this.type)n=!0;else if("geomap"==this.type){var o=0;this.assets.forEach(function(n){o+=t.quoteValue(n,"asset")==n?1:0}),n=o>100}else{o=0;this.assets.forEach(function(n){o+=t.quoteValue(n,"asset")==n?1:0}),n=o==this.assets.length}return n},isChildWidget:function(){return void 0!==this.$parent.$parent.$parent&&void 0!==this.$parent.$parent.$parent.api},marketDataType:function(){return"table-history"==this.type||"chart"==this.type?"history":"table-trades"==this.type?"trades":"table-rankings"==this.type||"treemap"==this.type?"rankings":"table-exchanges"==this.type?"exchanges":"table-exchanges-quotes"==this.type?"exchanges-quotes":"table-wallets"==this.type?"wallets":"table-mining-pools"==this.type?"mining-pools":"order-book"==this.type?"order-book":"ticker-news"==this.type||"typed-news"==this.type||"news-block"==this.type?"news":"button-link"==this.type&&this.isChildWidget?this.$parent.$parent.$parent.marketDataType:"quotes"},marketDataSubType:function(){return"history"==this.marketDataType?this.$attrs.period:"live"}},methods:{checkBoolean:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return void 0===t&&n||"boolean"==typeof t&&t||"string"==typeof t&&"true"==t},symbolFrom:function(t){var n=r(t.split("~"),2),e=n[0];n[1];return e},symbolTo:function(t){var n=r(t.split("~"),2);n[0];return n[1]},staticData:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return n?this.globalStaticData[t][n]||{}:this.globalStaticData[t]},staticDataValue:function(t,n,e){var o=this.staticData(t,n);return o&&void 0!==o[e]?o[e]:""},coinValue:function(t,n){return this.staticDataValue("coins",t,n)},marketData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=null;return void 0!==this.globalMarketData[this.api]&&void 0!==this.globalMarketData[this.api][this.marketDataType]&&void 0!==this.globalMarketData[this.api][this.marketDataType][this.marketDataSubType]&&(n=null!==t?this.globalMarketData[this.api][this.marketDataType][this.marketDataSubType][t]||null:this.globalMarketData[this.api][this.marketDataType][this.marketDataSubType]),n},quoteValue:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=this.marketData(t);return o?null!==e&&void 0!==o[e]?o[e][n]||"":o[n]:""},quoteValueFormatted:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=new o.a,c=new a.a,u=this.quoteValue(t,n,e);return["price","change_abs","change_abs_24h","open","high","low","close","open_24h","high_24h","low_24h","last_volume_from","volume_from","vwap"].indexOf(n)>-1?u=r.variableDecimal(u):["change_pct","change_pct_24h","total_volume_pct"].indexOf(n)>-1?u=r.percentage(u):["supply","market_cap","volume_day_to","volume_24h_to","volume_to","total_volume_24h_to"].indexOf(n)>-1?u=r.bigNumber(u):["last_volume_to","volume_day_from","volume_24h_from","volume_from","total_volume_24h_from"].indexOf(n)>-1?u=r.decimal(u):"last_update"==n?u=c.long(1e3*u):"date_time"==n?u=c.date(1e3*u):"last_update_ago"==n&&(u=c.ago(1e3*this.quoteValue(t,"last_update",e))),u},sortValue:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return["name","logo_name","logo_name_link"].indexOf(n)>-1?this.coinValue(this.symbolFrom(t),"name"):n.match(/^portfolio_/)?this.portfolioValue(t,e,n):"last_update_ago"==n?this.quoteValue(t,"last_update",e):this.quoteValue(t,n,e)},subscribeMarketData:function(t){this.$store.dispatch(this.code+"/subscribeMarketData",t||this.assetsSubscription)},unsubscribeMarketData:function(t){this.$store.dispatch(this.code+"/unsubscribeMarketData",{type:this.marketDataType,subType:this.marketDataSubType,assets:t,api:this.api})},disconnectDataSourcesAndClearMarketData:function(){this.$store.dispatch(this.code+"/disconnectDataSourcesAndClearMarketData")},translate:function(t){return void 0!==this.text[t]?this.text[t]:t}},created:function(){var t=this;this.$on("data-loaded",function(){t.display=!0,t.$nextTick(function(){"function"==typeof t.onDataLoaded&&t.onDataLoaded()})}),this.marketDataLoaded?this.$emit("data-loaded",{widgetType:this.type,eventType:"WIDGET_INIT_DATA_AVAILABLE"}):this.subscribeMarketData(),this.$watch("marketDataLoaded",function(n,e){!e&&n&&t.$emit("data-loaded",{widgetType:t.type,eventType:"WIDGET_INIT_DATA_LOADED"})}),this.$watch("$attrs.assets",function(n,e){t.marketDataLoaded?t.$emit("data-loaded",{widgetType:t.type,eventType:"ASSETS_CHANGE_DATA_AVAILABLE"}):(t.display=!1,!t.api||t.isChildWidget&&"button-link"==t.type||(t.unsubscribeMarketData(e.split(",")),t.subscribeMarketData()))}),this.$watch("$attrs.realtime",function(n,e){e&&t.unsubscribeMarketData(t.assets),t.subscribeMarketData()}),this.$watch("$attrs.currency",function(){"table-rankings"==t.type&&t.subscribeMarketData()}),this.$watch("$attrs.rows_per_page",function(){"table-rankings"==t.type&&(t.disconnectDataSourcesAndClearMarketData(),t.subscribeMarketData())})}},u=e(1),i=Object(u.a)(c,void 0,void 0,!1,null,null,null);i.options.__file="assets/js/src/components/widgets/_mixins/template.vue";n.a=i.exports},474:function(t,n,e){"use strict";e.d(n,"a",function(){return r});var o=e(70),a=e.n(o);function r(){var t=function(t){var n=a()(t).format("0,0.00");return"NaN"!==n?n:parseFloat(t).toFixed(2)};return{integer:function(t){return a()(t).format("0,0")},decimal:t,percentage:function(n){return t(n)+"%"},variableDecimal:function(t){var n,e=a()(t),o=Math.abs(e.value());o>=10?n="0,0.00":0==o?n="0.00":.1<=o&&o<10?n="0.0000":o<.1&&(n="0.00000000");var r=e.format(n);return"NaN"!==r?r:parseFloat(t).toFixed(8)},bigNumber:function(t){return a()(t).format("0,0.00a").toUpperCase()},compareNumbers:function(t,n){var e,o;if("number"==typeof t&&"number"==typeof n)e=t,o=n;else{var r=a()(1.1).format("0.0").substring(1,2),c=a()(1e3).format("0,0").substring(1,2);"."==c&&(t=t.replace(c,""),n=n.replace(c,"")),"."!=r&&(t=t.replace(r,"."),n=n.replace(r,".")),e=parseFloat(t.replace(/[^0-9.-]/g,"")),o=parseFloat(n.replace(/[^0-9.-]/g,""))}return t&&n&&!isNaN(e)&&!isNaN(o)?e>o?1:e<o?-1:0:t.localeCompare(n)}}}},475:function(t,n,e){"use strict";var o={computed:{template:function(){return this.$attrs.template}}},a=e(1),r=Object(a.a)(o,void 0,void 0,!1,null,null,null);r.options.__file="assets/js/src/components/widgets/_mixins/widget-type.vue";n.a=r.exports},476:function(t,n,e){"use strict";e.d(n,"a",function(){return r});var o=e(97),a=e.n(o);function r(){return{date:function(t){return a()(t).format("ll")},time:function(t){return a()(t).format("H:mm")},long:function(t){return a()(t).format("LLL")},ago:function(t){return a()(t).fromNow()}}}},479:function(t,n,e){"use strict";function o(){var t={USD:"$",AUD:"$",BRL:"R$",CAD:"$",CNY:"¥",EUR:"€",EGP:"£",GBP:"£",INR:"₹",ILS:"₪",IDR:"Rp",JPY:"¥",KPW:"₩",KRW:"₩",PLN:"zł",RUB:"₽",UAH:"₴",QAR:"﷼",BTC:"Ƀ",LTC:"Ł",DAO:"Ð",ETH:"Ξ",GOLD:"Gold g"};return{sign:function(n){return t[n]||n}}}e.d(n,"a",function(){return o})},483:function(t,n,e){"use strict";e.d(n,"a",function(){return r});var o=e(484);function a(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function r(){var t=function(t){return"string"==typeof t&&void 0!==o[t]?o[t]:t};return{nameToHex:t,hexToRgb:function(t,n){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?"rgba("+parseInt(e[1],16)+","+parseInt(e[2],16)+","+parseInt(e[3],16)+","+n+")":"rgba(0,0,0,1)"},gradient:function(n,e,o,r){var c,u=u=[0,0,0,o];"bottom to top"==e?u=[0,o,0,0]:"left to right"==e?u=[0,0,o,0]:"right to left"==e&&(u=[o,0,0,0]);var i=(c=n.getContext("2d")).createLinearGradient.apply(c,a(u)),s=r.length;return r.forEach(function(n,e){i.addColorStop(e/s,t(n))}),i},shadeBlend:function(t,n,e){if("number"!=typeof t||t<-1||t>1||"string"!=typeof n||"r"!=n[0]&&"#"!=n[0]||e&&"string"!=typeof e)return null;this.sbcRip||(this.sbcRip=function(t){var n=t.length,e={};if(n>9){if((t=t.split(",")).length<3||t.length>4)return null;e[0]=o(t[0].split("(")[1]),e[1]=o(t[1]),e[2]=o(t[2]),e[3]=t[3]?parseFloat(t[3]):-1}else{if(8==n||6==n||n<4)return null;n<6&&(t="#"+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+(n>4?t[4]+""+t[4]:"")),t=o(t.slice(1),16),e[0]=t>>16&255,e[1]=t>>8&255,e[2]=255&t,e[3]=-1,9!=n&&5!=n||(e[3]=a(e[2]/255*1e4)/1e4,e[2]=e[1],e[1]=e[0],e[0]=t>>24&255)}return e});var o=parseInt,a=Math.round,r=n.length>9,c=(r="string"==typeof e?e.length>9||"c"==e&&!r:r,t<0),u=(t=c?-1*t:t,e=e&&"c"!=e?e:c?"#000000":"#FFFFFF",this.sbcRip(n)),i=this.sbcRip(e);return u&&i?r?"rgb"+(u[3]>-1||i[3]>-1?"a(":"(")+a((i[0]-u[0])*t+u[0])+","+a((i[1]-u[1])*t+u[1])+","+a((i[2]-u[2])*t+u[2])+(u[3]<0&&i[3]<0?")":","+(u[3]>-1&&i[3]>-1?a(1e4*((i[3]-u[3])*t+u[3]))/1e4:i[3]<0?u[3]:i[3])+")"):"#"+(4294967296+16777216*a((i[0]-u[0])*t+u[0])+65536*a((i[1]-u[1])*t+u[1])+256*a((i[2]-u[2])*t+u[2])+(u[3]>-1&&i[3]>-1?a(255*((i[3]-u[3])*t+u[3])):i[3]>-1?a(255*i[3]):u[3]>-1?a(255*u[3]):255)).toString(16).slice(1,u[3]>-1||i[3]>-1?void 0:-2):null}}}},484:function(t){t.exports={default:"#d4d4d5",red:"#DB2828",maroon:"#85144b",orange:"#F2711C",yellow:"#FBBD08",olive:"#B5CC18",green:"#21BA45",teal:"#00B5AD",blue:"#2185D0",aqua:"#7FDBFF",navy:"#001f3f",purple:"#A333C8",violet:"#6435C9",pink:"#E03997",brown:"#A5673F",grey:"#767676",black:"#000000"}},489:function(t,n,e){"use strict";e.d(n,"a",function(){return a});const o=Symbol("loadScript");let a=new class{[o](){return this.scriptPromise||(this.scriptPromise=new Promise(t=>{const n=document.getElementsByTagName("body")[0],e=document.createElement("script");e.type="text/javascript",e.onload=function(){a.api=window.google,a.api.charts.load("current",{packages:["corechart","table"]}),a.api.charts.setOnLoadCallback(()=>{t()})},e.src="https://www.gstatic.com/charts/loader.js",n.appendChild(e)})),this.scriptPromise}load(t,n){return this[o]().then(()=>{if(n){let e={};e=n instanceof Object?n:Array.isArray(n)?{packages:n}:{packages:[n]},this.api.charts.load("current",e),this.api.charts.setOnLoadCallback(t)}else t()})}}},548:function(t){t.exports={BDT:[{country_code:"BD",country_name:"Bangladesh"}],EUR:[{country_code:"BE",country_name:"Belgium"},{country_code:"BL",country_name:"Saint Barthelemy"},{country_code:"RE",country_name:"Reunion"},{country_code:"GR",country_name:"Greece"},{country_code:"GP",country_name:"Guadeloupe"},{country_code:"GF",country_name:"French Guiana"},{country_code:"PT",country_name:"Portugal"},{country_code:"PM",country_name:"Saint Pierre and Miquelon"},{country_code:"EE",country_name:"Estonia"},{country_code:"IT",country_name:"Italy"},{country_code:"ES",country_name:"Spain"},{country_code:"ME",country_name:"Montenegro"},{country_code:"MF",country_name:"Saint Martin"},{country_code:"MC",country_name:"Monaco"},{country_code:"MT",country_name:"Malta"},{country_code:"MQ",country_name:"Martinique"},{country_code:"FR",country_name:"France"},{country_code:"FI",country_name:"Finland"},{country_code:"NL",country_name:"Netherlands"},{country_code:"XK",country_name:"Kosovo"},{country_code:"CY",country_name:"Cyprus"},{country_code:"SK",country_name:"Slovakia"},{country_code:"SI",country_name:"Slovenia"},{country_code:"SM",country_name:"San Marino"},{country_code:"DE",country_name:"Germany"},{country_code:"YT",country_name:"Mayotte"},{country_code:"LV",country_name:"Latvia"},{country_code:"LU",country_name:"Luxembourg"},{country_code:"TF",country_name:"French Southern Territories"},{country_code:"VA",country_name:"Vatican"},{country_code:"AD",country_name:"Andorra"},{country_code:"AT",country_name:"Austria"},{country_code:"AX",country_name:"Aland Islands"},{country_code:"IE",country_name:"Ireland"}],XOF:[{country_code:"BF",country_name:"Burkina Faso"},{country_code:"BJ",country_name:"Benin"},{country_code:"GW",country_name:"Guinea-Bissau"},{country_code:"ML",country_name:"Mali"},{country_code:"NE",country_name:"Niger"},{country_code:"CI",country_name:"Ivory Coast"},{country_code:"SN",country_name:"Senegal"},{country_code:"TG",country_name:"Togo"}],BGN:[{country_code:"BG",country_name:"Bulgaria"}],BAM:[{country_code:"BA",country_name:"Bosnia and Herzegovina"}],BBD:[{country_code:"BB",country_name:"Barbados"}],XPF:[{country_code:"WF",country_name:"Wallis and Futuna"},{country_code:"PF",country_name:"French Polynesia"},{country_code:"NC",country_name:"New Caledonia"}],BMD:[{country_code:"BM",country_name:"Bermuda"}],BND:[{country_code:"BN",country_name:"Brunei"}],BOB:[{country_code:"BO",country_name:"Bolivia"}],BHD:[{country_code:"BH",country_name:"Bahrain"}],BIF:[{country_code:"BI",country_name:"Burundi"}],BTN:[{country_code:"BT",country_name:"Bhutan"}],JMD:[{country_code:"JM",country_name:"Jamaica"}],NOK:[{country_code:"BV",country_name:"Bouvet Island"},{country_code:"SJ",country_name:"Svalbard and Jan Mayen"},{country_code:"NO",country_name:"Norway"}],BWP:[{country_code:"BW",country_name:"Botswana"}],WST:[{country_code:"WS",country_name:"Samoa"}],USD:[{country_code:"BQ",country_name:"Bonaire, Saint Eustatius and Saba "},{country_code:"TL",country_name:"East Timor"},{country_code:"GU",country_name:"Guam"},{country_code:"SV",country_name:"El Salvador"},{country_code:"PR",country_name:"Puerto Rico"},{country_code:"PW",country_name:"Palau"},{country_code:"EC",country_name:"Ecuador"},{country_code:"MH",country_name:"Marshall Islands"},{country_code:"MP",country_name:"Northern Mariana Islands"},{country_code:"IO",country_name:"British Indian Ocean Territory"},{country_code:"FM",country_name:"Micronesia"},{country_code:"VG",country_name:"British Virgin Islands"},{country_code:"US",country_name:"United States"},{country_code:"UM",country_name:"United States Minor Outlying Islands"},{country_code:"TC",country_name:"Turks and Caicos Islands"},{country_code:"VI",country_name:"U.S. Virgin Islands"},{country_code:"AS",country_name:"American Samoa"}],BRL:[{country_code:"BR",country_name:"Brazil"}],BSD:[{country_code:"BS",country_name:"Bahamas"}],GBP:[{country_code:"JE",country_name:"Jersey"},{country_code:"GS",country_name:"South Georgia and the South Sandwich Islands"},{country_code:"GG",country_name:"Guernsey"},{country_code:"GB",country_name:"United Kingdom"},{country_code:"IM",country_name:"Isle of Man"}],BYN:[{country_code:"BY",country_name:"Belarus"}],BZD:[{country_code:"BZ",country_name:"Belize"}],RUB:[{country_code:"RU",country_name:"Russia"}],RWF:[{country_code:"RW",country_name:"Rwanda"}],RSD:[{country_code:"RS",country_name:"Serbia"}],TMT:[{country_code:"TM",country_name:"Turkmenistan"}],TJS:[{country_code:"TJ",country_name:"Tajikistan"}],RON:[{country_code:"RO",country_name:"Romania"}],NZD:[{country_code:"TK",country_name:"Tokelau"},{country_code:"PN",country_name:"Pitcairn"},{country_code:"NZ",country_name:"New Zealand"},{country_code:"NU",country_name:"Niue"},{country_code:"CK",country_name:"Cook Islands"}],GTQ:[{country_code:"GT",country_name:"Guatemala"}],XAF:[{country_code:"GQ",country_name:"Equatorial Guinea"},{country_code:"GA",country_name:"Gabon"},{country_code:"CM",country_name:"Cameroon"},{country_code:"CG",country_name:"Republic of the Congo"},{country_code:"CF",country_name:"Central African Republic"},{country_code:"TD",country_name:"Chad"}],JPY:[{country_code:"JP",country_name:"Japan"}],GYD:[{country_code:"GY",country_name:"Guyana"}],GEL:[{country_code:"GE",country_name:"Georgia"}],XCD:[{country_code:"GD",country_name:"Grenada"},{country_code:"MS",country_name:"Montserrat"},{country_code:"KN",country_name:"Saint Kitts and Nevis"},{country_code:"DM",country_name:"Dominica"},{country_code:"LC",country_name:"Saint Lucia"},{country_code:"VC",country_name:"Saint Vincent and the Grenadines"},{country_code:"AG",country_name:"Antigua and Barbuda"},{country_code:"AI",country_name:"Anguilla"}],GNF:[{country_code:"GN",country_name:"Guinea"}],GMD:[{country_code:"GM",country_name:"Gambia"}],DKK:[{country_code:"GL",country_name:"Greenland"},{country_code:"FO",country_name:"Faroe Islands"},{country_code:"DK",country_name:"Denmark"}],GIP:[{country_code:"GI",country_name:"Gibraltar"}],GHS:[{country_code:"GH",country_name:"Ghana"}],OMR:[{country_code:"OM",country_name:"Oman"}],TND:[{country_code:"TN",country_name:"Tunisia"}],JOD:[{country_code:"JO",country_name:"Jordan"}],HRK:[{country_code:"HR",country_name:"Croatia"}],HTG:[{country_code:"HT",country_name:"Haiti"}],HUF:[{country_code:"HU",country_name:"Hungary"}],HKD:[{country_code:"HK",country_name:"Hong Kong"}],HNL:[{country_code:"HN",country_name:"Honduras"}],AUD:[{country_code:"HM",country_name:"Heard Island and McDonald Islands"},{country_code:"NF",country_name:"Norfolk Island"},{country_code:"NR",country_name:"Nauru"},{country_code:"CC",country_name:"Cocos Islands"},{country_code:"CX",country_name:"Christmas Island"},{country_code:"KI",country_name:"Kiribati"},{country_code:"TV",country_name:"Tuvalu"},{country_code:"AU",country_name:"Australia"}],VEF:[{country_code:"VE",country_name:"Venezuela"}],ILS:[{country_code:"PS",country_name:"Palestinian Territory"},{country_code:"IL",country_name:"Israel"}],PYG:[{country_code:"PY",country_name:"Paraguay"}],IQD:[{country_code:"IQ",country_name:"Iraq"}],PAB:[{country_code:"PA",country_name:"Panama"}],PGK:[{country_code:"PG",country_name:"Papua New Guinea"}],PEN:[{country_code:"PE",country_name:"Peru"}],PKR:[{country_code:"PK",country_name:"Pakistan"}],PHP:[{country_code:"PH",country_name:"Philippines"}],PLN:[{country_code:"PL",country_name:"Poland"}],ZMW:[{country_code:"ZM",country_name:"Zambia"}],MAD:[{country_code:"EH",country_name:"Western Sahara"},{country_code:"MA",country_name:"Morocco"}],EGP:[{country_code:"EG",country_name:"Egypt"}],ZAR:[{country_code:"ZA",country_name:"South Africa"}],VND:[{country_code:"VN",country_name:"Vietnam"}],SBD:[{country_code:"SB",country_name:"Solomon Islands"}],ETB:[{country_code:"ET",country_name:"Ethiopia"}],SOS:[{country_code:"SO",country_name:"Somalia"}],ZWL:[{country_code:"ZW",country_name:"Zimbabwe"}],SAR:[{country_code:"SA",country_name:"Saudi Arabia"}],ERN:[{country_code:"ER",country_name:"Eritrea"}],MDL:[{country_code:"MD",country_name:"Moldova"}],MGA:[{country_code:"MG",country_name:"Madagascar"}],UZS:[{country_code:"UZ",country_name:"Uzbekistan"}],MMK:[{country_code:"MM",country_name:"Myanmar"}],MOP:[{country_code:"MO",country_name:"Macao"}],MNT:[{country_code:"MN",country_name:"Mongolia"}],MKD:[{country_code:"MK",country_name:"Macedonia"}],MUR:[{country_code:"MU",country_name:"Mauritius"}],MWK:[{country_code:"MW",country_name:"Malawi"}],MVR:[{country_code:"MV",country_name:"Maldives"}],MRO:[{country_code:"MR",country_name:"Mauritania"}],UGX:[{country_code:"UG",country_name:"Uganda"}],TZS:[{country_code:"TZ",country_name:"Tanzania"}],MYR:[{country_code:"MY",country_name:"Malaysia"}],MXN:[{country_code:"MX",country_name:"Mexico"}],SHP:[{country_code:"SH",country_name:"Saint Helena"}],FJD:[{country_code:"FJ",country_name:"Fiji"}],FKP:[{country_code:"FK",country_name:"Falkland Islands"}],NIO:[{country_code:"NI",country_name:"Nicaragua"}],NAD:[{country_code:"NA",country_name:"Namibia"}],VUV:[{country_code:"VU",country_name:"Vanuatu"}],NGN:[{country_code:"NG",country_name:"Nigeria"}],NPR:[{country_code:"NP",country_name:"Nepal"}],CHF:[{country_code:"CH",country_name:"Switzerland"},{country_code:"LI",country_name:"Liechtenstein"}],COP:[{country_code:"CO",country_name:"Colombia"}],CNY:[{country_code:"CN",country_name:"China"}],CLP:[{country_code:"CL",country_name:"Chile"}],CAD:[{country_code:"CA",country_name:"Canada"}],CDF:[{country_code:"CD",country_name:"Democratic Republic of the Congo"}],CZK:[{country_code:"CZ",country_name:"Czech Republic"}],CRC:[{country_code:"CR",country_name:"Costa Rica"}],ANG:[{country_code:"CW",country_name:"Curacao"},{country_code:"SX",country_name:"Sint Maarten"}],CVE:[{country_code:"CV",country_name:"Cape Verde"}],CUP:[{country_code:"CU",country_name:"Cuba"}],SZL:[{country_code:"SZ",country_name:"Swaziland"}],SYP:[{country_code:"SY",country_name:"Syria"}],KGS:[{country_code:"KG",country_name:"Kyrgyzstan"}],KES:[{country_code:"KE",country_name:"Kenya"}],SSP:[{country_code:"SS",country_name:"South Sudan"}],SRD:[{country_code:"SR",country_name:"Suriname"}],KHR:[{country_code:"KH",country_name:"Cambodia"}],KMF:[{country_code:"KM",country_name:"Comoros"}],STD:[{country_code:"ST",country_name:"Sao Tome and Principe"}],KRW:[{country_code:"KR",country_name:"South Korea"}],KPW:[{country_code:"KP",country_name:"North Korea"}],KWD:[{country_code:"KW",country_name:"Kuwait"}],SLL:[{country_code:"SL",country_name:"Sierra Leone"}],SCR:[{country_code:"SC",country_name:"Seychelles"}],KZT:[{country_code:"KZ",country_name:"Kazakhstan"}],KYD:[{country_code:"KY",country_name:"Cayman Islands"}],SGD:[{country_code:"SG",country_name:"Singapore"}],SEK:[{country_code:"SE",country_name:"Sweden"}],SDG:[{country_code:"SD",country_name:"Sudan"}],DOP:[{country_code:"DO",country_name:"Dominican Republic"}],DJF:[{country_code:"DJ",country_name:"Djibouti"}],YER:[{country_code:"YE",country_name:"Yemen"}],DZD:[{country_code:"DZ",country_name:"Algeria"}],UYU:[{country_code:"UY",country_name:"Uruguay"}],LBP:[{country_code:"LB",country_name:"Lebanon"}],LAK:[{country_code:"LA",country_name:"Laos"}],TWD:[{country_code:"TW",country_name:"Taiwan"}],TTD:[{country_code:"TT",country_name:"Trinidad and Tobago"}],TRY:[{country_code:"TR",country_name:"Turkey"}],LKR:[{country_code:"LK",country_name:"Sri Lanka"}],TOP:[{country_code:"TO",country_name:"Tonga"}],LTL:[{country_code:"LT",country_name:"Lithuania"}],LRD:[{country_code:"LR",country_name:"Liberia"}],LSL:[{country_code:"LS",country_name:"Lesotho"}],THB:[{country_code:"TH",country_name:"Thailand"}],LYD:[{country_code:"LY",country_name:"Libya"}],AED:[{country_code:"AE",country_name:"United Arab Emirates"}],AFN:[{country_code:"AF",country_name:"Afghanistan"}],ISK:[{country_code:"IS",country_name:"Iceland"}],IRR:[{country_code:"IR",country_name:"Iran"}],AMD:[{country_code:"AM",country_name:"Armenia"}],ALL:[{country_code:"AL",country_name:"Albania"}],AOA:[{country_code:"AO",country_name:"Angola"}],ARS:[{country_code:"AR",country_name:"Argentina"}],AWG:[{country_code:"AW",country_name:"Aruba"}],INR:[{country_code:"IN",country_name:"India"}],AZN:[{country_code:"AZ",country_name:"Azerbaijan"}],IDR:[{country_code:"ID",country_name:"Indonesia"}],UAH:[{country_code:"UA",country_name:"Ukraine"}],QAR:[{country_code:"QA",country_name:"Qatar"}],MZN:[{country_code:"MZ",country_name:"Mozambique"}]}},577:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this.$createElement;return(this._self._c||t)("generic",this._b({tag:"component"},"component",this.$attrs,!1))};o._withStripped=!0;var a=e(475),r=function(){var t=this.$createElement,n=this._self._c||t;return this.display?n("div",{class:this.classes},[n("div",{class:this.code+"-geomap-container"})]):this._e()};r._withStripped=!0;var c=e(468),u=e(479),i=e(483),s=e(489),y=e(548),_={mixins:[c.a],data:function(){return{colorFormat:new i.a,currencyFormat:new u.a}},methods:{onDataLoaded:function(){s.a.load(this.drawChart,{packages:["geochart"],mapsApiKey:this.config.googleMapsApiKey})},drawChart:function(){var t=this,n=[["Country","Value",{role:"tooltip",p:{html:!0}}]],e=0,o=0;this.assets.forEach(function(a){var r=t.symbolTo(a),c=t.currencyFormat.sign(t.symbolTo(a)),u=t.quoteValue(a,"change_pct_24h"),i=t.quoteValueFormatted(a,"price"),s=t.quoteValueFormatted(a,"change_abs_24h"),_=t.quoteValueFormatted(a,"change_pct_24h"),d=t.quoteValueFormatted(a,"market_cap");u<e?e=u:u>o&&(o=u),void 0!==y[r]&&y[r].forEach(function(e){n.push([e.country_name,u,'<div class="'+t.code+'-geomap-tooltip"><div><span>'+t.translate("asset")+"</span><span>"+a+"</span></div><div><span>"+t.translate("price")+"</span><span>"+c+i+"</span></div><div><span>"+t.translate("change_abs_24h")+'</span><span class="'+(u>0?t.code+"-up":u<0?t.code+"-down":"")+'">'+s+"</span></div><div><span>"+t.translate("change_pct_24h")+'</span><span class="'+(u>0?t.code+"-up":u<0?t.code+"-down":"")+'">'+_+"</span></div><div><span>"+t.translate("market_cap")+"</span><span>"+c+d+"</span></div></div>"])})});var a=s.a.api.visualization.arrayToDataTable(n);new s.a.api.visualization.GeoChart(this.$el.querySelector("."+this.code+"-geomap-container")).draw(a,{region:"world",colorAxis:{values:[Math.min(e,-.01),-.01,0,.01,Math.max(.01,o)],colors:[this.colorFormat.shadeBlend(.1,this.colorFormat.nameToHex("red")),this.colorFormat.shadeBlend(.6,this.colorFormat.nameToHex("red")),"#fff",this.colorFormat.shadeBlend(.6,this.colorFormat.nameToHex("green")),this.colorFormat.shadeBlend(.1,this.colorFormat.nameToHex("green"))]},tooltip:{isHtml:!0,textStyle:{fontSize:"inherit",fontName:"inherit"}},enableRegionInteractivity:!0})}}},d=e(1),m=Object(d.a)(_,r,[],!1,null,null,null);m.options.__file="assets/js/src/components/widgets/geomap/_generic/template.vue";var l=m.exports,h={mixins:[a.a],components:{Generic:l}},p=Object(d.a)(h,o,[],!1,null,null,null);p.options.__file="assets/js/src/components/widgets/geomap/geomap.vue";n.default=p.exports}}]);