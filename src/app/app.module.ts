import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PippoComponent } from './pippo/pippo.component';
import { ClarabellaComponent } from './clarabella/clarabella.component';

@NgModule({
  declarations: [
    AppComponent,
    PippoComponent,
    ClarabellaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
