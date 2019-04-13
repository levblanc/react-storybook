# react & storybook project setup log

## npm install

storybook and babel

```bash
$ npm i -D @storybook/react @babel/core babel-loader 
```

react

```bash
$ npm i --save react react-dom
```

addons 

```bash
$ npm i -D storybook-addon-jsx @storybook/addons @storybook/addon-info @storybook/addon-knobs
```

typescript

```bash
$ npm i -D typescript awesome-typescript-loader
```

doc generation

```bash
$ npm i -D react-docgen-typescript-loader 
```

typings

```bash
$ npm i -D @types/react @types/storybook__react @types/storybook__addon-info @types/storybook__addon-knobs
```

## file directories

```bash
# .storybook/ for storybook configs
# src/ for code
$ mkdir .storybook src
```

## config files

storybook itself requires `config.js` to run, can be empty

addon configs: `.storybook/addons.js`

webpack configs: `.storybook/webpack.config.js`

typescript configs: `tsconfig.json`

```bash
$ touch tsconfig.json

$ cd .storybook/
$ touch config.js addons.js webpack.config.js
```

## setup npm script

setup npm script to run the project for conveniency

```bash
# package.json
{
  ...
  "scripts": {
    "dev": "start-storybook -p 8000 -c .storybook",
    ...
  }
}
```