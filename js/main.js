// Inicializo el plugin OnePageScroll
$(".main").onepage_scroll({
    sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
    easing: "ease", // "ease", "linear", "ease-in", "ease-out", "ease-in-out", "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
    animationTime: 500, // AnimationTime let you define how long each section takes to animate
    pagination: false, // You can either show or hide the pagination. Toggle true for show, false for hide.
    updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
    beforeMove: function(index) { // This option accepts a callback function. The function will be called before the page moves.
    },
    afterMove: function(index) { // This option accepts a callback function. The function will be called after the page moves.

    },
    loop: false,
    keyboard: true,
    responsiveFallback: false,
    direction: "vertical"
});

// escucho todos los avanzar para
$(".avanzar").click(function() {
    $(".main").moveDown();
});

function randomNumber(minimum, maximum) {
    return Math.round(Math.random() * (maximum - minimum) + minimum);
}

// Inicializo el plugin particlesJS

particlesJS('constelacion', {
    particles: {
        color: '#fff',
        color_random: false,
        shape: 'circle',
        opacity: {
            opacity: 1,
            anim: {
                enable: true,
                speed: 0.5,
                opacity_min: 0,
                sync: true
            }
        },
        size: randomNumber(3, 7),
        size_random: true,
        nb: randomNumber(30, 45),
        line_linked: {
            enable_auto: true,
            distance: randomNumber(200, 300),
            color: '#fff',
            opacity: .9,
            width: .5,
            condensed_mode: {
                enable: false,
                rotateX: 900,
                rotateY: 900
            }
        },
        anim: {
            enable: true,
            speed: 1.8
        }
    },
    interactivity: {
        enable: false,
        detect_on: 'canvas',
        mode: 'grab',
        line_linked: {
            opacity: .5
        },
        events: {
            onresize: {
                enable: true,
                mode: 'out',
                density_auto: true,
                density_area: randomNumber(1000, 1500)
            }
        }
    },
    retina_detect: true
});


// Acordeon
var divNum = new Array("tema1", "tema2", "tema3");

function openClose(theID) {
    for (var i = 0; i < divNum.length; i++) {
        if (divNum[i] == theID) {
            if (document.getElementById(divNum[i]).style.display == "block") {
                document.getElementById(divNum[i]).style.display = "none"
            } else {
                document.getElementById(divNum[i]).style.display = "block"
            }
        } else {
            document.getElementById(divNum[i]).style.display = "none";
        }
    }
}



// no la uso pero cierra el acordeón
function closeAll() {
 for(var i=0; i < divNum.length; i++) {
   document.getElementById(divNum[i]).style.display = "none";
 }
}


//CAPS LOCK FOR CRUISE CONTROL
$(document).ready(function() {
    var ee = 'labgcba';
    var eel = ee.length;
    var kh = '';
    var m;
        $(document).keypress(function(e) {
            kh += String.fromCharCode(e.which)
            m = kh.match(ee);
            if(m) {
                $('<div id="cat"></div>').appendTo('body');
                setTimeout(function(){$("#cat").remove();}, 500);
                kh = m = '';
            } else if (kh.length > 30) {
                kh = kh.substr((kh.length - eel - 1));
            }
        });
});