import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { APIFORM } from '../configs/API';
import { AppContext } from '../configs/Auth';

export const YourNewsForm = () => {
  const history = useHistory();
  const [newsAttr, setNewsAttr] = useState({ title: '', content: '' });
  const {authData} = useContext(AppContext);
  const { id } = useParams();

  const handleSetNewsAttr = (e) => {
    setNewsAttr({
      ...newsAttr, [e.target.name]: e.target.value
    })
  }

  const saveNews = async (e) => {
    e.preventDefault();

    let body = new FormData();
    const saveNewsUrl = id ? `news/${id}` : `news`;

    body.append('title', newsAttr.title);
    body.append('content', newsAttr.content);
    
    try {
      await APIFORM().post(saveNewsUrl, body);
      history.push('/yournews');
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    if (authData.news) {
      setNewsAttr({ title: authData.news.title, content: authData.news.content });
    }
  }, [])
  
  return (
    <div>
      <div className="columns is-mobile">
        <div className="column is-8">{id ? `Edit` : `Create`} your news here</div>
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