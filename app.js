document.getElementById('translateButton').addEventListener('click', async () => {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');

    if (!inputText) {
        outputText.innerText = 'Please enter some text!';
        return;
    }

    try {
        const response = await fetch('http://127.0.0.1:5000/api/translate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: inputText }),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch translation');
        }

        const data = await response.json();
        outputText.innerText = data.translation;
    } catch (error) {
        outputText.innerText = `Error: ${error.message}`;
    }
});