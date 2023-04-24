import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
<<<<<<< HEAD
=======
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
>>>>>>> 164a717bbbd3f81f68cab69f0f83b72a42f4b9bd
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
