document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const userInput = urlParams.get('userInput');
    document.getElementById('output').innerHTML = userInput;
});