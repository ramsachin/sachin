


app.delete('/deletedata/:id',function(req,res)
{
	var todoId=parseInt(req.param.id,10);
	var matchedTodo=_.findWhere(mytask,{id:todoId});
	if(!matchedTodo)
	{
		res.status(404).json({"error":"id not found"});
		
	}
	else{
		
		mytask=_.without(mytask,matchedTodo);
		res.json(matchedTodo);
	}
	
})