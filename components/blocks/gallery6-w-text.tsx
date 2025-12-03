"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";
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
  role?: string;
  flag?: string;
  summary?: string;
  url: string;
  image: string;
}

interface Gallery6Props {
  heading?: string;
  demoUrl?: string;
  showDemo?: boolean;
  items?: GalleryItem[];
  showNavigation?: boolean;
  backgroundColor?: string;
  textColor?: string;
}

const Gallery6WithText = ({
  heading = "Gallery",
  demoUrl = "https://www.shadcnblocks.com",
  showDemo = true,
  showNavigation = true,
  backgroundColor,
  textColor,
  items = [
    {
      id: "item-1",
      title: "Build Modern UIs",
      summary:
        "Create stunning user interfaces with our comprehensive design system.",
      url: "#",
      image: "/images/block/placeholder-dark-1.svg",
    },
    {
      id: "item-2",
      title: "Computer Vision Technology",
      summary:
        "Powerful image recognition and processing capabilities that allow AI systems to analyze, understand, and interpret visual information from the world.",
      url: "#",
      image: "/images/block/placeholder-dark-1.svg",
    },
    {
      id: "item-3",
      title: "Machine Learning Automation",
      summary:
        "Self-improving algorithms that learn from data patterns to automate complex tasks and make intelligent decisions with minimal human intervention.",
      url: "#",
      image: "/images/block/placeholder-dark-1.svg",
    },
    {
      id: "item-4",
      title: "Predictive Analytics",
      summary:
        "Advanced forecasting capabilities that analyze historical data to predict future trends and outcomes, helping businesses make data-driven decisions.",
      url: "#",
      image: "/images/block/placeholder-dark-1.svg",
    },
    {
      id: "item-5",
      title: "Neural Network Architecture",
      summary:
        "Sophisticated AI models inspired by human brain structure, capable of solving complex problems through deep learning and pattern recognition.",
      url: "#",
      image: "/images/block/placeholder-dark-1.svg",
    },
  ],
}: Gallery6Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const { canScrollPrev, canScrollNext } = useCarouselNavigation(carouselApi);
  return (
    <section className="py-16 md:py-20 lg:py-32" style={backgroundColor ? { backgroundColor } : undefined}>
      <div className="container">
        <div className="relative mb-8 flex flex-col justify-center md:mb-14 md:flex-row md:justify-center md:items-start lg:mb-16">
          <div className="w-full">
            <h2 className="mb-3 text-center text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6" style={textColor ? { color: textColor } : undefined}>
              {heading}
            </h2>
            {showDemo && (
              <a
                href={demoUrl}
                className="group flex items-center gap-1 text-sm font-medium md:text-base lg:text-lg"
              >
                Book a demo
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            )}
          </div>
          {showNavigation && (
            <div className="mt-8 flex shrink-0 items-center justify-start gap-2 md:absolute md:right-0 md:mt-0">
              <Button
                size="icon"
                variant="outline"
                onClick={() => {
                  carouselApi?.scrollPrev();
                }}
                disabled={!canScrollPrev}
                className="disabled:pointer-events-auto"
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
                className="disabled:pointer-events-auto"
              >
                <ArrowRight className="size-5" />
              </Button>
            </div>
          )}
        </div>
      </div>
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
              <CarouselItem key={item.id} className="pl-4 md:max-w-[452px]">
                <a
                  href={item.url}
                  className="group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex aspect-[3/4] overflow-clip rounded-xl portrait:max-h-[65vh]">
                      <div className="flex-1">
                        <div className="relative h-full w-full">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl" style={textColor ? { color: textColor } : undefined}>
                    {item.title}
                  </div>
                  {item.role && (
                    <div className="mb-4 text-sm font-medium md:text-base" style={textColor ? { color: textColor } : undefined}>
                      {item.role}
                    </div>
                  )}
                  {item.flag && (
                    <div className="mb-4 text-2xl">
                      {item.flag}
                    </div>
                  )}
                  {item.summary && (
                    <div className="mb-8 text-sm text-muted-foreground md:mb-12 md:text-base lg:mb-9" style={textColor ? { color: textColor } : undefined}>
                      {item.summary}
                    </div>
                  )}
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { Gallery6WithText };
