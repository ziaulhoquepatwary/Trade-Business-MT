import { Building2, FileText, Globe2, Leaf, ShieldCheck, Snowflake } from "lucide-react";

export const services = [
    {
        id: "cold-chain",
        icon: Snowflake,
        shortTitle: "Cold Chain & Logistics",
        subtitle: "End-to-End Temperature Control",
        badge: "HACCP CCP Compliant",
        description: "We engineer and manage end-to-end temperature-controlled supply chains for perishable seafood commodities. From harvest origin to destination port, every link in the chain is monitored, documented, and guaranteed.",
        features: [
            "Continuous IoT temperature monitoring throughout transit",
            "Reefer container management (FCL & LCL)",
            "Active cold storage coordination at transshipment hubs",
            "Temperature deviation alerts and incident response protocols",
            "Full cold chain audit trail documentation for compliance",
            "Partnership with certified cold chain logistics providers globally",
        ],
        tags: ["IoT Monitoring", "Reefer FCL/LCL", "Cold Chain Audit"]
    },
    {
        id: "qa-compliance",
        icon: ShieldCheck,
        shortTitle: "Quality & Compliance",
        subtitle: "HACCP & ISO Food Safety Standards",
        badge: "MSC, ASC, BAP Certified",
        description: "Our QA framework operates under internationally recognized food safety standards. We enforce rigorous inspection and documentation protocols that satisfy the most demanding regulatory environments.",
        features: [
            "HACCP-compliant inspection protocols at point of origin",
            "ISO 22000 food safety management system compliance",
            "Third-party laboratory analysis and species verification",
            "Catch certificate verification (IUU compliance)",
            "Pre-shipment sensory and microbiological testing",
            "Certificate of Conformity issued per consignment",
        ],
        tags: ["ISO 22000", "IUU Compliance", "Lab Verification"]
    },
    {
        id: "customs",
        icon: FileText,
        shortTitle: "Customs & Documentation",
        subtitle: "Brokerage & Regulatory Clearance",
        badge: "HMRC & UK Border Registered",
        description: "International seafood trade involves complex multi-jurisdiction paperwork. Our documentation team eliminates port delays and customs holds by ensuring every consignment arrives pre-verified.",
        features: [
            "Full customs declaration preparation and filing",
            "Health certificates and sanitary import permits",
            "EU/UK/USA/Asia import clearance management",
            "Certificate of Origin and EUR.1 movement certificates",
            "CITES documentation for regulated species",
            "Dangerous goods and cold chain declarations",
        ],
        tags: ["Sanitary Permits", "CITES Certs", "Zero Delays"]
    },
    {
        id: "b2b-procurement",
        icon: Building2,
        shortTitle: "B2B Procurement",
        subtitle: "Enterprise Volume Sourcing",
        badge: "Min Order: 1 MT (FCL Preferred)",
        description: "We act as a dedicated procurement arm for large-scale buyers requiring consistent, high-volume supply on fixed commercial terms with preferential market access.",
        features: [
            "Long-term supply contracts with fixed or indexed pricing",
            "Dedicated sourcing for hotels, airlines, and supermarkets",
            "Exclusive forward purchase agreements with key fisheries",
            "Volume-tiered pricing structures negotiated on your behalf",
            "Supplier vetting, factory audits, and onboarding",
            "Market intelligence and commodity pricing reports",
        ],
        tags: ["Long-term Contracts", "Hotel & Airlines", "Volume Pricing"]
    },
    {
        id: "packaging",
        icon: Leaf,
        shortTitle: "Eco Packaging",
        subtitle: "Sustainable Cold Chain Solutions",
        badge: "UK Plastic Tax & EU Green Deal",
        description: "We offer packaging solutions that meet both international cold chain integrity requirements and modern environmental standards without compromising protection.",
        features: [
            "FSC-certified corrugated outer cartons",
            "Biodegradable and recyclable inner packaging liners",
            "Reduced-plastic master carton configurations",
            "Phase-change material (PCM) gel packs replacing dry ice",
            "Carbon-neutral packaging offset programmes",
            "Custom labelling compliant with destination regulations",
        ],
        tags: ["FSC Certified", "PCM Gel Packs", "Zero-Dry Ice"]
    },
    {
        id: "global-sourcing",
        icon: Globe2,
        shortTitle: "International Sourcing",
        subtitle: "Direct Fishery Access",
        badge: "Sustainable Aquaculture",
        description: "Direct relationships with industrial fisheries and sustainable aquaculture facilities globally, securing premium volume before it hits the open market.",
        features: [
            "Direct origin procurement from industrial fisheries",
            "Sustainable aquaculture partnership programs",
            "Pre-market volume reservation capabilities",
            "Multi-region supply diversification strategy",
            "Traceability tracking from harvest location",
            "Ethical sourcing protocol enforcement",
        ],
        tags: ["Pre-Market Access", "Origin Sourcing", "Direct Access"]
    },
];