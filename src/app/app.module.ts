import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routes } from './routes';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { FindThreadComponent } from './find-thread/find-thread.component';
import { ThreadService } from './find-thread/thread.service';

@NgModule({
  declarations: [
    AppComponent,
    FindThreadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MaterialModule.forRoot()
  ],
  providers: [ThreadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
