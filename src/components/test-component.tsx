import "./test-component.css"
import type { IUser } from "../interfaces/IUser";


const TestComponent = ({id, name, age, status}: IUser) => {

  
  return (
    <>
      <div className="container">
        <div>{id}</div>
        <div>{name}</div>
         <div>{age}</div>
          <div>{status}</div>
      </div>
    </>
  )
}

export default TestComponent;