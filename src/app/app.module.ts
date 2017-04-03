import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FirstFeatureComponent } from './first-feature-component/first-feature.component';
import { SecondFeatureComponent } from './second-feature-component/second-feature.component';
import { ChildComponent } from './child-component/child.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstFeatureComponent,
    SecondFeatureComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        'path': 'second-feature',
        'component': SecondFeatureComponent
      },
      {
        'path': '**',
        'component': FirstFeatureComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
