import { ClockIcon } from "@/components/svgs";
import hero1 from '@/accents/images/hero1.png'
import coLocationCaas from "@/accents/images/co-location-caas.svg"
import fixFinacial from '@/accents/images/fix-finacial.png'
import retailTrading from '@/accents/images/mobile_app_gif.gif'
import { PlayIcon } from "@/components/svgs";
import reviweImg from "@/accents/images/14.png"

const theme = "#108DC2"
const back = "#ffffff"

export const data = {
    "home": {
        "hero": {
            "tagLine": [
                "Made For The Traders, By The Traders",
                "Trade Fast Trade Smart"
            ],
            "pera": "Greeksoft Technologies is an algorithm development and consulting firm specializing in low latency, high frequency, algorithmic trade execution, order routing and front end solution provider. Besides Front end trading solutions, we also specialize in risk management tools that help your firm to get insights on their trading risks in exchange-traded derivative instruments.",
            "btn": "Request a demo",
            "cards": [
                {
                    "svg": <ClockIcon theme="#108DC2" />,
                    "title": "Dedicated and committed support team.",
                    "detail": "Our dedicated and commited support team provides our client 24-hour support related to our products and solutions."
                },
                {
                    "svg": <ClockIcon theme="#108DC2" />,
                    "title": "Domain understanding",
                    "detail": "Being the first vendor in India to successfully implement algo trading, We have the domain knowledge to understand the complexity of trading and providing the right solution"
                },
                {
                    "svg": <ClockIcon theme="#108DC2" />,
                    "title": "Array of suite's on algorithms.",
                    "detail": "Our array of bunch of algorithms connected to our products and solutions would help you in multiple ways."
                }
            ]
        },
        "section1": {
            "title": "Greeksoft Automated Trading Solutions",
            "detail": "A solution to suffice all your trading needs",
            "img": hero1,
            cards: {
                g1: [
                    {
                        "svg": <ClockIcon theme={theme} />,
                        "title": "Fully Automated low latency high frequency order routing system.",
                    },
                    {
                        "svg": <ClockIcon theme={theme} />,
                        "title": "Complete suite of Option, Arbitrage and Execution Algos.",
                    }
                ],
                g2: [
                    {
                        "svg": <ClockIcon theme={theme} />,
                        "title": "Multi - Asset Trading :- Equities, Futures, Options, Commodity",
                    },
                    {
                        "svg": <ClockIcon theme={theme} />,
                        "title": "Trader, Dealer and Admin Terminal based on role and privileges.",
                    }
                ]
            }
        },
        "section2": {
            "g1": {
                "img": coLocationCaas,
                "title": "Enjoy our co-location services with our CaaS solution.",
                "list": [
                    "One stop shop for Co-location hosting and Managed IT solution.",
                    "Unmatched speed with high speed 10G Ethernet network.",
                    "Co-location services at affordable price",
                    "Best Support with terms of Infrastructure.",
                    "TBT market data Feed Handler.",
                    "Ultra low latency access to trading system and data feed to meet HFT needs."
                ],
                "detail": "NSE CAAS service is the fastest connection to NSE exchange. For high-frequency trading a few microseconds can make a significant difference. We offer NSE co-location services for those traders who are seeking the fastest access to a NSE exchange matching engine."
            },
            "g2": {
                "img": fixFinacial,
                "main": [
                    {
                        "title": "FIX - Financial Information Exchange",
                        "list": [
                            "Quickly interface existing FIX applications with Greeksoft.",
                            "Add, drop, remap or modify FIX tags, re-map product symbols, or apply price scaling to ensure perfect integration.",
                            "Let us manage all the global infrastructure and connectivity that you require."
                        ]
                    },
                    {
                        "title": "Greek FIX Supports :-",
                        "list": [
                            "Bloomberg",
                            "Instinet",
                            "Fidessa"
                        ]
                    }
                ]
            }
        },
        "section3": {
            "title": "Retail Trading Platform",
            "detail": "Trade with your own mobile now!",
            "img": retailTrading,
            "cards": {
                "g1": [
                    {
                        "svg": <ClockIcon theme={theme} />,
                        "detail": "Trade on Move - User Friendly, Feature rich hybrid mobile applications."
                    },
                    {
                        "svg": <ClockIcon theme={theme} />,
                        "detail": "Complete suite of Option, Arbitrage and Execution Algos."
                    }
                ],
                "g2": [
                    {
                        "svg": <ClockIcon theme={theme} />,
                        "detail": "Multi - Asset Trading :- Equities, Futures, Options, Commodity"
                    },
                    {
                        "svg": <ClockIcon theme={theme} />,
                        "detail": "Trader, Dealer and Admin Terminal based on role and privileges."
                    }
                ]
            }
        },
        "section4": {
            "title": "",
            "detail": "",
            "svg": <PlayIcon theme={back} />,
        },
        "section5": {
            "title": "What clients say",
            "detail": "Testimonial",
            "cards": [
                {
                    "reviwe": "Greeksoft is known for fastest execution and ultra low latency. We are happy to be associated by using their COLO service. Right people with the right product, That's greeksoft for you.",
                    "img": reviweImg,
                    "name": "herin patel",
                    "organizationName": "ForThech"
                },
                {
                    "reviwe": "Greeksoft is known for fastest execution and ultra low latency. We are happy to be associated by using their COLO service. Right people with the right product, That's greeksoft for you.",
                    "img": reviweImg,
                    "name": "herin patel",
                    "organizationName": "ForThech"
                },
                {
                    "reviwe": "Greeksoft is known for fastest execution and ultra low latency. We are happy to be associated by using their COLO service. Right people with the right product, That's greeksoft for you.",
                    "img": reviweImg,
                    "name": "herin patel",
                    "organizationName": "ForThech"
                },
                {
                    "reviwe": "Greeksoft is known for fastest execution and ultra low latency. We are happy to be associated by using their COLO service. Right people with the right product, That's greeksoft for you.",
                    "img": reviweImg,
                    "name": "herin patel",
                    "organizationName": "ForThech"
                },
                {
                    "reviwe": "Greeksoft is known for fastest execution and ultra low latency. We are happy to be associated by using their COLO service. Right people with the right product, That's greeksoft for you.",
                    "img": reviweImg,
                    "name": "herin patel",
                    "organizationName": "ForThech"
                }
            ]
        },
        "section6": {
            "users": [
                reviweImg, reviweImg, reviweImg, reviweImg, reviweImg, reviweImg
            ],
            "title": "It's time to revolutionize the trading platform",
            "btn": "Request a demo"
        }
    }
}