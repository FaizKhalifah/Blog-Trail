const token = localStorage.getItem('token');
async function fetchData() {
    try {
      // Mengambil token dari Local Storage
      const token = localStorage.getItem('token');
  
      // Membuat permintaan Fetch API dengan async/await
      const response = await fetch('/getBlog', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  
      // Memeriksa status respons
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
  
      // Parsing respons JSON
      const data = await response.json();
  
      // Lakukan sesuatu dengan data yang diterima
      console.log(data.user.email);
      console.log(data.user.username);
    } catch (error) {
      console.error('Error:', error);
    }
  }
fetchData();