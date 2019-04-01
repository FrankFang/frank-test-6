import React from 'react';
import Demo from '../demo';
import IconExample1 from './examples/1';

const IconExample: React.FunctionComponent = () => {
  return (
    <div>
      <Demo code={require('!!raw-loader!./examples/1')}>
        <IconExample1/>
      </Demo>
    </div>
  );
};

export default IconExample;