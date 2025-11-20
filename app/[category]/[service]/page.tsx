import Hero from "@/components/Shared/Hero";
import Content from "@/components/Shared/Content";
import GridLayout from "@/components/Shared/GridLayout";
import ImgSeq from "@/components/Shared/ImgSeq";
import Why from "@/components/Shared/Why";
import Faq from "@/components/Shared/Faq";
import { serviceData } from "@/data/Services";
import { ServiceInfo } from "@/types/service";
import { notFound } from "next/navigation";
import React from "react";

interface PageProps {
  params: {
    category: string;
    service: string;
  };
}

export default function ServicePage({ params }: PageProps) {
  const { category, service } = params;

  // Get the service data
  const categoryData = serviceData[category];
  
  if (!categoryData) {
    notFound();
  }

  const serviceInfo = categoryData[service] as ServiceInfo;

  if (!serviceInfo) {
    notFound();
  }

  return (
    <div>
      {/* Hero Section */}
      <Hero
        webVideo={serviceInfo.bannerVideoWeb}
        mobileVideo={serviceInfo.bannerVideoMobile}
        title={serviceInfo.title}
        description=""
      />
      <Content text={serviceInfo.AnimatedText} />
      <GridLayout title={serviceInfo.gridTitle} items={serviceInfo.grid} />
      <ImgSeq folderPath={serviceInfo.imgSeq} totalFrames={serviceInfo.totalFrames} />
      <Why items={serviceInfo.why} />
      <Faq items={serviceInfo.faq} />
    </div>
  );
}

// Generate static params for all service pages
export async function generateStaticParams() {
  const params: { category: string; service: string }[] = [];

  Object.keys(serviceData).forEach((category) => {
    const categoryServices = serviceData[category as keyof typeof serviceData];
    Object.keys(categoryServices).forEach((service) => {
      params.push({
        category,
        service,
      });
    });
  });

  return params;
}
