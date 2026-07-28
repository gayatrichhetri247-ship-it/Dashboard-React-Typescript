import React from 'react'

interface TextAreaProps{
    label?:string,
    rows:number,
    placeholder?:string
}
const TextArea = ({
    label="",
    placeholder=""
}) => {
  return (
    <>
    <label>{label}</label>
    <textarea rows={5} cols={20} placeholder={placeholder} className='p-4 border border-gray-600 rounded-2xl' ></textarea>
    </>
  )
}

export default TextArea