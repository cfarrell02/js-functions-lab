fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(todos => {
  const uncompleted = todos.reduce((acc,element,index,array) => {
    if(element.completed){
      acc.push([element.userId,element.title]);
    }
    return acc
  },[])
  console.log(uncompleted);
  })  .catch(function(err) { 
    console.log(err);
  });

  