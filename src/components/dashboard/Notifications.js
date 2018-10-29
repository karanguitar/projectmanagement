import React from 'react';
import moment from 'moment'

const Notifications = ({notifications}) => {
    console.log(notifications)
    return (
        <div>
            <div className="section">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">
                            Notifications
                        </span>
                        <ul>
                            {notifications && notifications.map((notification) => (
                                <li key={notification.id}> 
                                    <span className="pink-text">{notification.user} </span> 
                                    <span>{notification.content}</span>
                                    <div className="grey-text note-date">
                                        {moment(notification.time.toDate()).fromNow()}
                                    </div>

                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notifications;
