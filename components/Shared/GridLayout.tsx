import Layout from "@/layout/Layout";
import React from "react";

interface GridLayoutProps {
  title: string;
}

const CONTENTS = [
  {
    no: "01",
    title: "Community Builders",
    desc: "Create spaces where people feel connected and inspired.",
    img: "https://ik.imagekit.io/99y1fc9mh/Aauraa/Background+Shadow.png?updatedAt=1763028852041",
  },
  {
    no: "02",
    title: "Coaches & Mentors",
    desc: "Our advanced analytics and tuned detection cut through false positives, allowing your team to focus on genuine security incidents.",
    img: "https://ik.imagekit.io/99y1fc9mh/Aauraa/Background+Shadow%20(1).png?updatedAt=1763028851901",
  },
  {
    no: "03",
    title: "Event Hosts & Organizers",
    desc: "Our advanced analytics and tuned detection cut through false positives, allowing your team to focus on genuine security incidents.",
    img: "https://ik.imagekit.io/99y1fc9mh/Aauraa/Background+Shadow%20(2).png?updatedAt=1763028851912",
  },
  {
    no: "04",
    title: "Small Business Owners",
    desc: "Find niche communities, network, and promote your initiatives.",
    img: "https://ik.imagekit.io/99y1fc9mh/Aauraa/Background+Shadow%20(3).png?updatedAt=1763028851985",
  },
  {
    no: "05",
    title: "Everyday Seekers",
    desc: "Those looking to belong, explore new passions, and find their vibe.",
    img: "https://ik.imagekit.io/99y1fc9mh/Aauraa/Frame%2035.png?updatedAt=1763028851048",
  },
];

const GridLayout: React.FC<GridLayoutProps> = ({ title }) => {
  return (
    <Layout>
<div className="w-full py-10">

      {/* Title */}

      {/* First Row - 2 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">{title}</h1>

        {CONTENTS.slice(0, 2).map((item) => (
          <div
            key={item.no}
            className="rounded-[16px] shadow-md bg-[#0C0D0E] h-[550px] p-6 flex flex-col items-start border"
          >
           <img
              src={item.img}
              alt={item.title}
              className="w-full h-[359px] object-cover mb-4 select-none rounded-[8px]"
            />
                <h2 className="text-[28px] text-[#F1F2F3] font-medium mt-2">{item.title}</h2>


            <p className="text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Second Row - 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
        {CONTENTS.slice(2, 5).map((item) => (
          <div
            key={item.no}
            className="rounded-[16px] shadow-md bg-[#0C0D0E] h-[550px] p-4 flex flex-col items-start  border"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[359px] object-cover mb-4 select-none rounded-[8px]"
            />
            <h2 className="text-[28px] text-[#F1F2F3] font-medium mt-2">{item.title}</h2>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
    </Layout>
    
  );
};

export default GridLayout;
