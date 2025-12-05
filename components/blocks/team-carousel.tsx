"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import DevBadge from "../dev-badge";
import { useCarouselNavigation } from "@/lib/hooks/useCarouselNavigation";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface GalleryItem {
  id: string;
  title: string;
  roleKey: string;
  url: string;
  image: string;
}

interface TeamCarouselProps {
  heading?: string;
  demoUrl?: string;
  items?: GalleryItem[];
}

const TeamCarousel = ({
  heading = "Gallery",
  demoUrl = "https://www.shadcnblocks.com",
}: TeamCarouselProps) => {
  const t = useTranslations('HomePage.team');
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const { canScrollPrev, canScrollNext } = useCarouselNavigation(carouselApi);

  const items: GalleryItem[] = [
    { id: "item-1", title: "Leona", roleKey: "coHeadOfSchool", url: "#", image: "/assets/0_mainpage/staff/LeonaD.JPG" },
    { id: "item-2", title: "Sam", roleKey: "coHeadOfSchool", url: "#", image: "/assets/0_mainpage/staff/SamI.JPG" },
    { id: "item-3", title: "Annina", roleKey: "lowerSchoolCoordinator", url: "#", image: "/assets/0_mainpage/staff/Annina.JPG" },
    { id: "item-4", title: "Santiago", roleKey: "technicalDirectorSecondary", url: "#", image: "/assets/0_mainpage/staff/Santi.JPG" },
    { id: "item-5", title: "Fiorella", roleKey: "secondaryEducatorLiterature", url: "#", image: "/assets/0_mainpage/staff/Fio.JPG" },
    { id: "item-6", title: "Nicolás", roleKey: "secondaryEducatorStem", url: "#", image: "/assets/0_mainpage/staff/Nicolas.JPG" },
    { id: "item-7", title: "Otto", roleKey: "secondaryEducatorArt", url: "#", image: "/assets/0_mainpage/staff/Otto.JPG" },
    { id: "item-8", title: "Natalia", roleKey: "technicalDirectorPrimary", url: "#", image: "/assets/0_mainpage/staff/NataliaD.JPG" },
    { id: "item-9", title: "Camila", roleKey: "primaryEducator", url: "#", image: "/assets/0_mainpage/staff/CamilaN.JPG" },
    { id: "item-10", title: "Talia", roleKey: "primaryEducator", url: "#", image: "/assets/0_mainpage/staff/Talia.JPG" },
    { id: "item-11", title: "Juan", roleKey: "primaryEducator", url: "#", image: "/assets/0_mainpage/staff/JuanDF.JPG" },
    { id: "item-12", title: "Jessica", roleKey: "primaryEducator", url: "#", image: "/assets/0_mainpage/staff/Jess.JPG" },
    { id: "item-13", title: "Jimena", roleKey: "primaryEducator", url: "#", image: "/assets/0_mainpage/staff/Jime.JPG" },
    { id: "item-14", title: "Lucía", roleKey: "earlyYearsEducator", url: "#", image: "/assets/0_mainpage/staff/Lucia.JPG" },
    { id: "item-15", title: "Ksenia", roleKey: "earlyYearsEducator", url: "#", image: "/assets/0_mainpage/staff/Ksenia.JPG" },
    { id: "item-16", title: "Verónica", roleKey: "earlyYearsEducator", url: "#", image: "/assets/0_mainpage/staff/Vero.JPG" },
    { id: "item-17", title: "Camila", roleKey: "earlyYearsEducator", url: "#", image: "/assets/0_mainpage/staff/CamiR.JPG" },
    { id: "item-18", title: "Catalina", roleKey: "educationalPsychologistPrimary", url: "#", image: "/assets/0_mainpage/staff/Catalina.JPG" },
    { id: "item-19", title: "Agostina", roleKey: "educationalPsychologistSecondary", url: "#", image: "/assets/0_mainpage/staff/Agos.JPG" },
    { id: "item-20", title: "Ignacio", roleKey: "musicSpecialistPrimary", url: "#", image: "/assets/0_mainpage/staff/ignacio.jpg" },
    { id: "item-21", title: "Victoria", roleKey: "facilitiesSupervisor", url: "#", image: "/assets/0_mainpage/staff/vicky.jpg" },
    { id: "item-22", title: "Gerardo", roleKey: "groundskeeper", url: "#", image: "/assets/0_mainpage/staff/Gerardo.JPG" },
    { id: "item-23", title: "Jacques", roleKey: "admissionsOfficer", url: "#", image: "/assets/0_mainpage/staff/jacques.JPG" },
    { id: "item-24", title: "Analaura", roleKey: "accountant", url: "#", image: "/assets/0_mainpage/staff/Analaura.JPG" },
    { id: "item-25", title: "Ma. Eugenia", roleKey: "coCurricularCoordinator", url: "#", image: "/assets/0_mainpage/staff/Maru.JPG" },
  ];
  return (
    <section className="relative bg-terracotta py-16">
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
          className="relative left-[-1rem]"
        >
          <CarouselContent className="-mr-4 ml-8 2xl:ml-[max(8rem,calc(50vw-700px+1rem))] 2xl:mr-[max(0rem,calc(50vw-700px-1rem))]">
            {items.map((item) => (
              <CarouselItem key={item.id} className="pl-4 md:max-w-[280px]">
                <a
                  href={item.url}
                  className="group flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[500/667] overflow-clip rounded-xl">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium text-white md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                    {item.title}
                  </div>
                  <div className="mb-8 line-clamp-2 text-base text-white md:mb-12 lg:mb-9">
                    {t(`roles.${item.roleKey}`)}
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
          <Button
            size="icon"
            variant="outline"
            onClick={() => {
              carouselApi?.scrollPrev();
            }}
            disabled={!canScrollPrev}
            className="absolute top-[200px] left-8 disabled:pointer-events-auto hidden md:flex"
          >
            <ArrowLeft className="size-5" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            onClick={() => {
              carouselApi?.scrollNext();
            }}
            disabled={!canScrollNext}
            className="absolute top-[200px] right-8 disabled:pointer-events-auto hidden md:flex"
          >
            <ArrowRight className="size-5" />
          </Button>
        </Carousel>
      </div>
      <div className="w-full mt-6 flex justify-center">
        <Button
          variant="terracotta"
          size="lg"
        >
          {t('button')}
        </Button>
      </div>
      <DevBadge name="team-carousel" />
    </section>
  );
};

export { TeamCarousel };
