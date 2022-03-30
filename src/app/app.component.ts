import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{

  title = 'AngularTest';

  user = {name: "andrea", loginDate: new Date(), results:[100, 1002, 1]}

  user2?: any;

  userChanged = false;

  ngOnInit(): void {
    //window.sessionStorage.setItem("ciao", "mondo");
    window.localStorage.setItem("pippo", JSON.stringify(this.user));
    window.localStorage.setItem("pluto", JSON.stringify(this.user));


    if (localStorage.getItem("pluto")) {
      this.user2 = JSON.parse(localStorage.getItem("pluto") as any); 
    }
    
    const key = "name"
    const value = "simone"
    const date = new Date()
    date.setFullYear(date.getFullYear() + 1);

    const cookie = key + '=' + value + ';expires=' + date.toUTCString() + ';path=/;SameSite=Lax';

    console.log(cookie);

    document.cookie = cookie;


    const cookie2 = 'pippo' + '=' + 'pluto' + ';expires=' + date.toUTCString() + ';path=/;SameSite=Lax';

    document.cookie = cookie2;

    console.log(document.cookie);
    
  }

  onUserSaved(){

  }
}
