import { NewsArticle } from '../news-article/news-article.js';
import { header } from '../../main.js';

export class Carousel {
    constructor() {
        this.buttonLeft = document.querySelector('#carousel-button-left');
        this.buttonRight = document.querySelector('#carousel-button-right');
        this.buttonLeft.addEventListener('click', () => {
            this.carouselItemStart--;
            this.populateNewsCarousel();
        });

        this.buttonRight.addEventListener('click', () => {
            this.carouselItemStart++;
            this.populateNewsCarousel();
        });
        this.carouselItemStart = 0;
        this.articles;
        this.carouselItemCount = 2;

    }

    populateNewsCarousel() {
        header.innerText = '';
        for (let i = this.carouselItemStart; i < (this.carouselItemStart + this.carouselItemCount); i++) {
            const newsValue = this.articles[i];
            const newsArticle = new NewsArticle();
            const newsDiv = newsArticle.createDivForNews(newsValue);
            header.appendChild(newsDiv);
        }
        this.checkButtonsVisibility();
    }
    checkButtonsVisibility() {
        this.buttonLeft.hidden = this.carouselItemStart === 0;
        this.buttonRight.hidden = this.carouselItemStart >= (this.articles.length - this.carouselItemCount);
    }



}
