//code responsible for paragraph C4
document.addEventListener("DOMContentLoaded", paragraphC4Loaded);
function paragraphC4Loaded() {
    //select the ID of C elements
    const c4Container = document.getElementById("C4");
    const h3ofContainer = document.getElementsByClassName("h3ofC4");
    const pOfContainer = document.getElementById("pofC4");
    const table = document.getElementById("specificationsTable");
    const tableHeaders = table.getElementsByTagName("th");
    const tableDatas = table.getElementsByTagName("td");

    //apply css for whole container
    c4Container.style.textAlign = "center";
    c4Container.style.marginBottom = "150px";
    c4Container.style.padding = "0";
    c4Container.style.display = "block";
    c4Container.style.margin = "3px"

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

    //apply css for table
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";
    table.style.margin = "10px 0px";
    table.style.fontSize = "15px";
    table.style.textAlign = "center";
    table.style.zIndex = "0";
    table.style.boxShadow = "5px 5px 3px";
    table.style.borderRadius = "3px";
    table.style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
    table.style.marginBottom = "150px";


    //apply css for table datas
    for (let i = 0; i < tableDatas.length; i++) {
        tableDatas[i].style.padding = "12px 15px";
        tableDatas[i].style.border = "3px solid";
        tableDatas[i].style.fontWeight = "bold";
    }

    //apply css for table datas
    for (let i = 0; i < tableHeaders.length; i++) {
        tableHeaders[i].style.padding = "12px 15px";
        tableHeaders[i].style.border = "3px solid";
        tableHeaders[i].style.backgroundColor = "linear-gradient(to right, hsl(0, 0%, 60%), #6a6a6a49)";
        tableHeaders[i].style.color = "dark";
        tableHeaders[i].style.cursor = "pointer";
        tableHeaders[i].style.position = "sticky";
        tableHeaders[i].style.top = "0";
        tableHeaders[i].style.zIndex = "0";
    }
}

function sortTable(columnIndex) {
    const table = document.getElementById("specificationsTable");
    let switching = true;
    let direction = "asc";
    let switchcount = 0;
    let shouldSwitch;
    let i;

    while (switching) {
        //we suppose the row is already sorted ,switching = false;
        switching = false;
        const rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;

            //we take elements pair by pair
            const x = rows[i].getElementsByTagName("TD")[columnIndex];
            const y = rows[i + 1].getElementsByTagName("TD")[columnIndex];

            //clear the element for cel x and y
            let xValue = x.innerHTML.trim();
            let yValue = y.innerHTML.trim();

            //check if xValue and yValue are numbers or strings
            xValue = isNaN(xValue) ? xValue.toLowerCase() : parseFloat(xValue);
            yValue = isNaN(yValue) ? yValue.toLowerCase() : parseFloat(yValue);

            //check sorting direction and compares xValue yValue
            //if direction is not the same as the comparision, we need to switch and we exit the while loop
            if (direction === "asc") {
                if (xValue > yValue) {
                    shouldSwitch = true;
                    break;
                }
            } else if (direction === "desc") {
                if (xValue < yValue) {
                    shouldSwitch = true;
                    break;
                }
            }
        }

        //here we make the actual switch and the we rexecute the while loop by switching = true;
        //we increment switchcount to see if any kind of changes were made
        //if no changes, we change the direction and start again the sorting
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            if (switchcount === 0 && direction === "asc") {
                direction = "desc";
                switching = true;
            }
        }
    }
}