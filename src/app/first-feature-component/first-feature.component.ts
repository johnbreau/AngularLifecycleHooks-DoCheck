import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-first-feature-component',
  templateUrl: './first-feature.component.html',
  styleUrls: ['./first-feature.component.scss']
})
export class FirstFeatureComponent implements OnInit, DoCheck, OnDestroy {
  page = {title:'Moby Dick', description: 'a very long book about a fish'};
  oldTitle = 'The Big Fish';

  constructor() { }

  // Initializes after application is bootsrapped. Happens only once. As long as component isnt destory it will never fire again.
  ngOnInit() {
    console.log('first feature initialized');
  }

  // Checks for any changes to anything that's on the screen even other components. Has to be bootstrapped as part of the same app.
  ngDoCheck(){
    console.log('First Feature Component ngDoCheck called.');
    if(this.oldTitle !== this.page.title){
      console.log('First Feature Component Title Changed')
      this.oldTitle = this.page.title;
    }
  }

  // Fires at end of lifecycle and after inputs have been defined. Only things it has access to are initialized variables and inputs.
  // Usually used when fetching data from API
  ngOnDestroy(){
    console.log('first feature destroyed');
  }

}
