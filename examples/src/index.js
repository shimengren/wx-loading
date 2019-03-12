import React from 'react';
import MyComponent  from '@src/index.js';

import { render} from 'react-dom';


render(
  <MyComponent size="100" color="red"/>,
  document.getElementById('root'),
)
