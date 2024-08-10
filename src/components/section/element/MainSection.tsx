import {forwardRef, HTMLAttributes} from 'react'

interface SectionType extends HTMLAttributes<HTMLDivElement> {}
const SectionDiv = forwardRef<
    HTMLDivElement,
    SectionType
>(({className, ...props}, ref) => {
    return (
            <div
                className={`max-w-screen-xl mx-auto flex flex-col ${className}`}
                {...props}
                ref={ref}
            >

            </div>
    )
})
SectionDiv.displayName = "Section"

export {
    SectionDiv
}