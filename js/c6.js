document.addEventListener("DOMContentLoaded", paragraphC5Loaded);
function paragraphC5Loaded() {
    // select the ID of C elements
    const c6Container = document.getElementById("C6");
    const h3ofContainer = document.getElementsByClassName("h3ofC6");
    const pOfContainer = document.getElementsByClassName("pofC6");


    // apply css for whole container
    c6Container.style.textAlign = "center";
    c6Container.style.marginBottom = "150px";
    c6Container.style.padding = "0";
    c6Container.style.display = "block";
    c6Container.style.margin = "3px";

    // apply css for h3
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

    // apply css for p
    for (let i = 0; i < pOfContainer.length; i++) {
        pOfContainer[i].style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
        pOfContainer[i].style.fontWeight = "bold";
        pOfContainer[i].style.display = "inline-block";
        pOfContainer[i].style.boxShadow = "5px 5px 3px";
        pOfContainer[i].style.background = "linear-gradient(to right, hsl(0, 0%, 55%), #ffffff)";
        pOfContainer[i].style.margin = "auto";
        pOfContainer[i].style.padding = "5px";
        pOfContainer[i].style.fontSize = "larger";
        pOfContainer[i].style.borderRadius = "3px";
    }
}

//code responsible for image gallery C6
document.addEventListener("DOMContentLoaded", galleryC6Loaded);
function galleryC6Loaded() {
    const galleryContainer = document.getElementById("galleryC6");
    const imagesFromGallery = galleryContainer.getElementsByTagName("img");

    //apply css for the gallery container
    galleryContainer.style.margin = "10px 50px";

    //apply css for the images that are in the gallery
    for (let i = 0; i < imagesFromGallery.length; i++) {
        imagesFromGallery[i].style.width = "230px";
        imagesFromGallery[i].style.padding = "5px";
    }
}

//code responsible for image gallery C6v2
document.addEventListener("DOMContentLoaded", galleryC6v2Loaded);
function galleryC6v2Loaded() {
    const galleryContainer = document.getElementById("galleryC6v2");
    const imagesFromGallery = galleryContainer.getElementsByTagName("img");

    //apply css for the gallery container
    galleryContainer.style.margin = "10px 50px";

    //apply css for the images that are in the gallery
    for (let i = 0; i < imagesFromGallery.length; i++) {
        imagesFromGallery[i].style.width = "230px";
        imagesFromGallery[i].style.padding = "5px";
    }
}