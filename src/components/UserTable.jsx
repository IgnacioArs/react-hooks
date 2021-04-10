import React from 'react';

const UserTable = (props) =>{
    console.log(props.users);
    return (
    // creamos una constante la cual se le asigno un componente 
        <table>
        <thead>
          <tr>
       
            <th>Nombre de usuario</th>
            <th>Articulos</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
            {      props.users.length > 0 ? (
                    props.users.map(users =>(
                    <tr key={users.id} >
                    <td>{users.nombre}</td>
                    <td>{users.usuarios}</td>
                    <td>
                      <button className="button muted-button" onClick={ () =>props.editarFilas(users)}>Editar</button>
                      <button className="button muted-button" onClick={() => {props.EliminarUsuario(users.id)}}>Eliminar</button>
                    </td>
                  </tr>
                ))
                ) : (
                    <tr>
                      <td colSpan={3}>No hay usuario registrados</td>
                    </tr>
                  )}
       
        </tbody>
      </table>

    );
}


export default UserTable;