import IconExample1 from './icon.example.1';
import React, {Fragment} from 'react';
import Demo from '../../demo';
import IconExample2 from './icon.example.2';

const IconDemo = () => {
  return (
    <Fragment>
      <Demo code={require('!!raw-loader!./icon.example.1.tsx').default}>
        <IconExample1/>
      </Demo>
      <Demo code={require('!!raw-loader!./icon.example.2.tsx').default}>
        <IconExample2/>
      </Demo>
    </Fragment>
  );
};

export default IconDemo;
