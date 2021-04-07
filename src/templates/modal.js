
import React, { useState } from 'react';
import styles from '../styles/app.css';
import axios from 'axios'
export function Modal ({ handleClose, show, children }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const [name,setname]=useState("");
  const [email,setemail]=useState("");
  function namechange(event){
    setname(event.target.value)
  }
  function emailchange(event){
    setemail(event.target.value)
  }
  function submitform(n,e){
    let _data = {
	 "title":name,
   "description":email,
   "published":true
    }
    fetch('http://localhost:8080/api/tutorials/new', {
    method: "POST",
    body: JSON.stringify(_data),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json()) 
  .then(json => console.log(json));
  handleClose
  }
 
  return (
    <div>
        {show == true ?
        <div className="modal display_block">
        <section className="modal_main">
          <input type="text" value={name} onChange={(e)=>namechange(e)} />
          <br/>
          <input type="text" value={email} onChange={(e)=>emailchange(e)} />
          <input type="button" value="submit" onClick={()=>submitform(name,email)} />
          <button type="button" onClick={handleClose}>
            Close
          </button>
        </section>
      </div>
        :<></>}
    </div>
  );
};
