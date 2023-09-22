import { useState } from 'react';
import foto2 from './3.jpg'

const Login = () => {
  const [emailEntered, setEmailEntered] = useState('');
  const [passwordEntered, setPasswordEntered] = useState('');

  const email = localStorage.getItem("email");
  const password = localStorage.getItem('password');
  
  const loginSumbitHander = (e) =>{
    e.preventDefault();
    
    if (email === emailEntered  ){
      if(password === passwordEntered) {
        localStorage.setItem('isLogin', '2');
        window.location.reload();
      }
      alert('password tidak valid')
    }else {
      alert('email tidak valid')
    }
  };

  const emilInputHandler = (e) => {
    setEmailEntered(e.target.value);
  };
  const passwordInputHandler = (e) =>{
    setPasswordEntered(e.target.value);
  };


    return (
        <div className='flex min-h-screen place-items-center'>
          <div className=' w-1/2 p-8 sm:w-full min-[320px]:w-full'>
           <h1 className='font-bold text-lg text-center'>¡Welcome to your Business!</h1>
            <h1 className='pt-5 text-center font-medium w-75'>Create an account to run wild through our curated experiences.</h1>
           
            <form action='' onSubmit={loginSumbitHander} className='flex flex-col justify-center items-center gap-4'>   
           <button type='sumbit'className="rounded-shadow mt-2 py-1 px-2 w-80 border-2 flex justify-center gap-2 border-black">
           <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
           <span>Login with Google</span>
           </button>

           <h4>or</h4>

           <input className='rounded-shadow mt-2 py-1 px-2 w-80 border-2 flex justify-center gap-2 border-black' 
           onChange={emilInputHandler}
           value={emailEntered}
           id="email" 
           type="text" 
           placeholder="Email"/> 
                       
           <input className='rounded-shadow mt-2 py-1 px-2 w-80 border-2 flex justify-center gap-2 border-black' 
           onChange={passwordInputHandler}
           value={passwordEntered}
           id="password" 
           type="text" 
           placeholder="password"/>

           <button type='sumbit' className="rounded-none mt-2 py-1 px-2 w-80 border-2 flex justify-center gap-2 border-black">
           <span>Log in</span>
           </button>

           <div className='flex justify-around items-center'>
            <input className='h-15 py-2 ' type='checkbox' name='' id=''/>
            <h4>Remember me for 30 days</h4>
           </div>

           <h4 className='underline'>
            <a href=''>Forgot password?</a>
           </h4>

           <h4>
            <a href=''>You do not have account yet? <span className='font-bold'>Sign in</span></a>
           </h4>

            </form>
         </div>
        <div className='w-1/2'>
          <img className='h-screen w-full 'src={foto2} alt=''/>
        </div>
        </div>
      );
    }; 
        export default Login;