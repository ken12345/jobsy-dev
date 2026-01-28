import type { ITextInput } from "../../interfaces/textInput.interface";

import './text-input.css'

const InputText = ({value, type, placeHolder, required, name, width}: ITextInput) =>{
  return(
    <>
      <div className="text-input" style={{width}}>
        <input value={value} placeholder={placeHolder} type={type} required={required} name={name}/>
      </div>
    </>
  )
}

export default InputText;