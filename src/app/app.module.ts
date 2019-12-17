import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './common/highlight.directive';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TacoItemComponent } from './taco-item/taco-item.component';
import { TacoDetailComponent } from './taco-detail/taco-detail.component';
import { SearchComponent } from './search/search.component';
import { StarsComponent } from './stars/stars.component';
import { TacoService } from './shared/taco.service';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HighlightDirective,
    CarouselComponent,
    FooterComponent,
    NavbarComponent,
    TacoItemComponent,
    TacoDetailComponent,
    SearchComponent,
    StarsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  providers: [TacoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
