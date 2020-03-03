import React, { useState } from 'react';
import { APIJSON } from '../configs/API';
import { useHistory } from 'react-router-dom';
import { STORAGEKEY } from '../configs/KEY';

export const Register = () => {
  const history = useHistory();
  const [userAttr, setUserAttr] = useState({ username: '', password: '' });

  const handleSetUserAttr = (e) => {
    setUserAttr({ 
      ...userAttr, [e.target.name]: e.target.value 
    })
  }

  const newRegister = async (e) => {
    e.preventDefault()
    try {
      const { data } = await APIJSON.post('register', userAttr);

      if (data.error) {
        alert(`Erorr: ${data.message}`);
      } else {
        localStorage.setItem(STORAGEKEY, JSON.stringify({ ...data.data, token: data.meta.token }));
        history.push('/');
      }

    } catch (error) {
      alert(error)
    }
  }

  return (
    <form onSubmit={newRegister}>
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
          <button className="button is-success" onClick={newRegister}>Register</button>
        </p>
      </div>
    </form>
  )
}
