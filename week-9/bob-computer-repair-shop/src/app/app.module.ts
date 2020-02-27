import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatToolbarModule, MatIconModule, MatSidenavModule,
  MatListModule, MatButtonModule, MatTableModule, MatPaginatorModule,
  MatSortModule, MatInputModule, MatGridListModule

} from  '@angular/material';

import { ServiceComponent } from './service/service.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
