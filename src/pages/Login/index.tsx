import { useState } from 'react';
import logo from '../../assets/LOGO_X.svg';
import { IoClose } from "react-icons/io5";

import type { LoginFormData, AuthResponse, registerFormData } from '../../types/auth'
import api from '../../services/api';

const Login: React.FC = () => {
    const [formData, setFormData] = useState<LoginFormData>({
        username_or_email: '',
        password: ''
      });
      const [registerFormData, setRegisterFormData] = useState<registerFormData>({
        username: "",
        password: "",
        email: "",
        first_name: "",
        last_name: "",
        confirm_password: ""
      });

    const handleLoginSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await api.post<AuthResponse>('login/', formData);
            localStorage.setItem('accessToken', response.data.access);
            localStorage.setItem('refreshToken', response.data.refresh);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            alert(JSON.stringify(response.data));
        } 
        catch (error) {
            alert('Credenciais inválidas');
            console.error('Login error:', error);
        }
    };

    const handleRegisterSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (registerFormData.password !== registerFormData.confirm_password) {
        alert("As senhas não coincidem!");
        return;
        }

        try {
            const response = await api.post<AuthResponse>('register/', registerFormData);
            localStorage.setItem('accessToken', response.data.access);
            localStorage.setItem('refreshToken', response.data.refresh);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            alert(JSON.stringify(response.data));
        } 
        catch (error) {
            alert('Credenciais inválidas');
            console.error('Login error:', error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterFormData({
            ...registerFormData,
            [e.target.name]: e.target.value
        });
    };

    const [showModalLogin, setShowModalLogin] = useState(false);
    const [showModalRegister, setShowModalRegister] = useState(false);

    return (
        <>
            {
                showModalLogin && (
                    <form onSubmit={handleLoginSubmit} className='fixed inset-0 z-50 overflow-y-auto h-screen flex items-center justify-center bg-gray-700/60 text-white'>
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
                                <input onChange={handleChange} value={formData.username_or_email} placeholder='E-mail ou usuário'  className='mb-11 border-[0.1px] border-white rounded-sm p-4 w-full focus:outline-none focus:border-primary_blue focus:border-2 focus:placeholder:text-primary_blue' type="text" name="username_or_email" />
                                <input onChange={handleChange} value={formData.password} placeholder='Senha'  className='mb-9 border-[0.1px] border-white rounded-sm p-4 w-full focus:outline-none focus:border-primary_blue focus:border-2 focus:placeholder:text-primary_blue' type="password" name="password" />
                                <button type='submit' className=' bg-white text-2xl text-black py-2 px-20 h-fit w-full rounded-4xl hover:bg-neutral-300 mb-16 cursor-pointer'>Avançar</button>
                                <p className='text-base mb-12'>Não tem uma conta? <span onClick={() => (setShowModalRegister(true), setShowModalLogin(false))} className='text-primary_blue cursor-pointer'>Inscreva-se</span></p>
                            </div>
                        </div>
                    </form>
                )
            }
            {
                showModalRegister && (
                    <form onSubmit={handleRegisterSubmit} className='fixed inset-0 z-50 overflow-y-auto h-screen flex items-center justify-center bg-gray-700/60 text-white'>
                        <div className='p-4 bg-black w-full max-w-[510px] relative rounded-2xl'>
                            <div className='flex items-center mb-14'>
                                <IoClose onClick={() => setShowModalRegister(false)} className='absolute top-4 left-4 cursor-pointer' size={24}/>
                                <img 
                                    src={logo} 
                                    alt="Descrição" 
                                    className="w-8 m-auto"
                                />
                            </div>
                            <div className='flex flex-col text-white font-bold px-20'>
                                <h3 className='text-2xl mb-8'>Criar sua conta</h3>
                                <div className='flex gap-2'>
                                    <input onChange={handleRegisterChange} value={registerFormData.first_name} placeholder='Primeiro nome'  className='mb-3.5 border-[0.1px] border-white rounded-sm p-4 w-full focus:outline-none focus:border-primary_blue focus:border-2 focus:placeholder:text-primary_blue' type="text" name="first_name" />  
                                    <input onChange={handleRegisterChange} value={registerFormData.last_name} placeholder='Ultimo nome'  className='mb-3.5 border-[0.1px] border-white rounded-sm p-4 w-full focus:outline-none focus:border-primary_blue focus:border-2 focus:placeholder:text-primary_blue' type="text" name="last_name" />
                                </div>
                                <input onChange={handleRegisterChange} value={registerFormData.username} placeholder='Usuário'  className='mb-3.5 border-[0.1px] border-white rounded-sm p-4 w-full focus:outline-none focus:border-primary_blue focus:border-2 focus:placeholder:text-primary_blue' type="text" name="username" />
                                <input onChange={handleRegisterChange} value={registerFormData.email} placeholder='E-mail'  className='mb-3.5 border-[0.1px] border-white rounded-sm p-4 w-full focus:outline-none focus:border-primary_blue focus:border-2 focus:placeholder:text-primary_blue' id='password' type="email" name="email" />
                                <input onChange={handleRegisterChange} value={registerFormData.password} placeholder='Senha'  className='mb-3.5 border-[0.1px] border-white rounded-sm p-4 w-full focus:outline-none focus:border-primary_blue focus:border-2 focus:placeholder:text-primary_blue'id='confirm_password' type="password" name="password" />
                                <input  onChange={handleRegisterChange} value={registerFormData.confirm_password} placeholder='Confirme a senha'  className='mb-9 border-[0.1px] border-white rounded-sm p-4 w-full focus:outline-none focus:border-primary_blue focus:border-2 focus:placeholder:text-primary_blue' type="password" name="confirm_password" />
                                <button type='submit' className=' bg-white text-2xl text-black py-2 px-20 h-fit w-full rounded-4xl hover:bg-neutral-300 mb-12 cursor-pointer'>Avançar</button>
                            </div>
                        </div>
                    </form>
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
                    <button onClick={() => setShowModalRegister(true)} className='bg-primary_blue text-2xl py-2 px-20 h-fit max-w-72 rounded-4xl hover:bg-primary_blue-dark mb-3 cursor-pointer'>Criar conta</button>
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