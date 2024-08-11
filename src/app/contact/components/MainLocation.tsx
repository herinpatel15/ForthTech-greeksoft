'use client'
import { SectionDiv } from "@/components/section";
import GoogleMapReact from 'google-map-react';

interface AnyReactComponentProps {
    lat: number;
    lng: number;
    text: string;
}

const AnyReactComponent: React.FC<AnyReactComponentProps> = ({ text }) => {
    return (
        <div style={{
            color: 'white',
            background: 'red',
            padding: '5px',
            borderRadius: '3px',
            textAlign: 'center'
        }}>
            {text}
        </div>
    );
};

export default function MainLocation() {
    return (
        <section>
            <SectionDiv
                className={`
                        lg:flex-row
                        flex lg:gap-10 gap-[5rem] flex-col py-[8rem] justify-between px-5 items-center
                    `}
            >
                <div className="flex flex-col gap-8 lg:items-start lg:justify-start items-center">
                    <h1 className="text-5xl font-semibold text-[--highlite-color]">
                        Head Office: Mumbai
                    </h1>
                    <div>
                        <h1>Address : </h1>
                        <p className="text-[--text-var-color] lg:text-left text-center">
                            507,5th Floor,Western Edge-1,<br />
                            Western Express Highway,<br />
                            Borivali (East)<br />
                            Mumbai-400066.
                        </p>
                    </div>
                    <div>
                        <h1>Contact No : </h1>
                        <p className="text-[--text-var-color] lg:text-left text-center">
                            +91 22 4042 1000<br />
                            +91 22 6835 1000
                        </p>
                    </div>
                    <div>
                        <h1>Timings : </h1>
                        <p className="text-[--text-var-color] lg:text-left text-center">
                            Monday to Friday –    8 am to 10 pm<br />
                            Saturday               –    8 am to 7 pm
                        </p>
                    </div>
                    <p><span>E-mail :</span><span>marketingteam@greeksoft.co.in</span></p>
                </div>
                <div className="bg-black w-[50%] h-[30rem] rounded-xl">
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "" }}
                        defaultCenter={{
                            lat: 20.7885723,
                            lng: 72.9814874
                        }}
                        defaultZoom={13}
                    >
                        <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                        />
                    </GoogleMapReact>
                </div>
            </SectionDiv>
        </section>
    )
}