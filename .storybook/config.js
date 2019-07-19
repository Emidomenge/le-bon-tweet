import { configure } from '@storybook/react';
import './../.enzyme/config.js';
import './../src/index.css';
import './../src/assets/css/tachyons.min.css'

function loadStories() {
  const req = require.context('../src/components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
