(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2985b332"],{2871:function(t,e,n){},3916:function(t,e,n){"use strict";var a=n("2871"),s=n.n(a);s.a},"3b47":function(t,e,n){"use strict";var a=n("67c0"),s=n.n(a);s.a},"48f6":function(t,e,n){"use strict";var a=n("da7a"),s=n.n(a);s.a},"4ead":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"playlist-card",on:{click:t.onClickCard}},[n("div",{staticClass:"img-wrap"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.$utils.genImgUrl(t.img,300),expression:"$utils.genImgUrl(img, 300)"}]}),t.playCount?n("div",{staticClass:"playCount-wrap"},[n("Icon",{attrs:{type:"play"}}),t._v(" "+t._s(t.$utils.formatNumber(t.playCount))+" ")],1):t._e(),t.updateFrequency?n("div",{staticClass:"updateFrequency"},[t._v(" "+t._s(t.updateFrequency)+" ")]):t._e()]),n("div",{staticClass:"name"},[t._v(t._s(t.name))])])},s=[],i={props:["id","img","name","playCount","updateFrequency"],methods:{onClickCard:function(){this.$router.push("/recommend/playlist/".concat(this.id))}}},r=i,l=(n("feb0"),n("2877")),c=Object(l["a"])(r,a,s,!1,null,"34bbfc72",null);e["a"]=c.exports},"5d10":function(t,e,n){},"67c0":function(t,e,n){},"71a7":function(t,e,n){},7372:function(t,e,n){"use strict";var a=n("71a7"),s=n.n(a);s.a},a0df:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recommend"},[t.banners.length?n("Scroll",{ref:"scroller"},[t.banners.length?n("Slider",{attrs:{options:{slide:{loop:!0,threshold:100}}}},t._l(t.banners,(function(e){return n("div",{key:e.scm,staticClass:"slide-item"},[n("a",{attrs:{href:e.url}},[n("img",{attrs:{src:e.imageUrl},on:{load:t.loadImage}})])])})),0):t._e(),n("NewPlaylists"),n("NewSongs",{on:{loadImage:t.loadImage}})],1):t._e(),n("router-view")],1)},s=[],i=(n("96cf"),n("1da1")),r=n("365c"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"new-playlists"},[n("Title",[t._v("人气歌单推荐")]),t.list.length?n("Scroll",{staticClass:"list-wrap",attrs:{options:{scrollX:!0,scrollY:!1},horizontal:!0}},t._l(t.list,(function(t){return n("PlaylistCard",{key:t.id,staticClass:"list-item",attrs:{id:t.id,img:t.picUrl,name:t.name,playCount:t.playCount}})})),1):t._e()],1)},c=[],o=n("4ead"),u={data:function(){return{list:[]}},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(r["h"])({limit:6});case 2:n=e.sent,a=n.result,t.list=a;case 5:case"end":return e.stop()}}),e)})))()},components:{PlaylistCard:o["a"]}},d=u,m=(n("48f6"),n("2877")),g=Object(m["a"])(d,l,c,!1,null,"9691385a",null),f=g.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.list.length?n("div",{staticClass:"new-songs"},[n("Title",[t._v("最新音乐")]),t.list.length?n("Slider",{attrs:{options:{slide:{loop:!1,threshold:100},bounce:!0,click:!0},autoPlay:!1,showDoc:!1}},t._l(t.thunkedList,(function(e,a){return n("div",{key:a,staticClass:"list"},t._l(e,(function(e,s){return n("SongCard",t._b({key:e.id,staticClass:"song-card",on:{loadImg:t.onLoad},nativeOn:{click:function(e){return t.onClickSong(a,s)}}},"SongCard",t.nomalizeSong(e),!1))})),1)})),0):t._e()],1):t._e()},v=[],h=(n("d81d"),n("fb6a"),n("b0c0"),n("5530")),b=n("ed08"),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"song-card"},[n("div",{staticClass:"img-wrap"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.$utils.genImgUrl(t.img,120),expression:"$utils.genImgUrl(img, 120)"}],on:{load:t.loadImage}})]),n("div",{staticClass:"song-content"},[n("p",{staticClass:"song-name"},[t._v(t._s(t.name))]),n("p",{staticClass:"singer"},[t._v(t._s(t.artistsText))])]),n("PlayIcon")],1)},_=[],y={props:["name","img","artistsText"],methods:{loadImage:function(){this.$emit("loadImg")}}},w=y,S=(n("3916"),Object(m["a"])(w,C,_,!1,null,"228d4be4",null)),k=S.exports,O=n("e7e6"),j={created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(r["g"])();case 2:n=e.sent,a=n.result,t.list=a;case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{list:[]}},computed:{thunkedList:function(){return[this.list.slice(0,3),this.list.slice(3,6),this.list.slice(6,9)]},normalizedSongs:function(){var t=this;return this.list.map((function(e){return t.nomalizeSong(e)}))}},methods:Object(h["a"])(Object(h["a"])({onClickSong:function(t,e){var n=3*t+e,a=this.normalizedSongs[n];this.startSong(a),this.setPlaylist(this.normalizedSongs)},onLoad:function(){this.$emit("loadImage")},nomalizeSong:function(t){var e=t.id,n=t.name,a=t.song,s=a.mvid,i=a.artists,r=a.album.blurPicUrl,l=a.duration;return Object(b["createSong"])({id:e,name:n,img:r,artists:i,duration:l,mvId:s})}},Object(O["a"])(["startSong"])),Object(O["c"])(["setPlaylist"])),components:{SongCard:k}},I=j,x=(n("7372"),Object(m["a"])(I,p,v,!1,null,"475a2102",null)),$=x.exports,z={name:"Recommend",created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(r["b"])();case 2:n=e.sent,a=n.banners,t.banners=a;case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{banners:[]}},methods:{loadImage:function(){this.$refs.scroller.refresh()}},components:{NewPlaylists:f,NewSongs:$}},P=z,N=(n("3b47"),Object(m["a"])(P,a,s,!1,null,"4cb40066",null));e["default"]=N.exports},da7a:function(t,e,n){},feb0:function(t,e,n){"use strict";var a=n("5d10"),s=n.n(a);s.a}}]);
//# sourceMappingURL=chunk-2985b332.91b7f423.js.map