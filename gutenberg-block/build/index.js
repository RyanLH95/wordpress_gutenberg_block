!function(){"use strict";var e,r={250:function(){var e=window.wp.blocks,r=window.React,n=window.wp.i18n,t=window.wp.blockEditor,o=JSON.parse('{"u2":"create-block/gutenberg-block"}');(0,e.registerBlockType)(o.u2,{edit:function(){return(0,r.createElement)("p",{...(0,t.useBlockProps)()},(0,n.__)("Gutenberg Block – hello from the editor!","gutenberg-block"))},save:function(){return(0,r.createElement)("p",{...t.useBlockProps.save()},"Gutenberg Block – hello from the saved content!")}})}},n={};function t(e){var o=n[e];if(void 0!==o)return o.exports;var u=n[e]={exports:{}};return r[e](u,u.exports,t),u.exports}t.m=r,e=[],t.O=function(r,n,o,u){if(!n){var c=1/0;for(a=0;a<e.length;a++){n=e[a][0],o=e[a][1],u=e[a][2];for(var i=!0,l=0;l<n.length;l++)(!1&u||c>=u)&&Object.keys(t.O).every((function(e){return t.O[e](n[l])}))?n.splice(l--,1):(i=!1,u<c&&(c=u));if(i){e.splice(a--,1);var f=o();void 0!==f&&(r=f)}}return r}u=u||0;for(var a=e.length;a>0&&e[a-1][2]>u;a--)e[a]=e[a-1];e[a]=[n,o,u]},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},function(){var e={826:0,431:0};t.O.j=function(r){return 0===e[r]};var r=function(r,n){var o,u,c=n[0],i=n[1],l=n[2],f=0;if(c.some((function(r){return 0!==e[r]}))){for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(l)var a=l(t)}for(r&&r(n);f<c.length;f++)u=c[f],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return t.O(a)},n=self.webpackChunkgutenberg_block=self.webpackChunkgutenberg_block||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}();var o=t.O(void 0,[431],(function(){return t(250)}));o=t.O(o)}();