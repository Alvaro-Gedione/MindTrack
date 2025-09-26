const response = await fetch('https://script.google.com/macros/s/AKfycbxuq45DisIwQKMI3PUuH7vEpyq0xJu55v--IExsMfQytJ54Zw3JJyCLwHE5LgyW8XMbiw/exec?action=login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: "maria@empresa.com",
    senha: "senha123"
  })
});