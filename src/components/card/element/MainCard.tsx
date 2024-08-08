import { forwardRef, HTMLAttributes } from "react";

interface CardType extends HTMLAttributes<HTMLDivElement> {}
const Card = forwardRef<
    HTMLDivElement,
    CardType
>(({className, ...props}, ref) => {
    return (
        <div 
            className={`
                flex flex-col items-center justify-center gap-5 h-full max-w-xs p-3 rounded-xl
                ${className}
            `} 
            {...props} 
            ref={ref} 
        />
    )
})
Card.displayName = "Card"


interface CardDivType extends HTMLAttributes<HTMLDivElement> {}
const CardDiv = forwardRef<
    HTMLDivElement,
    CardDivType
>(({className, ...props}, ref) => {
    return (
        <div 
            className={`
                flex items-center justify-center flex-col w-[100%]
                ${className}
            `} 
            {...props} 
            ref={ref} 
        />
    )
})
CardDiv.displayName = "CardDiv"

export {
    Card,
    CardDiv
}