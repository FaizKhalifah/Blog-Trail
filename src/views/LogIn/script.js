cript>
        document.getElementById('loginForm').addEventListener('submit', async function(event) {
            event.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            try {
                const response = await fetch('/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, password })
                });

                const data = await response.json();
                if (data.token) {
                    localStorage.setItem('token', data.token); // Simpan token di localStorage
                    window.location.href = '/dashboard'; // Redirect ke halaman dashboard setelah login berhasil
                } else {
                    alert(data.message); // Tampilkan pesan error jika login gagal
                }
            } catch (error) {
                console.error('Error:', error);
            }
        });