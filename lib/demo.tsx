import React from 'react';
import Highlight, {defaultProps} from "prism-react-renderer";

interface Props {
  code: { default: string };
}

const Demo: React.FunctionComponent<Props> = (props) => {
  return (
    <div>
      {props.children}
      <div>
        <Highlight {...defaultProps} code={props.code.default} language="jsx">
          {({className, style, tokens, getLineProps, getTokenProps}) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({line, key: i})}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({token, key})} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};
export default Demo;