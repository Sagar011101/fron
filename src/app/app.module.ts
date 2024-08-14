import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoicesModule } from './invoices/invoices.module';
import { provideHttpClient } from '@angular/common/http'; // Import provideHttpClient

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InvoicesModule
  ],
  providers: [
    provideHttpClient() // Use provideHttpClient instead of HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
