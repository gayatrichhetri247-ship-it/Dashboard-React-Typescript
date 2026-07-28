import React from 'react'
import Input from './Input'
import TextArea from './TextArea'
import Button from './Button'
const PersonalInformation = () => {
  return (
    <div className=' h-screen flex justify-center items-center'>
        <div className='w-full border bg-slate-900 text-white p-6 flex flex-col gap-4 rounded-2xl'>
            <h1 className='text-xl font-bold'>Personal Information</h1>
            <div className='flex justify-between gap-4'>
                <Input label='First Name' placeholder='Jamie' type='text '/>
                <Input label='Last Name' placeholder='Anderson' type='text'/>
            </div>
            <div className='flex justify-between gap-4'>
                <Input label='Email' placeholder='Jamie@dreamserp.com' type='text'/>
                <Input label='Phone' placeholder='+1 202 555 0173' type='text'/>
            </div>
            <TextArea label='Bio' placeholder='Senior Administrator at Dreams ERP managing engineering operations...'/>
            <div className='flex justify-end gap-4'>
              <Button type='button' title='Cancel' width='w-fit' bgColor='bg-none' borderColor='border border-gray-500' />
              <Button type='button' title='Save Changes' width='w-fit' bgColor='bg-slate-500'  />
            </div>

        </div>

    </div>
  )
}

export default PersonalInformation