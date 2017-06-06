import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from 'environments/environment';

import { ResultsService } from 'app/results.service';

import { InlineEditComponent } from './inline-edit/inline-edit.component';
import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { MisclientesComponent } from './misclientes/misclientes.component';
import { CondicionalesComponent } from './condicionales/condicionales.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { EventillosComponent } from './eventillos/eventillos.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { LoginComponent } from './login/login.component';

import { AuthenticationService } from 'app/authentication.service';
const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'condicionales', component: CondicionalesComponent, canActivate: [AuthenticationService] },
  { path: 'listado', component: ListadoComponent, canActivate: [AuthenticationService] },
  { path: 'misclientes', component: MisclientesComponent, canActivate: [AuthenticationService] },
  { path: 'eventos', component: EventillosComponent, canActivate: [AuthenticationService] },
  { path: 'resultados', component: ResultadosComponent, canActivate: [AuthenticationService] },
  { path: 'formularios', component: FormulariosComponent, canActivate: [AuthenticationService] },
  { path: 'firebase', component: FirebaseComponent, canActivate: [AuthenticationService] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
 // { path: 'update-book/:id', component: UpdateBookComponent },
 // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    MisclientesComponent,
    CondicionalesComponent,
    FirebaseComponent,
    ResultadosComponent,
    EventillosComponent,
    FormulariosComponent,
    LoginComponent,
    InlineEditComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [
    AuthenticationService,
    ResultsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
