# angular_app

## Important Points about Angular

- Angular creates single page applications. (No browser reloading)
- Developed by Google
- MVC Framework
- Use NPM (Node Package Manager) and CLI (Command Line Interface)

## Setup and Installation

- Install Node + NPM (Using node software)
- Install Angular CLI (cmd - npm install -g @angular/cli)
- Install First Angular App (cmd - ng new project_name)
- Run Project (cmd - ng serve)
- Check Angular Version (package.json file)
- Check CLI Version (cmd - ng version)
- Install specific Angular Version (cmd - npm install -g @angular/cli@10.0.0)
- How to use another node version with the current version (Using nvm)

## File and Folder Structure

- `package.json` => Details for the project such as name, version, libraries, etc.
- `node_modules` => Libraries such as angular, form, routing, CSS, testing, etc.
- `src` => It contains folders such as app(component), assets(folder to store extra CSS, images), 
		 environments (used for creating different environments for testing, development, and local, etc.)
- `index.html` => HTML file that loads first.
- `main.ts` => Connection (bootstrap module for connecting Angular to HTML)
- `style.css` => global CSS file
- `package-lock.json` => It contains details for all packages.
- `angular.json` => Configuration for the files which file loads when.
- `tsconfig.json` => Configuration for the TS file (global configuration)
- `tsconfig.app.json` => Configuration for the TS file (application configuration)
- `tsconfig.spec.json` => Configuration for the TS file (testing configuration)
- `.browserslistrc` => It tells which browsers are currently supported.
- `karma.config.js` => Write test cases with test files here.
- `polyfills.ts` => We add some libraries that are supported by the browser.

**Note:** If we delete `package.json` file, then the application will not work, but if we delete `package.lock.json` file,
	   then it will be recreated whenever we run the application.
	   
## Make First Change

- `index.html` => Used to change the title for the application.
- `app.component.html` => Used to change the content for the main page of the application.
- `app.component.ts` => It contains TS configuration for creating loops, functions, and variables, etc.

**Note:** How to access data from the TS file to the HTML page. 

		{{title}}
		
## Interpolation

- Fetching data from TS file and display it on the HTML page using `{{}}`.

For example:

**app.component.ts**

```typescript
export class AppComponent {
  title = 'blog';
  getValue() {
    return "Get Function Data";
  }
}
```

**app.component.html**

```html
<h1>{{title}}</h1>
<p>{{getValue()}}</p>
```

## Note: What we cannot do in Interpolation?

**app.component.html**

```html
<h1>{{title="Hello"}}</h1>
<h1>{{typeof title}}</h1>
<h1>{{data++}}</h1>
<h1>{{new title}}</h1>
```

### Output:

- Failed to compile because we cannot change the values here.
- Failed to check the typeof title because we cannot check its type here.
- Failed to increment the data value because we cannot increment its value here.
- Failed because we cannot use the new keyword here.

**Note: We can also use any value as a class name by using interpolation.**

**app.component.html**

```html
<h1 class="{{title}}">{{title="Hello"}}</h1>
```

## Angular CLI & Important Commands

### Installation

- Run `npm install -g @angular/cli` to install Angular CLI globally.

### Basic Commands

- Run `ng help` to view all the basic commands for the project.

### Creating Components

- Run `ng g c component_name` to create a component. It will generate four files: CSS, HTML, spec.ts, and ts.

### Creating Modules

- Run `ng g m module_name` to create a module. It contains multiple components such as sign-in, sign-up, etc., and one module.ts file.

### Creating Component Inside Module

- Run `ng g c module_name/component_name` to create a component inside a module.

### Creating Classes

- Run `ng g class class_name` to create a class. It generates two files: spec.ts and ts file.

### Creating Interfaces

- Run `ng g i interface_name` to create an interface. It generates one ts file.

### Building the Application

- Run `ng build` to create a distribution build file named `dist-build`. This file can be deployed on a server to run the application.

## Component

- A component is a building block used for specific functionality such as header, footer, login, sign-up, etc.
- It contains four files: CSS, HTML, spec.ts, and ts.
- To use a component, copy the selector name from the ts file and use it as an HTML tag wherever you want to display it.
- Note: The selector name can be changed from the ts file if desired.

## Component with Inline Style & Template

- Run `ng g c component_name --inline-style` to create a component with inline style. It contains three files: HTML, spec.ts, and ts. CSS code is written inside the ts file.
- Run `ng g c component_name --inline-template` to create a component with inline template. It contains three files: spec.ts, ts, and CSS. HTML code is written inside the ts file.
- Run `ng g c component_name --inline-template --inline-style` to create a component with inline style and template. It contains two files: spec.ts and ts. HTML and CSS are written inside the ts file.

## Module

