import DevBadge from './dev-badge'

export default function CampusMap() {
    return (
        <section className="relative bg-white">
            <div className="mx-auto max-w-6xl px-6 py-12 md:py-20">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.268214910755!2d-54.86592122291561!3d-34.79919337288481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x957503e123128391%3A0x1f8c000cc1cb33a0!2sThe%20Garz%C3%B3n%20School!5e0!3m2!1sen!2suy!4v1764661987214!5m2!1sen!2suy"
                    width="100%"
                    height="564"
                    className="rounded-xl" style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="The Garzón School location"
                />
            </div>
            <DevBadge name="campus-map" />
        </section>
    )
}
