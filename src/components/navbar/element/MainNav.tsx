import Link from "next/link"
import { usePathname } from "next/navigation"
import { HTMLAttributes, forwardRef } from "react"

interface NavListDataType {
    name: string,
    path: string
}

interface NavType extends HTMLAttributes<HTMLDivElement> { }
const Navbar = forwardRef<
    HTMLDivElement,
    NavType
>(({ className, ...props }, ref) => {
    return (
        <div
            className={`flex items-center justify-between px-5 bg-transparent ${className}`}
            {...props}
            ref={ref}
        />
    )
})
Navbar.displayName = "Navbar"


interface NavLogoType extends HTMLAttributes<HTMLDivElement> { }
const NavLogo = forwardRef<
    HTMLDivElement,
    NavLogoType
>(({ className, ...props }, ref) => {
    return (
        <div
            className={`flex items-center justify-center ${className}`}
            {...props}
            ref={ref}
        />
    )
})
NavLogo.displayName = "NavLogo"


interface NavListType extends HTMLAttributes<HTMLUListElement> {
    list: NavListDataType[]
}
const NavList = forwardRef<
    HTMLUListElement,
    NavListType
>(({ className, list, ...props }, ref) => {
    const pathname = usePathname()
    return (
        <ul
            className={`flex items-center justify-center gap-3 md:gap-7 ${className}`}
            {...props}
            ref={ref}
        >
            {
                list.map((val) => {
                    const isActive = pathname === val.path;
                    return (
                        <li className={`md:py-4 text-lg ${isActive ? 'border-t-[5px] border-[--highlite-color] text-[--primary-color]' : 'hover:border-t-[5px] hover:text-[--primary-color]'
                            }`}>
                            <Link className="font-semibold" href={val.path}>{val.name}</Link>
                        </li>
                    )
                })
            }
        </ul>
    )
})
NavList.displayName = "NavList"




export {
    Navbar,
    NavLogo,
    NavList
}

export type {
    NavListDataType
}
