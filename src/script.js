fetch('https://api.api-ninjas.com/v1/weather?city=Mumbai', {
  method: 'GET',
  headers: {
    'X-Api-Key': 'PzhrpC7hz4bC3rNx3q1cVA==K3rIbOKvqaDymNMY'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
