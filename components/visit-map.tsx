import DevBadge from './dev-badge'

export default function VisitMap() {
    return (
        <section className="relative flex flex-col md:flex-row h-[500px] bg-white">
            {/* Left side - Text (1/3) */}
            <div className="w-full md:w-1/3 bg-white flex flex-col justify-center items-center text-center px-8 py-12 md:px-12">
                <h2 className="text-3xl md:text-4xl font-light text-[#8EB096] mb-8">Visit us</h2>
                <div className="text-black text-lg leading-relaxed mb-8">
                    <p className="font-medium">The Garzón School</p>
                    <p>Ruta 104 — KM 13.5</p>
                    <p>20000 Manantiales</p>
                    <p>Maldonado, Uruguay</p>
                </div>
                <a
                    href="/bookatour"
                    className="inline-block bg-[#8EB096] text-white px-6 py-3 font-medium hover:bg-[#8EB096]/90 transition-colors rounded-md"
                >
                    Book a Tour
                </a>
            </div>

            {/* Right side - Map (2/3) */}
            <div className="w-full md:w-2/3">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5110.637137321724!2d-54.86592122291561!3d-34.79919337288481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2suy!4v1764662704041!5m2!1sen!2suy"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '400px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="The Garzón School location"
                    className="h-full"
                />
            </div>
            <DevBadge name="visit-map" />
        </section>
    )
}
