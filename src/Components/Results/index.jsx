import React from 'react';
import JSONPretty from 'react-json-pretty';
import JSONPretty1337 from'react-json-pretty/dist/acai';

import './Results.scss';

function Results(props){
  let {data } = props;
  return (
      <section data-testid = 'test'>
        
         {props.loadMessage?
        <div >Please Wait...</div>:
        
        <pre>
          <JSONPretty data={data} theme={JSONPretty1337}></JSONPretty></pre>}
      </section>
    );
}
export default Results;
