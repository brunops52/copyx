import logo from '../assets/LOGO_X.svg';

const NotificationPage = () => {

    return (
        <>
            <div className="w-full h-full min-h-screen border-x-1 border-neutral-700 text-white font-bold relative">
                <div className="w-full py-5 bg-black/70 text-center place-items-center border-b-1 border-neutral-700  sticky top-0 left-0">
                    <h2>Notificações</h2>
                </div>
                <div className="flex w-full p-5 gap-4 bg-black/70  justify-between border-b-1 border-neutral-700">
                    <img 
                        src={logo} 
                        alt="X Logo" 
                        className="w-8"
                    />
                    <h2>Sua conta E-mail foi acessada de um novo dispositivo em 29 de jul. de 2025. Revise esse acesso.</h2>
                    <span className='min-w-fit'>30 de jul</span>
                </div>
                <div className="flex w-full p-5 gap-4 bg-black/70  justify-between border-b-1 border-neutral-700">
                    <img 
                        src={logo} 
                        alt="X Logo" 
                        className="w-8"
                    />
                    <h2>Sua conta E-mail foi acessada de um novo dispositivo em 29 de jul. de 2025. Revise esse acesso.</h2>
                    <span className='min-w-fit'>30 de jul</span>
                </div>
            </div>
        </>
    )
  }

  export default NotificationPage