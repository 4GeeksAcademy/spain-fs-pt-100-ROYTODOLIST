import React, { useState,useEffect } from "react";



//create your first component
const Listado = () => {
	
const [data,setData] = useState([]);
const [tarea,setTarea] = useState('');

const handleSubmit = e =>{
    e.preventDefault();
    setData([...data,{tarea}]);
    setTarea('');
}
const handleChangeTarea = (e)=>{
	setTarea(e.target.value)
	
}
    
    return (

 
 <div className="row d-flex flex-column m-5 align-items-center">
    <div className="col-lg-8 " >
 <form onSubmit={handleSubmit}>       
<input  value={tarea} onChange={handleChangeTarea} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Whats needs to be done?" />
<div className="col-auto">
    <button type="submit"  hidden className="btn btn-primary mb-3"></button>
  </div>
<ul className="list-group">
  {data.map((el,i)=><li class="list-group-item" key={i}>{el.tarea}</li> )}

</ul>
</form>
</div>
</div>
	);
};

export default Listado;


