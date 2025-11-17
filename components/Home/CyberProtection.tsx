import React from "react";
import {
  CYberProtection1,
  CYberProtection2,
  CYberProtection3,
} from "../Reusable/Images";
import Image from "next/image";

export const CyberSecurityContents = [
  {
    id: 1,
    title: "Always-On Protection",
    desc: "24/7 monitoring, threat hunting, and incident response, so that you focus on running your business.",
    img: CYberProtection1,
  },
  {
    id: 2,
    title: "Compliance-Ready",
    desc: "Aligned to ASD Essential Eight, NIST, and ISO 27001. We know that compliance isn’t just a checklist; it instead shapes your entire security posture.",
    img: CYberProtection2,
  },
  {
    id: 3,
    title: "Scalable Solutions",
    desc: "From 10 to 10,000 endpoints, our services grow with your business without slowing you down.",
    img: CYberProtection3,
  },
];

const CyberProtection = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center w-full py-20">
      <h1 className="text-[64px] leading-[121%] text-[#0C0D0E] font-medium ">
        End to End
        <span className="text-primary"> Cyber Protection</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  max-w-6xl  text-white">
        {CyberSecurityContents.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start bg-[#101010] w-[360px]  h-[448PX] rounded-[30px] shadow-lg hover:shadow-xl transition-all duration-300 p-6 space-y-4 hover:-translate-y-2"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={240}
              height={160}
              className="object-contain w-100 h-55 rounded-md border-pulse"
              style={{
                borderBottom: "1px solid",
                borderImageSource:
                  "linear-gradient(91.8deg, #131315 13.93%, #0921B0 26.14%, #324EEF 51.3%, #0921B0 66.17%, #131315 91.84%)",
                borderImageSlice: 1,
              }}
            />

            <div className="py-3">
              <h1 className="text-[28px] font-medium text-start text-[#EBEBED]">
                {item.title}
              </h1>
              <p className="text-[#D6D9DC] text-[16px] leading-[21px] text-start font-light ">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CyberProtection;
