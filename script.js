document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const messagesDiv = document.getElementById('messages');

    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    async function sendMessage() {
        const messageText = userInput.value.trim();
        if (messageText === '') return;

        // Tambahkan pesan pengguna ke chat window
        addMessage(messageText, 'user');

        try {
            // Kirim permintaan ke https://chat.hackaigc.com
            // Asumsikan endpoint API adalah '/api/chat' atau sesuatu yang serupa.
            // Ganti URL ini dengan endpoint yang tepat jika ada.
            const response = await fetch('https://chat.hackaigc.com/api/chat', {  // Adjust endpoint as needed
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: messageText }),  // Kirim pesan sebagai JSON
            });

            if (!response.ok) {
                throw new Error('Gagal terhubung ke server');
            }

            const data = await response.json();  // Asumsikan respons adalah JSON
            const aiResponse = data.response || 'Tidak ada respons dari server.';  // Placeholder

            // Tambahkan respons AI ke chat window
            addMessage(aiResponse, 'ai');
        } catch (error) {
            addMessage('Error: ' + error.message, 'ai');  // Tampilkan error jika gagal
        }

        userInput.value = '';  // Bersihkan input
    }

    function addMessage(text, type) {
        const messageElement = document.createElement('p');
        messageElement.textContent = text;
        messageElement.classList.add(type + '-message');
        messagesDiv.appendChild(messageElement);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;  // Scroll ke bawah
    }
});