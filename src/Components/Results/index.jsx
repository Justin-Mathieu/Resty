import React from 'react';
import './Results.scss';
function Results(props){
  let {data } = props;
  return (
      <section data-testid = 'test'>
        
         {props.loadMessage?
        <div >Please Wait...</div>:
        <pre>{data ? JSON.stringify(data, undefined, 2) : null}</pre>}
      </section>
    );
}
export default Results;
