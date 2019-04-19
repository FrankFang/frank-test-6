import React from 'react';
import {scopedClassMaker} from '../helpers/classes';

interface Props extends React.HTMLAttributes<HTMLElement> {
}

const sc = scopedClassMaker('gu-layout');
const Aside: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;
  return (
    <div className={sc('aside', {extra: className})} {...rest}>
      aside
    </div>
  );
};

export default Aside;