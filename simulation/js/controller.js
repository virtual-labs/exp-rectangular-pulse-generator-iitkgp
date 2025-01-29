/**
 * 
 *  Document     : controller.js
 *  Created on   : Marn9, 2017, 4:35:25 PM
 *  Author       : Subir Sekhar
 *  Co-Author    : Pabitra K Jana
 *  Organization : IIT Khatagpur
 *  
 */

// Initialize Simulation on page load
function initializeSimulation() {
    CUBEScene.init();
    animate();
}
//  action will take place when windo resize
function onWindowResize() {
    console.log(Date() + " resize")
}
if (window.addEventListener) {
    window.addEventListener('load', initializeSimulation, false);
    //    window.addEventListener('resize', onWindowResize, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', initializeSimulation);
} else {
    window.onload = initializeSimulation;
}

function trigger_generator() {


    window.setTimeout(function () {


        CUBEScene.cylinder23.material.color.setHex(0xffffff);
        CUBEScene.cylinder24.material.color.setHex(0xffffff);
        CUBEScene.cylinder5.material.color.setHex(0x666666);
        CUBEScene.cylinder6.material.color.setHex(0x666666);
        CUBEScene.cylinder1.material.color.setHex(0x666666);
        CUBEScene.cylinder2.material.color.setHex(0x666666);


        render();
    }, 1000);

    window.setTimeout(function () {

        CUBEScene.cylinder27.material.color.setHex(0xffffff);
        CUBEScene.cylinder28.material.color.setHex(0xffffff);
        CUBEScene.cylinder29.material.color.setHex(0xffffff);
        CUBEScene.cylinder59.material.color.setHex(0xffffff);
    }, 2000);

    window.setTimeout(function () {

    }, 3000);


    window.setTimeout(function () {
        CUBEScene.cylinder60.rotation.x = Math.PI * 0.5;
        CUBEScene.cylinder60.rotation.z = Math.PI * 0.5;
        CUBEScene.cylinder60.material.color.setHex(0xffffff);
        CUBEScene.cylinder60.position.set(395, 15, 72);
        CUBEScene.cylinder65.material.color.setHex(0xffffff);
        CUBEScene.cylinder58.material.color.setHex(0xffffff);

        CUBEScene.cylinder53.material.color.setHex(0xffffff);



        render();

    }, 4000);



    window.setTimeout(function () {
        CUBEScene.spring.scale.set(1, 1.8, 1);
        CUBEScene.spring1.scale.set(1, 1.8, 1);
        CUBEScene.spring.position.set(-337, -135, 0);
        CUBEScene.spring1.position.set(-262, -135, 0);
        CUBEScene.cylinder54.position.set(435, 81, -120);
        CUBEScene.cube21.position.set(435, 69, -120);

    }, 5000);

    window.setTimeout(function () {
        CUBEScene.cylinder61.material.color.setHex(0xffffff);
        audio();
        CUBEScene.cylinder64.material.color.setHex(0xffffff);
        CUBEScene.cube220.material.color.setHex(0xffffff);
        CUBEScene.cylinder16.rotation.x = Math.PI * 0;
        CUBEScene.cylinder166.rotation.x = Math.PI * 0;
        CUBEScene.cylinder16.position.set(330, -105, 350);
        CUBEScene.cylinder166.position.set(230, -105, 350);
        CUBEScene.cylinder16.material.color.setHex(0xffffff);
        CUBEScene.cylinder166.material.color.setHex(0xffffff);
    }, 5500);

    window.setTimeout(function () {
        CUBEScene.cylinder17.material.color.setHex(0xffffff);
        CUBEScene.cube220.material.color.setHex(0x666666);
        CUBEScene.cylinder17.material.color.setHex(0xffffff);
        CUBEScene.cube1.material.color.setHex(0xff0000);
        CUBEScene.cube11.material.color.setHex(0xC0C0C0);
        CUBEScene.cube12.material.color.setHex(0xC0C0C0);
        CUBEScene.cube13.material.color.setHex(0xC0C0C0);
        CUBEScene.cylinder5.material.color.setHex(0x666666);
        CUBEScene.cylinder42.material.color.setHex(0x666666);
        CUBEScene.cylinder41.material.color.setHex(0x666666);
        CUBEScene.cylinder45.material.color.setHex(0x666666);
        CUBEScene.cylinder42.material.color.setHex(0x666666);
        CUBEScene.cylinder44.material.color.setHex(0x666666);
        CUBEScene.cylinder9.material.color.setHex(0x666666);
        CUBEScene.cylinder10.material.color.setHex(0x666666);
        CUBEScene.cylinder12.material.color.setHex(0xffffff);
        CUBEScene.cylinder13.material.color.setHex(0xffffff);
        CUBEScene.cylinder29.material.color.setHex(0x666666);
        CUBEScene.cylinder26.material.color.setHex(0x666666);
        CUBEScene.cylinder27.material.color.setHex(0x666666);
        CUBEScene.cylinder28.material.color.setHex(0x666666);
        CUBEScene.cylinder166.material.color.setHex(0x666666);
        CUBEScene.cylinder17.material.color.setHex(0xffffff);
        CUBEScene.cylinder23.material.color.setHex(0xffffff);
        CUBEScene.cylinder24.material.color.setHex(0xffffff);
        CUBEScene.cylinder60.rotation.x = Math.PI * 0;
        CUBEScene.cylinder60.rotation.z = Math.PI * 0;
        CUBEScene.cylinder60.material.color.setHex(0x666666);
        CUBEScene.cylinder60.position.set(400, 30, 72);
        CUBEScene.cylinder65.material.color.setHex(0x666666);
        CUBEScene.cylinder58.material.color.setHex(0x666666);
        CUBEScene.cylinder59.material.color.setHex(0x666666);
        CUBEScene.spring.scale.set(1, 1, 1);
        CUBEScene.spring1.scale.set(1, 1, 1);
        CUBEScene.spring.position.set(-337, -63, 0);
        CUBEScene.spring1.position.set(-262, -63, 0);
        CUBEScene.cylinder54.position.set(435, 61, -120);
        CUBEScene.cube21.position.set(435, 50, -120);
        CUBEScene.cylinder64.material.color.setHex(0x666666);
        CUBEScene.cylinder61.material.color.setHex(0x666666);
        CUBEScene.cylinder53.material.color.setHex(0x666666);
        CUBEScene.cylinder12.material.color.setHex(0x666666);
        CUBEScene.cylinder13.material.color.setHex(0x666666);
        CUBEScene.cylinder19.material.color.setHex(0x666666);
        CUBEScene.cylinder23.material.color.setHex(0x666666);
        CUBEScene.cylinder24.material.color.setHex(0x666666);
        render();
        document.getElementById("meter").hidden = true;
    }, 6500);

    window.setTimeout(function () {

        graphGenerator();


    }, 7000);


    document.getElementById("buttn3").disabled = true;

    window.setTimeout(function () {
        displayMap();

    }, 7500);

}


