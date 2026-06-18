// 2. Hide splash screen and reveal main website content
const splashScreen = document.getElementById('ps2-splash');
const mainContent = document.getElementById('main-content');

// Display splash for 5 seconds
setTimeout(() => {
    // Start fading out the splash screen
    splashScreen.classList.add('splash-fade-out');
    
    // Start fading in the main website content
    mainContent.classList.add('content-visible');
    
    // Completely remove the splash screen from view after its fade animation completes (1 second)
    setTimeout(() => {
        splashScreen.remove(); // This completely deletes it from the webpage DOM
        document.body.style.overflow = 'auto'; // Re-enables scrolling on your main website
    }, 1000);

}, 5000);



