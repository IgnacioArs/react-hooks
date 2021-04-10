import React from 'react';
import { useForm } from 'react-hook-form'



const EditarUsuarios = (props) =>{
    console.log(props.currentUser);

//agregamos llaves y agregamos un propiedad     defaultValues
const {register, errors, handleSubmit,setValue} = useForm({
    defaultValues: props.currentUser
});

setValue('nombre',props.currentUser.nombre);
setValue('usuarios',props.currentUser.usuarios);




 //esta constante se encargara de enviar los datos y mostrarlos por consola
    const onSubmit = (data,e) => {
        console.log(data)
        //para limpiar los campos se usa lo siguiente
        e.target.reset();
          data.id = props.currentUser.id;
        //******************** */
        //agregamos el actualizar
        props.ActualizarUsuario(props.currentUser.id,data);

    }


return(
    <form onSubmit={handleSubmit(onSubmit)}>
    <label>Editar nombre</label>
    <input type="text" name="nombre" ref={
        register({
          required:{value:true,message:'Campo nombre esta vacio'}  
        })
    }/> 
    <div>
    {errors?.nombre?.message}
    </div>
    <label>Editar Usuario</label>
    <input type="text" name="usuarios"  ref={
        register({
          required:{value:true,message:'Campo usuario esta vacio'}  
        })
    }/>
    <div>
    {errors?.usuarios?.message}
    </div>
    <button>Editar Usuario</button>
  </form>
);

}

export default EditarUsuarios;