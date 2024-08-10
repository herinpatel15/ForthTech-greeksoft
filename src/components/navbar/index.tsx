'use client'

import {Navbar, NavLogo, NavList, NavListDataType } from './element/MainNav'
import { useCallback, useState } from 'react'
import { CrossIcon, MenuIcon } from '../svgs'

export default function Nav() {

    const [toggale, setToggale] = useState(false)

    const navlist: NavListDataType[] = [
        {name: 'Home', path: '/'},
        {name: 'About US', path: '/about'},
        {name: 'Products', path: '/product'},
        {name: 'Caas', path: '/caas'},
        {name: 'Career', path: '/career'},
        {name: 'Contact Us', path: '/contact'},
    ]

    const handaleToggale = useCallback(() => {
        if (!toggale) {
            setToggale(true)
        } else {
            setToggale(false)
        }
    }, [setToggale, toggale])

    return (
        <nav className='sticky top-0 shadow-card-s bg-[--bg-color] z-50'>
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