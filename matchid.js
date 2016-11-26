app.get('/getmytasks/:id',function(req,res){

var todoId=parseInt(req.params.id,10);

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