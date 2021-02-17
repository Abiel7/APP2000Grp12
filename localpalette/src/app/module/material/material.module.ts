import { NgModule } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatRippleModule} from "@angular/material/core";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  imports: [
    MatButtonModule,
    MatRippleModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule,
  ],
  exports:[
    MatButtonModule,
    MatRippleModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule,
  ]
})
export class MaterialModule { }
