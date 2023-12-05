import React from 'react'

const FormSearch = () => {
    return (
        <React.Fragment>
            <form className="forms d-flex justify-content-between mb-4">
                <input type="text" name="q" placeholder='Enter Search Here!' className='form-control w-25' />
                <select name='actions' className='form-control w-25'>
                    <option value={''}>Default sorting</option>
                    <option value={'cheap'}>Price Cheap</option>
                    <option value={'expensive'}>Price Expensive</option>
                </select>
            </form>
        </React.Fragment>
    )
}

export default React.memo(FormSearch)
