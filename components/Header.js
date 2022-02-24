import React from 'react'
import Image from 'next/image'
import HeaderItem from './HeaderItem';
import {
   HomeIcon,
   SearchIcon,
   UserIcon,
   LightningBoltIcon,
   BadgeCheckIcon,
   CollectionIcon
   
} from '@heroicons/react/outline'

function Header() {
  return (
    <header className='flex flex-col sm:flex-row justify-between px-5'>
        <div className='flex flex-grow  max-w-2xl m-5 justify-between items-center h-auto' >
            <HeaderItem title ="HOME" Icon ={HomeIcon} />
            <HeaderItem title ="SEARCH" Icon ={SearchIcon} />
            <HeaderItem title ="TRENDING" Icon ={LightningBoltIcon} />
            <HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
            <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
            <HeaderItem title='ACCOUNT' Icon={UserIcon} />
        </div>
        
        <Image className='object-contain cursor-pointer' src='https://links.papareact.com/ua6' width={200} height={100} />
    </header>
    
  )
}

export default Header