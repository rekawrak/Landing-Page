// Select button 
const button = document.querySelector('#mailID');

// Add click handler
button.addEventListener('click', () => {

    // Text to copy
    const textToCopy = 'vrazhkin.re@students.dvfu.ru';

    // Copy to clipboard
    copyToClipboard(textToCopy);

    // Show message
    showMessage();

});

// Copy text to clipboard
function copyToClipboard(text) {

    // Create textarea
    const textarea = document.createElement('textarea');
    textarea.value = text;

    // Add to DOM  
    document.body.appendChild(textarea);

    // Select text
    textarea.select();

    // Copy  
    document.execCommand('copy');

    // Remove textarea
    document.body.removeChild(textarea);

}

// Show message 
function showMessage() {

    // Create message element
    const message = document.createElement('div');
    message.textContent = 'Скопировано!';
    message.classList.add('copied-message');

    // Add to DOM
    document.body.appendChild(message);

    // Add visible class
    message.classList.add('visible');

    // Remove after fade
    setTimeout(() => {
        message.classList.remove('visible');
        setTimeout(() => document.body.removeChild(message), 2000);
    }, 2000);

}