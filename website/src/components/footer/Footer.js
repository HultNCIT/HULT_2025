import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
const Footer=()=> {
  return (
    <div className='h-[300px] font-poppins'>
        <div className="bg-[#231f20] text-white h-full w-full flex flex-col lg:flex-row flex-wrap justify-between items-center tracking-wider poppins-extralight text-lg px-6 md:px-28 py-7 ">
          <div>
            <Image
              src={'/hult_image/hultprize_logo_light.png'}
              width={316}
              height={47}
              alt="hultprize"
            />
          </div>
          <div className="flex justify-between  items-start gap-16">
            <div  className='text-sm tracking-wider flex flex-col leading-[30px]'>
              <h5 className='font-semibold'>Quick Links</h5>
              <Link className='footer-link-modify' href='/'>Home</Link>
              <Link className='footer-link-modify' href={'/about'}>About</Link>
              <Link className='footer-link-modify' href={'/'}>Events</Link>
              <Link  className='footer-link-modify' href='/Contact' >Contact</Link>
            </div>
            <div className='text-sm leading-10'>
              <h5 className='font-semibold '>Contact Us</h5>
              <p className='footer-link-modify'>Balkumari, Lalitpur</p>
              <p className='footer-link-modify'>+977-9862695444</p>
              <p className='footer-link-modify'>hultprize@ncit.edu.np</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Footer;


