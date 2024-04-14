async function getUserInfo() {
    try {
      // Ambil token dari Local Storage
      const token = localStorage.getItem('token');
      
      // Lakukan permintaan ke server untuk mendapatkan informasi pengguna
      const response = await fetch('/api/user-info', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch user info');
      }
  
      // Parse respons JSON
      const data = await response.json();
      console.log(data); // Lakukan sesuatu dengan data pengguna yang diterima
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  }

await getUserInfo();