import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'custom-Pipes';
  val:number;

 num1:number;
 num2:number;
  public radio: any;
  isDisabled = true;
  isDisabled_1 = true;
  isDisabled_2 = true;
  isDisabled_3 = true;
  public expo: number;
  
ngOnInit() {
       this.radio = 1;

           }
submit = function(){
   if(this.radio=="add"){
  
this.num5=this.num1
  this.num6=this.num2
}
  else if(this.radio=="subtract"){
  this.num7=this.num1
  this.num8=this.num2 
   }
    else if(this.radio=="multiply"){
  this.num3=this.num1
  this.num4=this.num2
}
   else if(this.radio=="divide"){
  this.num9=this.num1
  this.num10=this.num2
}
   else if(this.radio=="module"){
  this.num11=this.num1
  this.num12=this.num2
}
   else if(this.radio=="exponent"){
   this.num13=this.num1
}

  
                  }

               }
