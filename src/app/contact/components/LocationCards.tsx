import { ContactCard } from "@/components/contactCard"

export default function LocationCards() {
    return (
        <section className="flex items-start justify-evenly flex-wrap py-10">
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
        </section>
    )
}