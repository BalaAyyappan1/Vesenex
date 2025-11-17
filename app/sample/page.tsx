import GridLayout from "@/components/Shared/GridLayout";
import Hero from "@/components/Shared/Hero";
import ImgSeq from "@/components/Shared/ImgSeq";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero
        webVideo={"/videos/detection/detection.mp4"}
        mobileVideo={"/videos/detection/mble.mp4"}
      />
      <GridLayout
        title={"From Security Visibility to Proactive Threat Response"}
      />
      <ImgSeq folderPath="/seq/detection/frame_" totalFrames={600} />
    </div>
  );
};

export default page;
