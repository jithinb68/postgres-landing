# Postgres landing page

The goal is to create a GraphQL for Postgres landing page app.
image.png 

Project progress via commits can be viewed here - https://github.com/jithinb68/postgres-landing/commits/main

# Folder structure

src is divided into 
assets - For keeping images and logos. 
components - For all resuable components considering a future perpective.
pages - For keeping the pages.
utils - For maintaining utilities and comon methods/functions if any

# Component Architecture

1 BASE components - Consider these as platform level components which could ideally reside as another repo in a large scale project for maintainability and lesser tweaks/changes as the application progress. We might need to have larger unit test coverage for these compoennts as well

2 ALL other components other than BASE - All these would reusable components from the design / business logic perspective which would be specific to the prohect we are working  in.

# UNIT test coverage

All components have unit test implemeted

<img src="https://ibb.co/GRB4v18" width="500">

```
npm install

For installing the dependencies

```
```
npm start

For serving the project in loalhost

```
```

npm test

For running unit test


```