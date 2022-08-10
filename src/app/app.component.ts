import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'amitava';
  company='CG';
  uname=new FormControl('');

  display()
  {
    alert("Welcome students!!!!")
  }
  updateName()
  {
    this.uname.setValue("SHAMIK");

  }

  products: any=[
    {
      title:"LED",
      price:"50000",
      brand:"Sony"

    },
    {
      title:"Mobile",
      price:"30000",
      brand:"Samsung"


    },
    {
      title:"Washing Machine",
      price:"40000",
      brand:"Bostch"


    }
  ]
}
