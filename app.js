const express =require('express');

//int appCodeName
const app = express();

//views location
app.set('views',__dirname + '/views');
//set template engine
app.set('view engine', 'ejs');


//routes
app.get('/', function(req, res){
	res.render("index", {name: "faqja fillestare", title:"index"});
});

//runing app
app.listen(3000, function(){
	console.log("App.runing at http://localhost:3000");
});