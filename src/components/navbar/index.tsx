'use client'

import Image from 'next/image'
import {Navbar, NavLogo, NavList, NavListDataType } from './element/MainNav'
import { useCallback, useState } from 'react'
import { CrossIcon, MenuIcon } from '../svgs'

export default function Nav() {

    const [toggale, setToggale] = useState(false)

    const navlist: NavListDataType[] = [
        {name: 'Home', path: '/'},
        {name: 'About US', path: '/pages/about'},
        {name: 'Products', path: '/pages/product'},
        {name: 'Caas', path: '/pages/caas'},
        {name: 'Career', path: '/pages/career'},
        {name: 'Contact Us', path: '/pages/contact'},
    ]

    const handaleToggale = useCallback(() => {
        if (!toggale) {
            setToggale(true)
        } else {
            setToggale(false)
        }
    }, [setToggale, toggale])

    return (
        <nav>
            <Navbar className='max-w-screen-xl md:w-screen-xl mx-auto'>
                <NavLogo>
                    <h1>hello</h1>
                </NavLogo>
                <NavList className='hidden md:flex' list={navlist} />
                <button onClick={handaleToggale} className='block md:hidden py-4'>
                    {
                        toggale ? <CrossIcon theme='--text-color' /> : <MenuIcon theme='--text-color' />
                    }
                </button>
            </Navbar>
            <div className='block md:hidden'>
                {
                    toggale && <NavList className='flex-col' list={navlist} />
                }
            </div>
        </nav>
    )
}