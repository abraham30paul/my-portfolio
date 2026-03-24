document.getElementById('feedbackForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const statusText = document.getElementById('statusMessage');

    statusText.innerText = "Sending...";

    // Replace this with your actual Railway URL later!
    const API_URL = "https://my-portfolio-m5w5.onrender.com"; 

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
        });

        if (response.ok) {
            statusText.innerText = "Feedback sent successfully!";
            document.getElementById('feedbackForm').reset();
        } else {
            statusText.innerText = "Failed to send feedback.";
        }
    } catch (error) {
        statusText.innerText = "Error connecting to server.";
    }
});
