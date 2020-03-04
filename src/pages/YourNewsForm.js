import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { APIFORM } from '../configs/API';

export const YourNewsForm = () => {
  const history = useHistory();
  const [newsAttr, setNewsAttr] = useState({ title: '', content: '' });

  const handleSetNewsAttr = (e) => {
    setNewsAttr({
      ...newsAttr, [e.target.name]: e.target.value
    })
  }

  const saveNews = async (e) => {
    e.preventDefault();

    let body = new FormData();

    body.append('title', newsAttr.title);
    body.append('content', newsAttr.content);
    
    try {
      const response = await APIFORM.post('news', body);
      history.push('/yournews');
    } catch (error) {
      alert(error)
    }
  }
  
  return (
    <div>
      <div className="columns is-mobile">
        <div className="column is-8">Create your news here</div>
        <div className="column is-4">
          <Link className="button is-link is-small is-pulled-left" to="/yournews">Back to Your News</Link>
        </div>
      </div>
      <div className="columns is-mobile">
        <div className="column is-12">
          <form onSubmit={saveNews}>
            <div className="field">
              <label className="label">Title</label>
              <div className="control">
                <input className="input" type="text" value={newsAttr.title} name="title" onChange={handleSetNewsAttr} placeholder="Title" />
              </div>
            </div>
            <div className="field">
              <label className="label">Content</label>
              <div className="control">
                <textarea className="textarea" value={newsAttr.content} onChange={handleSetNewsAttr} name="content" placeholder="Content"></textarea>
              </div>
            </div>
            <div className="field">
              <p className="control">
                <button className="button is-success" onClick={saveNews}>Save</button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}