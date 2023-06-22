import React from 'react';
import './Form.scss';
import { useState } from 'react';

function Form(props){

  let [url, setUrl] = useState('');
  let [method, setMethod] = useState('GET');
  let {handleApiCall} = props;


  
 const  handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
    };
  handleApiCall(formData);
  }
    return (
      <>
        <form onSubmit={handleSubmit} data-testid = 'form'>
          <label >
            <span>URL: </span>
            <input name='url' type='text' onChange ={(e)=> setUrl(e.target.value)} />
            <button type="submit" data-testid= 'test'>GO!</button>
          </label>
          <label className="methods">
            <span id="get" onClick={(e)=>setMethod(e.target.id)}>GET</span>
            <span id="post" onClick={(e)=>setMethod(e.target.id)}>POST</span>
            <span id="put">PUT</span>
            <span id="delete">DELETE</span>
          </label>
        </form>
      </>
    );
  }


export default Form;
