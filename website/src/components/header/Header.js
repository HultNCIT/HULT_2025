import Link from 'next/link'
import Button from '../common/Button'
import Image from 'next/image'
function Header() {
  const colorStyle={
    color:'black'
  }
  return (
    <nav className='fixed z-100 right-0 left-0 top-0 flex bg-white justify-between px-8 tb:px-16  py-4 items-center  shadow-sm'>
        <div className='hidden md:flex poppins-medium  h-full text-[20px] justify-around items-center  px-3'>
                <Link className='block w-full transition-all duration-400  hover:text-accent px-3' href="/">Home</Link>
                <Link className='block w-full transition-all duration-400 hover:text-accent px-3' href="/about">About</Link>
                
              <Link className='block w-full transition-all duration-400 hover:text-accent px-3' href="/Contact">Contacts</Link>
        </div> 
        <Link href='#' className='poppins-medium text-[30px]'>
          <Image
              src={'/hult_image/hultprize_logo_dark.png'}
              width={200}
              height={5}
              style={colorStyle}
              alt='hult'
              className='w-[150px] sm:w-[170px]  md:w-[200px]'
          />
        </Link>
        <div className='flex md:w-[250px] justify-between items-center' >
          <a className='hidden md:block text-[20px] transition-all duration-400 hover:text-accent ' href="#">Events</a>
            <Button/>
            <Image
              src={"/icons/hamburger.png"}
              width={30}
              height={30}
              alt='hamburger'
              className='md:hidden block ml-2'
            />

        </div>
    </nav>
  )
}

export default Header