fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const todoUncompleted = json.filter((todo) => ! todo.completed
     ).map(todo => ({userId : todo.userId,title: todo.title}))
     console.log(todoUncompleted)
  })
  .catch(function(err) { 
    console.log(err);
  });
