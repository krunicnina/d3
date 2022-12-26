import React from 'react'
import {AiOutlineInstagram, AiOutlineYoutube,AiOutlineFacebook} from 'react-icons/ai'
const Footer = () => {
  return (   <footer className='w-5/5 m-auto p-10 bg-gray-200 '> 
      {/* //  <footer className='w-5/5 m-auto p-10 bg-gray-200 '> */}
      {/* //  <footer class="w-full m-auto p-10 bg-gray-200'm-auto p-10  
      //       fixed left-0 bottom-0
      //       flex justify-center items-center
          
      //       ">  */}
      {/* <footer class="relative py-20 flex flex-col items-center bg-cyan-900 overflow-hidden md:py-40"> */}
    {/* // <footer className='bg-gray-200'> */}
      <div className='md:flex grid grid-cols-2 gap justify-between items-start my-10'>
        <div className='space-y-5 py-5 border-b'>
          <h1 className='text-3xl font-bold'>Pratite nas na mrežama!</h1>
          <div className='flex space-x-5'>
            <AiOutlineInstagram size={"1.5rem"}/>
            <AiOutlineFacebook size={"1.5rem"}/>
            <AiOutlineYoutube size={"1.5rem"}/>
          </div>
        </div>
        <div className='flex flex-col space-y-3'>
          <h1>Informacije</h1>
           <a className='text-sm text-gray-400' >O nama</a>
           <a className='text-sm text-gray-400' >Najpopularniji recepti</a>
           <a className='text-sm text-gray-400' >Servisi</a>
           <a className='text-sm text-gray-400' >Blog</a>
        </div>
        <div className='flex flex-col space-y-3'>
        <h1>Pravila zaštite privatnosti</h1>
           <a className='text-sm text-gray-400' >Opšte informacije</a>
           <a className='text-sm text-gray-400' >Način i svrhe obrade ličnih podataka</a>
           <a className='text-sm text-gray-400' >Kolačići</a>
           <a className='text-sm text-gray-400' >Zaštita ličnih podataka</a>
        </div>
        <div className='flex flex-col space-y-3'>
        <h1>Kontakt</h1>
          <a className='text-sm text-gray-400' > Podravka d.d.</a>
          <a className='text-sm text-gray-400' >Ante Starčevića 32</a>
          <a className='text-sm text-gray-400' >48 000 Koprivnica</a>
          <a className='text-sm text-gray-400' >+385 48 651 144</a>
        </div>
      </div>
      <div className='border-t py-2'>
        <p> &copy;2022 <span className='font-bold'>Elab</span> All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer