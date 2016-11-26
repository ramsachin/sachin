var express = require('express');
var bp = require('body-parser');
var _ = require('underscore')

var app = express();
app.use(bp.json());
app.use(express.static('public'));

var tasks = [
{
  description:'Go to market',
  status: true
},
{
  description:'Meet friends',
  status: true
}];

app.get('/getTasks', function(req, res) {
  res.json(tasks);
});

var pushTasks=[];
var tasks=0;
app.post('/posttask', function(req, res) {
    var data = req.body;
    data.id = tasks++;
    pushTasks.push(data);
    res.json(data);
});

app.delete('/deleteTask/:id', function(req, res) {
    var todoId = parseInt(req.params.id, 10);
    console.log(todoId);
    console.log(JSON.stringify(pushTasks));
    var matchedTodo = _.findWhere(pushTasks, {id:todoId});
    if(!matchedTodo) {
      res.status(404).json({"error":"id not found"});
    }
    else {
      pushTasks = _.without(pushTasks, matchedTodo);
      res.json(matchedTodo);
    }
});


app.get('/todos/:id', function(req, res) {
  var todoId = parseInt(req.params.id, 10);
  console.log(todoId);
  console.log(JSON.stringify(pushTasks));
  var matchedTodo = _.findWhere(pushTasks, {id:todoId});
  /*var matchedTodo;
  pushTasks.forEach(function(todo) {
     if(todoId === todo.id) {
        matchedTodo = todo;
     }
  });*/
  if (matchedTodo) {
    res.json(matchedTodo);
  }
  else {
    res.status(404).send();
  }
}) ;

app.listen(3000, function() {
   console.log('app is running on port 3000');
})








