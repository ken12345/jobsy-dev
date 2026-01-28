import { useState } from "react";
import type { IUser } from "../../interfaces/IUser";
import "./user.css";

const User = () => {

  const [users, setUsers] = useState<IUser[]>([]);
  
  const addUserHandler = () => {
    setUsers([...users, {name: "ken", age: 22, status: "married"}])
  }
   return (
    <>
    <br />
    <div className="main">
      <div>User page</div>
      <br />
      <div className="user-container">
        {users.map((el: IUser, index: number) => 
            <div><span>{index +1}. </span><span>name: {el.name} </span><span>age: {el.age} </span><span>status: {el.status} </span></div>
        )}
      </div>
      <br />
      <div>
         <button onClick={addUserHandler}>Add User</button>
      </div>
    </div>
    </>
  )
}

export default User;