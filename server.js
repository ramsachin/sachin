var express =require('express');
var bp=require('body-parser');
var _ =require('underscore');

var app=express();
app.use(bp.json());
app.use(express.static('public'));

var mytasks=[];
var task[];

app.get('/getmytasks',function(req,res)
{
	res.json(mytasks);
	
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





