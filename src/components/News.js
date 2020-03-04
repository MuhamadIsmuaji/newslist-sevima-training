import React from 'react';
import moment from 'moment';

export const News = (props) => {
  const username = props.news.user != null ? props.news.user.username : '';

  return (
    <div className="notification">
      <div className="columns">
        <div className="column is-12">
          <strong><u>{props.news.title}</u></strong> <span>({(!props.canEditDelete ? `By ${username}` : ``) + ` ${moment(props.news.created_at).fromNow()}`})</span>
        </div>
      </div>
      <div className="columns">
        <div className="column is-12">
          <p>{props.news.content}</p>
        </div>
      </div>
      {
        props.canEditDelete ? (
          <div className="columns">
            <div className="column is-12">
              <div className="field is-grouped is-grouped-centered">
                {/* <p className="control">
                  <button className="button is-info is-small" onClick={() => props.onClick(props.news, 'detail')}>Detail</button>
                </p> */}
                <p className="control">
                  <button className="button is-danger is-small" onClick={() => props.onClick(props.news, 'delete')}>Delete</button>
                </p>
              </div>
            </div>
          </div>
        ) : (``)
      }
    </div>
  )
}