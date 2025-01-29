
import React from 'react'

const Community = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-14'>
        {
            community.map((value,index)=>(
                <a key={index} href={value.link} target='blank' className='flex flex-col opacity-50 justify-center items-center hover:opacity-100 tranform duration-400'>
                    <img src={value.img} alt={value.name} className={`${index ==8? 'rounded-full w-[140px]':'rounded-none w-[140px]' }`}/>
                    {/* <h6 className='text-center'>{value.name}</h6> */}
                    
                </a>    
            ))
        }
    </div>
  )
}

export default Community

const community=[
    {
        img:'community/ncit.png',
        name:'Ncit',
        link:'https://ncit.edu.np/'
    },
    {
        img:'community/gyankhabar.png',
        name:'Gyan Khabar',
        link:'https://www.gyankhabar.com/'
    },
    {
        img:'community/ict.png',
        name:'ICT Frame',
        link:'https://ictframe.com/'
    },
    {
        img:'community/ieee.png',
        name:'IEEE Ncit',
        link:'https://www.ieee.org/'
    },
    {
        img:'community/leo.png',
        name:'Leo',
        link:'https://www.instagram.com/lck_bhrikuti?igsh=MXRseDBvYm82cjJlYQ=='
    },
    {
        img:'community/nosk.png',
        name:'NOSK',
        link:'https://nosk.org.np/'
    },
    {
        img:'community/tedx.png',
        name:'Tedx Ncit',
        link:'https://tedx.ncit.edu.np/'
    },
    {
        img:'community/bejar.png',
        name:'Bajar',
        link:'https://www.instagram.com/eng.bajarkochirfar?igsh=MWl3cGt6MHl3c245cQ=='
    },
    {
        img:'community/edusanjal.jpg',
        name:'edusanjal',
        link:'https://edusanjal.com/'
    },
    {
        img:'community/NTC_logo.png',
        name:'NTC',
        link:'https://tekcommunity.ncit.edu.np/'
    },
]