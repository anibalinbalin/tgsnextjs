import Image from "next/image"

export default function GalleryUniform() {
  return (
    <section className="relative w-full bg-[#D39885] py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] max-w-6xl mx-auto">
          {/* Left image - lower position */}
          <div className="absolute left-0 bottom-0 w-[35%] md:w-[30%] z-30">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ">
              <Image
                src="/assets/6-school_life/4-uniform/_DSC2118.JPG"
                alt="Students in uniform"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Center image - largest, prominent */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[50%] md:w-[45%] z-20">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden ">
              <Image
                src="/assets/6-school_life/4-uniform/DSC_9695.jpg"
                alt="Student in uniform outdoors"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Top right image - higher position */}
          <div className="absolute right-0 top-0 w-[40%] md:w-[35%] z-10">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ">
              <Image
                src="/assets/6-school_life/4-uniform/TGS-93_2.JPG"
                alt="Student activity"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
