import { useState } from 'react';
import logo from '../../assets/LOGO_X.svg';

import { IoClose } from "react-icons/io5";

const Login = () => {
    const [showModalLogin, setShowModalLogin] = useState(false);

    return (
        <>
            {
                showModalLogin && (
                    <div className='fixed inset-0 z-50 overflow-y-auto h-screen flex items-center justify-center bg-gray-700/60 text-white'>
                        <div className='p-4 bg-black w-full max-w-[486px] relative rounded-2xl'>
                            <div className='flex items-center mb-14'>
                                <IoClose onClick={() => setShowModalLogin(false)} className='absolute top-4 left-4 cursor-pointer' size={24}/>
                                <img 
                                    src={logo} 
                                    alt="Descrição" 
                                    className="w-8 m-auto"
                                />
                            </div>
                            <div className='flex flex-col text-white font-bold px-20'>
                                <h3 className='text-2xl mb-8'>Entrar no X</h3>
                                <input placeholder='E-mail'  className='mb-11 border-[0.1px] border-white rounded-sm p-4 w-full focus:outline-none focus:border-primary_blue focus:border-2 focus:placeholder:text-primary_blue' type="email" name="email" />
                                <input placeholder='Password'  className='mb-9 border-[0.1px] border-white rounded-sm p-4 w-full focus:outline-none focus:border-primary_blue focus:border-2 focus:placeholder:text-primary_blue' type="password" name="password" />
                                <button className=' bg-white text-2xl text-black py-2 px-20 h-fit w-full rounded-4xl hover:bg-neutral-300 mb-16 cursor-pointer'>Avançar</button>
                                <p className='text-xs mb-12'>Não tem uma conta? <span className='text-primary_blue cursor-pointer'>Inscreva-se</span></p>
                            </div>
                        </div>
                    </div>
                )
            }
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
                    <button onClick={() => setShowModalLogin(true)} className='bg-white text-2xl text-primary_blue py-2 px-20 h-fit max-w-72 rounded-4xl hover:bg-gray-300 mb-3 border-4 border-primary_blue cursor-pointer'>Entrar</button>
                    <p className='text-xs max-w-72 text-neutral-700 mb-16'></p>
                </div>
            </div>
        </>
    )
  }

export default Login