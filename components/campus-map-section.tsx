import DevBadge from './dev-badge'

export default function CampusMapSection() {
    return (
        <section className="relative flex flex-col md:flex-row h-[500px]">
            {/* Left side - Text and Logo (1/3) */}
            <div className="w-full md:w-1/3 bg-[#D39885] flex flex-col justify-center px-8 py-12 md:px-12">
                <p className="text-2xl leading-relaxed font-light text-white mb-12">
                    The Garzón School has developed a fully-integrated ecosystem to transform education. The vast and wild landscape is woven into the school<span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>s identity, as are the innovative design concepts proposed by the world-renowned Rosan Bosch Studio.
                </p>
                <img
                        src="/assets/4-campus/1-learning/rosan_flatten.svg"
                        alt="Rosan Bosch Studio"
                        className="h-24"
                    />
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
            <DevBadge name="campus-map-section" />
        </section>
    )
}
