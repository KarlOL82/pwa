const butInstall = document.getElementById('buttonInstall');


// Event listener for the install event
window.addEventListener('beforeinstallprompt', (event) => {
    // store events triggered by the install button
    window.deferredPrompt = event;
    // removes the hidden class from the install button
    butInstall.classList.toggle('hidden', false);
});

// 
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
// Display prompt for the click event
    if (!promptEvent) {
     return;
    }
   // reset the prompt
    promptEvent.prompt();
    
    window.deferredPrompt = null;
    
    butInstall.classList.toggle('hidden', true); 
});

// Clears the prompt
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null; 
});
