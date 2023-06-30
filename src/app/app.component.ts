import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // userLoggedIn: boolean = !false;
  cars: Array<string> = ["bmw","audi","lexus","tesla"];
  title = 'I am great';

  btnclick(){
    prompt("Here it is working perfect");
  }
  //constructor(){}
  //   console.log("You are in component.ts");
  // }
  // @HostListener('click',['$event'])
  // onhostclick(event:Event){
  //   alert("This is listening your event");
  // }
  
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


