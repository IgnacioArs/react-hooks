import reactDom from "react-dom";
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

//importamos la clase jsx donde se encuentra el formulario
import UserTable from './components/UserTable';
//importar componente del formulario la cual nos ayudara agregar usuarios
import AddUserform from './components/addUser'
//importarmos el editar form
import EditUserForm from './components/EditUserForm';


function App() {
  //creamos una constante que tendra la estructura para los datos del usuario
  const usersData = [
    { id: uuidv4(), nombre: 'Tania', usuarios: 'floppydiskette' },
    { id: uuidv4(), nombre: 'Craig', usuarios: 'siliconeidolon' },
    { id: uuidv4(), nombre: 'Ben', usuarios: 'benisphere' },
  ]

  //ahora creamos un stado (state)
const [users, setUsers] = useState(usersData);

//*******************************************************************/
//*****************************************************************/
//lo siguiente a realizar es agregar un usuario con una funcion
const AgregarUsers = (user) =>{
  //le agregamos su propio id con uuid que ya tenemos importado
  user.id =uuidv4()
  //aqui le decimos que user obtendra de users
setUsers([
  ...users,
  user])
}

//************************************************************** */
//****************************************************************** */
//lo siguiente es crear un metodo que es eliminar usuario
//basicamente esta funcion esta recibiendo una id de los usuarios
const EliminarUsuario = (id) =>{
   console.log(id);
   //si usuario id es distinto al que estamos enviando
   //si es distinto lo va a excluir
   const arrayUsuarioFiltrados = users.filter((user) => user.id !== id);
   setUsers(arrayUsuarioFiltrados);
}


//**********************************************************************/
//***********************************************************************/
//lo siguiente nos muestra la forma
const [editing, setEditing] = useState(false)

const [currentUser, setCurrentUser] = useState({
  id:null, nombre: '',usuarios:''
})
  
//y ahora editamos las filas

const editarFilas = (user) =>{
  setEditing(true);
  setCurrentUser({
    id:user.id, nombre: user.nombre, usuarios: user.usuarios 
  })
}


//para finalizar editamos los datos obtenidos
const ActualizarUsuario =(id,updateUser)=>{
  setEditing(true);
  //ahora realizamos un mapeo por cada uno de los usuarios
  setUsers(users.map(user => (user.id === id? updateUser:user)))
  

}





  return (
    <div className="container">
    <h1>CRUD App Con hooks</h1>
    <div className="flex-row">
      <div className="flex-large">
        
      {
        editing ? (
        <div>
        <h2>Editar Usuario</h2>
        <EditUserForm  currentUser={currentUser}  ActualizarUsuario={ActualizarUsuario}/>
        </div>
        ):(
          <div>
          <h2>Agregar Usuarios</h2>
          {/* agregamos el formularios y le agregamos su respectivo props */}
          <AddUserform AgregarUsers={AgregarUsers}/>
          </div>
        )
      }
      </div>
      <div className="flex-large">
        <h2>Mostrar Usuarios</h2>
        <UserTable users={users}  EliminarUsuario={EliminarUsuario}  editarFilas={editarFilas}/>
      </div>
    </div>
  </div>
  );
}

export default App;
