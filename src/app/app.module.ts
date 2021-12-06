import { NavigationComponent } from './shared/navigation/navigation.component';
import { HeaderComponent } from './shared/header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CarparkOperationAdminModule } from './carpark-operation-admin/carpark-operation-admin.module';
import { HumanResourceManagementModule } from './human-resource-management/human-resource-management.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HumanResourceManagementLayoutComponent } from './shared/human-resource-management-layout/human-resource-management-layout.component';
import { CarparkOperationAdminLayoutComponent } from './shared/carpark-operation-admin-layout/carpark-operation-admin-layout.component';
import { SidebarComponent } from './shared/navigation/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HumanResourceManagementLayoutComponent,
    CarparkOperationAdminLayoutComponent,
    HeaderComponent,
    NavigationComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthenticationModule,
    HumanResourceManagementModule,
    CarparkOperationAdminModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
