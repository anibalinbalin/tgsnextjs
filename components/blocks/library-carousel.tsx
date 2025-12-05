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

type RoleKey = 'student' | 'educator' | 'parent'

interface MemberItem {
  id: string;
  name: string;
  roleKey: RoleKey;
  image: string;
}

const LibraryCarousel = () => {
  const t = useTranslations('CommitteesPage')
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const { canScrollPrev, canScrollNext } = useCarouselNavigation(carouselApi);

  const members: MemberItem[] = [
    {
      id: "member-1",
      name: "Ona",
      roleKey: "student",
      image: "/assets/6-school_life/1-tgs_committees/ona.JPG",
    },
    {
      id: "member-2",
      name: "Olivia",
      roleKey: "student",
      image: "/assets/6-school_life/1-tgs_committees/olivia.JPG",
    },
    {
      id: "member-3",
      name: "Fiorella",
      roleKey: "educator",
      image: "/assets/6-school_life/1-tgs_committees/fiorella.JPG",
    },
    {
      id: "member-4",
      name: "Jessica",
      roleKey: "educator",
      image: "/assets/6-school_life/1-tgs_committees/jessica.JPG",
    },
    {
      id: "member-5",
      name: "Cecilia",
      roleKey: "parent",
      image: "/assets/6-school_life/1-tgs_committees/cecilia.JPG",
    },
    {
      id: "member-6",
      name: "Hannah",
      roleKey: "parent",
      image: "/assets/6-school_life/1-tgs_committees/hannah.JPG",
    },
    {
      id: "member-7",
      name: "Fini",
      roleKey: "student",
      image: "/assets/6-school_life/1-tgs_committees/fini.JPG",
    },
    {
      id: "member-8",
      name: "Elena",
      roleKey: "student",
      image: "/assets/6-school_life/1-tgs_committees/elena.JPG",
    },
  ];

  return (
    <section className="relative bg-[#802E3A] py-16">
      <div className="w-full">
        <h2 className="text-center text-3xl md:text-4xl font-light text-white mb-12 px-6">
          {t('library.title')}
        </h2>
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
            {members.map((member) => (
              <CarouselItem key={member.id} className="pl-4 md:max-w-[220px]">
                <div className="flex flex-col items-center">
                  <div className="relative w-[160px] h-[160px] md:w-[180px] md:h-[180px] overflow-hidden rounded-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <div className="text-xl md:text-2xl font-medium text-white">
                      {member.name}
                    </div>
                    <div className="text-sm md:text-base text-white/80">
                      {t(`roles.${member.roleKey}`)}
                    </div>
                  </div>
                </div>
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
            className="absolute top-[100px] left-8 disabled:pointer-events-auto"
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
            className="absolute top-[100px] right-8 disabled:pointer-events-auto"
          >
            <ArrowRight className="size-5" />
          </Button>
        </Carousel>
      </div>
      <DevBadge name="library-carousel" />
    </section>
  );
};

export { LibraryCarousel };
