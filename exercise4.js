fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const numberOfCompleted = json.reduce((acc,todo)=>
        todo.completed ? acc+1 : acc ,0)
        
     console.log('The number of completed todos: '+numberOfCompleted)
  })
  .catch(function(err) { 
    console.log(err);
  });