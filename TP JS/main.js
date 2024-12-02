function heure(n) {
    return (n<10)?'0'+n:n;
}

document.addEventListener('wheel', function(event) {
    // Empêche le défilement vertical par défaut
    event.preventDefault = true

    let sections = document.querySelectorAll('.section');
    console.log(sections    )
    let currentSection = document.elementFromPoint(0, window.innerHeight / 2).closest('.section');
    let currentSectionIndex = Array.from(sections).indexOf(currentSection);

    if (event.deltaY > 0) {
        // Si on scrolle vers le bas
        let nextSection = sections[currentSectionIndex + 1];
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        // Si on scrolle vers le haut
        let prevSection = sections[currentSectionIndex - 1];
        if (prevSection) {
            prevSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}, { passive: false });


function updateTime() {
    const now = new Date();
    let hours = heure(now.getHours());
    let minutes = heure(now.getMinutes());
    let seconds = heure(now.getSeconds());

    const timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById('time').textContent = timeString;
}
setInterval(updateTime, 1000);
updateTime();

function calculateAge() {
    const birthDate = new Date('2004-02-12T00:00:00');
    const now = new Date();

    const ageInMilliseconds = now - birthDate;

    const millisecondsInYear = 365.25 * 24 * 60 * 60 * 1000;
    const ageInYears = ageInMilliseconds / millisecondsInYear;

    // Affichage du résultat avec une précision de 10 chiffres après la virgule
    document.getElementById('age').textContent = ageInYears.toFixed(12);
}
setInterval(calculateAge, 1);
calculateAge();

function showCurrentDate() {
    const now = new Date();
    let day = now.getDate().toString().padStart(2, '0');
    let month = (now.getMonth() + 1).toString().padStart(2, '0');
    let year = now.getFullYear();

    const dateString = `${day}/${month}/${year}`;
    document.getElementById('date').textContent = dateString;
}
showCurrentDate();

function randomRGB() {

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    let red = getRandomInt(255);
    let blue = getRandomInt(255);
    let green = getRandomInt(255);

    return "rgb(" + red + "," + green + "," + blue + ")";
}

let btn = document.getElementById('changecouleur');

btn.onclick = function(){
    console.log(randomRGB())
    let bg = document.getElementById('bg-color');
    bg.style.background = randomRGB();
    bg.style.background = "linear-gradient(90deg, "+randomRGB()+" 0%, "+randomRGB()+" 25%, "+randomRGB()+" 50%, "+randomRGB()+" 75%, "+randomRGB()+" 100%)";
}

function changeBG(){
    let bg = document.getElementById('bg-color');
    bg.style.background = randomRGB();
    bg.style.background = "radial-gradient(circle, "+randomRGB()+" 0%, "+randomRGB()+" 100%)";
}

setInterval(changeBG, 1000);

btn.addEventListener("mouseenter", function() {
    btn.classList.add("hovered");
});
  
btn.addEventListener("mouseleave", function() {
    btn.classList.remove("hovered");
});


function afficheTab(tab) {
    var tbody = document.getElementById("placeTableau");

    tbody.innerHTML = '';

    for (let i = 0; i < tab.length; i++) {

        var tr = document.createElement("tr");

        var tdIndice = document.createElement("td");
        tdIndice.innerHTML = i;
        tr.appendChild(tdIndice);

        var tdValeur = document.createElement("td");
        tdValeur.innerHTML = tab[i];
        tr.appendChild(tdValeur);
        tbody.appendChild(tr);
    }
}

afficheTab(["a","b","c",1,2,3]);


function sommeNpremierNaturel(n) {
    let compteur = 0;
    for (let i = 0; i < n;i++) {
        compteur +=i
    }
    return compteur
}


function TabEntier(n) {
    var tab = [];
    for (let i = 0; i<n;i++){
        tab.push(sommeNpremierNaturel(i))
    } return tab;
}

function afficheTabEntier(tab) {
    var tbody = document.getElementById("placeTableauEntier");

    tbody.innerHTML = '';

    for (let i = 1; i < tab.length; i++) {

        var tr = document.createElement("tr");

        var tdIndice = document.createElement("td");
        tdIndice.innerHTML = i;
        tr.appendChild(tdIndice);

        var tdValeur = document.createElement("td");
        tdValeur.innerHTML = tab[i];
        tr.appendChild(tdValeur);
        tbody.appendChild(tr);
    }
}

afficheTabEntier(TabEntier(10));