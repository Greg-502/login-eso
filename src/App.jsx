import './App.css'
import Video from './assets/video/video.mp4'
import Logo from './assets/images/icons8-twitter.svg'
import { useEffect, useRef } from 'react';
import { Input, Button, Typography, Card } from '@material-tailwind/react';

function App() {
  const vidRef=useRef();

  useEffect(() => { vidRef.current.play(); },[]);

  return (
    <div className='2xl:container h-screen m-auto'>
      <div hidden className='fixed inset-0 w-7/12 lg:block'>
        <video className='w-full h-full object-cover' loop autoPlay muted  ref={ vidRef } src={Video} />
      </div>
      <div hidden role='hidden' className='fixed inset-0 w-6/12 ml-auto bg-white bg-opacity-100 backdrop-blur-3xl lg:block'></div>
        <div className='relative h-full ml-auto lg:w-6/12'>
          <div className='m-auto py-12 px-6 sm:p-20 xl:w-10/12 flex flex-col justify-center h-full'>
            <Card color='transparent' shadow={false}>
              <div className='space-y-4'>
                <img src={Logo} className='w-8' alt='tailus logo' />
                <Typography variant='h4' className='text-gray-900'>
                  Inicio de sesión
                </Typography>
              </div>
                <Typography color='gray' className='font-normal'>
                  Procuraduría de los Derechos Humanos
                </Typography>

              <form className='space-y-6 py-6'>
                <div>
                  {/* <input 
                    type='email' 
                    placeholder='Your Email'
                    className='w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none'
                  /> */}
                </div>

                <Input variant='outlined' label='Usuario' placeholder='Usuario' type='text' />

                <div className='flex flex-col'>
                  {/* <input 
                    type='password' 
                    placeholder='Whats the secret word?'
                    className='w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none'
                  /> */}
                  <Input variant='outlined' label='Contraseña' placeholder='Contraseña' type='password' />

                  <Typography color='gray' className='mt-4 text-center font-normal'>
                    ¿Olvidaste tu contraseña?{' '}
                    <a href='#' className='font-semibold text-gray-900 hover:text-gray-800'>
                      Restablecelo
                    </a>
                  </Typography>
                </div>

                <div className='flex items-center'>
                  <Button fullWidth color='blue'>Iniciar sesión</Button>
                </div>
              </form>
            </Card>
        </div>
      </div>
    </div>
  )
}

export default App
