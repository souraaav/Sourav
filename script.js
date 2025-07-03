document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
// (Other code you may have above)

// Add your form submission code here
document.getElementById('contactForm').addEventListener('submit', async function(e){
  e.preventDefault();
  const data = {
    name: this.name.value,
    email: this.email.value,
    message: this.message.value
  };
  const response = await fetch('http://localhost:3000/send', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  });
  const result = await response.json();
  if(result.success) alert('Message sent!');
  else alert('Error: ' + result.error);
});