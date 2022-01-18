/* The worst code ever. */

/* About me. */
var i = 0;
var speed = 70;
var whoami_text = "whoami";

function whoami() {
    if (i == whoami_text.length) {
        var target = document.getElementById("text");
        target.innerHTML += "<br>Deltara<br><br>I just program as a hobby.<br>I don't see myself as a great programmer.<br>In fact, this website is a hot mess.<br><br>Languages I use:<br>- Rust<br>- Swift<br>- Python<br>- SPWN";
        target.innerHTML += "<br>~";
    }

    if (i < whoami_text.length) {
        document.getElementById("text").innerHTML += whoami_text.charAt(i);
        i++;
        setTimeout(whoami, speed);
    }
}

/* Projects. */
var scb_state = true;

function switch_scb() {
    if (scb_state == true) {
        document.getElementById("scb-control").innerHTML = "[-]";
        document.getElementById("scb-text").innerHTML = "<br>Languages:<br>- Python<br>Description:<br>A Reddit bot dedicated to posting Snoos with cocks.";
        scb_state = false;
    } else {
        document.getElementById("scb-control").innerHTML = "[+]";
        document.getElementById("scb-text").innerHTML = "";
        scb_state = true;
    }
}

var amo_state = true;

function switch_amo() {
    if (amo_state == true) {
        document.getElementById("amo-control").innerHTML = "[-]";
        document.getElementById("amo-text").innerHTML = "<br>Languages:<br>- Various<br>Description:<br>A joke repository for printing<br>ඞ amogus<br>in as many languages as possible.";
        amo_state = false;
    } else {
        document.getElementById("amo-control").innerHTML = "[+]";
        document.getElementById("amo-text").innerHTML = "";
        amo_state = true;
    }
}

var dis_state = true;

function switch_dis() {
    if (dis_state == true) {
        document.getElementById("dis-control").innerHTML = "[-]";
        document.getElementById("dis-text").innerHTML = "<br>Languages:<br>- SPWN<br>Description:<br>A Discord API wrapper library for SPWN.";
        dis_state = false;
    } else {
        document.getElementById("dis-control").innerHTML = "[+]";
        document.getElementById("dis-text").innerHTML = "";
        dis_state = true;
    }
}

var lqd_state = true;

function switch_lqd() {
    if (lqd_state == true) {
        document.getElementById("lqd-control").innerHTML = "[-]";
        document.getElementById("lqd-text").innerHTML = "<br>Languages:<br>- Rust<br>- C++<br>- C<br>Description:<br>A hopefully functional programming language.";
        lqd_state = false;
    } else {
        document.getElementById("lqd-control").innerHTML = "[+]";
        document.getElementById("lqd-text").innerHTML = "";
        lqd_state = true;
    }
}

var pho_state = true;

function switch_pho() {
    if (pho_state == true) {
        document.getElementById("pho-control").innerHTML = "[-]";
        document.getElementById("pho-text").innerHTML = "<br>Languages:<br>- JavaScript<br>Description:<br>A Guilded client modification.";
        pho_state = false;
    } else {
        document.getElementById("pho-control").innerHTML = "[+]";
        document.getElementById("pho-text").innerHTML = "";
        pho_state = true;
    }
}

var arc_state = true;

function switch_arc() {
    if (arc_state == true) {
        document.getElementById("arc-control").innerHTML = "[-]";
        document.getElementById("arc-text").innerHTML = "<br>Languages:<br>- Rust<br>- SPWN<br>Description:<br>An operating system written in mostly SPWN.";
        arc_state = false;
    } else {
        document.getElementById("arc-control").innerHTML = "[+]";
        document.getElementById("arc-text").innerHTML = "";
        arc_state = true;
    }
}

var projects_text = "cat .\\projects";

function projects() {
    if (i == projects_text.length) {
        var target = document.getElementById("text");
        target.innerHTML += "<br>Projects I've worked on.<br>";
        target.innerHTML += "<a id = \"scb-control\" onclick = \"switch_scb()\">[+]</a> <a class = \"scb-link\" href = \"https://github.com/Deltara3/snoocockbot\">u/snoocockbot</a><a id = \"scb-text\"></a>";
        target.innerHTML += "<br><a id = \"amo-control\" onclick = \"switch_amo()\">[+]</a> <a class = \"amo-link\" href = \"https://github.com/Deltara3/amogus\">amogus</a><a id = \"amo-text\"></a>";
        target.innerHTML += "<br><a id = \"dis-control\" onclick = \"switch_dis()\">[+]</a> <a class = \"dis-link\" href = \"https://github.com/Deltara3/discord.spwn\">discord.spwn</a><a id = \"dis-text\"></a>";
        target.innerHTML += "<br><a id = \"lqd-control\" onclick = \"switch_lqd()\">[+]</a> <a class = \"lqd-link\" href = \"https://github.com/lyqd-lang\">Lyqd</a><a id = \"lqd-text\"></a>";
        target.innerHTML += "<br><a id = \"pho-control\" onclick = \"switch_pho()\">[+]</a> <a class = \"pho-link\" href = \"https://github.com/phosphor-org\">Phosphor</a><a id = \"pho-text\"></a>";
        target.innerHTML += "<br><a id = \"arc-control\" onclick = \"switch_arc()\">[+]</a> <a class = \"arc-link\" href = \"https://github.com/arc-spwn\">Arc</a><a id = \"arc-text\"></a>";
        target.innerHTML += "<br>~";
    }

    if (i < projects_text.length) {
        document.getElementById("text").innerHTML += projects_text.charAt(i);
        i++;
        setTimeout(projects, speed);
    }
}