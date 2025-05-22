import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label className={'label gap-2 mt-4 cursor-pointer'}>
                <span className='label-text text-slate-900'>Male</span>
                <input type="checkbox" className='checkbox-primary size-4 border-slate-900' />
            </label>
        </div>

        <div className='form-control'>
            <label className={'label gap-2 ml-2 mt-4 cursor-pointer'}>
                <span className='label-text text-slate-900'>Female</span>
                <input type="checkbox" className='checkbox-primary size-4 border-slate-900' />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox