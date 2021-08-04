import React,{useEffect,useState} from "react"
import axios from "axios";
import './App.css';

function App(){
  const[id,setId]=useState("");
  const[name,setName]=useState("");
  const[city,setCity]=useState("");
  const[createdat,setCreatedAt]=useState("");
  const[updatedat,setUpdatedAt]=useState("");
  const[deletedat,setDeletedAt]=useState("");
  const[status,setStatus]=useState("");
  function saveUser()
  {
  console.log({id,name,city,createdat,updatedat,deletedat,status});
  let data={id,name,city,createdat,updatedat,deletedat,status}
  axios.post("http://localhost:9090/employees",{
  method:'POST',
  headers:{
  'Accept':'application/json',
  'Content-Type':'application/json'
  },
  body:JSON.stringyfy(data)
  }).then((result)=>{
  console.warn("result",result);
  }
  )
}
         return(
            <div className="ui main">
              <h2>POST</h2>
              <form className="ui form" onSubmit={saveUser}>
                      <div className="field">
                <label> Id </label> <input type="text"  value={id} onChange={(e)=>{setId(e.target.value)}} id="id"></input>
              </div>
              <div className="field">
                <label>Name</label> <input type="text"  value={name} onChange={(e)=>{setName(e.target.value)}} name="name"></input>
                </div>
                <div className="field">
                <label>City </label> <input type="text"  value={city} onChange={(e)=>{setCity(e.target.value)}} city="city"></input>
              </div>
              <div className="field">
                <label>CreatedAt </label> <input type="text"  value={createdat} onChange={(e)=>{setCreatedAt(e.target.value)}}createdat ="createdat"></input>
              </div>
              <div className="field">
                <label>UpdatedAt </label> <input type="text" value={updatedat} onChange={(e)=>{setUpdatedAt(e.target.value)}}updatedat="updatedat"></input>
              </div>
              <div className="field">
                <label>DeletedAt </label> <input type="text" value={deletedat} onChange={(e)=>{setDeletedAt(e.target.value)}} deletedat="deletedat"></input>
              </div>
              <div className="field">
                <label> Status</label> <input type="text" value={status} onChange={(e)=>{setStatus(e.target.value)}} status="status"></input>
              </div>
              <button className="ui button blue"> SUBMIT</button>
  
              </form>
                    </div>
          )}
         

export default App;
