(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{123:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),o=a.n(r),c=a(6),s=a(7),i=a(9),u=a(8),m=a(10),h=a(29),d=a(26),p=a.n(d),g=function e(){var t=this;Object(c.a)(this,e),this.signup=function(e,a,n,l,r,o){return t._service.post("/signup",{username:e,password:a,birthDate:n,email:l,imageUrl:r,role:o})},this.login=function(e,a){return t._service.post("/login",{username:e,password:a})},this.logout=function(){return t._service.post("/logout")},this.loggedin=function(){return t._service.get("/loggedin")},this._service=p.a.create({baseURL:"http://localhost:5000/api/auth",withCredentials:!0})},b=a(136),E=a(135),f=a(11),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).logoutUser=function(){a._service.logout().then((function(e){return a.props.setUser(!1)})).catch((function(e){return console.log(e)}))},a._service=new g,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.loggedInUser?this.props.loggedInUser.username:"invitado";return this.props.loggedInUser?l.a.createElement(b.a,{bg:"",variant:"dark",expand:"md",className:"limegreen"},l.a.createElement(b.a.Brand,null,l.a.createElement("img",{src:"../../../logo192.png",className:"d-inline-block align-top",alt:"React Bootstrap logo"})),l.a.createElement(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(b.a.Collapse,null,l.a.createElement(E.a,{className:"mr-auto"},l.a.createElement(E.a.Link,{as:"li"},l.a.createElement(f.b,{to:"/"},"Inicio")),l.a.createElement(E.a.Link,{as:"li"},l.a.createElement(f.b,{to:"/profile"},"Mi perfil")),l.a.createElement(E.a.Link,{as:"li"},l.a.createElement(f.b,{to:"/explore"},"Explore")),l.a.createElement(E.a.Link,{as:"li",onClick:this.logoutUser},"Logout")),l.a.createElement(E.a,{className:"ml-auto"},l.a.createElement(b.a.Text,null,"Bienvenid@ ",e)))):l.a.createElement(b.a,{bg:"",variant:"dark",expand:"md",className:"limegreen"},l.a.createElement(b.a.Brand,null,l.a.createElement("img",{src:"../../../logo192.png",width:"30",height:"30",className:"d-inline-block align-top",alt:"React Bootstrap logo"})),l.a.createElement(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(b.a.Collapse,null,l.a.createElement(E.a,{className:"mr-auto"},l.a.createElement(E.a.Link,{as:"li"},l.a.createElement(f.b,{to:"/"},"Inicio")),l.a.createElement(E.a.Link,{as:"li"},l.a.createElement(f.b,{to:"/boh"},"Qualcosa andr\xe0 qui")),l.a.createElement(E.a.Link,{as:"li"},l.a.createElement(f.b,{to:"/signup"},"Registro")),l.a.createElement(E.a.Link,{as:"li"},l.a.createElement(f.b,{to:"/login"},"Login"))),l.a.createElement(E.a,{className:"ml-auto"},l.a.createElement(b.a.Text,null,"Bienvenid@ ",e))))}}]),t}(n.Component),C=a(20),O=a(129),j=a(133),I=a(130),w=a(134),U=function e(){var t=this;Object(c.a)(this,e),this.handleUpload=function(e){return t._service.post("/upload",e)},this._service=p.a.create({baseURL:"http://localhost:5000/api/files",withCredentials:!0})},y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(C.a)({},n,l))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,l=t.password,r=t.birthDate,o=t.email,c=t.imageUrl,s=t.role,i=t.location;a._service.signup(n,l,r,o,c,s,i).then((function(e){console.log(e.data),a.props.setUser(e.data),a.setState({username:"",password:""}),a.props.history.push("/")})).catch((function(e){console.log(e),a.handleToastOpen(e.response.data.message)}))},a.handleFileUpload=function(e){a.setState({disabledButton:!0,buttonText:"Subiendo imagen..."});var t=new FormData;t.append("imageUrl",e.target.files[0]),a._filesService.handleUpload(t).then((function(e){console.log("Subida de archivo finalizada! La URL de Cloudinray es: ",e.data.secure_url),a.setState({disabledButton:!1,buttonText:"Crear monta\xf1a rusa",imageUrl:e.data.secure_url}),console.log(a.state.imageUrl)})).catch((function(e){return console.log(e)}))},a.handleToastClose=function(){return a.setState({showToast:!1,toastText:""})},a.handleToastOpen=function(e){return a.setState({showToast:!0,toastText:e})},a._service=new g,a._filesService=new U,a.state={username:"",password:"",imageUrl:"",email:"",birthDate:0,role:[],location:{type:{type:String},coordinates:[Number]},buttonText:"Crear monta\xf1a rusa",disabledButton:!1,showToast:!1,toastText:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(O.a,null,l.a.createElement("h1",null,"Sign Up"),l.a.createElement(j.a,{onSubmit:this.handleSubmit},l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,null,"Usuario"),l.a.createElement(j.a.Control,{type:"text",name:"username",onChange:this.handleInputChange,value:this.state.username})),l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,null,"Contrase\xf1a"),l.a.createElement(j.a.Control,{type:"text",name:"password",onChange:this.handleInputChange,value:this.state.password})),l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,null,"email"),l.a.createElement(j.a.Control,{type:"text",name:"email",onChange:this.handleInputChange,value:this.state.email})),l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,null,"Fecha nacimiento"),l.a.createElement(j.a.Control,{type:"date",name:"birthDate",onChange:this.handleInputChange,value:this.state.birthDate})),l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,null,"Imagen URL (archivo)"),l.a.createElement(j.a.Control,{name:"imageUrl",type:"file",onChange:this.handleFileUpload})),l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,null,"Select our Role"),l.a.createElement("select",{name:"role",selected:this.state.role,onChange:this.handleInputChange},l.a.createElement("option",{value:"GK"},"Select a role"),l.a.createElement("option",{value:"GK"}," GK"),l.a.createElement("option",{value:"DEF"},"DD"),l.a.createElement("option",{value:"CC"},"CC"),l.a.createElement("option",{value:"ATT"},"ATT"))),l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,null,"Location"),l.a.createElement("input",{type:"text",name:"latitude",placeholder:"latitude",value:this.state.location[0],onChange:this.handleInputChange}),l.a.createElement("input",{type:"text",name:"longitude",placeholder:"longitude",value:this.state.location[1],onChange:this.handleInputChange})),l.a.createElement(I.a,{variant:"dark",type:"submit"},"Registrarme")),l.a.createElement(w.a,{onClose:this.handleToastClose,show:this.state.showToast,delay:3e3,autohide:!0,style:{position:"fixed",right:"10px",bottom:"10px",minWidth:"250px"}},l.a.createElement(w.a.Header,null,l.a.createElement("strong",{className:"mr-auto"},"Error"),l.a.createElement("small",null,"Session manager")),l.a.createElement(w.a.Body,null,this.state.toastText)))}}]),t}(n.Component),S=a(31),_=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState({user:Object(S.a)({},a.state.user,Object(C.a)({},n,l))})},a.handleSubmit=function(e){e.preventDefault();var t=a.state.user,n=t.username,l=t.password;a._service.login(n,l).then((function(e){a.props.setUser(e.data),a.setState({username:"",password:""}),a.props.history.push("/")})).catch((function(e){a.handleToastOpen(e.response.data.message)}))},a.handleToastClose=function(){return a.setState({showToast:!1,toastText:""})},a.handleToastOpen=function(e){return a.setState({showToast:!0,toastText:e})},a._service=new g,a.state={showToast:!1,toastText:"",user:{username:"",password:""}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(O.a,null,l.a.createElement("h1",null,"Iniciar sesi\xf3n"),l.a.createElement(j.a,{onSubmit:this.handleSubmit},l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,null,"Usuario"),l.a.createElement(j.a.Control,{type:"text",name:"username",onChange:this.handleInputChange,value:this.state.user.username})),l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,null,"Contrase\xf1a"),l.a.createElement(j.a.Control,{type:"text",name:"password",onChange:this.handleInputChange,value:this.state.user.password})),l.a.createElement(I.a,{variant:"dark",type:"submit"},"Iniciar sesi\xf3n")),l.a.createElement(w.a,{onClose:this.handleToastClose,show:this.state.showToast,delay:3e3,autohide:!0,style:{position:"fixed",right:"10px",bottom:"10px",minWidth:"250px"}},l.a.createElement(w.a.Header,null,l.a.createElement("strong",{className:"mr-auto"},"Error"),l.a.createElement("small",null,"Session manager")),l.a.createElement(w.a.Body,null,this.state.toastText)))}}]),t}(n.Component),T=a(131),M=a(37),k=a(132),L=function e(){var t=this;Object(c.a)(this,e),this.getAllCreatedMatch=function(){return t._service.get("/allCreatedMatch")},this.getOneMatch=function(e){return t._service.get("/".concat(e))},this.postOrganizeMatch=function(e){return t._service.post("/new",e)},this.deleteMatch=function(e){return t._service.get("delete/".concat(e))},this.postEditMatch=function(e,a){return t._service.post("edit/".concat(e),a)},this.joinMatch=function(e,a){return t._service.post("join/".concat(e),{id:e,match:a})},this.resignFromMatch=function(e,a){return t._service.post("/resignmatch",{logId:e,matchId:a})},this._service=p.a.create({baseURL:"http://localhost:5000/api/organizematch",withCredentials:!0})},x=function e(){var t=this;Object(c.a)(this,e),this.getAllClub=function(){return t._service.get("/getAllClub")},this.getOneClub=function(e){return t._service.get("/".concat(e))},this._service=p.a.create({baseURL:"http://localhost:5000/api/club",withCredentials:!0})},N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){return a.importClubList()},a.importClubList=function(){a._clubList.getAllClub().then((function(e){console.log(e.data),a.setState({clubList:e.data}),console.log(a.state.clubList)})).catch((function(e){return console.log("Error",e)}))},a.handleInputChange=function(e){var t,n=e.target,l=n.name,r=n.value;a.setState({match:Object(S.a)({},a.state.match,(t={},Object(C.a)(t,l,r),Object(C.a)(t,"owner",a.props.loggedInUser._id),t))})},a.handleSubmit=function(e){e.preventDefault(),a._organizeMatchsService.postOrganizeMatch(a.state.match).then((function(e){console.log("creato",a.state.match),a.props.closeModalWindow(),a.props.updatematch(),console.log("user id")})).catch((function(e){return console.log(e)}))},a._organizeMatchsService=new L,a._clubList=new x,a.state={disabledButton:!1,buttonText:"Organize a new event",clubList:[],match:{name:"",description:"",date:"",starthour:"",endhour:"",participant:[],owner:"",price:0,club:""}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(j.a,{onSubmit:this.handleSubmit},l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,null,"Nombre"),l.a.createElement(j.a.Control,{type:"text",name:"name",onChange:this.handleInputChange,value:this.state.match.name})),l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,null,"Descripci\xf3n"),l.a.createElement("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"5",name:"description",onChange:this.handleInputChange,value:this.state.match.description})),l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,null,"Date"),l.a.createElement(j.a.Control,{type:"date",name:"date",onChange:this.handleInputChange,value:this.state.match.date})),l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,null,"Start Hour"),l.a.createElement(j.a.Control,{type:"time",name:"starthour",onChange:this.handleInputChange,value:this.state.match.starthour})),l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,null,"End Hour"),l.a.createElement(j.a.Control,{type:"time",name:"endhour",onChange:this.handleInputChange,value:this.state.match.endhour})),l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,null,"Price"),l.a.createElement(j.a.Control,{type:"number",name:"price",onChange:this.handleInputChange,value:this.state.match.price})),l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,null,"Select a Number"),l.a.createElement("select",{name:"club",value:this.state.match.club,onChange:this.handleInputChange},l.a.createElement("option",{disabled:!0,value:!0},"Select an option"),this.state.clubList.map((function(e,t){return l.a.createElement("option",{key:t,value:e._id},e.name)})))),l.a.createElement(I.a,{variant:"dark",size:"sm",type:"submit",disabled:this.state.disabledButton},this.state.buttonText))}}]),t}(n.Component),D=a(127),z=function(e){function t(e){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=(e._id,e.username),a=e.imageUrl,n=e.role;e.description;return l.a.createElement(D.a,{style:{width:"10rem"}},l.a.createElement(D.a.Img,{style:{width:"10rem"},variant:"top",src:a}),l.a.createElement(D.a.Body,null,l.a.createElement(D.a.Title,null,t),l.a.createElement(D.a.Text,null,"Preferred Role ",n)))}}]),t}(n.Component),G=a(44),A=a.n(G),B=(a(123),function(e){var t=e.color,a=e.name;e.id;return l.a.createElement("div",{className:"marker",style:{backgroundColor:t,cursor:"pointer"},title:a})}),R=function(e){var t=e.coordinates.lat&&e.coordinates.lat;console.log(t);var a=e.coordinates.long&&e.coordinates.long;return console.log(a),l.a.createElement("div",{style:{height:"35vh",width:"100%"}},l.a.createElement(A.a,{bootstrapURLKeys:{key:"".concat("AIzaSyDG88rK2sVwRDbZIJautuIZpNt32kAQpSU")},center:{lat:t,lng:a},defaultZoom:10},l.a.createElement(B,{lat:t,lng:a,name:"My Marker",color:"blue"})))},F=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){var e=a.props.match.params.id;a._service.getOneMatch(e).then((function(e){return a.setState({match:e.data})})).catch((function(e){return console.log(e)}))},a.state={match:{}},a._service=new L,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){console.log("this.state general:",this.state.match);var e=this.state.match.date&&this.state.match.date.substr(0,10),t=this.state.match.participant&&this.state.match.participant.length,a=this.state.match.club&&this.state.match.club.location.coordinates[0];console.log(a);var n=this.state.match.club&&this.state.match.club.location.coordinates[1];console.log(n);var r=this.state.match.club&&this.state.match.club._id;return console.log("club id",r),l.a.createElement(O.a,{className:"match-details"},l.a.createElement("section",null,l.a.createElement(T.a,null,l.a.createElement(M.a,{md:6},l.a.createElement("h2",null,this.state.match.name),l.a.createElement("p",null,l.a.createElement("strong",null,"Descripci\xf3n:")," ",this.state.match.description),l.a.createElement("hr",null),l.a.createElement("p",null,l.a.createElement("strong",null,"Date:")," ",l.a.createElement("p",null,e),l.a.createElement("small",null,"Star Hour:")," ",this.state.match.starthour," | End Hours: ",this.state.match.endhour),l.a.createElement("strong",null,"Club:")," ",r,l.a.createElement("hr",null),l.a.createElement("strong",null,"Partecipants number:")," ",t,l.a.createElement("hr",null),l.a.createElement(T.a,null,this.state.match.participant&&this.state.match.participant.map((function(e){return l.a.createElement(z,Object.assign({key:e._id},e))}))),l.a.createElement("br",null),l.a.createElement(f.b,{to:"/profile",className:"btn btn-dark"},"Volver")),l.a.createElement(M.a,{md:{span:6,offset:0}},l.a.createElement(R,{clubid:r,coordinates:{lat:a,long:n}})))))}}]),t}(n.Component),H=function(e){function t(e){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e._id,a=e.name,n=(e.owner,e.date),r=e.description;e.loggedInUser;return l.a.createElement(D.a,{style:{width:"30rem"}},l.a.createElement(D.a.Img,{variant:"top",src:""}),l.a.createElement(D.a.Body,null,l.a.createElement(D.a.Title,null,a),l.a.createElement(D.a.Text,null,r),l.a.createElement(D.a.Text,null,n),l.a.createElement(f.b,{className:"btn btn-sm btn-dark",loggedInUser:this.props.loggedInUser,to:"/match/".concat(t)},"Ver detalles"),l.a.createElement(f.b,{className:"btn btn-sm btn-primary",to:"/edit/".concat(t),id:this._id},"Edit Match"),l.a.createElement(I.a,{className:"btn btn-sm btn-warning",onClick:this.props.deleteMatch.bind(this,t)},"Delete Match")))}}]),t}(n.Component),W=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){return a.importClubList()},a.importClubList=function(){a._clubservice.getAllClub().then((function(e){console.log("Data from Club llega bien",e.data),console.log("Aqui intendo di hacer llegar los datos dell _id de fuera",a.props.match.params.id),a.setState({clubList:e.data}),a.updateState()})).catch((function(e){return console.log("Error",e)}))},a.updateState=function(){console.log("ciao");var e=a.props.match.params.id;a._service.getOneMatch(e).then((function(e){return a.setState({match:e.data})})).catch((function(e){return console.log(e)}))},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState({match:Object(S.a)({},a.state.match,Object(C.a)({},n,l))})},a.handleSubmit=function(e){var t=a.props.match.params.id,n=a.state.match;e.preventDefault(),a._organizeMatchsService.postEditMatch(t,n).then((function(e){console.log("editato",a.props.match.params.id),a.updateState()})).catch((function(e){return console.log(e)}))},a._organizeMatchsService=new L,a._clubservice=new x,a._service=new L,a.state={disabledButton:!1,buttonText:"Edit the match details",clubList:[],match:{name:"",description:"",date:"",starthour:"",endhour:"",participant:[],owner:"",price:0,club:""}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(O.a,null,l.a.createElement("h1",null,"Edit the Match Details"),l.a.createElement(j.a,{onSubmit:this.handleSubmit},l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,null,"Nombre"),l.a.createElement(j.a.Control,{placeholder:this.state.match.name,type:"text",name:"name",onChange:this.handleInputChange,value:this.state.match.name})),l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,null,"Descripci\xf3n"),l.a.createElement("textarea",{placeholder:this.state.match.description,className:"form-control",id:"exampleFormControlTextarea1",rows:"5",name:"description",onChange:this.handleInputChange,value:this.state.match.description})),l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,null,"Date"),l.a.createElement(j.a.Control,{placeholder:this.state.match.date,type:"date",name:"date",onChange:this.handleInputChange,value:this.state.match.date})),l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,null,"Start Hour"),l.a.createElement(j.a.Control,{placeholder:this.state.match.starthour,type:"time",name:"starthour",onChange:this.handleInputChange,value:this.state.match.starthour})),l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,null,"End Hour"),l.a.createElement(j.a.Control,{placeholder:this.state.match.endhour,type:"time",name:"endhour",onChange:this.handleInputChange,value:this.state.match.endhour})),l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,null,"Price"),l.a.createElement(j.a.Control,{placeholder:this.state.match.price,type:"number",name:"price",onChange:this.handleInputChange,value:this.state.match.price})),l.a.createElement(j.a.Group,null,l.a.createElement(j.a.Label,null,"Select a Number"),l.a.createElement("select",{name:"club",value:this.state.match.club,onChange:this.handleInputChange},l.a.createElement("option",{disabled:!0,value:!0},"Select an option"),this.state.clubList.map((function(e,t){return l.a.createElement("option",{key:t,value:e._id},e.name)})))),l.a.createElement(I.a,{variant:"dark",size:"sm",type:"submit",disabled:this.state.disabledButton},this.state.buttonText),l.a.createElement(f.b,{to:"/profile",className:"btn btn-sm btn-primary"},"Back")))}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){return a.updateOrganizedMatchList()},a.updateOrganizedMatchList=function(){console.log("ID USUARIO LOGGEADO:",a.state.logUser),a._service.getAllCreatedMatch().then((function(e){console.log("Todos lo partidos:",e.data);var t=e.data.filter((function(e){return e.owner==a.props.loggedInUser._id}));a.setState({organizedmatch:t}),console.log(" STATE ORGANIZED Match",a.state.organizedmatch);var n=e.data.map((function(e){return e.participant}));console.log("todos array participant",n);var l=n.flat();console.log(l);var r=l.filter((function(e){return e._id==a.props.loggedInUser}));a.setState({joinedmatch:r}),console.log(" STATE Joined Match",a.state.joinedmatch)})).catch((function(e){return console.log("Error",e)}))},a.handleShow=function(){return a.setState({showModalWindow1:!0})},a.handleClose=function(){return a.setState({showModalWindow1:!1})},a._service=new L,a.state={showModalWindow1:!1,organizedmatch:[],joinedmatch:[],logUser:e.loggedInUser._id},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"deleteTheMatch",value:function(e){var t=this;this._service.deleteMatch(e).then((function(e){console.log("se ha borrado y debe actualizar"),t.updateOrganizedMatchList()})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.props.loggedInUser.birthDate.substr(0,10);return l.a.createElement(O.a,null,l.a.createElement("h2",null,"Bienvenid@ ",this.props.loggedInUser.username),l.a.createElement(T.a,null,l.a.createElement(M.a,{className:"profile-card",md:8},l.a.createElement("div",{className:"profile-card"},l.a.createElement("strong",null," Email: ")," ",l.a.createElement("p",{className:"informacion"},this.props.loggedInUser.email),l.a.createElement("strong",null," Birthday: ")," ",t,l.a.createElement("br",null),l.a.createElement("strong",null,"Preferred role: ")," ",this.props.loggedInUser.role,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(I.a,{variant:"success",onClick:this.handleShow},"Organize a match")),l.a.createElement("h4",null,"Organized Match"),l.a.createElement(T.a,null,this.state.organizedmatch.map((function(t){return l.a.createElement(H,Object.assign({key:t._id},t,{deleteMatch:e.deleteTheMatch.bind(e),updatematch:e.updateOrganizedMatchList,loggedInUser:e.props.loggedInUser}))}))),l.a.createElement("h4",null,"Joined Match"),l.a.createElement(T.a,null))),l.a.createElement(M.a,{className:"profile-card",md:4},l.a.createElement("div",{className:"profile-card"},l.a.createElement("img",{src:this.props.loggedInUser.imageUrl,alt:this.props.loggedInUser.imageUrl}),l.a.createElement("p",{className:""})))),l.a.createElement(k.a,{show:this.state.showModalWindow1,onHide:this.handleClose},l.a.createElement(k.a.Header,{closeButton:!0},l.a.createElement(k.a.Title,null,"Organize a match")),l.a.createElement(k.a.Body,null,l.a.createElement(N,{loggedInUser:this.props.loggedInUser,closeModalWindow:this.handleClose,updatematch:this.updateOrganizedMatchList}))))}}]),t}(n.Component),J=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleShow=function(){return a.setState({showModalWindow:!0})},a.handleClose=function(){return a.setState({showModalWindow:!1})},a.state={showModalWindow:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(O.a,null,l.a.createElement("section",null,l.a.createElement("div",{className:"jumbotron"},l.a.createElement("h1",null,"Having a hard time organizing soccer matches with your friends?"),l.a.createElement("div",{className:"container text-left"},l.a.createElement("img",{src:"../../images/beers.png",className:"d-block w-100",alt:""}),l.a.createElement("h2",{className:"lead"},"Makes it easy to manage RSVP, invite players and communicate with your soccer buddies. Keep track of your statistics. Participate in events and tournaments. Create your profile. If you play football, this is the best app!"),l.a.createElement(I.a,{variant:"dark",onClick:this.handleShow},"Sign Up"))),l.a.createElement(k.a,{show:this.state.showModalWindow,onHide:this.handleClose},l.a.createElement(k.a.Header,{closeButton:!0},l.a.createElement(k.a.Title,null,"Sign Up form")),l.a.createElement(k.a.Body,null,l.a.createElement(y,{closeModalWindow:this.handleClose})))))}}]),t}(l.a.Component),K=function(e){function t(e){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.loggedIn;console.log("id llegato a componet correcto user logeado:",e);var t=this.props,a=t._id,n=t.username;t.imageUrl,t.role,t.description;return console.log("este es el id del props eventos ",a),console.log(),l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,{style:{width:"7rem",margin:"2px",textAlign:"center",backgroundColor:"beige"}},l.a.createElement(D.a.Body,null,l.a.createElement(D.a.Text,null,n))))}}]),t}(n.Component),V=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){return a.setState({initialized:!0})},a._service=new L,a.state={showjoin:"true",initialized:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t._id,n=t.name,r=(t.owner,t.date,t.club),o=t.description,c=t.participant,s=this.props.date.substr(0,10),i=c&&c.map((function(e){return e._id}));return console.log("array id utenti presenti:",i),console.log("ID UTENTE LOG:",this.props.id),console.log("location",this.props.club.location.coordinates),l.a.createElement(l.a.Fragment,null,l.a.createElement(O.a,null,l.a.createElement(D.a,{style:{width:"50rem"}},l.a.createElement(D.a.Img,{variant:"top",src:""}),l.a.createElement(D.a.Body,null,l.a.createElement(D.a.Title,null,n),l.a.createElement(D.a.Text,null,o),l.a.createElement(D.a.Title,null,"Date del partido"),l.a.createElement(D.a.Text,null,s),l.a.createElement(D.a.Title,null,"Club del partido"),l.a.createElement(D.a.Text,null,r.name),l.a.createElement(D.a.Title,null,"Partecipants ")," ",l.a.createElement("span",null,"Number of partecipants ",c.length," "),l.a.createElement(T.a,null,c&&c.map((function(t){return l.a.createElement(K,Object.assign({loggedIn:e.props.id,key:t._id},t))}))),l.a.createElement(f.b,{className:"btn btn-sm btn-dark",to:"/explorematch/".concat(a)},"Ver detalles")))))}}]),t}(n.Component),Z=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){return a.updateOrganizedMatchList()},a.updateOrganizedMatchList=function(){var e=a.props.loggedInUser._id;console.log("Id logged User",e),a._service.getAllCreatedMatch().then((function(e){a.setState({organizedmatch:e.data}),console.log("listato eventi:",a.state.organizedmatch)})).catch((function(e){return console.log("Error",e)}))},a._service=new L,a.state={organizedmatch:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;this.state.organizedmatch.club&&this.state.organizedmatch.club.name;return l.a.createElement(l.a.Fragment,null,l.a.createElement(O.a,null,l.a.createElement("h1",null,"Find Football match around you"),l.a.createElement(T.a,null,this.state.organizedmatch&&this.state.organizedmatch.map((function(t){return l.a.createElement(V,Object.assign({key:t._id},t,{id:e.props.loggedInUser._id,updatelist:e.updateOrganizedMatchList}))})))))}}]),t}(n.Component),Q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){return a.updateMatch()},a.updateMatch=function(){var e=a.props.match.params.id;a._service.getOneMatch(e).then((function(e){return a.setState({match:e.data})})).catch((function(e){return console.log(e)}))},a.joinMatch=function(){var e=a.props.loggedInUser&&a.props.loggedInUser._id,t=a.state.match._id;console.log("id person",e),console.log("id Match",t),a._service.joinMatch(e,t).then((function(e){return a.updateMatch()})).catch((function(e){return console.log(e)}))},a.resign=function(){var e=a.props.loggedInUser&&a.props.loggedInUser._id,t=a.state.match._id;console.log(e,t),console.log("ok"),a._service.resignFromMatch(e,t).then((function(e){a.updateMatch()})).catch((function(e){return console.log(e)}))},a.state={match:{participant:[]}},a._service=new L,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.loggedInUser&&this.props.loggedInUser._id;this.state.match._id;console.log("ID LOG USER",t),console.log("MATCH DATA",this.state.match._id);var a=this.state.match.participant;console.log("LIST PARTECIPANT ARRAY",a);var n=a.map((function(e){return e._id}));console.log("ARRAY ID",n);var r=n.some((function(e){return e==t}));console.log("USUARIO PRESENTE ?:",r);var o,c=this.state.match.date&&this.state.match.date.substr(0,10),s=this.state.match.participant&&this.state.match.participant.length,i=this.state.match.club&&this.state.match.club.name;return o=0==r?l.a.createElement(f.b,{to:this.props._id,className:"btn btn-sm btn-success",onClick:function(){return e.joinMatch()}},"Join the match"):1==r?l.a.createElement(f.b,{className:"btn btn-sm btn-warning"},"Alredy joined "):s<3?l.a.createElement(f.b,{to:this.props._id,className:"btn btn-sm btn-succes",onClick:function(){return e.joinMatch()}},"Join the match"):l.a.createElement(f.b,{className:"btn btn-sm btn-danger"},"Match Full"),l.a.createElement(O.a,{className:"match-details"},l.a.createElement("section",null,l.a.createElement(T.a,null,l.a.createElement(M.a,{md:6},l.a.createElement("h2",null,this.state.match.name),l.a.createElement("p",null,l.a.createElement("strong",null,"Descripci\xf3n:")," ",this.state.match.description),l.a.createElement("hr",null),l.a.createElement("p",null,l.a.createElement("strong",null,"Date:")," ",l.a.createElement("p",null,c),l.a.createElement("small",null,"Star Hour:")," ",this.state.match.starthour," | End Hours: ",this.state.match.endhour),l.a.createElement("strong",null,"Club:")," ",i,l.a.createElement("hr",null),l.a.createElement("strong",null,"Partecipants number:")," ",s,l.a.createElement("hr",null),l.a.createElement(T.a,null,this.state.match.participant&&this.state.match.participant.map((function(e){return l.a.createElement(z,Object.assign({key:e._id},e))}))),l.a.createElement("br",null),o,l.a.createElement(f.b,{to:"/explore",className:"btn btn-sm btn-dark"},"Volver"),l.a.createElement(I.a,{className:"btn btn-sm btn-danger",onClick:this.resign},"Resing form match Match")),l.a.createElement(M.a,{md:{span:4,offset:2}},l.a.createElement(A.a,{bootstrapURLKeys:{key:"AIzaSyDG88rK2sVwRDbZIJautuIZpNt32kAQpSU",language:"en"},style:{width:"100%",height:"100%",position:"relative"},defaultCenter:{lat:40.73,lng:-73.93},center:{lat:40.73,lng:-73.93},defaultZoom:12})))))}}]),t}(n.Component),q=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).setTheUser=function(t){e.setState({loggedInUser:t}),console.log("El m\xe9todo 'setTheUser' de App.js se ha invocado, pasando al estado 'loggedInUser:",e.state.loggedInUser)},e.fetchUser=function(){null===e.state.loggedInUser&&e._service.loggedin().then((function(t){return e.setState({loggedInUser:t.data})})).catch((function(t){e.setState({loggedInUser:!1}),console.log({err:t})}))},e.state={loggedInUser:null},e._service=new g,e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.fetchUser(),l.a.createElement(l.a.Fragment,null,l.a.createElement(v,{loggedInUser:this.state.loggedInUser,setUser:this.setTheUser}),l.a.createElement(h.d,null,l.a.createElement(h.b,{exact:!0,path:"/",component:J}),l.a.createElement(h.b,{path:"/edit/:id",component:W}),l.a.createElement(h.b,{path:"/explore",render:function(){return e.state.loggedInUser?l.a.createElement(Z,{loggedInUser:e.state.loggedInUser}):l.a.createElement(h.a,{to:"/"})}}),l.a.createElement(h.b,{path:"/match/:id",component:F}),l.a.createElement(h.b,{exact:!0,path:"/explorematch/:id",render:function(t){return l.a.createElement(Q,Object.assign({},t,{loggedInUser:e.state.loggedInUser}))}}),l.a.createElement(h.b,{path:"/signup",render:function(t){return l.a.createElement(y,Object.assign({setUser:e.setTheUser},t))}}),l.a.createElement(h.b,{path:"/login",render:function(t){return l.a.createElement(_,Object.assign({setUser:e.setTheUser},t))}}),l.a.createElement(h.b,{path:"/profile",render:function(){return e.state.loggedInUser?l.a.createElement(P,{loggedInUser:e.state.loggedInUser}):l.a.createElement(h.a,{to:"/"})}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(124),a(125);o.a.render(l.a.createElement(f.a,null,l.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},76:function(e,t,a){e.exports=a(126)}},[[76,1,2]]]);
//# sourceMappingURL=main.b32e3cf2.chunk.js.map