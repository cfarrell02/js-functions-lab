fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(todos => {
  const uncompleted = todos.filter(item => !item.completed);
  console.log(uncompleted);
  })  .catch(function(err) { 
    console.log(err);
  });

  