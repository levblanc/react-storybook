import { configure, setAddon, addDecorator } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs/react";

addDecorator(withInfo);
addDecorator(withKnobs);
setAddon(JSXAddon);

const reqJS = require.context('../src', true, /.stories.js$/);
const reqTSX = require.context('../src', true, /.stories.tsx$/);

function loadStories() {
  require('./welcomeStory');
  reqJS.keys().forEach(file => reqJS(file));
  reqTSX.keys().forEach(file => reqTSX(file));
}

configure(loadStories, module);