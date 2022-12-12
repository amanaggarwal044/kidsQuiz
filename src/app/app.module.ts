import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CarouselDefaultComponent } from './components/carousel-default/carousel-default.component';
import { AccordionDefaultComponent } from './components/accordion-default/accordion-default.component';
import { FaultyComponent } from './components/faulty/faulty.component';
import { CheckUIConfigPipe } from './utilities/pipes/check-uiconfig.pipe';
import { NullSafetyCheckPipe } from './utilities/pipes/null-safety-check.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    HomeComponent,
    PageNotFoundComponent,
    CarouselDefaultComponent,
    AccordionDefaultComponent,
    FaultyComponent,
    CheckUIConfigPipe,
    NullSafetyCheckPipe
  ],
  entryComponents: [
    HeroComponent,
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
