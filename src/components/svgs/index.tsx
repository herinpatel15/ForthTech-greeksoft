import { forwardRef, HTMLAttributes } from "react"

interface IconType extends HTMLAttributes<SVGSVGElement> {
    theme: string
}
const MenuIcon = forwardRef<
    SVGSVGElement,
    IconType
>(({ className, ...props }, ref) => (
    <svg className={`w-8 h-8${className}`} ref={ref} {...props} viewBox="0 0 24 24" fill="none">
        <g id="Menu / Menu_Alt_02">
            <path className={`stroke-[${props.theme}]`} id="Vector" d="M11 17H19M5 12H19M11 7H19" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </g>
    </svg>
))
MenuIcon.displayName = "MenuIcon"


const CrossIcon = forwardRef<
    SVGSVGElement,
    IconType
>(({ className, ...props }, ref) => (
    <svg className={`w-8 h-8${className}`} ref={ref} {...props} viewBox="0 0 24 24" fill="none" >
        <path className={`stroke-[${props.theme}]`} d="M16 8L8 16M12 12L16 16M8 8L10 10" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
))
CrossIcon.displayName = "CrossIcon"

const ClockIcon = forwardRef<
    SVGSVGElement,
    IconType
>(({ className, ...props }, ref) => (
    <svg className={`w-8 h-8 ${className}`} {...props} ref={ref} viewBox="0 0 512 512">
        <g>
            <path fill={`${props.theme}`} d="M184.488,220.595l51.016,39.35c1.966,15.861,15.336,28.191,31.73,28.191c17.754,0,32.14-14.394,32.14-32.14
		c0-0.68-0.156-1.327-0.205-1.999l74.758-88.44c5.21-5.85,5.309-14.28,0.213-18.802c-5.088-4.531-13.436-3.45-18.647,2.408
		l-73.447,78.47c-4.457-2.335-9.438-3.777-14.813-3.777c-5.742,0-11.06,1.63-15.73,4.277l-48.026-33.443
		c-6.194-4.563-15.484-2.45-20.736,4.712C177.508,206.544,178.278,216.04,184.488,220.595z" />
            <path fill={`${props.theme}`} d="M440.314,82.925c-44.2-44.257-105.58-71.703-173.08-71.686V70.57c51.303,0.017,97.469,20.712,131.124,54.31
		c33.59,33.647,54.285,79.821,54.302,131.116c-0.017,51.294-20.712,97.468-54.302,131.116
		c-33.655,33.606-79.821,54.301-131.124,54.309c-51.294-0.008-97.468-20.703-131.116-54.309
		c-33.598-33.648-54.293-79.822-54.309-131.116c0.008-16.82,2.302-33.017,6.464-48.444l24.046,14.977
		c3.187,1.975,7.062,2.393,10.241,1.09c3.203-1.319,5.3-4.162,5.546-7.57l10.356-135.614c0.278-3.884-1.852-7.8-5.472-10.077
		c-3.654-2.244-8.119-2.45-11.47-0.459L4.372,138.971c-2.957,1.729-4.58,4.858-4.35,8.299c0.229,3.458,2.302,6.743,5.497,8.725
		l30.698,19.122c-8.872,25.357-13.747,52.59-13.747,80.879c-0.016,67.491,27.446,128.871,71.687,173.079
		c44.207,44.241,105.579,71.703,173.078,71.686c67.492,0.017,128.88-27.445,173.08-71.686
		c44.24-44.208,71.703-105.588,71.686-173.079C512.017,188.497,484.554,127.117,440.314,82.925z" />
        </g>
    </svg>
))
ClockIcon.displayName = "CrossIcon"

export {
    MenuIcon,
    CrossIcon,
    ClockIcon
}