import { Component } from '@angular/core';

import { Plugins } from '@capacitor/core';
//import "capacitor-hms-push-kit";
const { PushKit } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  TAG:string="HomePageTag";
  topic:string="ionicTestTopic";

  constructor() {
    console.log(this.TAG,"something...");
    PushKit.getToken().then(res=>{
      console.log(this.TAG,res.token);
    }).catch(err=>{
      console.error(this.TAG,err);
    });
  }
  subscribeToTopic(){
    PushKit.subscribe({topic: this.topic}).then(()=>{
      console.log(this.TAG,"subscribe Done");
    }).catch((err)=>{
      console.error(this.TAG,err);

    }) 
  }
}
