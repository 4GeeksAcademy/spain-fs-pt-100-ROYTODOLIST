import React, { useState,useEffect } from "react";



//create your first component
const Listado = (props) => {
	
const [data,setData] = useState([]);
const [tarea,setTarea] = useState('');

const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
    
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

const handleSubmit = e =>{
    e.preventDefault();//para que la pagina no se recargue
    setData([...data,{tarea}]);
    setTarea('');
}
const handleChangeTarea = (e)=>{
	setTarea(e.target.value)

 
}

const handleElim =(index) =>{
console.log(index)
let aux = data.filter((el,i)=> i!=index)
setData(aux)
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
  {/* llaves en un return significa que voy a ejecutar javascript */}
  
  {data.map((el,i)=><div className="row">
    <div className="col-sm-12 " >
      <li  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="list-group-item d-flex justify-content-between" key={i}>{el.tarea}<div   onClick={()=>handleElim(i)} >
    {isHovering && (
        <div className="barra__escritura"></div> 
        )}</div></li> </div></div>)}
  
</ul>
</form>
</div>
</div>
	);
};

export default Listado;


