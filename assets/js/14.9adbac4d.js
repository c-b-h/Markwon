(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{87:function(t,a,e){"use strict";e.r(a);var n={name:"MavenBadge2xx",props:["artifact","label"],methods:{mavenSearchUrl:function(){return"http://search.maven.org/#search|ga|1|g%3A%22ru.noties%22%20AND%20a%3A%22".concat(this.artifact,"%22")},shieldImgageUrl:function(){return"https://img.shields.io/maven-central/v/ru.noties/".concat(this.artifact,".svg?label=").concat(this.displayLabel)}},computed:{displayLabel:function(){return this.label||this.artifact}}},s=e(0),i=Object(s.a)(n,function(){var t=this.$createElement,a=this._self._c||t;return a("a",{attrs:{href:this.mavenSearchUrl()}},[a("img",{attrs:{src:this.shieldImgageUrl(),alt:this.displayLabel}})])},[],!1,null,null,null);i.options.__file="MavenBadge2xx.vue";a.default=i.exports}}]);