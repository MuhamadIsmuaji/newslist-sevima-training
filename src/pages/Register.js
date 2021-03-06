import React, { useState, useContext } from 'react';
import { APIJSON } from '../configs/API';
import { AppContext } from '../configs/Auth';

export const Register = () => {
  const [userAttr, setUserAttr] = useState({ username: '', password: '' });
  const {dispatchAuth} = useContext(AppContext);

  const handleSetUserAttr = (e) => {
    setUserAttr({ 
      ...userAttr, [e.target.name]: e.target.value
    })
  }

  const register = async (e) => {
    e.preventDefault()
    try {
      const { data } = await APIJSON.post('register', userAttr);

      if (data.error) {
        alert(`Erorr: ${data.message}`);
      } else {
        dispatchAuth({ type: 'NEW_AUTH', payload: { ...data.data, token: data.meta.token } });
      }

    } catch (error) {
      alert(error)
    }
  }

  return (
    <div>
      <div className="columns">
        <div className="column is-12"><strong><u>Register Here</u></strong></div>
      </div>
      <div className="columns">
        <div className="column is-12">
          <form onSubmit={register}>
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input className="input" type="text" value={userAttr.username} name="username" onChange={handleSetUserAttr} placeholder="Username" />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input className="input" type="password" value={userAttr.password} name="password" onChange={handleSetUserAttr} placeholder="Password" />
              </div>
            </div>
            <div className="field">
              <p className="control">
                <button className="button is-success" onClick={register}>Register</button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