function audio() {
    var audio = new Audio('images/flash_sound.mp3');
    audio.play();
}

function graphGenerator() {
    var Rf = Number(document.getElementById('Rf').value);
    var Rt = Number(document.getElementById('Rt').value);
    var Cg = Number(document.getElementById('Cg').value);
    var C1 = Number(document.getElementById('C1').value);
    var V0 = Number(document.getElementById('V0').value);
    var d = Number(document.getElementById('d').value);
    var I = [];
    var t = [];
    var z = [];
    var RF = Rt;
    var RT = Rf;

//    var v = 10 * V0;
//    var a = 1 / ((Cg + C1) * RT + (RF * Cg));
//    var b = ((Cg + C1) * RT + (RF * Cg)) / (RF * RT * Cg * C1);
//
//    var c = Rf + Rt;
    var e = (C1 + d);

    var a = Math.sqrt(C1 / Cg);
    var c = (RT - 1) * Math.sqrt(C1 * Cg);
    var b = (RF / 2 + (3.14 * (d / t[i])) * (0.5));


    var w = 2 * 3.14 / c;

    for (var i = 0; i < c; i++)
    {
        t[i] = i;
        var b = Math.sqrt((RF * RF + (Math.PI * (d / t[i])) * (Math.PI * (d / t[i]))));

//        I[i] = (V0 /Math.sqrt(a*a+b*b))* (Math.sin(Math.PI * -t[i]/(a+b)) + Math.exp(-t[i]/a+b)); 
        I[i] = (V0 / (a + b)) * Math.sign(Math.sin(Math.PI * 2 * t[i] / c));
        // V0 *(Math.exp(Math.PI * -t[i] *a) - Math.exp(-t[i] *b)); 
        z[i] = "[" + t[i] + " ," + I[i] + "]";
    }
    z[i] = "[" + t[i] + " ," + I[i] + "]";
    console.log(z);
    var len = data.getNumberOfRows(); // ET NUMBER OF ROWS IN ARRAY 
    if (len > 0) {
        data.removeRows(0, len); // REMOVE THE PREVIOUS DATA
    }
    for (var i = 0; i < 0.508 * t.length; i++)
        data.addRow([t[i], I[i]]);
    //alert("After add: "+data.);

    var titleGraph1 = document.getElementById("demo4").value;
    var titleGraph2 = document.getElementById("demo2").value;
    var titleGraph3 = document.getElementById("demo3").value;
    var titleGraph4 = document.getElementById("demo").value;
    var titleGraph5 = document.getElementById("demo1").value;
    var titleGraph6 = document.getElementById("demo8").value;

    var options = {
        title: 'I - T Curve' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + 'V =' + ' ' + titleGraph1 + ' ' + 'kV' + '    \xa0\xa0\xa0      ' + 'Cg =' + ' ' + titleGraph2 + ' ' + '\xB5' + 'F' + '   \xa0\xa0\xa0    ' + 'Lf =' + ' ' + titleGraph3 + ' ' + '\xB5' + 'H' + '  \xa0\xa0\xa0     ' +   'Lt =' + ' ' + titleGraph6 + ' ' + '\xB5' + 'H' + '  \xa0\xa0\xa0'+       'N =' + ' ' + titleGraph4 + '   \xa0\xa0\xa0    ' + 'Rt =' + ' ' + titleGraph5 + ' ' + '\u2126',
        explorer: {maxZoomOut: 20},
        curveType: 'function',
        legend: {position: 'none'},
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
            title: 'Time ( Micro Second )'
        },
        vAxis: {
            title: 'Current ( Amp )'
        },
        colors: ['#a52714', '#097138'],
        selectionMode: 'multiple',
        tooltip: {trigger: 'both',
            focusTarget: 'category'
        },
        aggregationTarget: 'none',
        crosshair: {
            color: '#000',
            trigger: 'both',

            focused: {color: ['#00ff00']},
            selected: {color: ['#00ffff']},
            focusTarget: 'category'
        }
    };
    google.visualization.events.addListener(chart, 'ready', function () {

        graphURI = chart.getImageURI();
        //cng = "'" + png + "'"

    });
    chart.clearChart();
    chart.draw(data, options);
}

