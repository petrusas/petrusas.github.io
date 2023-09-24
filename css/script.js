const prompt = document.querySelector('.prompt');
const output = document.querySelector('.output');

prompt.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        const command = prompt.textContent;
        output.textContent = executeCommand(command);
        prompt.textContent = '> ';
    }
});

function executeCommand(command) {
    // Your logic for handling commands goes here
    return `Command not recognized: ${command}`;
}
