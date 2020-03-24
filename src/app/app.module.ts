import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import { AppRoutingModule } from './app-routing.module';

// Modules
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';

// Components
import { PagesComponent } from './pages/pages.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

// Temporal
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Services
import { ServiceModule } from './services/service.module';


@NgModule({
  declarations: [
    PagesComponent,
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // PagesModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
