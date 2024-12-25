import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { PortfolioBodyComponent } from './portfolio-body/portfolio-body.component';
import { PortfolioSalutationComponent } from './portfolio-salutation/portfolio-salutation.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';

import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { PortfolioFooterComponent } from './portfolio-footer/portfolio-footer.component';
import { ProfessionalsComponent } from './professionals/professionals.component';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortfolioBodyComponent,
    PortfolioSalutationComponent,
    SkillsComponent,
    ProjectsComponent,
    PortfolioFooterComponent,
    ProfessionalsComponent,
    ContactMeComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