- A module is a complete functionality containing various components, services, and pipes.
- Example:

for eg: 
	
	User Auth(Module)
		|
		|
		-------------------------------------------------
		|						|						|
	Login(Component) 	Register(Component) 	Forgot Password(Component)
	
	API Call			Helpers
	
- Run `ng g module user-auth` to create a module named `user-auth`. It generates a user-auth.module.ts file.
- Run `ng g component user-auth/login` to create the login component inside the user-auth module.
- The login component will be automatically declared inside the user-auth.module.ts file.
- Register the user-auth module inside the app.module.ts file.
- To register a component with a module, provide the path using export.

	for eg:
	
		exports:[
			LoginComponent
		]
		
- Note: In classes we won't use any access specifiers ( let, const or function name)

- Function => In previous version of angular we dont need to add any after any parameter but in upgraded versions we have to add otherwise it give error.
			  The reason is because in previous version below angular 10 strict value in tsconfig.json file is false and in above version its true.
			  
```typescript
getName(name: any) {
  alert("Hello");
  alert(name);
}
```

## Call the function on a button click

```html
<button (click)="getName('rishabh')">Click Me</button>
```

## Events (Keyup, Blur, Input, Mouseover, Mouseleave)

```typescript
getEvent(value: string) {
  console.log(value);
}
```

```html
<input type="text" #box (keyup)="getEvent(box.value)" placeholder="Enter Here" />
<input type="text" #box1 (blur)="getEvent(box1.value)" placeholder="Enter Here" />
<input type="text" #box2 (input)="getEvent(box2.value)" placeholder="Enter Here" />
<h1 (mouseover)="getEvent('rishabh')">Mouse Over Event</h1>
<h1 (mouseleave)="getEvent('rishabh ji')">Mouse Leave Event</h1>
```

## Get Input Box Value and Display

```typescript
displayVal = '';

getDisplayVal(value: string) {
  this.displayVal = value;
}
```

```html
<input type="text" #box3 (input)="getDisplayVal(box3.value)" placeholder="Enter Here" />
<p>Name is: {{displayVal}}</p>
<input type="text" #box4 placeholder="Enter Here" />
<input type="text" #box5 placeholder="Enter Here" />
<button (click)="getDisplayVal(box4.value)">Click</button>
<button (click)="getDisplayVal(box5.name)" name="username">Click</button>
<p>Name is: {{displayVal}}</p>
<p>Name is: {{displayVal}}</p>
```

## Counter Example

```typescript
countValue = 0;

getCountVal(value: string) {
  value === 'add' ? this.countValue++ : this.countValue--;
}
```

```html
<button (click)="getCountVal('add')">++</button>
<h1>{{countValue}}</h1>
<button (click)="getCountVal('minus')">--</button>
```

## Basic Rules of Style

- If CSS style is defined inside the .html class, it will be applied first. Then the component style will apply, followed by the global style.

## Property Binding

- Property Binding is used to change the attributes for input fields or HTML elements.
- Note: Property Binding provides only boolean values, while interpolation works with number and string values.

```typescript
name = "Vikas";
disable = false;
```

```html
<input type="text" value={{name}} disabled={{disable}}>
<input type="text" [value]=name [disabled]=disable>
```

- Note: In property binding, the disabled value is considered as a string, so it must be specified as a boolean value (e.g., [disabled]="disable").

## If-Else Condition

```typescript
show = false;
```

```html
<h1 *ngIf="show; then ifBlock else elseBlock"></h1>

<ng-template #ifBlock>
  <h1>If condition</h1>
</ng-template>
<ng-template #elseBlock>
  <h1>Else condition</h1>
</ng-template>
```

- Note: If-Else conditions are based on other values, not just true or false.

## Multiple Conditions or Else-If

```typescript
color = 'blue';
```

```html
<ng-template [ngIf]="color==='red'">
  <h1 style="color: red;">Red Color</h1>
</ng-template>
<ng-template [ngIf]="color==='green'">
  <h1 style="color: green;">Green Color</h1>
</ng-template>
<ng-template [ngIf]="color==='blue'">
  <h1 style="color: blue;">Blue Color</h1>
</ng-template>
```

## Switch Case

```typescript
color = 'green';
```

```html
<div [ngSwitch]="color">
  <h1 *ngSwitchCase="'red'" style="color: red;">Red Color</h1>
  <h1 *ngSwitchCase="'green'" style="color: green;">Green Color</h1>
  <h1 *ngSwitchCase="'blue'" style="color: blue;">Blue Color</h1>
  <h1 *ngSwitchDefault="" >Unknown Color</h1>
</div>
```

## For Loop and Nested For Loop

