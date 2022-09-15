fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(todos => {
//  console.log(todos)
  const users = todos.reduce(function(counter, item) {
    var p = item.userId;
    counter[p] = counter.hasOwnProperty(p) ? counter[p] + 1 : 1;
    return counter;
}, [])
  console.log(users);
  })  .catch(function(err) { 
    console.log(err);
  });

  