import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
=======
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
>>>>>>> be5781de540704b5a9a0ed240339a235888d974b

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
<<<<<<< HEAD
    FontAwesomeModule
=======
    NgbModule
>>>>>>> be5781de540704b5a9a0ed240339a235888d974b
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
