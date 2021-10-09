// FAIT QUE LA TRANSITION AU DéBUT NE SOIS PAS HYPER LENTE
function load() {
    setTimeout(function () {
        $(".circle_animation_j").css("transition", "all 86400s linear");
        $(".circle_animation_sec").css("transition", "all 1s linear");
        $(".circle_animation_h").css("transition", "all 3600s linear");
        $(".circle_animation_min").css("transition", "all 60s linear");
    }, 500);
    print("hElllllll")
}
load()
// PRINT
function print(args) {
    console.log(args)
}

// CERCLE POUR JOURS
var time = 60;
var initialOffset = '440';
var clone_suppr = $(".suppr").clone();

// BAR DE CHARGEMENT
var i = 0;
var width = 0
function move(end, beginning, now) {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        frame()
        var id = setInterval(frame, 10000);
        function frame() {
            calcul = 100/(end-beginning)*(now-beginning)
            calcul1 = calcul*100
            calcul1 = Math.round(calcul1)
            calcul1 = calcul1/100
            // print(calcul1 + "%")
            if (width >= 100) {
            clearInterval(id);
            i = 0;
            } else {
            width = calcul1;
            elem.style.width = width + "%";
            elem.innerHTML = width  + "% de déjà fait !";
            }
        }
    }
}
move(1634917500, 1630569600, (Date.now()/1000))

// Compte à rebours
function compte_a_rebours()
{
    var compte_a_rebours = document.getElementById("compte_a_rebours");

    var date_actuelle = new Date();
    var date_evenement = new Date("Oct 22 15:45:00 2021");
    var total_secondes = (date_evenement - date_actuelle) / 1000;
    if(date_actuelle >= date_evenement) {
        compteur.innerHTML = "En vacances !";
        return;
    }

    if (total_secondes > 0)
    {
        var jours = Math.floor(total_secondes / (60 * 60 * 24));
        var heures = Math.floor((total_secondes - (jours * 60 * 60 * 24)) / (60 * 60));
        minutes = Math.floor((total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60))) / 60);
        secondes = Math.floor(total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)));

        var et = "et";
        var mot_jour = " jours";
        var mot_heure = " heures";
        var mot_minute = " minutes";
        var mot_seconde = " secondes";

        if (jours == 0)
        {
            jours = '';
            mot_jour = '';
        }
        else if (jours == 1)
        {
            mot_jour = " jour";
        }

        if (heures == 0)
        {
            heures = '';
            mot_heure = '';
        }
        else if (heures == 1)
        {
            mot_heure = " heure";
        }

        if (minutes == 0)
        {
            minutes = '';
            mot_minute = '';
        }
        else if (minutes == 1)
        {
            mot_minute = " minute";
        }

        if (secondes == 0)
        {
            secondes = '';
            mot_seconde = '';
            et = '';
        }
        else if (secondes == 1)
        {
            mot_seconde = " seconde";
        }

        if (minutes == 0 && heures == 0 && jours == 0)
        {
            et = "";
        }

        jour.innerHTML = jours + mot_jour + "&nbsp;"
        heure.innerHTML = heures + mot_heure + "&nbsp;"
        minute.innerHTML = minutes + mot_minute + "&nbsp;"
        seconde.innerHTML = secondes + mot_seconde + "&nbsp;"
    }
    /* Need initial run as interval hasn't yet occured... */
    // Cercles secondes
    $('.circle_animation_sec').css('stroke-dashoffset', initialOffset-(1*(initialOffset/time)));
            $('.seconde_h3').text(secondes);
            $('.mot_seconde_h3').text(mot_seconde);
        $('.circle_animation_sec').css('stroke-dashoffset', initialOffset-((secondes)*(initialOffset/time)));
    // Cercles minutes
    $('.circle_animation_min').css('stroke-dashoffset', initialOffset-(1*(initialOffset/time)));
            $('.min_h3').text(minutes);
            $('.mot_min_h3').text(mot_minute);
        $('.circle_animation_min').css('stroke-dashoffset', initialOffset-((minutes)*(initialOffset/time)));
    // Cercles heures
    $('.circle_animation_h').css('stroke-dashoffset', initialOffset-(1*(initialOffset/time)));
            $('.heure_h3').text(heures);
            $('.mot_heure_h3').text(mot_heure);
        $('.circle_animation_h').css('stroke-dashoffset', initialOffset-((heures)*(initialOffset/time)));
    // Cercles jours
    $('.circle_animation_j').css('stroke-dashoffset', initialOffset-(1*(initialOffset/time)));
            $('.jour_h3').text(jours);
            $('.mot_jour_h3').text(mot_jour);
        $('.circle_animation_j').css('stroke-dashoffset', initialOffset-((jours)*(initialOffset/time)));
    // Transition quali a la fin
    if(secondes == '') {
        clone_suppr = $('.secondes_item').detach();
        $(".circle_animation_sec").css("transition", "all 0.5s linear");
        setTimeout(function () {
            $(".circle_animation_sec").css("transition", "all 1s linear");
        }, 100);
        i=0;
    }else{
        append_txt(i)
        i=1
    }
    if(minutes == '') {
        $(".circle_animation_min").css("transition", "all 0.5s linear");
        setTimeout(function () {
            $(".circle_animation_min").css("transition", "all 1s linear");
        }, 100);
    }
    if(heures == '') {
        $(".circle_animation_h").css("transition", "all 0.5s linear");
        setTimeout(function () {
            $(".circle_animation_h").css("transition", "all 1s linear");
        }, 100);
    }
    if(jours == '') {
        $(".circle_animation_j").css("transition", "all 0.5s linear");
        setTimeout(function () {
            $(".circle_animation_j").css("transition", "all 1s linear");
        }, 100);
    }
    var actualisation = setTimeout("compte_a_rebours();", 1);
}

function append_txt(arg){
    print(arg)
    if(arg==0){
        $("body").append(clone_suppr);
    }
}
console.log("Hello")
compte_a_rebours();