(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{H1qn:function(t,e,a){"use strict";a.d(e,"a",function(){return u});const r=["00000000000","11111111111","22222222222","33333333333","44444444444","55555555555","66666666666","77777777777","88888888888","99999999999","12345678909"],o=/[.-]/g,n=/[^\d]/g,s=t=>{const e=t.split("").map(t=>parseInt(t,10)),a=e.length+1,r=e.map((t,e)=>t*(a-e)).reduce((t,e)=>t+e)%11;return r<2?0:11-r},i=(t,e)=>(t||"").replace(e?o:n,""),m=t=>i(t).replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/,"$1.$2.$3-$4");var u={verifierDigit:s,strip:i,format:m,isValid:(t,e)=>{const a=i(t,e);if(!a)return!1;if(11!==a.length)return!1;if(r.includes(a))return!1;let o=a.substr(0,9);return o+=s(o),o+=s(o),o.substr(-2)===a.substr(-2)},generate:t=>{let e="";for(let a=0;a<9;a+=1)e+=Math.floor(9*Math.random());return e+=s(e),e+=s(e),t?m(e):e}}},k7SU:function(t,e,a){"use strict";a.d(e,"a",function(){return o});var r=a("fXoL");let o=(()=>{class t{constructor(){}ajustaDadosPaciente(t){const e=this.formataNome(t.controls.nome.value),a=this.formataEmail(t.controls.email.value);return t.patchValue({nome:e}),t.patchValue({email:a}),t}formataNome(t){let e=t.toLowerCase().split(" ");for(let a=0;a<e.length;a++){let t=e[a];e[a]=t[0].toUpperCase()+t.slice(1)}return e.join(" ")}formataEmail(t){return t.toLowerCase()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},syFU:function(t,e,a){"use strict";a.d(e,"a",function(){return o});var r=a("wd/R");a("0tRk"),r.locale("pt-br");class o{constructor(t){this.id=null,this.id=t.id,this.nome=t.nome,this.email=t.email.toLowerCase(),this.numeroDoCpf=t.numeroDoCpf,this.dataDeNascimento=t.dataDeNascimento,this.dataDeNascimentoFormatada=this.getDataDeNascimentoFormatada(t.dataDeNascimento)}getId(){return this.id}getNome(){return this.nome}setNome(t){this.nome=t}getEmail(){return this.email}setEmail(t){this.email=t.toLowerCase()}getNumeroDoCpf(){return this.numeroDoCpf}setNumeroDoCpf(t){this.numeroDoCpf=t}getDataDeNascimento(){return this.dataDeNascimento}getDataDeNascimentoFormatada(t){return this.dataDeNascimentoFormatada=r(t).format("DD/MM/YYYY")}setDataDeNascimento(t){this.dataDeNascimento=t}}}}]);