import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



import * as jquery from 'jquery';

import {
  MatAutocompleteModule,

  MatButtonToggleModule,
  MatCardModule,
  MatButtonModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import {HttpModule} from '@angular/http';
import {CdkTableModule} from '@angular/cdk/table';


import { AppComponent } from './app.component';
import { MenuComponent } from './layout/menu/menu';
import { LoginComponent } from './login/login';
import { FooterComponent } from './layout/footer/footer';
import { ConductorComponent } from './modulos/conductor/conductor';
import { UsuariosComponent } from './modulos/usuarios/usuarios';

const routes: Routes = [
  { path: 'conductor', component: ConductorComponent },
  { path: 'usuarios', component: UsuariosComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    FooterComponent,
    ConductorComponent,
    UsuariosComponent

  ],
  imports: [
    RouterModule.forRoot(routes),

    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,

    MatAutocompleteModule,
    FormsModule,

    MatButtonToggleModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }
