import React from 'react';
import ReactDOM from 'react-dom';

import Tabs from './tabs';
import Clock from './clock';
import Autocomplete from './autocomplete';

document.addEventListener('DOMContentLoaded', ()=>{
  let headerArray = [{title: "title", content: "my content"},{title: "title2", content: "my content2"}];
  let names = ["bob","david","pi","mom", "alex", "jeff", "elisa", "elephants"];
  ReactDOM.render(<div>
      <Tabs array={headerArray} />
      <Clock />
      <Autocomplete names={names} />
    </div>, document.getElementById('root') );

});
