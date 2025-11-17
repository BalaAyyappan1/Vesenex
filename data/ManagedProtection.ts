import {
  DetectionHeroBanner,
  Resilience1,
  Resilience2,
  Resilience3,
  Resilience4,
  Resilience5,
} from "@/components/Reusable/Images";

export const serviceData = {
  "managed-protection": {
    "managed-detection-response": {
      slug: "managed-detection-response",
      title: "Managed Detection & Response",
      bannerVideoWeb: DetectionHeroBanner,
      bannerVideoMobile: DetectionHeroBanner,
      AnimatedText:
        "Vesenex MDR is your always-on cyber shield, combining real-time monitoring, proactive threat hunting, and instant responses to stop attacks before they cause chaos.",
      gridTitle: "From Risk to Resilience",
      grid: [
        {
          name: "Around-the-Clock Security",
          desc: "We at Vesenex continuously monitor endpoints, networks, and cloud environments for suspicious activity, ensuring early detection and rapid containment before threats escalate.",
          img: Resilience1,
        },
        {
          name: "Faster Incident Response",
          desc: "We minimise downtime by quickly isolating compromised systems, stopping lateral movement, and initiating recovery protocols within minutes, not hours.",
          img: Resilience2,
        },
        {
          name: "Reduced False Positives",
          desc: "Our advanced analytics and tuned detection cut through false positives, allowing your team to focus on genuine security incidents.",
          img: Resilience3,
        },
        {
          name: "Zero Non-Compliance Headaches",
          desc: "Built-in logging, reporting, and forensic data collection help you meet frameworks like ASD Essential Eight, NIST and ISO 27001 without additional overhead.",
          img: Resilience4,
        },
        {
          name: "Assured Business Continuity",
          desc: "By containing incidents in their nascent stage, we help ensure your systems online and critical operations remain uninterrupted. ",
          img: Resilience5,
        },
      ],
      imgSeq: "/seq/detection",
      why: [
        {
          title: "Adaptive Detection Methods",
          desc: "Our approach is based on the combination of AI-powered analytics with behavioural baselining. As attacker tactics evolve, our detection logic evolves with them — closing the gap between compromise and containment.",
        },
        {
          title: "Dedicated Cyber Advisor",
          desc: "You get a named security expert who knows your infrastructure inside out. They streamline incident handling, coordinate investigations, and keep you updated without drowning you in technical noise.",
        },
        {
          title: "Enterprise-Grade Security Stack",
          desc: "Our MDR platform integrates advanced SIEM, EDR, and SOAR capabilities. This is the same caliber used by Fortune 500 companies, but ours is specifically designed to address the needs of small and mid-sized companies",
        },
        {
          title: "Local Expertise With Global Threat Intelligence",
          desc: "Our Australian-based SOC analysts understand local compliance requirements while tapping into live global threat intelligence feeds, so you’re shielded from both regional and worldwide attack campaigns.",
        },
        {
          title: "Continuous Optimization",
          desc: "We continually fine-tune your MDR environment by adapting to new threat intelligence, incident patterns, and infrastructure changes, keeping protection sharp and relevant.",
        },
      ],
      faq: [
        {
          ques: "What is Managed Detection and Response (MDR)?",
          ans: "MDR is a cybersecurity service that blends advanced monitoring tools, global threat intelligence, and expert human analysis to spot and stop threats around the clock. It’s not just about having antivirus or firewalls in place; it’s about actively hunting for unusual activity and stepping in to contain issues before they disrupt your business. ",
        },
        {
          ques: "How does MDR protect my business?",
          ans: "We keep a constant watch over your endpoints, networks, and cloud workloads. If something suspicious pops up, our security team investigates right away. If it’s confirmed as a threat, we move fast to contain it, isolating devices, blocking malicious connections, or disabling compromised accounts before the damage spreads.",
        },
        {
          ques: "How quickly can you respond to a threat?",
          ans: "Speed matters. In most cases, our analysts start containment within minutes of confirming a threat. Automated safeguards kick in immediately for critical incidents, while our team works on a deeper investigation and resolution",
        },
        {
          ques: "Does my company still need an in-house IT or security team if we have MDR?",
          ans: "Yes, but MDR will take a huge load off their shoulders. We handle 24/7 monitoring, threat hunting, and incident response so your internal team can focus on keeping systems running smoothly and handling on-site fixes.",
        },
        {
          ques: "Is MDR compliant with Australian security standards?",
          ans: "Absolutely. Our services are aligned with key frameworks like ASD Essential Eight, ISO 27001, and NIST. All data is handled under Australian privacy laws.",
        },
        {
          ques: "How much does MDR cost?",
          ans: "Costs depend on factors like the number of endpoints, your IT environment, and the level of coverage you need. We offer clear, predictable pricing so you can get enterprise-level protection without any surprise expenses.",
        },
      ],
    },
    "manageg-siem": {
      slug: "managed-siem",
      title: "Managed SIEM",
      bannerVideoWeb: DetectionHeroBanner,
      bannerVideoMobile: DetectionHeroBanner,
      AnimatedText:
        "Vesenex Managed SIEM gives you the clarity you need, without drowning you in false alarms. We combine continuous log monitoring, advanced analytics, and expert human oversight to detect threats early and guide fast, effective responses.",
      gridTitle: "From Security Visibility to Proactive Threat Response",
      grid: [
        {
          name: "Centralised Log Management",
          desc: "We collect and unify security events from across your network, cloud, and endpoints, giving you a single, clear view of your entire security landscape. This means no more chasing alerts across multiple tools.",
          img: Resilience1,
        },
        {
          name: "Advanced Threat Correlation",
          desc: "Our SIEM platform uses behavioural analytics and threat intelligence feeds to connect the dots between seemingly unrelated events, spotting attacks that would otherwise slip under the radar.",
          img: Resilience2,
        },
        {
          name: "Rapid Incident Detection",
          desc: "We filter out the noise, flag real threats, and alert you with clear next steps. Our focus is on speed and accuracy, so you can act before the damage is done.",
          img: Resilience3,
        },
        {
          name: "Compliance-Ready Reporting",
          desc: "From ISO 27001 to ASD Essential Eight, our built-in reporting helps you tick compliance boxes with minimal effort while keeping auditors happy.",
          img: Resilience4,
        },
        {
          name: "Expert Oversight 24/7",
          desc: "Our Australian-based security team monitors your SIEM around the clock, ensuring nothing suspicious gets ignored — no matter when it happens.",
          img: Resilience5,
        },
      ],
      imgSeq: "/seq/detection",
      why: [
        {
          title: "Tailored SIEM Deployment",
          desc: "We fine-tune the SIEM to your environment and business priorities, so it works for you — not the other way around.",
        },
        {
          title: "Actionable Intelligence",
          desc: "Our approach focuses on SIEM transformation of raw logs into insights that protect brand trust, reduce financial risk, and improve incident response speed.",
        },
        {
          title: "Proactive Threat Hunting",
          desc: "We don’t wait for alerts to pop up. Our analysts actively search for hidden threats lurking in your logs, closing gaps before attackers exploit them.",
        },
        {
          title: "Scalable for Growth",
          desc: "Whether you have 50 endpoints or 5,000, our Managed SIEM grows with your business, ensuring you’re never under-protected.",
        },
        {
          title: "Continuous Optimisation",
          desc: "We constantly review and adjust correlation rules, detection logic, and data sources to ensure your SIEM stays ahead of evolving threats.",
        },
      ],
      faq: [
        {
          ques: "",
          ans: " ",
        },
        {
          ques: "",
          ans: "",
        },
        {
          ques: "",
          ans: "",
        },
        {
          ques: "",
          ans: "",
        },
        {
          ques: "",
          ans: "",
        },
        {
          ques: "",
          ans: "",
        },
      ],
    },
    "Endpoint-security": {
      slug: "managed-siem",
      title: "Managed SIEM",
      bannerVideoWeb: DetectionHeroBanner,
      bannerVideoMobile: DetectionHeroBanner,
      AnimatedText:
        "Vesenex Managed SIEM gives you the clarity you need, without drowning you in false alarms. We combine continuous log monitoring, advanced analytics, and expert human oversight to detect threats early and guide fast, effective responses.",
      gridTitle: "From Security Visibility to Proactive Threat Response",
      grid: [
        {
          name: "",
          desc: "",
          img: Resilience1,
        },
        {
          name: "",
          desc: "",
          img: Resilience2,
        },
        {
          name: "",
          desc: "",
          img: Resilience3,
        },
        {
          name: "",
          desc: "",
          img: Resilience4,
        },
        {
          name: "",
          desc: "",
          img: Resilience5,
        },
      ],
      imgSeq: "/seq/detection",
      why: [
        {
          title: "",
          desc: "",
        },
        {
          title: "",
          desc: "",
        },
        {
          title: "",
          desc: "",
        },
        {
          title: "",
          desc: "",
        },
        {
          title: "",
          desc: "",
        },
      ],
      faq: [
        {
          ques: "",
          ans: " ",
        },
        {
          ques: "",
          ans: "",
        },
        {
          ques: "",
          ans: "",
        },
        {
          ques: "",
          ans: "",
        },
        {
          ques: "",
          ans: "",
        },
        {
          ques: "",
          ans: "",
        },
      ],
    },

        "managed-firewall-security": {
      slug: "managed-siem",
      title: "Managed SIEM",
      bannerVideoWeb: DetectionHeroBanner,
      bannerVideoMobile: DetectionHeroBanner,
      AnimatedText:
        "Vesenex Managed SIEM gives you the clarity you need, without drowning you in false alarms. We combine continuous log monitoring, advanced analytics, and expert human oversight to detect threats early and guide fast, effective responses.",
      gridTitle: "From Security Visibility to Proactive Threat Response",
      grid: [
        {
          name: "",
          desc: "",
          img: Resilience1,
        },
        {
          name: "",
          desc: "",
          img: Resilience2,
        },
        {
          name: "",
          desc: "",
          img: Resilience3,
        },
        {
          name: "",
          desc: "",
          img: Resilience4,
        },
        {
          name: "",
          desc: "",
          img: Resilience5,
        },
      ],
      imgSeq: "/seq/detection",
      why: [
        {
          title: "",
          desc: "",
        },
        {
          title: "",
          desc: "",
        },
        {
          title: "",
          desc: "",
        },
        {
          title: "",
          desc: "",
        },
        {
          title: "",
          desc: "",
        },
      ],
      faq: [
        {
          ques: "",
          ans: " ",
        },
        {
          ques: "",
          ans: "",
        },
        {
          ques: "",
          ans: "",
        },
        {
          ques: "",
          ans: "",
        },
        {
          ques: "",
          ans: "",
        },
        {
          ques: "",
          ans: "",
        },
      ],
    },
  },

  "cyber-security-projects" :{
"Phisihing": {
      slug: "managed-detection-response",
      title: "Managed Detection & Response",
      bannerVideoWeb: DetectionHeroBanner,
      bannerVideoMobile: DetectionHeroBanner,
      AnimatedText:
        "Vesenex MDR is your always-on cyber shield, combining real-time monitoring, proactive threat hunting, and instant responses to stop attacks before they cause chaos.",
      gridTitle: "From Risk to Resilience",
      grid: [
        {
          name: "Around-the-Clock Security",
          desc: "We at Vesenex continuously monitor endpoints, networks, and cloud environments for suspicious activity, ensuring early detection and rapid containment before threats escalate.",
          img: Resilience1,
        },
        {
          name: "Faster Incident Response",
          desc: "We minimise downtime by quickly isolating compromised systems, stopping lateral movement, and initiating recovery protocols within minutes, not hours.",
          img: Resilience2,
        },
        {
          name: "Reduced False Positives",
          desc: "Our advanced analytics and tuned detection cut through false positives, allowing your team to focus on genuine security incidents.",
          img: Resilience3,
        },
        {
          name: "Zero Non-Compliance Headaches",
          desc: "Built-in logging, reporting, and forensic data collection help you meet frameworks like ASD Essential Eight, NIST and ISO 27001 without additional overhead.",
          img: Resilience4,
        },
        {
          name: "Assured Business Continuity",
          desc: "By containing incidents in their nascent stage, we help ensure your systems online and critical operations remain uninterrupted. ",
          img: Resilience5,
        },
      ],
      imgSeq: "/seq/detection",
      why: [
        {
          title: "Adaptive Detection Methods",
          desc: "Our approach is based on the combination of AI-powered analytics with behavioural baselining. As attacker tactics evolve, our detection logic evolves with them — closing the gap between compromise and containment.",
        },
        {
          title: "Dedicated Cyber Advisor",
          desc: "You get a named security expert who knows your infrastructure inside out. They streamline incident handling, coordinate investigations, and keep you updated without drowning you in technical noise.",
        },
        {
          title: "Enterprise-Grade Security Stack",
          desc: "Our MDR platform integrates advanced SIEM, EDR, and SOAR capabilities. This is the same caliber used by Fortune 500 companies, but ours is specifically designed to address the needs of small and mid-sized companies",
        },
        {
          title: "Local Expertise With Global Threat Intelligence",
          desc: "Our Australian-based SOC analysts understand local compliance requirements while tapping into live global threat intelligence feeds, so you’re shielded from both regional and worldwide attack campaigns.",
        },
        {
          title: "Continuous Optimization",
          desc: "We continually fine-tune your MDR environment by adapting to new threat intelligence, incident patterns, and infrastructure changes, keeping protection sharp and relevant.",
        },
      ],
      faq: [
        {
          ques: "What is Managed Detection and Response (MDR)?",
          ans: "MDR is a cybersecurity service that blends advanced monitoring tools, global threat intelligence, and expert human analysis to spot and stop threats around the clock. It’s not just about having antivirus or firewalls in place; it’s about actively hunting for unusual activity and stepping in to contain issues before they disrupt your business. ",
        },
        {
          ques: "How does MDR protect my business?",
          ans: "We keep a constant watch over your endpoints, networks, and cloud workloads. If something suspicious pops up, our security team investigates right away. If it’s confirmed as a threat, we move fast to contain it, isolating devices, blocking malicious connections, or disabling compromised accounts before the damage spreads.",
        },
        {
          ques: "How quickly can you respond to a threat?",
          ans: "Speed matters. In most cases, our analysts start containment within minutes of confirming a threat. Automated safeguards kick in immediately for critical incidents, while our team works on a deeper investigation and resolution",
        },
        {
          ques: "Does my company still need an in-house IT or security team if we have MDR?",
          ans: "Yes, but MDR will take a huge load off their shoulders. We handle 24/7 monitoring, threat hunting, and incident response so your internal team can focus on keeping systems running smoothly and handling on-site fixes.",
        },
        {
          ques: "Is MDR compliant with Australian security standards?",
          ans: "Absolutely. Our services are aligned with key frameworks like ASD Essential Eight, ISO 27001, and NIST. All data is handled under Australian privacy laws.",
        },
        {
          ques: "How much does MDR cost?",
          ans: "Costs depend on factors like the number of endpoints, your IT environment, and the level of coverage you need. We offer clear, predictable pricing so you can get enterprise-level protection without any surprise expenses.",
        },
      ],
    },
  }
};