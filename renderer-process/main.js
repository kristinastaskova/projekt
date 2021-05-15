import { Carousel } from './components/carousel/populateNewsCarousel.js';

export const header = document.querySelector('header.header-news > div.header-news__container');


const carousel = new Carousel();

fetch('http://127.0.0.1:3000/news.json')
    .then(serverResponse => serverResponse.text())
    .then(responseText => {
        const data = JSON.parse(responseText);
        carousel.articles = data.articles;
        carousel.populateNewsCarousel();
    });






// ukazkovy kod:

const text = 'ashdf';
const cislo = 3;

const automobil = {
    pocetMistKSezeni: 5,
    barvaKaroserie: 'cervena'
};

console.log(automobil.barvaKaroserie);

class Operenec {

    constructor(volani) {
        this.zvuk = volani;
    }

    vydejZvuk() {
        console.log(this.zvuk);
    }

}

class Kacer extends Operenec {
    plavPoJezirku() {
        console.log('plavu plavu');
    }
}

class Kohout extends Operenec {
    hlasVychodSlunce() {
        console.log('vychazi');
    }
}

const kacer = new Kacer('kva kva');
const kacer1 = new Kacer('bu, bu');

kacer.vydejZvuk();
kacer.plavPoJezirku();

const kohout = new Kohout('kikiriki');

kohout.vydejZvuk();
kohout.hlasVychodSlunce();
