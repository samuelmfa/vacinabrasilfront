(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"5T6P":function(t,e,a){"use strict";a.r(e),a.d(e,"EditarPacienteModule",function(){return H});var i=a("ofXK"),r=a("syFU"),n=a("s7LF"),s=a("9Yzh"),c=a("H1qn"),o=a("fXoL"),b=a("tyNb"),p=a("VNNB"),u=a("IheW"),m=a("ZehF");let l=(()=>{class t{constructor(t,e){this.http=t,this.headers=e}buscarPaciente(t){return this.http.get(`${p.a.apiDev}/usuarios/${t}`,this.headers.getHttpHeaders())}salvarPaciente(t){return this.http.put(`${p.a.apiDev}/usuarios`,t,this.headers.getHttpHeaders())}}return t.\u0275fac=function(e){return new(e||t)(o.cc(u.a),o.cc(m.a))},t.\u0275prov=o.Lb({token:t,factory:t.\u0275fac}),t})();var d=a("k7SU"),f=a("zHaW"),h=a("/bvK"),g=a("Wp6s"),v=a("Q2Ze"),C=a("e6WT"),P=a("tmjD"),V=a("TN/R"),D=a("bTqV");function k(t,e){if(1&t){const t=o.Wb();o.Vb(0,"section",1),o.Vb(1,"article",2),o.Vb(2,"mat-card"),o.Vb(3,"mat-card-title"),o.Hc(4," Dados do Paciente "),o.Ub(),o.Vb(5,"mat-card-content"),o.Vb(6,"div",3),o.Vb(7,"form",4),o.fc("ngSubmit",function(){return o.zc(t),o.jc().atualizarDadosPaciente()}),o.Vb(8,"mat-form-field",5),o.Vb(9,"mat-label"),o.Hc(10,"Nome"),o.Ub(),o.Qb(11,"input",6),o.Ub(),o.Vb(12,"mat-form-field",5),o.Vb(13,"mat-label"),o.Hc(14,"email"),o.Ub(),o.Qb(15,"input",7),o.Ub(),o.Vb(16,"mat-form-field",5),o.Vb(17,"mat-label"),o.Hc(18,"Cpf"),o.Ub(),o.Qb(19,"input",8),o.Ub(),o.Vb(20,"mat-form-field",5),o.Vb(21,"mat-label"),o.Hc(22,"Data de nascimento"),o.Ub(),o.Qb(23,"input",9),o.Qb(24,"mat-datepicker-toggle",10),o.Qb(25,"mat-datepicker",null,11),o.Ub(),o.Vb(27,"p"),o.Vb(28,"button",12),o.Hc(29,"Gravar"),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub()}if(2&t){const t=o.xc(26),e=o.jc();o.Cb(7),o.pc("formGroup",e.formulario),o.Cb(12),o.pc("mask",e.getCpfCnpjMask()),o.Cb(4),o.pc("matDatepicker",t),o.Cb(1),o.pc("for",t),o.Cb(4),o.pc("disabled",!e.formulario.valid)}}const U=[{path:"",component:(()=>{class t{constructor(t,e,a,i,c,o){this.activeRoute=t,this.router=e,this.editarpacienteService=a,this.helpersService=i,this.fb=c,this.snackBar=o,this.activeRoute.params.subscribe(t=>{t.id?this.editarpacienteService.buscarPaciente(t.id).subscribe(t=>{this.paciente=new r.a(Object.assign({},t)),this.formulario=this.fb.group({id:[this.paciente.getId()],nome:[this.paciente.getNome(),[s.b.required("Nome \xe9 obrigat\xf3rio")]],email:[this.paciente.getEmail(),[n.q.email,s.b.required("Email \xe9 Obrigat\xf3rio")]],numeroDoCpf:[this.paciente.getNumeroDoCpf(),[s.b.required("CPF \xe9 Obrigatorio"),this.validateCPF]],dataDeNascimento:[this.paciente.getDataDeNascimento(),[s.b.required("Data de nasc. \xe9 Obrigat\xf3ria")]]})},t=>{404===t.status&&this.router.navigate([""])}):this.router.navigate([""])})}ngOnInit(){}atualizarDadosPaciente(){this.editarpacienteService.salvarPaciente(this.ajustaDados(this.formulario).value).subscribe(t=>{this.openSnackBar("Paciente atualizado com sucesso."),this.router.navigate([""])},t=>{400===t.status&&this.openSnackBar(t.error.message),422===t.status&&t.error.errors.forEach(t=>{this.openSnackBar(t.message)})})}isCPF(){return null==this.cpfCnpj||this.cpfCnpj.length<12}getCpfCnpjMask(){return this.isCPF()?"000.000.000-009":"00.000.000/0000-00"}validateCPF(t){return c.a.isValid(t.value)?null:{cpfValid:!0}}openSnackBar(t){this.snackBar.open(t,"",{duration:2e3})}ajustaDados(t){return this.helpersService.ajustaDadosPaciente(t)}}return t.\u0275fac=function(e){return new(e||t)(o.Pb(b.a),o.Pb(b.b),o.Pb(l),o.Pb(d.a),o.Pb(n.d),o.Pb(f.a))},t.\u0275cmp=o.Jb({type:t,selectors:[["app-editar-paciente"]],decls:2,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"my-3","py-3"],[1,"container","p-3"],[3,"formGroup","ngSubmit"],["appearance","fill",1,"mx-2"],["matInput","","formControlName","nome"],["matInput","","formControlName","email"],["matInput","","formControlName","numeroDoCpf","type","text",3,"mask"],["matInput","","formControlName","dataDeNascimento",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["type","submit","mat-raised-button","","color","primary",3,"disabled"]],template:function(t,e){1&t&&(o.Qb(0,"app-navbar"),o.Fc(1,k,30,5,"section",0)),2&t&&(o.Cb(1),o.pc("ngIf",null!=e.paciente))},directives:[h.a,i.l,g.a,g.d,g.b,n.s,n.m,s.c,n.g,v.b,v.e,C.b,n.c,n.l,n.f,P.a,V.b,V.d,v.f,V.a,D.b],styles:[""]}),t})()}];let N=(()=>{class t{}return t.\u0275mod=o.Nb({type:t}),t.\u0275inj=o.Mb({factory:function(e){return new(e||t)},imports:[[b.e.forChild(U)],b.e]}),t})();var y=a("8pg1"),j=a("PCNd"),S=a("Tx//");let H=(()=>{class t{}return t.\u0275mod=o.Nb({type:t}),t.\u0275inj=o.Mb({factory:function(e){return new(e||t)},providers:[l,m.a],imports:[[i.c,N,S.a,y.a,j.a]]}),t})()}}]);