document.addEventListener("DOMContentLoaded", function() {
    var currentIndex = 0;
    var images = document.querySelectorAll("#carousel img");
    var totalImages = images.length;

    function showImage(index) {
        images.forEach(function(image) {
            image.style.display = "none";
        });
        images[index].style.display = "block";
    }

    function nextImage() {
        currentIndex++;
        if (currentIndex >= totalImages) {
            currentIndex = 0;
        }
        showImage(currentIndex);
    }

    // Initial display
    showImage(currentIndex);

    // Set interval for carousel
    setInterval(nextImage, 3000);
});
