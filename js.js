document.addEventListener('DOMContentLoaded', function() {
    const progressElements = document.querySelectorAll('.progress-done');

    progressElements.forEach(function(element) {
        element.style.width = element.getAttribute('data-done') + '%';
        element.style.opacity = 1;
    });
});
