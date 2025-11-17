"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  DigitalIcon1,
  DigitalIcon2,
  DigitalIcon3,
  DigitalIcon4,
  DigitalIcon5,
  DigitalImage1,
  DigitalImage2,
  DigitalImage3,
  DigitalImage4,
  DigitalImage5,
} from "../Reusable/Images";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const DigitalAssetsContent = [
  {
    icon: DigitalIcon1,
    title: "Managed Detection & Response (MDR)",
    desc: "24/7 monitoring, investigation, and automated response across cloud, endpoints, and networks.",
    link: "#",
    image: DigitalImage1,
  },
  {
    icon: DigitalIcon2,
    title: "Vulnerability Management & Threat hunting",
    desc: "Spot weaknesses before attackers do. Continuous scanning, prioritization, and remediation guidance to keep your systems airtight.",
    link: "#",
    image: DigitalImage2,
  },
  {
    icon: DigitalIcon3,
    title: "Endpoint security",
    desc: "Continuous endpoint monitoring, rapid detection, and automated response to stop threats at the source.",
    link: "#",
    image: DigitalImage3,
  },
  {
    icon: DigitalIcon4,
    title: "Cyber awareness training.",
    desc: "Engaging, role-based learning to reduce risky behaviours.",
    link: "#",
    image: DigitalImage4,
  },
  {
    icon: DigitalIcon5,
    title: "Phishing & email security.",
    desc: "Protect against BEC, spoofing, and malicious email threats.",
    link: "#",
    image: DigitalImage5,
  },
];

const DigitalAssets = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const scrollTriggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);

    if (cards.length === 0) return;

    // Wait for other ScrollTriggers to be set up first
    const setupTimeout = setTimeout(() => {
      ScrollTrigger.refresh();

      // Set initial positions - all cards start stacked at bottom offscreen
      cards.forEach((card, index) => {
        gsap.set(card, {
          y: window.innerHeight,
          scale: 1,
          transformOrigin: "center top",
        });
      });

      // Set first card to be visible
      gsap.set(cards[0], {
        y: 0,
        scale: 1,
      });

      // Create animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${cards.length * window.innerHeight + 4500}`,
          pin: true,
          scrub: 1,
          id: "digitalAssets",
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      // Store the ScrollTrigger
      if (tl.scrollTrigger) {
        scrollTriggersRef.current.push(tl.scrollTrigger);
      }

      // Animate each card
      cards.forEach((card, index) => {
        if (index === 0) return; // First card is already visible

        const label = `card${index}`;

        tl.add(label, index);

        // Slide current card up
        tl.fromTo(
          card,
          { y: window.innerHeight, scale: 1 },
          {
            y: 0,
            duration: 1,
            ease: "none",
          },
          label
        );

        // Stack previous cards
        for (let i = 0; i < index; i++) {
          const stackOffset = (index - i) * 10;
          const stackScale = 0.9 - (index - i) * 0.05;

          tl.to(
            cards[i],
            {
              y: -stackOffset,
              scale: stackScale,
              duration: 0.6,
              ease: "none",
            },
            label
          );
        }
      });
    }, 100);

    // Cleanup
    return () => {
      clearTimeout(setupTimeout);
      scrollTriggersRef.current.forEach((trigger) => {
        if (trigger) trigger.kill();
      });
      scrollTriggersRef.current = [];
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative">
      <div className="pt-10 pb-20">
        <h1 className="text-[64px] leading-[121%] text-[#0C0D0E] font-medium text-center mb-20">
          Securing Every Layer of <br />
          <span className="text-primary">Your Digital Assets.</span>
        </h1>

        <div
          ref={cardsContainerRef}
          className="relative w-full flex flex-col items-center justify-center"
          style={{ height: "50vh" }}
        >
          {DigitalAssetsContent.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="
    card absolute 
    rounded-2xl shadow-lg p-8 max-w-6xl w-full py-20 px-20
    bg-[linear-gradient(261.12deg,#F1F2F3_12.24%,#E2E4E5_99.23%)]
  "
              style={{
                zIndex: index + 1,
                transformOrigin: "top center",
              }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-1 ">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    className="w-12 h-12 mb-5"
                  />

                  <h3 className="text-[48px] leading-[100%] max-w-xl  font-medium text-[#0C0D0E] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-7 max-w-sm">{item.desc}</p>
                  <Link
                    href={item.link}
                    className="text-black bg-white px-4 py-3 rounded-full  "
                  >
                    View Services
                  </Link>
                </div>
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-75 h-75 object-cover rounded-lg "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalAssets;
