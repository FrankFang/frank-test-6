import ReactDOM from 'react-dom';
import React from 'react';
import Icon from './icon';

const fn: React.MouseEventHandler = (e) => {
  console.log(e.target);
};

ReactDOM.render(<div>
  <Icon name="qq" onClick={fn}/>
</div>, document.querySelector('#root'));
