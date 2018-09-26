import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ChartsModule } from 'ng2-charts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { AppComponent } from './app.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { Auth2Component } from './layouts/auth2/auth2.component';
import { ErrorComponent } from './layouts/error/error.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ButtonsComponent } from './pages/ui-features/buttons/buttons.component';
import { TypographyComponent } from './pages/ui-features/typography/typography.component';
import { FormsComponent } from './pages/forms/forms.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { TablesComponent } from './pages/tables/tables.component';
import { IconsComponent } from './pages/icons/icons.component';
import { BlankPageComponent } from './pages/sample-pages/blank-page/blank-page.component';
import { LoginComponent } from './pages/sample-pages/login/login.component';
import { RegisterComponent } from './pages/sample-pages/register/register.component';
import { Login2Component } from './pages/sample-pages/login2/login2.component';
import { Register2Component } from './pages/sample-pages/register2/register2.component';
import { NotFoundComponent } from './pages/sample-pages/not-found/not-found.component';
import { InternalServerComponent } from './pages/sample-pages/internal-server/internal-server.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { MultipleSelectComponent } from './shared/multiple-select/multiple-select.component';
import { CustomComponentsComponent } from './pages/custom-components/custom-components.component';
import { SelectImageComponent } from './shared/select-image/select-image.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

export const appRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      }, {
        path: 'dashboard',
        component: DashboardComponent
      }, {
        path: 'ui-features',
        children: [
          {
            path: 'buttons',
            component: ButtonsComponent
          }, {
            path: 'typography',
            component: TypographyComponent
          }
        ]
      }, {
        path: 'forms',
        component: FormsComponent
      }, {
        path: 'charts',
        component: ChartsComponent
      }, {
        path: 'tables',
        component: TablesComponent
      }, {
        path: 'icons',
        component: IconsComponent
      }, {
        path: 'custom-components',
        component: CustomComponentsComponent
      }
    ]
  },
  {
    path: 'sample-pages',
    children: [
      { 
        path: '',
        component: AdminComponent,
        children: [
          {
            path: 'blank-page',
            component: BlankPageComponent
          }
        ]
      }, { 
        path: '',
        component: AuthComponent,
        children: [
          {
            path: 'login',
            component: LoginComponent
          }, {
            path: 'register',
            component: RegisterComponent
          }
        ]
      }, { 
        path: '',
        component: Auth2Component,
        children: [
          {
            path: 'login2',
            component: Login2Component
          }, {
            path: 'register2',
            component: Register2Component
          }
        ]
      }, { 
        path: '',
        component: ErrorComponent,
        children: [
          {
            path: 'not-found',
            component: NotFoundComponent
          }, {
            path: 'internal-server',
            component: InternalServerComponent
          }
        ]
      } 
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    ErrorComponent,
    DashboardComponent,
    ButtonsComponent,
    TypographyComponent,
    FormsComponent,
    ChartsComponent,
    TablesComponent,
    IconsComponent,
    BlankPageComponent,
    LoginComponent,
    RegisterComponent,
    Login2Component,
    Register2Component,
    NotFoundComponent,
    InternalServerComponent,
    LoaderComponent,
    Auth2Component,
    MultipleSelectComponent,
    CustomComponentsComponent,
    SelectImageComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    ChartsModule,
    PerfectScrollbarModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