function displayMap() {
    document.getElementById('graph').style.display = "block";
    graphGenerator();
    document.getElementById('dwnldGraph').innerHTML = "";
    var linkk = "<a href='" + graphURI + "' download='mypanting.png' target='_blank' >Save Graph</a>";
    document.getElementById('dwnldGraph').innerHTML = linkk;
}
;

function ground_switch() {


    CUBEScene.cylinder16.rotation.x = Math.PI / 2;
    CUBEScene.cylinder16.position.set(330, -105, 375);
    CUBEScene.cylinder16.material.color.setHex(0x666666);
    CUBEScene.cylinder166.rotation.x = Math.PI / 2;
    CUBEScene.cylinder166.position.set(230, -105, 375);
    CUBEScene.cylinder166.material.color.setHex(0x666666);
    CUBEScene.cylinder17.material.color.setHex(0x666666);
    CUBEScene.cylinder23.material.color.setHex(0x666666);

    render();

    window.setTimeout(function () {

        document.getElementById("buttn1").disabled = true;
    }, 500);
    document.getElementById("buttn2").disabled = false;
}



var chargeCapacitorTimer = null, chargeCapacitorCount = 0;

function charge_capacitor() {
    window.setTimeout(function () {


        CUBEScene.cylinder24.material.color.setHex(0xffffff);
        CUBEScene.cylinder29.material.color.setHex(0xffffff);
        CUBEScene.cylinder26.material.color.setHex(0xffffff);
        CUBEScene.cylinder27.material.color.setHex(0xffffff);
        CUBEScene.cylinder28.material.color.setHex(0xffffff);
        CUBEScene.cube11.material.color.setHex(0xffffff);
        CUBEScene.cube12.material.color.setHex(0xffffff);
        CUBEScene.cube13.material.color.setHex(0xffffff);
        CUBEScene.cylinder5.material.color.setHex(0xffffff);
        CUBEScene.cylinder6.material.color.setHex(0xffffff);
        CUBEScene.cylinder1.material.color.setHex(0xffffff);
        CUBEScene.cylinder2.material.color.setHex(0xffffff);
        CUBEScene.cylinder42.material.color.setHex(0xffffff);
        CUBEScene.cylinder44.material.color.setHex(0xffffff);
        CUBEScene.cylinder9.material.color.setHex(0xffffff);
        CUBEScene.cylinder10.material.color.setHex(0xffffff);
        document.getElementById("meter").hidden = false;
        document.getElementById("charge-msg").innerText = "Charging...";

    }, 500);



    window.setTimeout(function () {
        CUBEScene.cube1.material.color.setHex(0x00ff00);
        CUBEScene.cylinder5.material.color.setHex(0xffffff);
        CUBEScene.cylinder42.material.color.setHex(0xffffff);
        CUBEScene.cylinder41.material.color.setHex(0xffffff);
        CUBEScene.cylinder45.material.color.setHex(0xffffff);
        document.getElementById("buttn3").disabled = false;
        document.getElementById("buttn2").disabled = true;
        CUBEScene.cylinder27.material.color.setHex(0x666666);
        CUBEScene.cylinder28.material.color.setHex(0x666666);
        CUBEScene.cylinder29.material.color.setHex(0x666666);
        render();
    }, 5000);
    if (!chargeCapacitorTimer) {
        chargeCapacitorTimer = setInterval(function () {
            chargeCapacitorCount = chargeCapacitorCount + 2;
            if (chargeCapacitorCount == 100) {
                clearInterval(chargeCapacitorTimer);
                chargeCapacitorCount = 0;
                chargeCapacitorTimer = null;
                document.getElementById("charge-msg").innerText = "Charged";
            } else
                document.getElementById("charge-progress").value = chargeCapacitorCount;
        }, 100);
    }
}

