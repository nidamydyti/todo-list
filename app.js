const express =require('express');

//int appCodeName
const app = express();

//routes
app.get('/', function(req, res){
	res.send("Index.page");
});

//runing app
app.listen(3000, function(){
	console.log("App.runing at http://localhost:3000");
});