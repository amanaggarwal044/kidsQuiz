import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroDefaultComponent } from './components/heros/hero-default/hero-default.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CarouselDefaultComponent } from './components/carousels/carousel-default/carousel-default.component';
import { AccordionDefaultComponent } from './components/accordions/accordion-default/accordion-default.component';
import { FaultyComponent } from './components/faulty/faulty.component';
import { CheckUIConfigPipe } from './utilities/pipes/check-uiconfig.pipe';
import { NullSafetyCheckPipe } from './utilities/pipes/null-safety-check.pipe';
import { AddBlockClassPipe } from './utilities/pipes/add-block-class.pipe';
import { HeaderDefaultComponent } from './components/headers/header-default/header-default.component';
import { FooterDefaultComponent } from './components/footers/footer-default/footer-default.component';
import { CtaDefaultComponent } from './components/common/cta-default/cta-default.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDefaultComponent,
    HomeComponent,
    PageNotFoundComponent,
    CarouselDefaultComponent,
    AccordionDefaultComponent,
    FaultyComponent,
    CheckUIConfigPipe,
    NullSafetyCheckPipe,
    AddBlockClassPipe,
    HeaderDefaultComponent,
    FooterDefaultComponent,
    CtaDefaultComponent
  ],
  entryComponents: [
    HeaderDefaultComponent,
    FooterDefaultComponent,
    HeroDefaultComponent,
    CarouselDefaultComponent,
    AccordionDefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
