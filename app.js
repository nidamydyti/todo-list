const express =require('express');

//int appCodeName
const app = express();

//views location
app.set('views',__dirname + '/views');
//set template engine
app.set('view engine', 'ejs');

//setup mongodb
const MongoClient = require('mongodb').MongoClient;
const mongoURL = 'mongodb://localhost:27017/todolist';

//conneting to Mongodb
MongoClient.connect(mongoURL, function(err, db) {
	if (err) {
		console.log(err);
	}else {
		console.log('Database conenected');
		todos = db.collection('todos');
	}
});




//routes
app.get('/', function(req, res){
	res.render("index");
});

app.get('/todos/:id', function(req, res){
	res.render("show"); 
});
app.post('/todos/add', function(req, res){
	res.redirect("/");
});

app.get('/todos/edit/:id', function(req, res){
	res.render("edit");
});

app.post('/todos/update/:id', function(req, res){
	res.redirect("/");
});

app.get('/todos/delete/:id', function(req, res){
	res.redirect("/");
});

/*
app.get('/manage', function(req, res){
	res.render('manage');
});*/

//runing app
app.listen(3000, function(){
	console.log("App.runing at http://localhost:3000");
});