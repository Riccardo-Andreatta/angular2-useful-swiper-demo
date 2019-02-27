import { Component, ViewChild } from '@angular/core';
import { SwiperComponent } from 'angular2-useful-swiper';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    public images: Array<string> = [
        'https://picsum.photos/700/250/?image=27',
        'https://picsum.photos/700/250/?image=22',
        'https://picsum.photos/700/250/?image=61',
        'https://picsum.photos/700/250/?image=23',
        'https://picsum.photos/700/250/?image=24',
        'https://picsum.photos/700/250/?image=26',
        'https://picsum.photos/700/250/?image=41',
        'https://picsum.photos/700/250/?image=28',
        'https://picsum.photos/700/250/?image=21',
        'https://picsum.photos/700/250/?image=20',
        'https://picsum.photos/400/250/?image=75'
    ];
    public config: Object = {
        paginationClickable: true,
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 0
    };
    public config_thumbs: Object = {
        loop: true,
        thumbs: this.images,
        slidesPerView: 3.5,
        spaceBetween: 10,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    };
    public config_gallery: Object = {
        lazyLoading: true,
        loop: true,
        spaceBetween: 0,
        zoom: true
    };
    public config_thumbs_vertical: Object = {
        direction: 'vertical',
        loop: true,
        thumbs: this.images,
        slidesPerView: 3.5,
        spaceBetween: 10,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    };
    public config_gallery_vertical: Object = {
        lazyLoading: true,
        loop: true,
        spaceBetween: 0,
        zoom: true
    };

    @ViewChild('usefulSwiper') public usefulSwiper: SwiperComponent;
    @ViewChild('swiperThumbs') public swiperThumbs: SwiperComponent;
    @ViewChild('swiperGallery') public swiperGallery: SwiperComponent;
    @ViewChild('swiperThumbs_vertical') public swiperThumbs_vertical: SwiperComponent;
    @ViewChild('swiperGallery_vertical') public swiperGallery_vertical: SwiperComponent;
}
