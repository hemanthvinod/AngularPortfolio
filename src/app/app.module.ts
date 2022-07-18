import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { LandingComponent } from './landing/landing.component';
import { ServicesComponent } from './services/services.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SwiperModule } from 'swiper/angular';
import { AboutComponent } from './about/about.component';
import { SamplesComponent } from './samples/samples.component';
import { ContactComponent } from './contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TestimonyComponent,
    LandingComponent,
    ServicesComponent,
    AboutComponent,
    SamplesComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
