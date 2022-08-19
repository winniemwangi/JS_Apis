let fetch = require('node-fetch')
function fruits() {
  fetch('https://jsonplaceholder.typicode.com/localhost:5000/products',{
    method:"GET",
      headers:{
          "Content-type":"application/json"
      },
      body: JSON.stringify({
          name : 'Orange',
          category : 'fruits'
      })
  })
  .then(function (response) {
  return response.json();
  })
  .then(function (data) {
  console.log('success', data);
  })
  .catch(function (error) {
  console.log('error', error);
  });
}
fruits()



