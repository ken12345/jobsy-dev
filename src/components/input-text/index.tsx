import type { ITextInput } from "../../interfaces/textInput.interface";

import './text-input.css'

const InputText = ({value, type, placeHolder, required, name}: ITextInput) =>{
  return(
    <>
      <div className="text-input">
        <input value={value} placeholder={placeHolder} type={type} required={required} name={name}/>
      </div>
    </>
  )
}

export default InputText;