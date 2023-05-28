# angular_practice

# Important Points about Angular 12
---------------------------------

- Angular creates single page applications. (No browser reloading)
- Developed by Google
- MVC Framework
- Use NPM (Node Package Manager) and CLI (Command Line Interface)

## Setup and Installation
----------------------

- Install Node + NPM (Using node software)
- Install Angular CLI (cmd - npm install -g @angular/cli)
- Install First Angular App (cmd - ng new project_name)
- Run Project (cmd - ng serve)
- Check Angular Version (package.json file)
- Check CLI Version (cmd - ng version)
- Install specific Angular Version (cmd - npm install -g @angular/cli@10.0.0)
- How to use another node version with the current version (Using nvm)

## File and Folder Structure
-------------------------

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
-----------------

- `index.html` => Used to change the title for the application.
- `app.component.html` => Used to change the content for the main page of the application.
- `app.component.ts` => It contains TS configuration for creating loops, functions, and variables, etc.

**Note:** How to access data from the TS file to the HTML page. 

		{{title}}
		
## Interpolation
-------------

- Fetching data from TS file and display it on the HTML page using `{{}}`.

For example:

**app.component.ts**
```typescript
export class AppComponent {
  title = 'blog';
  getValue() {
    return "Get Function Data";
  }
}```

**app.component.html**

```<h1>{{title}}</h1>```<br />
```<p>{{getValue()}}</p>```<br />

### Note: What we cannot do in Interpolation?
-----------------------------------------

**app.component.html**

```<h1>{{title="Hello"}}</h1>```<br />
```<h1>{{typeof title}}</h1>```<br />
```<h1>{{data++}}</h1>```<br />
```<h1>{{new title}}</h1>```<br />

## Output:

- Failed to compile because we cannot change the values here.
- Failed to check the typeof title because we cannot check its type here.
- Failed to increment the data value because we cannot increment its value here.
- Failed because we cannot use the new keyword here.

**Note: We can also use any value as a class name by using interpolation.**

**app.component.html**

```<h1 class="{{title}}">{{title="Hello"}}</h1>```
