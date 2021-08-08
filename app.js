
const theme = document.querySelectorAll('.theme');
const canvas = document.getElementById('canvas');
const btn = document.getElementById('btn');
const scrore = document.getElementById('score');

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
cursor.setAttribute('style', "top:" + (e.pageY-20)+"px; left:"+(e.pageX-20)+"px;")
})

const coup_de_feu = () => {
var audioFeu = document.createElement("audio");
audioFeu.src = "./audio/coup_de_feu.mp3";
audioFeu.play();
};

const assiette_qui_casse = () => {
    var audioCasse = document.createElement("audio");
    audioCasse.src = "./audio/assiette_qui_casse_3.wav";
    audioCasse.play();
    };


function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Utilisation
//La variable contient un nombre aléatoire compris entre 1 et 10
//let aleatoireX = entierAleatoire(1000, 1500);
//let aleatoireY = entierAleatoire(2500, 3500);




const lancer_assiette = () => {



 let trX = entierAleatoire(4000, 5000);
 let trY = entierAleatoire(2000, 3000) *-1;

 
 console.log('shoot')
 console.log('Aléatoire X :' + trX)
 console.log('Aléatoire Y :' + trY)

    let assiette = new Image();
    assiette.src = "./img/assiette_1.png"

    assiette.classList.add('assiette');
    assiette.style.bottom = 0 + 'px';
    assiette.style.left = 0 + 'px';
    assiette.style.width = 38 + 'px';
    assiette.style.height = 38 + 'px';

    assiette.style.setProperty('--trX', `${ trX }%`);
    assiette.style.setProperty('--trY', `${ trY }%`);

    console.log(trX);
    console.log(trY);

    // on ajoute l'assiette dans le canvas
    canvas.appendChild(assiette);

}

// on peut utiliser click ou mouseover
canvas.addEventListener('mousedown', (e) => {
    coup_de_feu();
    let targetElement = e.target;
    //console.log(targetElement);
    if(targetElement.classList.contains('assiette')){
        //l'élémént assiette qui est cliqué on l'afface
        assiette_qui_casse();
        targetElement.remove();
        count++;
        score.innerHTML = count
        console.log(count)
        lancer_assiette();
        cursor.classList.add('expand');
        
        setTimeout(() =>{
            cursor.classList.remove('expand');
        },500)

    };  
});



// FIN DU CODE POUR TEST AU NIVEAU D'UNE FONCTION DE CLIC AVEC CONDITION *********************************

btn.addEventListener('click', () => {
    count = 0;
    score.innerHTML = count
    lancer_assiette();
})


theme.forEach((element) => {
    element.addEventListener('click', (e) => {
        // e.target permet de determiner quel id de la boucle a été cliqué.
        //console.log(e.target.id);
        canvas.classList.remove
        document.body.classList.remove("body_cascade_theme", "body_verdure_montagne_theme", "body_petit_chalet_theme", "body_verdure_nuages", "body_lac_de_montagne", "body_balle_de_foin" )

        switch (e.target.id) {
            case "vignette_cascade":
                document.body.classList.add("body_cascade_theme");
                break
            case "vignette_verdure_montagne":
                document.body.classList.add("body_verdure_montagne_theme");
                break           
            case "vignette_petit_chalet":
                document.body.classList.add("body_petit_chalet_theme");
                break;
            case "vignette_verdure_nuages":
                document.body.classList.add("body_verdure_nuages");
                break;
            case "vignette_lac_de_montagne":
                document.body.classList.add("body_lac_de_montagne");
                break;
            case "vignette_balle_de_foin":
                document.body.classList.add("body_balle_de_foin");
                break;       
                default:
                    null;
        };
    });
});


