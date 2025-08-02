import logo from '../../assets/LOGO_X.svg';


const Login = () => {

    return (
        <>
            <div className='grid grid-cols-2 relative'>
                <div className='bg-black h-screen flex items-center justify-center'>
                    <img 
                        src={logo} 
                        alt="Descrição" 
                        className="w-64"
                    />
                </div>
                <div className='bg-black h-screen flex flex-col  justify-center text-white font-bold'>
                    <h1 className=' text-7xl mb-20'>Acontecendo agora</h1>
                    <h2 className='text-4xl mb-9'>Inscreva-se hoje</h2>
                    <button className='bg-primary_blue text-2xl py-2 px-20 h-fit max-w-72 rounded-4xl hover:bg-primary_blue-dark mb-3 cursor-pointer'>Criar conta</button>
                    <p className='text-xs max-w-72 text-neutral-700 mb-16'>
                        Ao se inscrever, você concorda com os 
                        <a href='https://x.com/tos' className='text-primary_blue'> Termos de Serviço</a> e a <a href='https://x.com/privacy' className='text-primary_blue'>Política de Privacidade</a>, incluindo o <a href='https://help.x.com/rules-and-policies/twitter-cookies' className='text-primary_blue'>Uso de Cookies</a>.
                    </p>
                    <h2 className='text-2xl mb-3.5'>Já tem uma conta?</h2>
                    <button className='bg-white text-2xl text-primary_blue py-2 px-20 h-fit max-w-72 rounded-4xl hover:bg-gray-300 mb-3 border-4 border-primary_blue cursor-pointer'>Entrar</button>
                    <p className='text-xs max-w-72 text-neutral-700 mb-16'></p>
                </div>
            </div>
        </>
    )
  }

export default Login