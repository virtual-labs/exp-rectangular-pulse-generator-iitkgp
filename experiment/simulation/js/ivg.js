/**
 * 
 *  Document     : control.js
 *  Created on   : Feb 17, 2017, 3:40:00 AM
 *  Author       : Subir Sekhar
 *  Co-Author    : Pabitra K Jana
 *  Organization : IIT Khatagpur
 *  
 */
var chart;
var data;
google.charts.load("current", {packages: ["corechart", "line"]});
google.charts.setOnLoadCallback(ivg);
$(window).resize(function(){
  ivg();
   graphGenerator();
});

function ivg() {
    data = new google.visualization.DataTable();
    data.addColumn('number', 't');
    data.addColumn('number', 'I');
    var options = {
        title: 'I - T Curve',
        curveType: 'function',
        'isStacked': true,
        pieSliceText: 'percentage',
        legend: {position: 'none'},
        chartArea: {
            left: "5%",
            top: "8%",
            height: "80%",
            width: "90%"
        },
        hAxis: {
            title: 'Time ( Micro Second)'
        },
        vAxis: {
            title: 'Current ( Amp )'
        },
        colors: ['#a52714', '#097138'],
    };
    chart = new google.visualization.LineChart(document.getElementById('visualization'));
    chart.draw(data, options);

}

var arrowSign = "&#x25BC;";
function changeThings() {
    if (arrowSign === "&#x25BC;") {
        document.getElementById("ckt_diagram").style.display = "none";
        document.getElementById("dropdown-content").style.display = "block";
        document.getElementById("circle").innerHTML = "&#916;";
        arrowSign = "&#916;";
    } else {
        document.getElementById("dropdown-content").style.display = "none";
        document.getElementById("ckt_diagram").style.display = "block";
        document.getElementById("circle").innerHTML = "&#x25BC;";
        arrowSign = "&#x25BC;";
    }
}

