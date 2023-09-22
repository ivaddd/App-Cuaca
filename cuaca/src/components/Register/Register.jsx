import { useState } from 'react';
import foto from './1.jpg' 



const Register = (event) => {
//kiri setter
//kanan getter  
const [cekPassword,setCekpassword] = useState(false);//cara validasi memakai useState

const sumbitHander=(e)=>{
    e.preventDefault();
    console.log(e);
    console.log(e.target.nama.value);
    console.log(e.target.email.value);
    console.log(e.target.phone.value);
    console.log(e.target.password.value);
    
    if(e.target.nama.value.trim().length >= 3){
      setCekpassword(false);
    } else{
      alert('Nama Tidak Valid ')
    }
    
    if(e.target.email.value.includes('@')){
      setCekpassword(false);
    }else {
      alert('Email Tidak Valid')
    }

    if(e.target.phone.value.trim().length >= 6){
      setCekpassword(false);
    }else{
      alert('Nomor tidak Valid')
    }
    
    if(e.target.password.value.trim().length >= 7){
      setCekpassword(false);
      localStorage.setItem('nama',e.target.nama.value);
      localStorage.setItem('email',e.target.email.value);
      localStorage.setItem('phone',e.target.phone.value);//masukan ke localStorage
      localStorage.setItem('password',e.target.password.value);
      localStorage.setItem('isLogin','1');
      window.location.reload();
    }else{
      setCekpassword(true);
      alert('Password Tidak Valid')
    } //cara validasi memakai warna memanggil setter di useState
    
    
    // if(e.target.email.value.includes('@')){
      //   alert('valid');
      // }else {
        //   alert('notValid') //cara validasi memakai notif(alert)
        // };
      };
     

    return (
      <div className='flex min-h-screen place-items-center'>
        <div className=' w-1/2 p-8 sm:w-full min-[320px]:w-full'>
         <h1 className='font-bold text-center text-lg font-medium'>¡Welcome to your Business!</h1>
          <h1 className='pt-5 text-center font-medium w-75'>Create an account to run wild through our curated experiences.</h1>
          <form onSubmit={sumbitHander}  //dari type'submit' memanggil sumbitHandler
          className='flex flex-col justify-center items-center gap-4'>   
         <button type='submit' //button onSumbit
         className="rounded-none mt-2 py-1 px-2 w-80 border-2 flex justify-center gap-2 border-black">
         <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" 
         loading="lazy" 
         alt="google logo"/>
         <span>Login with Google</span>
         </button>
         <h4>or</h4>
         <input className={`rounded-none mt-2 py-1 px-2 w-80 border-2 flex justify-center gap-2 ${
          !cekPassword?'border-black':'border-red-300'
        }`}
         id="nama" 
         type="text" 
         name="nama" 
         placeholder="nama"/>
         <input className={`rounded-none mt-2 py-1 px-2 w-80 border-2 flex justify-center gap-2 ${
          !cekPassword?'border-black':'border-red-300'
        }`}
         id="email" type="text" 
         name="email"
         placeholder="Email"/>             
         <input className={`rounded-none mt-2 py-1 px-2 w-80 border-2 flex justify-center gap-2 ${
          !cekPassword?'border-black':'border-red-300'
        }`}
          id="phone" 
          type="number" 
          name='phone'
          placeholder="phone"/>
         <input className={`rounded-none mt-2 py-1 px-2 w-80 border-2 flex justify-center gap-2 ${
          !cekPassword?'border-black':'border-red-300'
        }`} //validasi warna memanggil setter di useState
         id="password" 
         type="text"
         name='password'

         placeholder="password"/>
         <button
          className="rounded-none mt-2 py-1 px-2 w-80 border-2 flex justify-center gap-2 border-black">
         <span>Create Account</span>
         </button>
         <div className='flex justify-around items-center'>
          <input className='h-10 py-2' 
          type='checkbox' //box kecil
          name='' id=''/>
          <h4>Remember me for 30 days</h4>
         </div>
         <h4 className='underline'> 
          <a href=''>Forgot password</a> 
         </h4> 
         <h4>
          <a href=''>Your are ready have account ? <span className='font-bold'>Log in</span></a>
         </h4>
          </form>
       </div>
      <div className='w-1/2'>
        <img className='h-screen w-full object-cover'src={foto} alt=''/>
      </div>
      </div>
    );
  }; 
  

  export default Register;