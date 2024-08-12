import { contactData } from "@/accents/content/contact"
import { ContactCard } from "@/components/contactCard"

export default function LocationCards() {
    return (
        <section className="flex items-start justify-center flex-wrap gap-10 py-10 px-5">
            {
                contactData.officesCards.map((val) => {
                    const {center, zoom} = val.location
                    return (
                        <ContactCard data={val} center={center} zoom={zoom} />
                    )
                })
            }
        </section>
    )
}