function start() {
    document.getElementById("buttn").value = "Restart";
    document.getElementById("buttn1").disabled = false;
    CUBEScene.cylinder12.material.color.setHex(0xffffff);
    CUBEScene.cylinder13.material.color.setHex(0xffffff);
    CUBEScene.cylinder19.material.color.setHex(0xffffff);
    CUBEScene.cylinder23.material.color.setHex(0xffffff);
}
function restart() {
    document.getElementById("buttn").value = "Start Experiment";
    document.getElementById("buttn1").disabled = true;
    document.getElementById("buttn2").disabled = true;
    document.getElementById("buttn3").disabled = true;
    document.getElementById('buttn').addEventListener('click', function () {
        document.getElementById('graph').style.display = "none";
        start();
    });
}

function toggleButton() {
    var bval = document.getElementById("buttn").value;
    if (bval === "Start Experiment") {
        start();
    } else {
        restart();
    }

}
function aaa() {
    document.getElementById("demo").value = document.getElementById("Rf").value;
}
function aaa1() {
    document.getElementById("demo1").value = document.getElementById("Rt").value;
}
function aaa2() {
    document.getElementById("demo2").value = document.getElementById("Cg").value;
}
function aaa3() {
    document.getElementById("demo3").value = document.getElementById("C1").value;
}
function aaa4() {
    document.getElementById("demo4").value = document.getElementById("V0").value;
}
function aaa8() {
    document.getElementById("demo8").value = document.getElementById("d").value;
}