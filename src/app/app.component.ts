import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shilpa Sinha';

  constructor(){
    console.log("You are in component.ts");
  }
  @HostListener('click',['$event'])
  onhostclick(event:Event){
    alert("This is listening your event");
  }
  
  // friendslist = [
  //   {
  //     name: 'Nishant',
  //     age: 25
  //   },
  //   {
  //     name: 'Shailesh',
  //     age: 45
  //   }]
}


