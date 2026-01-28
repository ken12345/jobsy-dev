import { useState } from "react";
import TestComponent from "../../components/test-component";
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
          <TestComponent key={index} id={index + 1} name={el?.name} age={el?.age} status={el?.status}></TestComponent>
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