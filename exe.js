

var express =require('express');
var bp=require('body-parser');
var _ =require('underscore');

var app=express();
app.use(bp.json());
app.use(express.static('public'));

var mytasks=[];
var task[];

app.get('/getmytasks/:id',function(req,res)
{
	res.json(mytasks);
	var todoId=parseInt(req.params.id,10);
	var matchedTodo=_.findWhere(mytasks,{id:todoId});

var matchedTodo;
task.forEach(function(todo){
 if(todoId===todo.id)
 {
   matchedTodo=todo;
 }
}) 
 if(matchedTodo)
 {
   res.json(matchedTodo);
 
 }
 else
 {
   res.status(404).send();
 }
 
	
});

app.post('/postmytask',function(req,res){
	
	var data=req.body;
	req.id=taskid++;
	mytasks.push(data);
	res.json(data);
});


app.listen(3000,function()
{
	console.log('app is running on port 3000');
	
	
});