```typescript
users = ['Rishabh', 'Vikas', 'Akash', 'Bhavish', 'Satendra'];
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
];

newUserDetails = [
  {
    name: 'Rishabh',
    city: 'Lucknow',
    socialAccounts: ['facebook', 'google', 'twitter']
  },
  {
    name: 'Vikas',
    city: 'Etawah',
    socialAccounts: ['facebook', 'google', 'twitter']
  },
  {
    name: 'Akash',
    city: 'Allahabas',
    socialAccounts: ['facebook', 'google', 'twitter']
  }
];
```

```html
<h2 *ngFor="let item of users">Name is: {{item}}</h2>

<h2 *ngFor="let item of userDetails">User is: {{item.name}} -- City is: {{item.city}} -- Age is: {{item.age}}</h2>

<ul *ngFor="let user of newUserDetails">
  <li>Name is: {{user.name}}</li>
  <li>City is: {{user.city}}</li>
  <li>Social Accounts</li>
  <ul *ngFor="let account of user.socialAccounts">
    <li>{{account}}</li>
  </ul>
</ul>
```

## Style Binding | Dynamic Style

```typescript
color = "green"
bgcolor = "cyan"

updateColor() {
  this.color = "blue";
  this.bgcolor = "yellow";
}
```

```html
<h1 [style.color]="color" [style.backgroundColor]="bgcolor">Rishabh</h1>
<button (click)="updateColor()">Update Color</button>
```

## Header

```css
nav img {
  width: 70px;
}
nav {
  background-color: skyblue;
  padding: 20px;
}
ul {
  float: right;
  list-style-type: none;
}
li {
  margin-top: -10px;
}
ul li {
  display: inline-block;
  padding: 10px;
}
li a {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}
```

```html
<nav>
    <img src="https://angular.io/assets/images/logos/angular/logo-nav@2x.png" alt="logo-nav">
    <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Login</a></li>
        <li><a href="">Signup</a></li>
    </ul>
</nav>
```

## Basic Form

- First, we've to import FormsModule in app.module.ts file

```typescript
import { NgForm } from '@angular/forms';

addingData: any = {};

getFormData(data: NgForm) {
  console.log(data);
  this.addingData = data;
}
```

```html
<form #basicForm="ngForm" (ngSubmit)="getFormData(basicForm.value)">
  <input type="text" ngModel name="user" placeholder="Enter Username">
  <br><br>
  <input type="text" ngModel name="email" placeholder="Enter User Email">
  <br><br>
  <input type="text" ngModel name="password" placeholder="Enter User Password">
  <br><br>
  <button>Register</button>
</form>

<p>User Name: {{addingData.user}}</p>
<p>User Email: {{addingData.email}}</p>
<p>User Password: {{addingData.password}}</p>
```

## Toggle Element | hide and show tag

```typescript
myFlag = true;

toggleFun() {
  this.myFlag = !this.myFlag;
}
```

```html
<button (click)="toggleFun()">Toggle</button>
<h1 *ngIf="myFlag">Toggle This</h1>
```

## How to use Bootstrap with Angular

`ng add @ng-bootstrap/ng-bootstrap` - Command to add Bootstrap in Angular.

```html
<p>
	<ngb-alert [dismissible]="false">
		<strong>Warning!</strong> Better check yourself, you're not looking too good.
	</ngb-alert>
</p>
```

## Material UI

- `ng add @angular/material` - Command to add Material-UI in Angular.
- Import Material-UI component inside app.module.ts file.
`import { MatSliderModule } from '@angular/material/slider';`

```html
<mat-slider min="1" max="5" step="0.5" value="1.5">
  <input matSliderThumb>
</mat-slider>
```

## Todo list in Angular

```typescript
list: any[] = [];

addTask(note: string) {
  this.list.push({
    id: this.list.length,
    name: note
  });

  console.warn(this.list);
}

deleteTask(id: number) {
  this.list = this.list.filter(note => note.id !== id);
}
```

```html
<input type="text" placeholder="Enter Note" #task>
<button (click)="addTask(task.value)">Add Task</button>
<br><br>
<ul *ngFor="let item of list">
  <li>{{item.name}} <button (click)="deleteTask(item.id)">Remove</button></li>
</ul>
```

## Pass Data Child to Component

### Parent Component

```typescript
newData = 10;

changeVal() {
  this.newData = Math.floor(Math.random() * 10);
}
```

```html
<app-child [item]="newData"></app-child>
<button (click)="changeVal()">Update Child Component</button>
```

### Child Component

```typescript
import { Component, OnInit, Input } from '@angular/core';

export class ChildComponent implements OnInit {

  constructor() { }

  @Input() item = 0;

  ngOnInit(): void {

  }
}
```

```html
<h1>{{item}}</h1>
```

## Reusable Component

