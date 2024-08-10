import { oc } from '@/lib/classesManage'
import { forwardRef, HTMLAttributes, ReactNode } from 'react'

interface ButtonType extends HTMLAttributes<HTMLButtonElement> {
    label: string | ReactNode,
    variant?: string
}
const Button = forwardRef<
    HTMLButtonElement,
    ButtonType
>(({ className, label, ...props }, ref) => {
    const btType = props.variant || "primary"
    return (
        <button
            className={
                oc(
                    `
                        px-7 py-3 rounded-xl transition
                        ${(btType === 'primary') && 'bg-[--primary-color] text-[--bg-color] hover:text-[--text-color]'}
                        ${(btType === 'outline') && 'border-2'}
                    `,
                    `${className}`
                )
            }
            {...props}
            ref={ref}
        >{label}</button>
    )
})
Button.displayName = "Button"

export {
    Button
}