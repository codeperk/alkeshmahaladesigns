import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { LoadScriptDirective } from './directives/app-load-script.directive';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ProjectComponent } from './pages/project/project.component';

@NgModule({
  declarations: [
    LoadScriptDirective,
    AppComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
