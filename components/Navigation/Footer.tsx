"use client";
import Layout from "@/layout/Layout";
import React from "react";
import { companyLogoFooter, LinkedinLogo } from "../Reusable/Images";
import Image from "next/image";
import Link from "next/link";
import { Footer_LINKS } from "@/constants/Nav";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const linkVariants = {
    hover: {
      x: 5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const logoVariants = {
    hover: {
      scale: 1.05,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <Layout className="py-4">
      {/* Outer gradient border container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="rounded-[16px] p-[1px] relative"
        style={{
          background:
            "linear-gradient(263.26deg, #706F6F 6.51%, #D6D3D3 59.17%, #706F6F 100%)",
        }}
      >
        {/* layer blur gradient */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] z-[9999] pointer-events-none"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #324EEF 0%, #15121D 100%)",
            filter: "blur(200px)",
            WebkitFilter: "blur(200px)",
          }}
        />
        <div
          className="flex flex-col items-center justify-start text-white py-10 h-[737px] px-5 md:px-10 gap-20  pt-20 rounded-[15px] relative z-[10000]"
          style={{
            background:
              "linear-gradient(267.69deg, #0E1325 -2.87%, #0C0C0D 134.97%)",
            backdropFilter: "blur(66.0999984741211px)",
            WebkitBackdropFilter: "blur(66.0999984741211px)",
          }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-row items-start justify-between  w-full  gap-8"
          >
            {/* Quick Links */}
            <motion.div variants={columnVariants} className="flex flex-col gap-3 flex-shrink-0">
              <h1 className="text-[20px] font-medium mb-2 whitespace-nowrap">
                {Footer_LINKS[0].name}
              </h1>
              {Footer_LINKS[0].dropdown.map((item, index) => (
                <motion.div key={index} variants={linkVariants} whileHover="hover">
                  <Link
                    href={item.link}
                    className="text-[#D0D5DDB2] hover:text-white transition-colors text-[16px] whitespace-nowrap inline-block"
                  >
                    {"name" in item ? item.name : item.title}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Cyber Security Projects */}
            <motion.div variants={columnVariants} className="flex flex-col gap-3 max-w-[280px] flex-shrink-0">
              <h1 className="text-[20px] font-medium mb-2 break-words">
                {Footer_LINKS[1].name}
              </h1>
              {Footer_LINKS[1].dropdown.map((item, index) => (
                <motion.div key={index} variants={linkVariants} whileHover="hover">
                  <Link
                    href={item.link}
                    className="text-[#D0D5DDB2] hover:text-white transition-colors text-[16px] break-words inline-block"
                  >
                    {"title" in item ? item.title : item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Managed Protection */}
            <motion.div variants={columnVariants} className="flex flex-col gap-3 max-w-[280px] flex-shrink-0">
              <h1 className="text-[20px] font-medium mb-2 break-words">
                {Footer_LINKS[2].name}
              </h1>
              {Footer_LINKS[2].dropdown.map((item, index) => (
                <motion.div key={index} variants={linkVariants} whileHover="hover">
                  <Link
                    href={item.link}
                    className="text-[#D0D5DDB2] hover:text-white transition-colors text-[16px] break-words inline-block"
                  >
                    {"title" in item ? item.title : item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={columnVariants} className="flex flex-col gap-5 space-y-5 flex-shrink-0 min-w-[250px]">
              <div>
                <h1 className="text-[20px] font-medium break-words">
                  Sales & Support Enquiries
                </h1>
                <motion.p
                  whileHover={{ color: "#ffffff" }}
                  transition={{ duration: 0.2 }}
                  className="text-[#D0D5DDB2] break-all cursor-pointer"
                >
                  business@vesenex.com
                </motion.p>
              </div>
              <div>
                <h1 className="text-[20px] font-medium whitespace-nowrap">
                  Our Office Address
                </h1>
                <p className="text-[#D0D5DDB2] text-[16px] font-light max-w-[200px] break-words leading-relaxed">
                  Suite 329 98-100 Elizabeth St Melbourne VIC 3000 Australia.
                </p>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div variants={columnVariants} className="flex-shrink-0">
              <motion.div variants={logoVariants} whileHover="hover">
                <Image
                  src={LinkedinLogo}
                  alt="Linkedin Vesenex"
                  className="w-14 cursor-pointer"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full"
          >
            <div className="flex flex-row justify-between items-center text-[#ACABB2] w-full font-light ">
              <h1>Copyright {currentYear} - Vesenex</h1>
              <h1>
                Design & Developed By{" "}
                <Link
                  href="https://www.theinternetcompany.one/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  TIC
                </Link>
              </h1>
              <Link href="/terms-policy" className="hover:text-white transition-colors">Terms & Policy</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Guideline</Link>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Image
                src={companyLogoFooter}
                alt="Vesenex Logo"
                className="w-full h-full"
                width={2000}
                height={2000}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Footer;