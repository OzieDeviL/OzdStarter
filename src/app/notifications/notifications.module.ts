// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Alert Component
import { AlertModule } from 'ngx-bootstrap/alert';

// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalsComponent } from './modals/modals.component';
import { Modal500Component } from './modal-500/modal-500.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule
  ],
  declarations: [
    ModalsComponent,
    Modal500Component,
  ],
  entryComponents: [
    ModalsComponent
  ],
  exports: [
    ModalsComponent
  ]
})
export class NotificationsModule { }
