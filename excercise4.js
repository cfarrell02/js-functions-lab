fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(todos => {
  const count = todos.reduce(function(n,todo){
    return n + (todo.completed);
  },0);

console.log(count)
  })  .catch(function(err) { 
    console.log(err);
  });