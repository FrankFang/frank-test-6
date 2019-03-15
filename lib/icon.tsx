import React from 'react';
import './importIcons';
import './icon.scss';

interface IconProps {
  name: string;
  onClick: React.MouseEventHandler<SVGElement>
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <svg className="fui-icon" onClick={props.onClick}>
      <use xlinkHref={`#${props.name}`}/>
    </svg>
  );
};

export default Icon;