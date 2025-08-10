
import Notification from './Notification';

const NotificationPage = () => {
    const notificaation = [
        {
            user: '/src/assets/LOGO_X.svg',
            content: 'Sua conta E-mail foi acessada de um novo dispositivo em 29 de jul. de 2025. Revise esse acesso.',
            time: '30 de jul'
        },
        {
            user: 'https://media.licdn.com/dms/image/v2/D4E03AQH6CzfgKuAXXw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1699646804140?e=1757548800&v=beta&t=Vm1k6H39yAIon7sVUdBNLZ7OaXaKkTuZu08-aB7-17o',
            content: 'Bruno Silva acabou de seguir você.',
            time: '30 de jul'
        },
    ]

    return (
        <>
            <div className="w-full h-full min-h-screen border-x-1 border-neutral-700 text-white font-bold relative">
                <div className="w-full py-5 bg-black/70 text-center place-items-center border-b-1 border-neutral-700  sticky top-0 left-0">
                    <h2>Notificações</h2>
                </div>
                
                {notificaation.map((singleNotification, index) => (
                    <Notification
                        key={index}
                        img={singleNotification.user}
                        content={singleNotification.content}
                        time={singleNotification.time}
                    />
                ))}
            </div>
        </>
    )
  }

  export default NotificationPage