import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { News } from '../components/News';
import { APIFORM } from '../configs/API';

export const YourNewsList = () => {
  const [newsList, setNewsList] = useState([]);

  const fetchNews = async () => {
    try {
      const { data } = await APIFORM().get('news-by-user');
      setNewsList(data.data);
    } catch (error) {
      alert(error)
    }
  }

  const editNews = (news) => {

  }

  const deleteNews = async (news) => {
    try {
      await APIFORM().delete(`news/${news.id}`);
      fetchNews();
    } catch (error) {
      alert(error)
    }
  }

  const selectNews = (news, action) => {
    switch (action) {
      case 'edit':
        editNews({})
        break;
    
      default:
        deleteNews(news)
        break;
    }
  }

  useEffect(() => {
    fetchNews();
  }, [])
  
  return (
    <div>
      <div className="columns is-mobile">
        <div className="column is-8">This is your news</div>
        <div className="column is-4">
          <Link className="button is-primary is-small is-pulled-left" to="/yournews/form">Create News</Link>
        </div>
      </div>
      <div className="columns is-mobile">
        <div className="column is-12">
          {
            newsList.map((val, idx) => 
              <News key={idx} news={val} canEditDelete={true} onClick={(news, action) => selectNews(news, action)}></News>
            )
          }
        </div>
      </div>
    </div>
  )
}