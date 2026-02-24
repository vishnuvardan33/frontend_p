let smallImages = document.getElementsByClassName("images");
for (let i = 0; i < smallImages.length; i++) {
    
    let oldImg = smallImages[i].getElementsByClassName("oldImg");
    oldImg[i].src = "spiderman.png";
   
    console.log(`value of image no. ${i} is changed to spiderman`);
}
        