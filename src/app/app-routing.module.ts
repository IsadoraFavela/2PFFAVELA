import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlumnosComponent } from './dashboard/pages/alumnos/alumnos.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { AlumnoDetalleComponent } from './dashboard/pages/alumnos/pages/alumno-detalle/alumno-detalle.component';
import { CursosComponent } from './dashboard/pages/cursos/cursos.component';
import { InscripcionesComponent } from './dashboard/pages/inscripciones/inscripciones.component';
import { CursoDetalleComponent } from './dashboard/pages/cursos/pages/curso-detalle/curso-detalle.component';
import { InscripcionesDetalleComponent } from './dashboard/pages/inscripciones/pages/inscripciones-detalle/inscripciones-detalle.component';

const routes: Routes = [
 
  {
   
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        
        path: 'estudiantes',
        children: [
          {
            
            path: '',
            component: AlumnosComponent,
          },
          {
            
            path: ':id',
            component: AlumnoDetalleComponent
          }
        ],

        
      
      
      
      
      
      },
       {
        path: 'cursos',
        children: [
          {
            
            path: '',
            component: CursosComponent,
          },
          {
            
            path: ':id',
            component: CursoDetalleComponent
          }
        ]
       },
       {
        path: 'inscripciones',
        children: [
          {
            
            path: '',
            component: InscripcionesComponent,
          },
          {
            
            path: ':id',
            component: InscripcionesDetalleComponent,
          }
        ]
       },
      // {
      //   path: 'estudiantes/:id',
      //   component: AlumnoDetalleComponent,
      // },
     
       
    ]
  },

  // AUTH
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
    ]
  },

  // RUTAS INDEFINIDAS....
  {
    // CUALQUIER RUTA
    path: '**',
    redirectTo: 'dashboard',
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
