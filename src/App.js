import './App.css';
import Task from "./task.json"
import {Container} from "react-bootstrap"
import { useState } from 'react';
import Table from 'react-bootstrap/Table';

function App() {
  const[id,setId]=useState("")
  const[name ,setName]=useState("");
  const[dob,setDob] =useState("");
  const[city , setCity] =useState("");
  const[address,setAddress]=useState("");
  const[isShown, setIsShown] = useState(false);
 
function Updated (){ 
setIsShown(current => !current);
return(
<Table striped hover>
        <thead>
        <tr>
        <th>s.no</th>
        <th>Name</th>
        <th>DoB</th>
        <th>city</th>
        <th>Address</th>
        </tr>
        </thead>
        <tbody >
        <tr>
        <td>
     <input type="text" value={id} readOnly />
     </td>
     <td>
     <input type="text" defaultValue={name} />
     </td>
     <td>
     <input type="date" defaultValue={dob} />
     </td>
     <td>
     <input type="text" defaultValue={city}/>
     </td>
     <td>
     <input type="text" defaultValue={address}/>
     </td>
    </tr>
</tbody>
</Table>
)
}

  
  return (
  <div className="App">
  <Container className='mt-5'>
  <Table striped  hover>
  <thead>
  <tr>
  <th>s.no</th>
  <th> Name</th>
  <th>DoB</th>
  <th>city</th>
  <th>Address</th>
  </tr>
  </thead>
  {Task.map(records => {
  return(
  <tbody key={records.id}>
    <tr>
     <td>
     <input type="text" defaultValue={id } onChange={(e)=>setId(e.target.value)}  />
     </td>
     <td>
     <input type="text" defaultValue={records.name} onChange={(e)=>setName(e.target.value)}/>
     </td>
     <td>
     <input type="date" defaultValue={records.dob} onChange={(e)=>setDob(e.target.value)}/>
     </td>
     <td>
     <input type="text" defaultValue={records.city} onChange={(e)=>setCity(e.target.value)}/>
     </td>
     <td>
     <input type="text" defaultValue={records.address} onChange={(e)=>setAddress(e.target.value)}/>
     </td>
     <td>
     <button onClick={Updated}>Update</button>
     </td>
    </tr>
  </tbody>
)   
})}
</Table>
{isShown && (
<div className='mt-5'>
<h4>Updated User</h4>
<Updated/>
</div>
)}
</Container>
</div>
);
}

export default App;
