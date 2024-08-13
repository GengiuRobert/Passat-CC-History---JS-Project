//function responsible for the slide show in the paragraph C1
let slideIndex = 0;
showSlides();
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("myslides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 1500);
}
//--------------------------------------------------------------------



//code responsible for paragraph C2
document.addEventListener("DOMContentLoaded", paragraphC2Loaded);
function paragraphC2Loaded() {
    //select the ID of C2 elements
    const c2Container = document.getElementById("C2");
    const h3ofContainer = document.getElementsByClassName("h3ofC2");
    const pOfContainer = document.getElementById("pofC2");

    //apply css for whole container
    c2Container.style.textAlign = "center";
    c2Container.style.margin = "0";
    c2Container.style.padding = "0";
    c2Container.style.display = "block";

    //apply css for h3
    for (let i = 0; i < h3ofContainer.length; i++) {
        h3ofContainer[i].style.background = "linear-gradient(to right, hsl(0, 0%, 55%), #ffffff)";
        h3ofContainer[i].style.display = "inline-block";
        h3ofContainer[i].style.boxShadow = "5px 5px 3px";
        h3ofContainer[i].style.padding = "5px";
        h3ofContainer[i].style.margin = "5px auto";
        h3ofContainer[i].style.borderRadius = "3px";
        h3ofContainer[i].style.fontSize = "larger";
        h3ofContainer[i].style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
    }

    //apply css for p
    pOfContainer.style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
    pOfContainer.style.fontWeight = "bold";
    pOfContainer.style.display = "inline-block";
    pOfContainer.style.boxShadow = "5px 5px 3px";
    pOfContainer.style.background = "linear-gradient(to right, hsl(0, 0%, 55%), #ffffff)";
    pOfContainer.style.margin = "5px";
    pOfContainer.style.padding = "5px";
    pOfContainer.style.fontSize = "larger";
    pOfContainer.style.borderRadius = "3px";
}


//code responsible for image gallery C2
document.addEventListener("DOMContentLoaded", galleryC2Loaded);
function galleryC2Loaded() {
    const galleryContainer = document.getElementById("galleryC2");
    const imagesFromGallery = galleryContainer.getElementsByTagName("img");

    //apply css for the gallery container
    galleryContainer.style.margin = "10px 50px";

    //apply css for the images that are in the gallery
    for (let i = 0; i < imagesFromGallery.length; i++) {
        imagesFromGallery[i].style.width = "230px";
        imagesFromGallery[i].style.padding = "5px";
    }
}