import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { UserdataService } from './services/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_practice';

  getName(name:any)
  {
    alert("Hello");
    alert(name);
  }

  getEvent(value:string)
  {
      console.log(value);
  }

  displayVal = '';

  getDisplayVal(value:string)
  {
    this.displayVal = value;
  }

  countValue = 0;

  getCountVal(value:string)
  {
    value==='add' ? this.countValue++ : this.countValue--;
  }

   name = "Vikas"
   disable = false;
   show = 'hel';
  //  color = 'green';

   users = ['Rishabh','Vikas','Akash','Bhavish','Satendra'];
   userDetails = [
    {
      name: 'Rishabh',
      city: 'Lucknow',
      age: '26'
    },
    {
      name: 'Vikas',
      city: 'Etawah',
      age: '26'
    },
    {
      name: 'Akash',
      city: 'Allahabas',
      age: '25'
    },
    {
      name: 'Bhavish',
      city: 'Ghaziabad',
      age: '29'
    },
    {
      name: 'Satendra',
      city: 'Etah',
      age: '35'
    }
   ]

   newUserDetails=[
    {
      name: 'Rishabh',
      city: 'Lucknow',
      socialAccounts: ['facebook','google','twitter']
    },
    {
      name: 'Vikas',
      city: 'Etawah',
      socialAccounts: ['facebook','google','twitter']
    },
    {
      name: 'Akash',
      city: 'Allahabas',
      socialAccounts: ['facebook','google','twitter']
    }
   ]

   color = "green"
   bgcolor = "cyan"

   updateColor()
   {
     this.color = "blue";
     this.bgcolor = "yellow";
   }

   addingData:any={}

   getFormData(data:NgForm)
   {
      console.log(data);
      this.addingData = data;
   }

   myFlag = true;
   toggleFun(){

    this.myFlag = !this.myFlag;
   }

   list:any[]=[];
   addTask(note:string){
      
    this.list.push({
      id:this.list.length,
      name:note
    });

    console.warn(this.list);
   }

   deleteTask(id:number){
    
    this.list = this.list.filter(note=>note.id!==id)
   }

   newData = 10;

   changeVal(){
    this.newData = Math.floor(Math.random()*10);
   }

   updatedVal = "No value";
   updateData(item:string)
   {
    console.log(item);
    this.updatedVal = item;
   }

   bindingName:any

   getValue(val8:HTMLInputElement)
   {
    console.log(val8);
   }

   data1 = 20; // here it understand bydefault that data is of number type.
   data2 = "rishabh"; // here it understand bydefault that data is of string type.

   getData(item:number | boolean)
   {
     if(typeof item === "number")
     {
       return item*20;
     }
     else
      return item;
   }

   dataObj:{name:string,phone:number}={name:'rishabh',phone:9918352565}
		
   getDataObj(item:{name:string,phone:number})
   {
     return item;
   }

   dataArr:string[] = ["abc","def","ghi"];
		
		getDataArr(item:number[])
		{
			return item;
		}
		
		getItem()
		{
			this.getDataArr([20,30,40]);
		}

    todayDate = Date();

    userObj = {
      name: 'rishabh',
      age: 25,
      city: 'lucknow'
    }

    userLogin(item:any){
      console.log(item);
    }

    loginForm1 = new FormGroup({
      username1:new FormControl('',[Validators.required,Validators.email]),
      password1:new FormControl('',[Validators.required,Validators.minLength(5)])
      // username:new FormControl('admin'), // setting bydefault values in form
      // password:new FormControl('admin123')
    })

    loginUserReactive()
    {
      console.log(this.loginForm1.value);
    }

    get username1()
    {
      return this.loginForm1.get('username1');
    }

    get password1()
    {
      return this.loginForm1.get('password1');
    }

    storingUsersData:any
    constructor(private userdata:UserdataService)
    {
      console.log(userdata.users());
      this.storingUsersData = userdata.users();
    }
    
}
