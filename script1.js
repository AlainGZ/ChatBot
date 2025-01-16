const chatwindow = document.getElementById('chatwindow');
const userInput = document.getElementById('userinput')
const sendBtn = document.getElementById('sendBtn')

function addMessage(sender, text) {
    const messageDiv = document.createElement('div')
    messageDiv.classList.add('chat-message', sender)
    const icon = document.createElement('img')
    icon.src = sender === 'bot' ? 'assets/icons/chat-bot.png' : 'assets/icons/enviar.png'
    icon.alt = sender

    const messageContent = document.createElement('div')
    messageContent.classList.add('message-content')
    messageContent.textContent = text

    messageDiv.appendChild(icon)
    messageDiv.appendChild(messageContent)

    chatwindow.appendChild(messageDiv)
    chatwindow.scrollTop = chatwindow.scrollHeight
}

function handleSend() {
    const userMessage = userInput.value.trim()
    if (userMessage) {
        addMessage('user', userMessage)
        setTimeout(() => {
            const botResponse = generateBotResponse(userMessage)
            addMessage('bot', botResponse)
        }, 500)
    }
    userInput.value = ''
}

function generateBotResponse(message) {
    const responses = {
        hola: 'Hola, en que te puedo ayudar?',
        adios: 'Adios, que tengas un gran dia ',
        ayuda: 'Puedes preguntarme sobre diversos temas',
        nombre: 'Soy un chat bot creado para responder tus preguntas',
        clima: ' el clima depende de tu ubicacion',
        gracias: ' de Nada, estoy aqui para ayudarte'
    }
    return responses[message.toLowerCase()] || ' Lo siento, no entiendo tu pregunta'
}

sendBtn.addEventListener('click', handleSend)
userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') hadleSend()
})