let smallImages = document.getElementsByClassName("images");
for (let i = 0; i < smallImages.length; i++) {
    smallImages[i].addEventListener("click", function () {
        let bigImage = document.getElementById("big-image");
        bigImage.src = this.src;
    });
}