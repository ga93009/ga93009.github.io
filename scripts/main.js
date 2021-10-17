function changeLogos() {
    let images = document.querySelectorAll("img");
    
    let logo1Path = "images/logo1.png";
    let logo2Path = "images/logo2.png";

    for (var index = 0; index < images.length; index++) {
        let image = images[index];
        let src = image.getAttribute("src");
        if (src === logo1Path) {
            image.setAttribute("src", logo2Path);
        } else {
            image.setAttribute("src", logo1Path);
        }
    }
}

setInterval(function(){
    changeLogos();
}, 1000)
