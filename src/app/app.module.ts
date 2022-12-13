import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroDefaultComponent } from './components/hero-default/hero-default.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CarouselDefaultComponent } from './components/carousel-default/carousel-default.component';
import { AccordionDefaultComponent } from './components/accordion-default/accordion-default.component';
import { FaultyComponent } from './components/faulty/faulty.component';
import { CheckUIConfigPipe } from './utilities/pipes/check-uiconfig.pipe';
import { NullSafetyCheckPipe } from './utilities/pipes/null-safety-check.pipe';
import { AddBlockClassPipe } from './utilities/pipes/add-block-class.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroDefaultComponent,
    HomeComponent,
    PageNotFoundComponent,
    CarouselDefaultComponent,
    AccordionDefaultComponent,
    FaultyComponent,
    CheckUIConfigPipe,
    NullSafetyCheckPipe,
    AddBlockClassPipe
  ],
  entryComponents: [
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
