
import { useEffect, useState } from 'react';
import Notification from './Notification';
import type { Notification as NotificationType, NotificationResponse } from '../types/auth';
import api from '../services/api';
import { timeAgo } from '../utils/timeAgo';

const NotificationPage = () => {
    const [notifications, setNotifications] = useState<NotificationType[]>();

    useEffect(() => {
        const fetchNotifications = async () => {
          try {
            const response = await api.get<NotificationResponse>('notifications/');
            console.log('response.data:', response.data);
            setNotifications(response.data.results);
          } catch (err) {
            console.error(err);
          }
        };
        fetchNotifications()
    }, []);
    return (
        <>
            <div className="w-full h-full min-h-screen border-x-1 border-neutral-700 text-white font-bold relative">
                <div className="w-full py-5 bg-black/70 text-center place-items-center border-b-1 border-neutral-700  sticky top-0 left-0">
                    <h2>Notificações</h2>
                </div>
                
                {notifications && notifications.map((singleNotification, index) => (
                    <Notification
                        key={index}
                        img={singleNotification.actor.profile_picture}
                        content={singleNotification.notification_type}
                        time={timeAgo(singleNotification.created_at)}
                        user={singleNotification.actor.username}
                    />
                ))}
            </div>
        </>
    )
  }

  export default NotificationPage