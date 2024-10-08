document.addEventListener("DOMContentLoaded", paragraphC7Loaded);
function paragraphC7Loaded() {
    // select the ID of C6 elements
    const c7Container = document.getElementById("C7");
    const h3ofContainer = document.getElementsByClassName("h3ofC7");
    const pOfContainer = document.getElementsByClassName("pofC7");
    const featuresList = document.getElementById("featuresListC7");
    const labels = featuresList.getElementsByTagName("label");


    // apply css for whole container
    c7Container.style.textAlign = "center";
    c7Container.style.marginBottom = "150px";
    c7Container.style.padding = "0";
    c7Container.style.display = "block";
    c7Container.style.margin = "3px";

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

    // apply css for the features list
    featuresList.style.listStyleType = "none";
    featuresList.style.padding = "0";
    featuresList.style.textAlign = "center";
    featuresList.style.margin = "20px auto";
    featuresList.style.display = "inline-block";
    featuresList.style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
    featuresList.style.fontSize = "larger";

    // apply css for labels
    for (let i = 0; i < labels.length; i++) {
        labels[i].style.background = "linear-gradient(to right, hsl(0, 0%, 55%), #ffffff)";
        labels[i].style.margin = "5px 0";
        labels[i].style.padding = "10px";
        labels[i].style.borderRadius = "3px";
        labels[i].style.boxShadow = "5px 5px 3px rgba(0, 0, 0, 0.2)";
        labels[i].style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
        labels[i].style.fontWeight = "bold";
        labels[i].style.display = "inline-block";  // Adjust label width to content
    }
}