- Create a child component and use it in the parent component.
- If in the future we want to use the app-user-details list, just put `<app-user-details [item]="user"></app-user-details>` line, and it will automatically display all users.

### Parent Component

```html
<ul *ngFor="let user of userDetails">
  <app-user-details [item]="user"></app-user-details>
</ul>
```

```typescript
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
    city: 'Allahabad',
    age: '25'
  }
];
```

### Child Component

```typescript
import { Component, OnInit, Input } from '@angular/core';

export class UserDetailsComponent implements OnInit {

  constructor() { }

  @Input() item: { name: string, city: string, age: string } = { name: '', city: '', age: '' };

  ngOnInit(): void {

  }
}
```

```html
<ul>
  <li>{{item.name}}</li>
  <li>{{item.city}}</li>
  <li>{{item.age}}</li>
</ul>
```

## Send Data Child to Parent Component

### Parent Component

```typescript
updatedVal = "No value";

updateData(item: string) {
  console.log(item);
  this.updatedVal = item;
}
```

```html
<h1>{{updatedVal}}</h1>
<app-child (updateDataEvent)="updateData($event)"></app-child>
```

### Child Component

```typescript
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export class ChildComponent implements OnInit {

  constructor() { }

  @Output() updateDataEvent = new EventEmitter<string>();

  ngOnInit(): void {

  }
}
```

```html
<input type="text" placeholder="Enter Value" #box>
<button (click)="updateDataEvent.emit(box.value)">Update existing Data</button>
```

## Two-Way Binding

- Updating and displaying a property at the same time.

```typescript
bindingName: any;
```

```html
<input type="text" [(ngModel)]="bindingName"> <!-- Binding -->
<h1>{{bindingName}}</h1> <!-- Property -->
```

## Template Reference Variable

- We can get attributes, placeholder, and values from the input field using a Template Reference Variable.
- We can also send it to the .ts file from HTML using a function.

```typescript
getValue(val8: HTMLInputElement) {
  console.log(val8);
}
```

```html
<input type="text" #box8 name="name" placeholder="Enter Name">
<button (click)="getValue(box8)">Get Value</button>
```

## Basic TypeScript

- Basic of types in TypeScript:

1. number
2. string
3. boolean
4. any
5. define 2 types

### define 2 types

```typescript
		getData(item:number | boolean)
		{
			if(typeof item === "number")
			{
				return item*20;
			}
		}
 ```
		
- At the initial time of declaration we dont need to define the property because it automatically understand the type bydefault.

### Example 1

```typescript
data: number = 20;			// correct
data: string = "rishabh";	// correct
data: number = "rishabh";	// incorrect
```

### Example 2

```typescript
getData(item: number) {
  return item * 20;
}

this.getData("hello");		// Error: item value should be number for multiplication
```

### Example 3

```typescript
getData(item: number) {
  return item * 20;
}

this.getData(10); 	// correct
```

### Example 4 (Defining object variables and functions)

```typescript
data: { name: string, phone: number } = { name: 'rishabh', phone: 9918352565 };

getData(item: { name: string, phone: number }) {
  return item;
}
```

### Example 5 (Defining array variables and functions)

```typescript
data: string[] = ["abc", "def", "ghi"];

getData(item: number[]) {
  return item;
}

getItem() {
  this.getData([20, 30, 40]);
}
```

## Basic of Pipes

- Pipes can transform format of one type of data to another type.
- for eg: changing date format, case-sensitive string, changing currencies etc.
- We can use Pipes inside html pages not in TS file.

```typescript
todayDate = new Date();
```

```html
<h1>{{ title | lowercase }}</h1>
<h1>{{ title | uppercase }}</h1>
<h1>{{ todayDate }}</h1>
<h1>{{ todayDate | date }}</h1>
<h1>{{ todayDate | date: 'fullDate' }}</h1>
```

## Advance Pipes

- Parameters with Pipes
- Two Pipes together
- Using Pipes directly on number value
- Currency Pipes

```typescript
    userObj = {
      name: 'rishabh',
      age: 25,
      city: 'lucknow'
    }
 ```
 
 ```html
<h1>{{ title | slice: 3:6 }}</h1>
<h1>{{ title | slice: 3:6 | uppercase }}</h1>
<h1>{{ userObj | json | uppercase }}</h1>
<h1>{{ 2.3 | number:'3.3-5' }}</h1>
<h2>{{ 20 | currency:'USD' }}</h2>
<h2>{{ 20 | currency:'INR' }}</h2>
```

## Make custom pipes

- `ng g p pipes/usdToinr` => command used for creating pipes.

```typescript
export class UsdToinrPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [x] = args;
    return value*x;
  }
}
```

```html
<h1>{{20 | usdToinr : 82.56}}</h1>
```




