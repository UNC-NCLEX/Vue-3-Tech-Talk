![Vue 3](https://github.com/UNC-NCLEX/Vue-3-Tech-Talk---Tutorial-and-Demo/blob/main/src/assets/vue_3.png)

# Introduction to Vue 3 (+ Demo)

This demo provides an introduction to Vue 3 as well as a thorough walkthrough below.

## Table of Contents

In this demo, we will go over the following topics:

1) [What is Vue.js? Why use it?](#What-is-Vue.js?-Why-use-it?)
2) [Vue CLI Setup](#Vue-CLI-Setup)
    - [Installation Prerequisites](#Installation-Prerequisites)
    - [Installing the Vue CLI](#Installing-the-Vue-CLI)
3) [Important Vue CLI Commands](#Important-Vue-CLI-Commands)
4) [Project Structure](#Project-Structure)
5) [Component Basics](#Component-Basics)
    - [Structure of a Component](#Structure-of-a-Component)
    - [Embedding App.vue in Index.html](#Embedding-App.vue-in-Index.html)
    - [Registering Components with App.vue](#Registering-Components-with-App.vue)
6) [Main.js](#Main.js)
7) [Data and Methods](#Data-and-Methods)
    - [Data](#Data)
    - [Methods](#Methods)
8) [Event Handling](#Event-Handling)
    - [Listening to Events](#Listening-to-Events)
    - [Click and Mouse Events](#Click-and-Mouse-Events)
    - [Method Handlers](#Method-Handlers)
    - [Modifiers](#Modifiers)
9) [Conditional Rendering](#Conditional-Rendering)
10) [List Rendering](#List-Rendering)
11) [Attribute Binding](#Attribute-Binding)
12) [Form Input Binding](#Form-Input-Binding)
13) [Props](#Props)
14) [Lifecycle Hooks](#Lifecycle-Hooks)
15) [Router](#Router)
    - [Installing the Router](#Installing-the-Router)
    - [Index.js](#Index.js)
    - [Updating Main.js and App.vue](#Updating-Main.js-and-App.vue)
    - [Router Links](#Router-Links)
    - [Dynamic Routing](#Dynamic-Routing)
    - [Redirects](#Redirects)
    - [404 Errors](#404-Errors)
16) [Want to Learn More?](#Want-to-Learn-More?)
17) [Thank You!](#Thank-You!)

## What is Vue.js? Why use it?

According to [Wikipedia](https://en.wikipedia.org/wiki/Vue.js), Vue.js is an open-source, model-view-viewmodel front end JavaScript framework for building single-page applications and user interfaces. Vue.js builds on top of standard HTML, CSS, and JavaScript to allow you to build single-page applications and user interfaces efficiently through the use of component-based programming.

Vue.js has been increasing in popularity in recent years for reasons such as:

* Relatively easy to learn and understand
* Extensive documentation
* Lightweight installation
* Fast performance
* Extensive tooling ecosystem
* Very flexible and depends only on JavaScript frameworks
* High customizability
* Open-sourced framework (as opposed to React and Angular, which were created by Facebook and Google, respectively)

## Vue CLI Setup

The Vue CLI provides an easy-to-use command line interface for developing Vue.js applications. According to the [Vue CLI website](https://cli.vuejs.org/guide/), the Vue CLI provides the following:

* Interactive project scaffolding via @vue/cli.
* A runtime dependency (@vue/cli-service) that is:
    - Upgradeable;
    - Built on top of webpack, with sensible defaults;
    - Configurable via in-project config file;
    - Extensible via plugins
* A rich collection of official plugins integrating the best tools in the frontend ecosystem.
* A full graphical user interface to create and manage Vue.js projects.

### Installation Prerequisites

Before installing the Vue CLI, you need to install Node.js on your computer. Node.js is an open-source, cross-platform JavaScript runtime environment built on Google Chrome's V8 engine. Node.js allows you to execute JavaScript code outside of a web browser and allows you to access the Node Package Manager, which is Node.js's default package manager. This allows you to easily download and install Vue.js packages, such as the [Router](#Router).

To install Node.js, [click here to visit the Node.js website and install the current version of Node.js](https://nodejs.org/en/).

### Installing Vue CLI

Open your command line (Terminal in macOS or VS Code, Command Prompt/Powershell in Windows, etc.) and run the following command:

> npm init vue@latest

This will install the latest version of the Vue CLI. It will also execute `create-vue` and allow you to start your first Vue project.

## Important Vue CLI Commands

As you work with the Vue CLI, there are a couple of commands you will likely use frequently. The following are a couple of frequently-used commands you should remember:

* npm install - installs modules defined in package-lock.json
* npm install [insert argument] - installs a specific package
* npm run build - builds your project
* npm run lint - checks source code for programmatic and stylistic errors
* npm run dev - starts a development server
* npm run serve - runs the command defined under the name serve in package.json, which is vue-cli-service serve by default

## Project Structure

![Project Structure](https://github.com/UNC-NCLEX/Vue-3-Tech-Talk---Tutorial-and-Demo/blob/main/src/assets/project_structure.PNG)

The above picture shows an example of the project directory in a newly created Vue 3 project. Below, we will provide a brief description of each file/folder in the directory.

* node_modules - Contains essential Node.js modules for the project to build and run (do not edit)
* public - Contains static assets, such as the project's favicon and index.html file
* src - Contains your project's files (the code you write)
    - assets - Contains fonts, icons, images, and styles
    - components - Contains reusable Vue instances with custom HTML elements (more on this later)
    - App.vue - Root of your Vue application, typically defines the web page template (more on this later)
    - main.js - Initializes App.vue and is responsible for plugins and 3rd party components (more on this later)
* .gitignore - Specifies files that Git should ignore, such as local env files or log files
* babel.config.js - Configuration file for the JavaScript compiler
* jsconfig.json - JavaScript configuration file which indicates that the directory it's currently in is the root directory
* package-lock.json - Keeps track of the exact version of all project dependencies (do not edit)
* package.json - Lists all project dependencies (do not edit)
* vue.config.js - Vue 3 configuration file

## Component Basics

Components are independent, reusable pieces of our Vue application that contain their own custom HTML, scripts, and CSS. Vue components work essentially like widgets in our web application. All Vue components (except for App.vue) will be stored in src/components, and all Vue components end with the file extension *.vue*.

### Structure of a Component

![Component Structure](https://github.com/UNC-NCLEX/Vue-3-Tech-Talk---Tutorial-and-Demo/blob/main/src/assets/component_structure.PNG)

As shown in the picture above, components contain three sections:

* Template - Contains the HTML for the component
* Script - Contains the JavaScript code for the component
* Style - Contains the CSS styles for the component

### Embedding App.vue in Index.html

Recall that App.vue is the root of your Vue application. In other words, App.vue is the main component in your Vue application and is the parent to all of your other components.

To display the contents of App.vue on the main webpage (index.html), we need to mount it in our index.html. In other words, we need to direct Vue as to where exactly it should load the contents of App.vue in index.html. If you visit public/index.html, you will see that Vue created the following div by default:

```
<div id="app"></div>
```

When Vue runs [Main.js](#Main.js), it knows to load the contents of the HTML template section of App.vue in place of this div in index.html. To learn more about this, visit the [Main.js](#Main.js) section.

### Registering Components with App.vue

Given that components are independent, reusable pieces in your Vue application, we can add multiple components to App.vue to display them on our webpage.

To use a child component in Vue, we must import it into its parent component. As such, if we want to embed a component within App.vue, we need to register it in App.vue by importing it and adding it in the components section in App.vue's script. The following is an example of how HelloWorld.vue would be registered with App.vue:

```
<script>
import HelloWorld from './HelloWorld.vue'

export default {
  components: {
    HelloWorld
  }
}
</script>
```

After registering HelloWorld.vue in the script section of App.vue, we can now add it in the HTML template section of App.vue to display the component.

```
<template>
    <HelloWorld />
</template>
```

## Main.js

Main.js (located in the root of your project) is the starting point for your Vue application. By default, Main.js has the following contents:

```
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

Main.js creates your Vue application and specifies that App.vue is the root component (done with createApp(App)). It also mounts the root component to the DOM element in index.html with an id attribute of 'app'. This means that it specifies that whichever DOM element in index.html that contains an id attribute of 'app' will be controlled by Vue and will be the place where the HTML template contents of App.vue will be loaded.

## Data and Methods

Inside the script section of each of our components, we can add two attributes within `export default`: data() and methods.

### Data

We can add any data we want to work with inside a component in a method called `data()` inside of `export default`. This would look like the following:

```
<script>
export default {
  data() {
      return {
          variable1: "v1",
          variable2: "v2"
      }
  }
}
</script>
```

Note that data() MUST contain a return block to work. All of your variables need to be put inside the return block inside data(). These variables can only be used inside the scope of the Vue component they're defined inside of. To display your variables in your HTML, you can use the curly brace syntax, like the following:

```
<template>
    <p>{{ variable1 }} {{ variable2 }}</p>
</template>
```

### Methods

We can add any methods (also known as functions) inside a methods section inside of a component's `export default`. This would look like the following:

```
<script>
export default {
  data() {
      return {
          x: 5,
          y: 10
      }
  },
  methods: {
      addXY() {
          return this.x + this.y;
      },
      subtractXY() {
          return this.x - this.y;
      },
      multiplyXY() {
          return this.x * this.y;
      },
      divideXY() {
          return this.x / this.y;
      }
  }
}
</script>
```

Methods may or may not return a value, and they may or may not take in any arguments. These methods can be triggered inside of HTML attributes or used inside of the curly brace syntax. Here is another example with the curly brace syntax.

```
<template>
    <p>{{ addXY() }} {{ subtractXY() }}
</template>
```

It's also important to note that, when you refer to variables from data() inside of your methods, you must use the `this` keyword.

## Event Handling

Event handling allows your Vue application to react to actions that take place when a user interacts with your application. For example, it allows your application to react to a button click or the mouse moving over a section of the webpage.

### Listening to Events

To listen to events, such when a user clicks a button, you can use the `v-on` directive (or its shorthand `@`). This directive allows Vue to listen to DOM events such as button clicks and to react if that event occurs. Here is an example of its usage:

```
<template>
    <button v-on:click="x++" />
    <button @click="handler" />
</template>
```

There are two types of handlers:

* Inline Handlers: Inline JavaScript is triggered when the event occurs
* Method Handlers: A method is triggered when the event occurs

### Click and Mouse Events

Two of the most common types of actions that a user can take on your website (and, likewise, two of the most common types of events for you to handle) are click and mouse events. These events are attached as attributes in the HTML element in which you want them to execute on. Here are some common click and mouse events you should know:

Click Events:

* @click="handler" - Executes handler when the element is clicked
* @dblClick="handler" - Executes handler when the element is double clicked

Mouse Events:

* @mouseover="handler" - Executes handler when the mouse is over the element
* @mouseleave="handler" - Executes handler only when the mouse leaves the element (not when it enters the element or is over the element)
* @mousemove="handler" - Executes handler as the mouse moves over the element

### Method Handlers

Although method handlers are written like `handler()` in the methods section of your script, when passing a handler into an event, you don't need to include the parentheses (unless you're passing in arguments).

By default, all method handlers with no arguments will take in an event object that contains data explaining the context surrounding the event.

If your handler's definition contains one parameter and no arguments are passed into the handler when it is called, it will take in an event object by default.

If your handler's definition contains more than one parameter or contains only one parameter but one or more arguments are passed into it when it is called, it will not take in an event object by default. In this situation, you must explicitly pass in `$event` as an argument when calling the handler. The following are some examples.

```
<template>
    <div @click="handleEvent1"></div> // prints the event object
    <div @click="handleEvent2(5)"></div> // prints 5
    <div @click="handleEvent3(5, 10)"></div> // prints "5, 10", not the event object
    <div @click="handleEvent4($event, 5)"></div> // prints the event object and then prints 5
</template>

<script>
export default {
  methods: {
      handleEvent1(e) {
        console.log(e)
      },
      handleEvent2(e) {
        console.log(e)
      },
      handleEvent3(e, f) {
        console.log(e + ", " + f)
      },
      handleEvent4(e, f) {
          console.log(e)
          console.log(f)
      }
    }
}
</script>
```

### Modifiers

As the name implies, event modifiers modify the behavior of an event. Modifers allow you to change what needs to be done for an event to be triggered. For example, you could modify a click event such that it only fires when someone clicks a specific key on their keyboard. The following are some common modifiers you should know.

Event Modifiers:

* .stop - Stops currently executing click events
* .prevent - Prevents the submit event from reloading the page
* .capture - Uses capture mode for event handling
* .once - Ensures the event can only be triggered once
* .self - Triggers only when the target of the event is itself

Key Modifiers (used with `@keyup`):

* .enter - Triggers the event when the enter key is pressed
* .shift - Triggers the event when the shift key is pressed
* .ctrl - Triggers the event when the ctrl key is pressed

## Conditional Rendering

Conditional rendering allows us to show certain content only if a certain condition is true. For example, conditional rendering could allow you to display an image on the webpage if a button is clicked and then remove that same image from the webpage if that button is clicked again.

Conditional rendering is done using the `v-if` directive. This directive allows Vue to show a piece of content only if its value is equal to true. The following is an example of this in action.

```
<template>
    <p v-if="showName">{{ firstName }} {{ lastName }}</p>
    <button @click="toggleName">
        <span v-if="showName">Show Name</span>
        <span v-if="showName">Hide Name</span>
    </button>
</template>

<script>
export default {
    data() {
        return {
            firstName: "John",
            lastName: "Doe",
            showName: false
        }
    },
    methods: {
      toggleName() {
          this.showName = !this.showName
      }
    }
}
</script>
```

The following are a couple of other directives you can use for conditional rendering:

* `v-else` - An else block for `v-if`
* `v-else-if` - An else if block for `v-if`

## List Rendering

It's likely that your Vue application will have to render some type of list, such as an array of data it may retrieve from a database. For example, you may want to create a website that shows a list of products up for sale, where each product and its associated information is retrieved from a database and then displayed in its own section of the webpage. If this is the case, it would be quite difficult, inefficient, and unreliable to handle these items by hardcoding HTML elements for each item in the list.

Instead, we can use the `v-for` directive to render a list of items from an array. Similar to the for-each loop in programming languages like Java or Python, we can loop through each item in an array and generate HTML elements that will be rendered and displayed on the webpage. The following is an example of this in action.

```
<template>
    <div v-for="item in items">
        <h3>{{ item.name }}</h3>
        <p>${{ item.price }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [{name: "Shirt", price: 15}, {name: "Sweater", price: 25}]
        }
    }
}
</script>
```

## Attribute Binding

Attribute binding allows us to bind an attribute of an HTML element with a variable from data(). This allows us to do things like update an href or update an image src. Attribute binding is done using the `v-bind` directive (or its shorthand `:`).

We have previously gone over the curly brace syntax and how you can display variables on your webpage using that syntax. However, this syntax DOES NOT work with HTML attributes. Attribute binding is necessary if you're assigning attributes to variables in your HTML. The following demonstrates the difference between the two.

```
<template>
    <a href="url">Vue 3 Website</a> // this does not work
    <a v-bind:href="url">Vue 3 Website</a> // this works
    <a :href="url">Vue 3 Website</a> // this also works
</template>

<script>
export default {
    data() {
        return {
            url: "https://vuejs.org/"
        }
    }
}
</script>
```

Without attribute binding, Vue will interpret "url" as the string "url" rather than the value of the variable url. Attribute binding is necessary to direct Vue to look for the variable url and to use that variable for the value of href.

## Form Input Binding

Form input binding allows us to sync the state of form elements, such as input fields or checkboxes, with our data variables in JavaScript. For example, if we create a log in page that takes in a username and password, form input binding allows us to easily retrieve the username and password that a user types into these fields and send an HTTP request with the data. Form input binding is done with the `v-model` directive.

To use form input binding, you need to add `v-model="[INSERT VARIABLE NAME]"` as an attribute for an HTML element, such as an input or a textarea element. The following is an example demonstrating how v-model can be used:

```
<template>
    <input v-model="username">
    <textarea v-model="text">
</template>

<script>
export default {
    data() {
        return {
            username: "",
            text: ""
        }
    }
}
</script>
```

As a user types in a text field that utilizes form input binding, the variable associated with that field is updated with the text in that field. For example, if you were to type the name "John" into the input field in the example above, the username variable will automatically be updated to equal "John".

When working with checkboxes, you can bind multiple checkboxes to the same array or set. The following example demonstrates how this could be done:

```
<template>
    <input type="checkbox" id="1" value="Option 1" v-model="checkedOptions">
    <input type="checkbox" id="2" value="Option 2" v-model="checkedOptions">
    <input type="checkbox" id="3" value="Option 3" v-model="checkedOptions">
</template>

<script>
export default {
    data() {
        return {
            checkedOptions: []
        }
    }
}
</script>
```

## Props

According to [LearnVue](https://learnvue.co/2020/08/an-introduction-to-vue3-props-a-beginners-guide/#why-is-it-important-to-use-props=), props are custom attributes that we can register on a component that allow us to pass data from a parent component to one of its children. Props are useful for the following reasons:

* Reusability - Props help to make components more reusable since data doesn't have to be hardcoded into a specific component and instead can be passed in from its parent.
* Maintainability - Props allow us to define data in one single place and then use it in multiple components. This makes our code more maintainable, as you only need to manage the code in one location as opposed to managing it in multiple components.

Props can be passed into a component as an attribute, as shown in the example below.

```
<template>
    <HelloWorld header="This is a header" />
</template>
```

In the example above, header is a prop that was passed into the HelloWorld component. Props must be registered in a props array in the script section of a component, as shown below.

```
<script>
export default {
    props: ['header']
}
</script>
```

Once a prop is passed into a component, it can be used inside of the component just as if it were any other variable you would typically find in the data() section of the component. For example, if header were passed into the HelloWorld component, the following template section in the HelloWorld component would work.

```
<template>
    <h1>{{ header }}</h1>
</template>
```

If you want to pass variables into a component as props, remember to use attribute binding, as shown in the example below.

```
<template>
    <HelloWorld v-bind:header="header" />
</template>

<script>
export default {
    props: ['header'],
    data() {
        return {
            header: "Hello World!"
        }
    }
}
</script>
```

## Lifecycle Hooks

Similar to how humans undergo a cycle of life that goes from baby -> toddler -> kid -> teenager -> adult -> senior citizen, components in Vue undergo their own lifecycle. A Vue component has four phases of "life":

1) Creation - The component is about to be created.
2) Mounting - The component's HTML template is mounted onto the DOM.
3) Updating - Triggered when data/computed properties are updated or re-rendered.
4) Unmounting - The component's HTML template is unmounted from the DOM.

Lifecycle hooks are methods that allow us to "hook into" or modify these four phases of a component's lifecycle, allowing us to control what a component does through its lifecycle by running JavaScript code during certain points of its life. Vue has 13 lifecycle hooks, but below, we will focus on 8 of the most important ones to keep in mind.

Creation Lifecycle Hooks:

* setup() - Code in this hook is executed before the component is created

Mounting Lifecycle Hooks:

* onBeforeMount() - Code in this hook is executed before the component is rendered and mounted on the DOM
* onMounted() - Code in this hook is executed right after the component is rendered and mounted on the DOM

Updating Lifecycle Hooks:

* onBeforeUpdate() - Code in this hook is executed when data is changed but before the component is re-rendered
* onUpdated() - Code in this hook is executed once the DOM is updated

Unmounting Lifecycle Hooks:

* onBeforeUnmount() - Code in this hook is executed right before the component is unmounted from the DOM
* onUnmounted() - Code in this hook is executed right after the component is unmounted from the DOM

Just to demonstrate what a lifecycle hook looks like, here is a basic example of a lifecycle hook you would find in a component.

```
<script>
export default {
    setup() {
        onMounted(() => {
            console.log("Mounting...");
        });

        onUnmounted(() => {
            console.log("Unmounting...");
        });
    }
}
</script>
```

## Router

So far, we've gone over how to create individual webpages in a Vue 3 project. However, we need a way to connect webpages such that you can click a link one one webpage and load another webpage into your browser, as, at the moment, we can only see one webpage and have no way to jump between webpages. To do this, we will need to use the Router package.

The Router package makes it easy to switch between different webpages in your website, and since the Router only switches out components and doesn't make new HTTP requests for webpages, it can switch between webpages very quickly. 

### Installing the Router

Before you can use the Router, you need to make sure to install the Router. The installation process should be very simple. If you're creating a new project manually, make sure to select the Router as a function you will need for your project. If you have an existing project that doesn't have the Router installed, just run the following in your terminal:

> npm install vue-router@latest

### Index.js

After you install the Router, you will notice that a new directory called router was added to the src directory. This directory contains a file called index.js. This index.js file is important in that it is where you set up all of the routes in your website. Your index.js file will look something like this:

```
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
```

You'll notice that the file contains an array called routes, which contains objects representing all of the different routes in your website. A route object contains the following properties:

* path - The path of this route (this is what will be at the end of your webpage's URL)
* name - The name of this route
* component - The Vue component that the route is associated with (these components must be in src/views)

The createRouter() method at the bottom of index.js is what sets up the Router instance for the website. You do not need to edit this method, but you should know that it takes in an object with two properties:

* history - Uses the browser's web history API to allow you to go forward and back in your website
* routes - This is the array of routes defined in index.js

### Updating Main.js and App.vue

To use the Router, you need to update the createApp function in main.js to actually use the Router. The following shows how the updated version of main.js should look:

```
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
```

After doing this, you need to update the template section of App.vue with the <router-view /> tag. The following shows how the updated version of the template section of App.vue should look:

```
<template>
    <router-view />
</template>
```

When you switch between webpages on your website, the Router will inject the component's template in place of the <router-view /> tag in App.vue, similar to how we embedded App.vue into index.html.

### Router Links

When creating links from one webpage to another webpage on your website, rather than using an <a href=""> tag, we need to use something called a Router Link. This is what allows Vue's Router to intercept requests to switch webpages. The following is an example of a Router Link you could put in App.vue:

```
<template>
    <div>
        <router-link to="/">Home</router-link>
        <router-link v-bind:to="{name: 'About'}>About</router-link>
    </div>
    <router-view />
</template>
```

### Dynamic Routing

Often, we will have many routes that follow the same pattern for the same component but each route will display different data. For example, suppose we have a website with multiple users, each of which having a User component. Each user may have a different ID, and we could access each user's component with the pattern /User/[INSERT ID]. We could do this in Vue using something called a param (denoted by a colon).

```
const User = {
  template: '<div>User</div>',
}

const routes = [
    {
        path: '/users/:id',
        component: User
    }
]
```

With this approach, Vue will dynamically route different users to the same Vue component, with each user's component having different information specific to that user. Any segment of the path that contains a param is dynamic, and you can have more than one dynamic segment per path.

Note: [The user example in this section came from this webpage.](https://router.vuejs.org/guide/essentials/dynamic-matching.html)

### Redirects

A redirect is when you move a user who requested a specific webpage over to a different webpage, typically because the webpage that was requested doesn't exist anymore. For example, if someone requests the path /HelloWorld but that path doesn't exist, you can redirect them to another path that does exist, such as /Home.

A redirect is fairly simple to implement. All you need to do is add a route object to your routes array in src/router/index.js with the path you want to redirect away from and the path you want to redirect to. This looks like the following:

```
const routes = [
    {
        path: '/Home',
        name: Home,
        component: Home
    },
    {
        path: '/HelloWorld',
        redirect: '/Home'
    }
]
```

### 404 Errors

A 404 error is an error that occurs when a resource that you're trying to access is not found. Typically, when someone tries to access a webpage that doesn't exist, they are greeted with a 404 error. However, unless you configure this in Vue, if someone tries to access a nonexistant webpage, they will just be greeted with a blank page. You can redirect the user to a webpage for 404 errors by creating a component for 404 errors and adding a route object to the routes array in src/router/index.js that looks like the following:

```
const routes = [
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }
]
```

The path in this object uses a regular expression that will pick up any webpage that doesn't match one of the routes currently configured in the routes array. It will then route that webpage to a component of our choice (in this example, it's to a component called NotFound).

## Want to Learn More?

If you want to learn more about Vue.js, there is extensive documentation available to help guide you, and there are numerous videos you could watch to better understand how Vue.js works. The following are some additional sources of information if you want to continue learning about Vue.js:

* [Vue.js Guide (official Vue Website)](https://vuejs.org/guide/introduction.html)
* [Vue.js Tutorial (official Vue Website)](https://vuejs.org/tutorial/)
* [Vue.js 3 Tutorial (YouTube Tutorial)](https://www.youtube.com/playlist?list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1)

## Thank You!

Thank you for reading this README and for viewing this demo!
