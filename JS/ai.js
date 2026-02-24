async function getBotResponse(userMessage) {
    try {
        const response = await fetch('YOUR_API_ENDPOINT', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: userMessage })
        });
        const data = await response.json();
        return data.reply;
    } catch (error) {
        return 'Sorry, I encountered an error. Please try again.';
    }
}