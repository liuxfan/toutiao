webpackJsonp([5],{NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("Xxa5"),u=e.n(a),i=e("exGp"),r=e.n(i),o=e("7+uW"),s={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",[e("header",[e("ul",t._l(t.tabNav,function(n){return e("v-touch",{key:n.id,class:{cur:t.$route.name==n.title},attrs:{tag:"li"},on:{tap:function(e){t.routerGo(n.url)}}},[t._v(t._s(n.title))])}))])]),t._v(" "),e("div",{staticClass:"por"},[e("transition",{attrs:{name:"fade"}},[e("router-view")],1)],1)])},staticRenderFns:[]};var c=e("VU/8")({name:"app",data:function(){return{tabNav:[{title:"精选",url:"/jingxuan"},{title:"视频",url:"/shipin"},{title:"段子",url:"/duanzi"},{title:"发现",url:"/faxian"}]}},methods:{routerGo:function(t){this.$router.push({path:t})}}},s,!1,function(t){e("mSDW")},"data-v-6ae079c5",null).exports,p=e("NYxO"),l=e("mtWM"),d=e.n(l),m=e("Rf8U"),h=e.n(m),f=e("I0MY"),v=e.n(f),_=e("/ocq"),x=e("cTzj"),w=e.n(x);o.a.use(w.a,{preLoad:1.3,loading:"../static/123.gif",attempt:1}),o.a.use(_.a),o.a.use(p.a),o.a.use(v.a,{name:"v-touch"}),o.a.use(h.a,d.a),o.a.config.productionTip=!1;var T=[{path:"/jingxuan",name:"精选",component:function(){return e.e(0).then(e.bind(null,"NTaR"))}},{path:"/shipin",name:"视频",component:function(){return e.e(1).then(e.bind(null,"JZOl"))}},{path:"/duanzi",name:"段子",component:function(){return e.e(3).then(e.bind(null,"+dn/"))}},{path:"/faxian",name:"发现",component:function(){return e.e(2).then(e.bind(null,"ppkJ"))}},{path:"*",redirect:"/jingxuan"}],b=new _.a({routes:T}),j=new p.a.Store({state:{count:0,siftshuju:[],videoshuju:[],pictureshuju:[]},mutations:{GETSIFT:function(t,n){t.siftshuju=n}},actions:{GETSIFT:function(t,n){var e=this,a=t.commit;return r()(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:$.ajax({type:"GET",url:"https://www.toutiao.com/api/pc/feed/?category=news_hot&utm_source=toutiao&widen=1&max_behot_time=0&max_behot_time_tmp=0&tadrequire=true&as=A1A57A153C91D6F&cp=5A5C316D065F8E1&_signature=M0RiyQAAaR79L-QbehXGeTNEYt",dataType:"jsonp",success:function(t){a("GETSIFT",t.data)}});case 1:case"end":return t.stop()}},t,e)}))()}}});new o.a({el:"#app",router:b,store:j,template:"<App/>",components:{App:c}})},mSDW:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.63cb5889404e41142f85.js.map