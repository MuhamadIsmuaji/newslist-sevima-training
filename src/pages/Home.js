import React, { useState, useEffect } from 'react';
import { APIFORM } from '../configs/API';
import { News } from '../components/News';

export const Home = () => {
  const[newsList, setNewsList] = useState([]);
  
  const fetchNews = async () => {
    try {
      const { data } = await APIFORM().get('news');
      setNewsList(data.data);
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    fetchNews();
  }, [])

  return (
    <div className="columns is-mobile" style={{marginTop: "10px"}}>
      <div className="column is-12">
        {
          newsList.map((val, idx) => 
            <News key={idx} news={val} canEditDelete={false}></News>
          )
        }
      </div>
    </div>
  )
}
