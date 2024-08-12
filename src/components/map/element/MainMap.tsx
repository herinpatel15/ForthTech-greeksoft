import GoogleMapReact from 'google-map-react';
import { Location } from '@/accents/content/contact';

const Map = ({center, zoom}: {
    center: {
        "lat": number,
        "lng": number,
    },
    zoom: number
}) => {
    // console.log(location)
    return (
        <div className="w-full h-full">
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "" }}
                            defaultCenter={center}
                            defaultZoom={zoom}
                        >
                            {/* any component */}
                        </GoogleMapReact>
                    </div>
    )
}

export {
    Map
}