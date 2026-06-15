window.addEventListener('load', function() {
    var preloader = document.getElementById('preloader');
    
    // Add a delay (optional) to ensure the logo is seen
    setTimeout(function() {
        preloader.classList.add('fade-out');
        
        // Remove from DOM entirely after fade animation
        setTimeout(function() {
            preloader.style.display = 'none';
            document.body.style.overflow = 'auto'; // Enable scrolling
        }, 500); // Wait for CSS transition
    }, 2000); // 2 seconds display time
});
