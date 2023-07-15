(()=>{"use strict";var e={156:function(e,n,r){var t=this&&this.__spreadArray||function(e,n,r){if(r||2===arguments.length)for(var t,o=0,a=n.length;o<a;o++)!t&&o in n||(t||(t=Array.prototype.slice.call(n,0,o)),t[o]=n[o]);return e.concat(t||Array.prototype.slice.call(n))},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.eliminations=void 0;var a=o(r(739));n.eliminations=function(e){var n=e.nodecg,r=new n.Logger("Eliminations"),o=n.Replicant("current-game",{defaultValue:null}),i=n.Replicant("games"),u=n.Replicant("runners");n.listenFor("select-current-game",(function(e){try{!function(e){if(i.value&&u.value){var n=(0,a.default)(i.value.find((function(n){return n.index===e})));if(n){var r=(0,a.default)(u.value.filter((function(e){return n.summaries.find((function(n){return n.runnerPk===e.pk}))})));o.value={index:n.index,name:n.name,category:n.category,summaries:t([],n.summaries,!0).sort((function(e,n){return e.rank-n.rank})).map((function(e){var n=r.find((function(n){return n.pk===e.runnerPk}));if(!n)throw new Error("Runner does not exist in runner Replicant!");return{rank:e.rank,done:e.done,score:e.score,runner:n}}))}}else o.value=null}}(e)}catch(e){r.error(e)}}))}},700:(e,n,r)=>{var t=r(156),o=r(127);e.exports=function(e){(0,o.results)({nodecg:e}),(0,t.eliminations)({nodecg:e})}},127:function(e,n,r){var t=this&&this.__awaiter||function(e,n,r,t){return new(r||(r=Promise))((function(o,a){function i(e){try{c(t.next(e))}catch(e){a(e)}}function u(e){try{c(t.throw(e))}catch(e){a(e)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof r?n:new r((function(e){e(n)}))).then(i,u)}c((t=t.apply(e,n||[])).next())}))},o=this&&this.__generator||function(e,n){var r,t,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(u){return function(c){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,u[0]&&(i=0)),i;)try{if(r=1,t&&(o=2&u[0]?t.return:u[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,u[1])).done)return o;switch(t=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,t=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=n.call(e,i)}catch(e){u=[6,e],t=0}finally{r=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}};Object.defineProperty(n,"__esModule",{value:!0}),n.results=void 0;var a=r(993),i=r(349);n.results=function(e){var n=e.nodecg,r=n.Replicant("games",{defaultValue:[]}),u=n.Replicant("runners",{defaultValue:[]}),c=n.bundleConfig.google,s=new a.google.auth.GoogleAuth({credentials:{client_email:c.serviceAccount.email,private_key:c.serviceAccount.private},scopes:["https://www.googleapis.com/auth/drive"]}),l=n.bundleConfig.discord,d=new i.REST({version:"10"}).setToken(l.token),f=a.google.drive({version:"v3",auth:s}),p=function(e){return t(void 0,void 0,void 0,(function(){var n,a,c,s;return o(this,(function(p){switch(p.label){case 0:return[4,f.files.get({fileId:e,alt:"media",uploadType:"media"})];case 1:return n=p.sent(),a=n.data.data,c=a.flatMap((function(e){return e.results.map((function(e){return{discordId:e.discordId,name:e.runner}}))})).filter((function(e,n,r){return r.findIndex((function(n){return n.discordId===e.discordId}))===n})),r.value=a.map((function(e,n){return{index:n,name:e.game,category:e.category,summaries:e.results.map((function(e){return{rank:e.rank,runnerPk:e.discordId,done:e.done,score:e.score}}))}})),s=u,[4,Promise.all(c.map((function(e){return t(void 0,void 0,void 0,(function(){var n,r,t,a;return o(this,(function(o){switch(o.label){case 0:return[4,d.get(i.Routes.guildMember(l.guildId,e.discordId))];case 1:return n=o.sent(),r=[n.avatar,n.user.avatar],t=r[0],a=r[1],[2,{pk:e.discordId,name:e.name,thumbnailUrl:t?"https://cdn.discordapp.com/guilds/".concat(l.guildId,"/users/").concat(e.discordId,"/avatars/").concat(t,".png"):a?"https://cdn.discordapp.com/avatars/".concat(e.discordId,"/").concat(a,".png"):null}]}}))}))})))];case 2:return s.value=p.sent(),[2]}}))}))};n.bundleConfig.defaultJsonId&&p(n.bundleConfig.defaultJsonId),n.listenFor("import-result",(function(e,n){return t(void 0,void 0,void 0,(function(){var r,t,a;return o(this,(function(o){switch(o.label){case 0:if(n&&n.handled)return[2];o.label=1;case 1:return o.trys.push([1,3,,5]),r=new URL(e),(t=r.pathname.split("/"))[0],t[1],t[2],a=t[3],[4,p(a)];case 2:return o.sent(),[3,5];case 3:return o.sent(),[4,p(e)];case 4:return o.sent(),null==n||n(null),[3,5];case 5:return[2]}}))}))}))}},739:e=>{e.exports=require("clone")},349:e=>{e.exports=require("discord.js")},993:e=>{e.exports=require("googleapis")}},n={},r=function r(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={exports:{}};return e[t].call(a.exports,a,a.exports,r),a.exports}(700);module.exports=r})();