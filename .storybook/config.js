import { configure, getStorybook } from '@storybook/react';


// storybook.configure(() => require('../src/stories'), module);



function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);