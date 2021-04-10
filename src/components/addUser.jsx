import React from 'react';
import { useForm } from 'react-hook-form'


//creamos la funcion la cual agregaremos los datos
const AddUserform = (props) =>{
    //no olvidar que el props es quien maneja recibe los datos

    //agregamos las demas funciones para poder realizar el agregar 
const {register, errors, handleSubmit} = useForm();
 //esta constante se encargara de enviar los datos y mostrarlos por consola
    const onSubmit = (data,e) => {
        console.log(data)
        //para limpiar los campos se usa lo siguiente
        e.target.reset();

        //lo siguiente ya es enviar los datos al formulario para que se valla añadiendo los datos
        props.AgregarUsers(data);
        //props se encarga de guardar los archivos que se encuentran dentro  de su funcion y se los pasara a la funcion
        //siguiente de esta forma  --->  props.AgregarUsers(data);
    }


return(
    <form onSubmit={handleSubmit(onSubmit)}>
    <label>Nombre</label>
    <input type="text" name="nombre" ref={
        register({
          required:{value:true,message:'Campo nombre esta vacio'}  
        })
    }/> 
    <div>
    {errors?.nombre?.message}
    </div>
    <label>Nombre de usuario</label>
    <input type="text" name="usuarios"  ref={
        register({
          required:{value:true,message:'Campo usuario esta vacio'}  
        })
    }/>
    <div>
    {errors?.usuarios?.message}
    </div>
    <button>Agregar nuevo Usuario</button>
  </form>
);

}

export default AddUserform;