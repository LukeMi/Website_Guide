
var wLists=new Array();

 

function  getWebList(){
	 wLists.push(new Wbean('../img/7082.png',"应用宝",'https://www.open.qq.com/'));
	 wLists.push(new Wbean('../img/ic_proginn_favicon.ico',"程序员客栈",'https://www.proginn.com/));
	 wLists.push(new Wbean('../img/7082.png',"程序员客栈",'https://www.proginn.com/));
	 wLists.push(new Wbean('../img/7082.png',"程序员客栈",'https://www.proginn.com/));
	 wLists.push(new Wbean('../img/7082.png',"程序员客栈",'https://www.proginn.com/));
	 wLists.push(new Wbean('../img/7082.png',"程序员客栈",'https://www.proginn.com/));
	 wLists.push(new Wbean('../img/7082.png',"程序员客栈",'https://www.proginn.com/));
	 wLists.push(new Wbean('../img/7082.png',"程序员客栈",'https://www.proginn.com/));
	 wLists.push(new Wbean('../img/7082.png',"程序员客栈",'https://www.proginn.com/));
	 wLists.push(new Wbean('../img/7082.png',"程序员客栈",'https://www.proginn.com/));
	 wLists.push(new Wbean('../img/7082.png',"程序员客栈",'https://www.proginn.com/));
	 wLists.push(new Wbean('../img/7082.png',"程序员客栈",'https://www.proginn.com/));
	 wLists.push(new Wbean('../img/7082.png',"程序员客栈",'https://www.proginn.com/));
	 wLists.push(new Wbean('../img/7082.png',"程序员客栈",'https://www.proginn.com/));
	 wLists.push(new Wbean('../img/7082.png',"程序员客栈",'https://www.proginn.com/));
	 
	 for(var i=0;i<wLists.length;i++){
	 	console.log(wLists[i]);
	 }
	 return wLists;
}


function  Wbean(icon ,name,url) {
	this.icon  = icon;
	this.name  = name;
	this.url  = url;
}
(function(){
	getWebList();	
})()
