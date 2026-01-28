import type { ITextInput } from "../../interfaces/textInput.interface";

import './text-input.css'

const InputText = ({value, type, placeHolder, required, name, width, label}: ITextInput) =>{
  return(
    <>
      <div className="text-input" style={{width}}>
        {label ? <div className="label">{label}</div> : <></>}
        <input value={value} placeholder={placeHolder} type={type} required={required} name={name}/>
      </div>
    </>
  )
}

export default InputText;