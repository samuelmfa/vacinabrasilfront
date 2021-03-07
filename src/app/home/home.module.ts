import { ComponentsModule } from './../components/components.module';
import { HomeService } from './home.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialSharedModule } from '../material-shared/material-shared.module';
import { SharedModule } from './../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HttpConfig } from '../config/http.config';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    MaterialSharedModule,
    SharedModule,
    ComponentsModule
  ],
  providers: [
    HomeService,
    HttpConfig
  ]
})
export class HomeModule { }
