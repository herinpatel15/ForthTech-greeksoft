import { ClockIcon } from "@/components/svgs";
import aboutImg from "@/accents/images/overview.png"
import mission from '@/accents/images/mission_.png'
import vision from '@/accents/images/vision_.png'

const theme = "#108DC2"
const back = "#ffffff"

export const aboutData = {
    "intro": {
        "title": "We started the algo revolution, we are still leading the way.",
        "detail": "Greeksoft Technologies is an algorithm development and consulting firm specializing in low latency, high frequency, algorithmic trade execution, order routing and front end solution provider. Besides Front end trading solutions, we also specialize in risk management tools that help your firm to get insights on their trading risks in exchange-traded derivative instruments.",
        "cards": [
            {
                "svg": <ClockIcon theme={theme} />,
                "title": "More than 250 members using our ATS successfully",
                "detail": "More than 250 members are using our products and solutions with full satisfaction."
            },
            {
                "svg": <ClockIcon theme={theme} />,
                "title": "Favoured choice of industires biggies",
                "detail": "We are the favoured choice of big companies such as Kotak Securities, Motilal Oswal Securities and Sharekhan."
            },
            {
                "svg": <ClockIcon theme={theme} />,
                "title": "Empanelled CTCL vendor with Multiple exchanges",
                "detail": "We have our CTCL vendor with multiple exchanges such as NSE, BSE, MCX, NCDEX, LME, CME, DGCX and MSEI."
            }
        ]
    },
    "overview": {
        "title": "Overview",
        "detail": [
            "Headquartered in financial capital Mumbai with our branch office in India's next TechHub Pune and Ahemadabad, Greeksoft has been a pioneer in offering algorithmic trading solution in India. Greeksoft is a major and prominent player for algorithmic solution niche in India.",
            "At Greeksoft, we understand the importance of accuracy, precision and speed while trade execution. Our low latency front end combined with distinctive as well as competent algorithmic strategies ensures best trade executions and order management.",
            "Powerful, sturdy, and amazingly user-friendly, our tools are easy to operate and do not require rigorous training to master. Each of them is multi-exchange compatible and powered by the latest technology in the business. Our software packages are cost-effective and quality efficient as well. Post implementation, we provide you with backup support and continuously upgrade our packages, in accordance to industry needs."
        ],
        "img": aboutImg
    },
    "mission&vision": {
        "mission": {
            "img": mission,
            "detail": [
                "To identify industry's trading needs and provide low latency, high frequency, algo trading software, and other front end solutions.",
                "To service and support our customers with the utmost lovel of professionalism."
            ]
        },
        "vision": {
            "img": vision,
            "detail": [
                "Customer Relationship - Our customers are Greeksoft's most important business partner. They do not depend on us, we depend on them. They are not an interruption of our work; they are the purpose of it. They are not an outsider in our business, they are part of it. We do them no favours: they are doing us a favour by giving us the opportunity to work for them."
            ]
        }
    },
    "evolution": {
        "title": "Our Evolution",
        "cards": [
            {
                "year": "2010",
                "title": "Greek Mobile Trading App",
                "detail": "Interenet based mobile trading app was developed for the retail segment to help them trade anytime & anywhere in different segments"
            },
            {
                "year": "2010",
                "title": "Greek Mobile Trading App",
                "detail": "Interenet based mobile trading app was developed for the retail segment to help them trade anytime & anywhere in different segments"
            },
            {
                "year": "2010",
                "title": "Greek Mobile Trading App",
                "detail": "Interenet based mobile trading app was developed for the retail segment to help them trade anytime & anywhere in different segments"
            },
            {
                "year": "2010",
                "title": "Greek Mobile Trading App",
                "detail": "Interenet based mobile trading app was developed for the retail segment to help them trade anytime & anywhere in different segments"
            },
            {
                "year": "2010",
                "title": "Greek Mobile Trading App",
                "detail": "Interenet based mobile trading app was developed for the retail segment to help them trade anytime & anywhere in different segments"
            },
            {
                "year": "2010",
                "title": "Greek Mobile Trading App",
                "detail": "Interenet based mobile trading app was developed for the retail segment to help them trade anytime & anywhere in different segments"
            }
        ]
    },
    "hiring": {
        "title": "We are hiring",
        "detail": "Do you have the passion to shape the future? At Greeksoft, we recognize human capital as the most important determinant for long-term success. Greeksoft provides plentiful opportunity for growth, development and career progression. We continuously benchmark HR practices for recruiting, training, and workplace satisfaction.",
        "btn": "Join the team"
    }
}