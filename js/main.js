/* About me */
var i = 0;
var speed = 70;
var whoami_text = "whoami";

function whoami() {
    if (i == whoami_text.length) {
        var target = document.getElementById("text");
        target.innerHTML += "<br>Deltara<br>";
        target.innerHTML += "<br>~";
    }

    if (i < whoami_text.length) {
        document.getElementById("text").innerHTML += whoami_text.charAt(i);
        i++;
        setTimeout(whoami, speed);
    }
}

/* Projects */
var scb_state = true;

function switch_scb() {
    if (scb_state == true) {
        document.getElementById("scb-control").innerHTML = "[-]";
        document.getElementById("scb-text").innerHTML = "<br>A Reddit bot dedicated to posting Snoos with cocks.";
        scb_state = false;
    } else {
        document.getElementById("scb-control").innerHTML = "[+]";
        document.getElementById("scb-text").innerHTML = "";
        scb_state = true;
    }
}


var projects_text = "cat .\\projects";

function projects() {
    if (i == projects_text.length) {
        var target = document.getElementById("text");
        target.innerHTML += "<br>Projects I've worked on.<br>";
        target.innerHTML += "<a id = \"scb-control\" onclick = \"switch_scb()\">[+]</a> u/snoocockbot<a id = \"scb-text\"></a>";
        target.innerHTML += "<br>~";
    }

    if (i < projects_text.length) {
        document.getElementById("text").innerHTML += projects_text.charAt(i);
        i++;
        setTimeout(projects, speed);
    }
}