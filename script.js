//your JS code here. If required.
document.getElementById('btn').addEventListener('click', async function() {
    const textInput = document.getElementById('text').value;
    const delay = parseInt(document.getElementById('delay').value);

    const delayFunction = (ms) => {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    };

    await delayFunction(delay);
    document.getElementById('output').textContent = textInput;
});



