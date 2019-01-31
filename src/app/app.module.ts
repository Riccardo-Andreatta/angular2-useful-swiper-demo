import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwiperModule } from 'angular2-useful-swiper';
import { AppComponent } from './app.component';

@NgModule({
    imports: [ 
        BrowserModule,
        BrowserAnimationsModule,
        SwiperModule
    ],
    declarations: [ 
        AppComponent 
    ],
    bootstrap: [ 
        AppComponent
    ]
})
export class AppModule {}
