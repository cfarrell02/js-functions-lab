fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(todos => {


   const todoTitles = todos.map(item => item.title)

    console.log(todoTitles);
  })  .catch(function(err) { 
    console.log(err);
  });

  