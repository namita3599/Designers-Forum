document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector(".projects-gallery");
    const loadMoreBtn = document.getElementById("loadMore");
    const viewLessBtn = document.getElementById("viewLess");
    const thumbnails = gallery.querySelectorAll(".thumbnail");

    let itemsPerLoad = 9; // Show 9 items at a time
    let currentIndex = itemsPerLoad;

    // Initially display only 9 images
    for (let i = itemsPerLoad; i < thumbnails.length; i++) {
        thumbnails[i].style.display = "none";
    }

    loadMoreBtn.addEventListener("click", function() {
        let nextIndex = currentIndex + itemsPerLoad;
        for (let i = currentIndex; i < nextIndex && i < thumbnails.length; i++) {
            thumbnails[i].style.display = "block";
        }
        currentIndex += itemsPerLoad;

        // If all images are shown, hide the "View More" button
        if (currentIndex >= thumbnails.length) {
            loadMoreBtn.style.display = "none";
        }
        viewLessBtn.style.display = "inline-block"; // Show the "View Less" button
    });

    viewLessBtn.addEventListener("click", function() {
        // Hide the extra images beyond the first 9
        for (let i = itemsPerLoad; i < thumbnails.length; i++) {
            thumbnails[i].style.display = "none";
        }
        currentIndex = itemsPerLoad;
        viewLessBtn.style.display = "none"; // Hide the "View Less" button
        loadMoreBtn.style.display = "inline-block"; // Show the "View More" button again
    });
});


