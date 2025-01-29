import React from 'react'

const Sponsor = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-14 '>
        {
            sponsor.map((value,index)=>(
                <a key={index} href={value.link} target='blank' className='flex flex-col opacity-50 justify-center items-center hover:opacity-100 tranform duration-400'>
                    <img src={value.img} alt={value.name} className={`${index == 0 || index == 5 || index == 6 || index == 7? 'w-32':'w-32 md:w-48'} ${index == 8? 'rounded-full w-32':'rounded-none'}`}/>
                    {/* <h6 className='text-center'>{value.name}</h6> */}
                    
                </a>    
            ))
        }
    </div>
  )
}

export default Sponsor

const sponsor=[
    {
        img:'sponsors/cakewave.png',
        name:'Cake Wave',
        link:'#'
    },
    {
        img:'sponsors/expertvisa.png',
        name:'Expert Education',
        link:'https://experteducation.com/nepal/'
    },
    {
        img:'sponsors/gurkha.png',
        name:'Gurkha Stack',
        link:'https://www.instagram.com/gurkhastack?igsh=cGI0eng3czR1Mmg5'
    },
    {
        img:'sponsors/flower.png',
        name:'8848 flower',
        link:'https://www.instagram.com/flowers_8848?igsh=MXh1eDN0eDdmaHNpdA=='
    },
    {
        img:'sponsors/healthy.png',
        name:'Healthy care',
        link:'https://healthychoicenepal.com/'
    },
    {
        img:'sponsors/Mero_hosting.png',
        name:'Mero Hosting',
        link:'https://merohosting.com/'
    },
    {
        img:'sponsors/Programiz.png',
        name:'Programiz',
        link:'https://www.programiz.com/'
    },
    {
        img:'sponsors/skate.png',
        name:'Skate',
        link:'#'
    },
    {
        img:'sponsors/wrapmandu.jpg',
        name:'Wrapmandu',
        link:'https://www.instagram.com/wrapmandu/'
    },
]