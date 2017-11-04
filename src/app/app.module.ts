import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ResultComponent } from './report/result/result.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './service/auth.service';
import { UrlService } from './service/url.service';
import { SessionService } from './service/session.service';
import { GeneticService } from './service/genetic.service';

import { SigninFormComponent } from './auth/signin/signin-form/signin-form.component';
import { ResultListComponent } from './report/result/result-list/result-list.component';
// import { AuthGuard } from './auth/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    ResultComponent,
    SigninFormComponent,
    ResultListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthService, UrlService, SessionService, GeneticService],
  bootstrap: [AppComponent]
})
export class AppModule { }
