function changeShape(element) {
    // Change the shape on click
    element.style.transform = "rotate(10deg) scale(1.1)";

    // Play the sound
    let sound = new Audio(element.getAttribute('data-sound'));
    sound.play();

    // Reset after a short delay
    setTimeout(() => {
        element.style.transform = "rotate(0deg) scale(1)";
    }, 500);
}

document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.title = "Come back!";
    } else {
        document.title = "Humm? What is this?";
    }
});