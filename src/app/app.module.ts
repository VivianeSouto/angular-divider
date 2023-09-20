import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports:      [ FormsModule,BrowserModule,MatListModule,MatDividerModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
