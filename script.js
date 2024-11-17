//your JS code here. If required.
document.getElementById('form').addEventListener('submit', async function(event) {
    event.preventDefault(); 
	//get the values
    const text = document.getElementById('text').value;
    const delay = parseInt(document.getElementById('delay').value);

    // Display the message after the specified delay
    await displayMessageAfterDelay(text, delay);
});

// Async function to introduce a delay and display the message
async function displayMessageAfterDelay(message, delay) {
    // Create a promise that resolves after the specified delay
    await new Promise(resolve => setTimeout(resolve, delay));
    
    // Display the message
	const para = document.createElement("p");
	const node = document.createTextNode(message);

para.appendChild(node);
document.body.appendChild(para);;
}