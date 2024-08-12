import contact from '@/accents/images/contact.png'
import { Mubai } from '@/components/svgs'
import bgImg from '@/accents/images/ahmdabad_.png'
import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

const highlite = "#F87B20"

type Location = {
    center: {
        lat: number;
        lng: number;
    }
    zoom: number;
};

type OfficeInfo = {
    city: string;
    detail: string;
    contact1: string;
    contact2: string;
    email: string;
    svg: ReactNode;
    img: string | StaticImageData;
    location: Location;
};

const contactData = {
    "hero": {
        "title": "Get In Touch ",
        "detail": "Contact Us for Product-Related Queries, Company-related queries, complaints and suggestions.",
        "btn": "Contact",
        "img": contact
    },
    "officesCards": [
        {
            "city": "Mumbai",
            "detail": "Head Office",
            "contact1": "+91 22 4042 1000",
            "contact2": "+91 22 6835 1000",
            "email": "marketingteam@greeksoft.co.in",
            "svg": <Mubai theme={highlite} />,
            "img": bgImg,
            "location": {
                "center": {
                    "lat": 20.7885723,
                    "lng": 72.9814874,
                },
                "zoom": 13
            }
        },
        {
            "city": "Pune",
            "detail": "Development Center",
            "contact1": "+91 22 4042 1000",
            "contact2": "+91 22 6835 1000",
            "email": "marketingteam@greeksoft.co.in",
            "svg": <Mubai theme={highlite} />,
            "img": bgImg,
            "location": {
                "center": {
                    "lat": 20.7885723,
                    "lng": 72.9814874,
                },
                "zoom": 13
            }
        },
        {
            "city": "Ahmedabad",
            "detail": "Development Center",
            "contact1": "+91 22 4042 1000",
            "contact2": "+91 22 6835 1000",
            "email": "marketingteam@greeksoft.co.in",
            "svg": <Mubai theme={highlite} />,
            "img": bgImg,
            "location": {
                "center": {
                    "lat": 20.7885723,
                    "lng": 72.9814874,
                },
                "zoom": 13
            }
        },
        {
            "city": "Delhi NCR",
            "detail": "Support Center",
            "contact1": "+91 22 4042 1000",
            "contact2": "+91 22 6835 1000",
            "email": "marketingteam@greeksoft.co.in",
            "svg": <Mubai theme={highlite} />,
            "img": bgImg,
            "location": {
                "center": {
                    "lat": 20.7885723,
                    "lng": 72.9814874,
                },
                "zoom": 13
            }
        }
    ],
    "mainOffice": {
        "title": "Head Office : Mumbai",
        "address": {
            "title": "Address :",
            "detail": ['507,5th Floor,Western Edge-1,',
                'Western Express Highway,',
                'Borivali(East)',
                'Mumbai- 400066.']
        },
        "contact": {
            "title": "Contact No. :",
            "c1": "+91 22 4042 1000",
            "c2": "+91 22 6835 1000"
        },
        "timing": {
            "title": "Timing :",
            "detail": ['Monday to Friday –    8 am to 10 pm', 'Saturday               –    8 am to 7 pm']
        },
        "email": {
            "title": "E-mail : ",
            "id": "marketingteam@greeksoft.co.in"
        },
        "location": {
            "center": {
                "lat": 20.7885723,
                "lng": 72.9814874,
            },
            "zoom": 13
        }
    }
}

export {
    contactData
}

export type {
    OfficeInfo,
    Location
}