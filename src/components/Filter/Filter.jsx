import React from './filter.css'

const Filter = () => {
  return (
    <form className='filter'>
        <div className="inputHolder">
            <label for="org">Organization</label>
            <select name="org" id="org">
                <option value=" " placeholder='Select'></option>
                <option value=" " placeholder='Select'>Company1</option>
                <option value=" " placeholder='Select'>Company2</option>
            </select>
        </div>

        <div className="inputHolder">
            <label for="username">Username</label>
            <input type="text" id='username' />
        </div>

        <div className="inputHolder">
            <label for="email">Email</label>
            <input type="text" id='username' />
        </div>

        <div className="inputHolder">
            <label for="username">Date</label>
            <input type="text" id='username' />
        </div>

        <div className="inputHolder">
            <label for="username">Phone Number</label>
            <input type="text" id='username' />
        </div>

        <div className="inputHolder">
            <label for="username">Status</label>
            <input type="text" id='username' />
        </div>
    </form>
  )
}

export default Filter