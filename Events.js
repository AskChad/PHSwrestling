async function sendDateToWebhook() {
    const webhookUrl = 'https://hook.us1.make.com/4rplkbgk9cxrrvjcxh947g4q7znmf3js'; // Replace with your webhook URL
    const today = new Date().toISOString().split('T')[0]; // Format today's date as YYYY-MM-DD

    try {
        // Sending a POST request to the webhook
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ date: today }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Getting the HTML response
        const html = await response.text();

        // Displaying the HTML in a designated container
        document.getElementById('response-container').innerHTML = html;
    } catch (error) {
        console.error('Error sending date to webhook:', error);
        document.getElementById('response-container').innerText = 'Error loading response';
    }
}

sendDateToWebhook();
