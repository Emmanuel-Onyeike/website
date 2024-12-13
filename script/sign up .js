let container = document.getElementById('container')

toggle = () => {
	container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')
}

setTimeout(() => {
	container.classList.add('sign-in')
}, 200)
document.addEventListener("DOMContentLoaded", () => {
    // Function to register user
    const registerUser = async () => {
        const firstName = document.querySelector('input[placeholder="First Name"]').value;
        const lastName = document.querySelector('input[placeholder="Last Name"]').value;
        const email = document.querySelector('input[placeholder="Email"]').value;
        const password = document.querySelector('input[placeholder="Password"]').value;
        const confirmPassword = document.querySelector('input[placeholder="Confirm password"]').value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await fetch(' http://127.0.0.1:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ firstName, lastName, email, password })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }

            const data = await response.json();
            alert(data.message);
        } catch (error) {
            alert('There was a problem with the registration: ' + error.message);
        }
    };

    // Function to log in user
    const loginUser = async () => {
        const username = document.querySelector('input[placeholder="Username"]').value;
        const password = document.querySelector('input[placeholder="Password"]').value;

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }

            const data = await response.json();
            alert(data.message);
        } catch (error) {
            alert('There was a problem with the login: ' + error.message);
        }
    };

    // Set up event listeners for button clicks
    document.getElementById('signupButton').addEventListener('click', registerUser);
    document.getElementById('loginButton').addEventListener('click', loginUser);

    // Initial view setup
    setTimeout(() => {
        document.getElementById('container').classList.add('sign-in');
    }, 200);
});