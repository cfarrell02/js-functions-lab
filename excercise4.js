fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(todos => {
  const count = todos.reduce((acc,element,index,array) => {
    if(element.completed){
      acc[index] = [element.userId,element.title];
      //return acc 
    }
    return acc
  },[])

console.log(count)
  })  .catch(function(err) { 
    console.log(err);
  });