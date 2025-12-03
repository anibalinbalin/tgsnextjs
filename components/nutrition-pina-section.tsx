import Image from 'next/image'
import DevBadge from './dev-badge'

export default function NutritionPinaSection() {
    return (
        <section className="relative py-12 md:py-20 bg-[#8EB096]">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-12 md:gap-16 items-center">
                    <div className="flex flex-col items-start">
                        <h2 className="text-2xl md:text-4xl text-white font-light leading-relaxed mb-6">
                            <span className="border-b-2 border-white">Fresh, Flavourful, and Made with Love</span>
                        </h2>
                        <p className="text-white text-2xl leading-loose font-light">
                            Our catering partner, Piña Dulce, was founded by Verónica and Facundo, who have nearly 20 years of experience in the culinary industry. Piña Dulce brings a creative and health-focused approach to school meals. Their team of five is onsite daily, ensuring that every meal meets our high standards for taste and nutrition. Their menus will feature a wide variety of vibrant and appealing options, from hearty main courses to colourful salads and wholesome snacks.
                        </p>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/pinadulce_maldonado/" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/assets/6-school_life/5-nutrition/_DSC04534.JPG"
                                alt="Verónica and Facundo from Piña Dulce"
                                width={600}
                                height={800}
                                className="w-full h-[500px] md:h-[600px] object-cover rounded-lg"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <DevBadge name="nutrition-pina-section" />
        </section>
    )
}
