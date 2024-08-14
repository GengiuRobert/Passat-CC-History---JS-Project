//code responsible for paragraph C3
document.addEventListener("DOMContentLoaded", paragraphC3Loaded);
function paragraphC3Loaded() {
    //select ID element of the C3 div
    const h3ofC3 = document.getElementsByClassName("h3ofC3");
    const c3Container = document.getElementById("C3");
    const pofC3 = document.getElementById("pofC3");
    const saleChartC3 = document.getElementById("myChart");

    //apply css style for sales chart
    saleChartC3.style.display = "inline-block";

    //apply css style for p of C3
    pofC3.style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
    pofC3.style.fontWeight = "bold";
    pofC3.style.display = "inline-block";
    pofC3.style.boxShadow = "5px 5px 3px";
    pofC3.style.background = "linear-gradient(to right, hsl(0, 0%, 55%), #ffffff)";
    pofC3.style.margin = "5px";
    pofC3.style.padding = "5px";
    pofC3.style.fontSize = "larger";
    pofC3.style.borderRadius = "3px";

    //apply css style for C3 div
    c3Container.style.textAlign = "center";
    c3Container.style.marginBottom = "150px";
    c3Container.style.padding = "0";
    c3Container.style.display = "block";

    //apply css style for h3
    for (let i = 0; i < h3ofC3.length; i++) {
        h3ofC3[i].style.background = "linear-gradient(to right, hsl(0, 0%, 55%), #ffffff)";
        h3ofC3[i].style.display = "inline-block";
        h3ofC3[i].style.boxShadow = "5px 5px 3px";
        h3ofC3[i].style.padding = "5px";
        h3ofC3[i].style.margin = "5px auto";
        h3ofC3[i].style.borderRadius = "3px";
        h3ofC3[i].style.fontSize = "larger";
        h3ofC3[i].style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
    }
}
//code responsible for sales chart in C3
document.addEventListener("DOMContentLoaded", loadSalesChartC3);
function loadSalesChartC3() {
    var xValues = [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

    var europeValues = [1828, 31324, 23666, 23500, 23209, 18118, 16064, 10215, 6750, 712, 424, 0, 0];
    var usaValues = [1323, 23872, 27987, 29502, 23059, 15672, 9995, 6276, 3237, 1355, 455, 58, 17];
    var chinaValues = [0, 0, 17353, 36318, 37589, 41161, 47892, 31970, 29148, 21472, 16065, 23807, 28428];

    new Chart("myChart", {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [
                {
                    label: "Europe",
                    backgroundColor: "darkblue",
                    data: europeValues
                },
                {
                    label: "USA",
                    backgroundColor: "white",
                    data: usaValues
                },
                {
                    label: "China",
                    backgroundColor: "grey",
                    data: chinaValues
                }
            ]
        },
        options: {
            legend: {
                display: true,
                labels: {
                    fontColor: "black",
                    fontFamily: "'Georgia', 'Times New Roman', serif",
                    fontSize: 20,
                    fontStyle: "bold"
                }
            },
            title: {
                display: true,
                text: "Sales Data Over the Years",
                fontColor: "black",
                fontFamily: "'Georgia', 'Times New Roman', serif",
                fontSize: 18,
                fontStyle: "bold"
            },
            scales: {
                xAxes: [{
                    ticks: {
                        fontColor: "black",
                        fontFamily: "'Georgia', 'Times New Roman', serif",
                        fontSize: 12,
                        fontStyle: "bold"
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontColor: "black",
                        fontFamily: "'Georgia', 'Times New Roman', serif",
                        fontSize: 12,
                        fontStyle: "bold"
                    }
                }]
            }
        }
    });
}
//--------------------------------------------------------------------
