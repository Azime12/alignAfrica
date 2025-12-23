import React from "react";
import { FileText, Download } from "lucide-react";
import HeroSection from "../components/sections/HeroSection";

// Resource card component
const ResourceCard = ({ image, title, downloadLink }) => {
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex flex-col items-center text-center">
          {/* Image */}
          <div className="mb-4 overflow-hidden rounded-lg shadow-lg">
            <img 
              src={image} 
              alt={title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          
          {/* Title */}
          <h3 className="mb-4 text-sm font-medium text-gray-800 line-clamp-3 min-h-[60px] flex items-center justify-center">
            {title}
          </h3>
          
          {/* Download Button */}
          <a
            href={downloadLink}
            download
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors w-full justify-center"
          >
            <Download size={16} />
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
};

const ResourcesPage = () => {
  // Hero section data
  const heroData = {
    title: "Resources",
    subtitle: "Access important documents, proclamations, factsheets, and research materials",
    backgroundImage: "/images/resorces.jpg",
    primaryCta: { 
      text: "Learn More", 
      link: "/about" 
    },
    secondaryCta: { 
      text: "Contact Us", 
      link: "/contact" 
    },
  };

  // Proclamations data
  const proclamations = [
    {
      id: 1,
      image: "/images/Organization-of-Civil-Societies-Proclamation-Negarit-Gazette.jpg",
      title: "Organization of Civil Societies Proclamation – Negarit Gazette",
      downloadLink: "/pdf/Proclamation_1113_2019_Organizations_of_Civil_Societies_Proclamation.pdf"
    },
    {
      id: 2,
      image: "/images/National-Youth-Policy.jpg",
      title: "Federal Democratic Republic of Ethiopia – National Youth Policy",
      downloadLink: "/pdf/Ethiopian-National-Youth-Policy.pdf"
    },
    {
      id: 3,
      image: "/images/National-Adolecent-and-Youth-Health-Strategy.jpg",
      title: "National Adolescent and Youth Health Strategy (2016 – 2020)",
      downloadLink: "/pdf/Ethiopian_National_Adolescent_and_Youth_Health_Strategy_2016_2020.pdf"
    },
    {
      id: 4,
      image: "/images/Ethiopia-Demographic-and-Health-Survey.jpg",
      title: "Ethiopia Demographic and Health Survey",
      downloadLink: "/pdf/Ethiopian Demographic and Health Survery 2016.pdf"
    },
    {
      id: 5,
      image: "/images/National-Costed-Roadmap-to-End-Child-Marriage-and-FGM-C.jpg",
      title: "National Costed Roadmap to End Child Marriage and FGM-C",
      downloadLink: "/pdf/National_Costed_Roadmap_to_End_Child_Marriage_and_FGM_C_2020_2024.pdf"
    }
  ];

  // Factsheets data
  const factsheets = [
    {
      id: 1,
      image: "/images/Adding-It-Up-Investing-in-Contraception-and-Maternal-and-Newboarn-Health-in-Ethiopia-2018.jpg",
      title: "Adding It Up – Investing in Contraception and Maternal and Newborn Health in Ethiopia – 2018",
      downloadLink: "/pdf/Adding_It_Up_Investing_in_Contraception_and_Maternal_and_Newborn.pdf"
    },
    {
      id: 2,
      image: "/images/Induced-Abortion-and-Postabortion-Care-in-Ethiopia.jpg",
      title: "Induced Abortion and Postabortion Care in Ethiopia",
      downloadLink: "/pdf/Induced-Abortion-and-Postabortion-Care-in-Ethiopia.pdf"
    },
    {
      id: 3,
      image: "/images/ያለእድሜ-ጋብቻ.jpg",
      title: "ያለእድሜ ጋብቻ",
      downloadLink: "/pdf/Child-Marriage-in-Ethiopia.pdf"
    },
    {
      id: 4,
      image: "/images/ወጣትነትና-የስነ-ተዋልዶ-ጤና-ገጽታዎች.jpg",
      title: "ወጣትነትና የስነ-ተዋልዶ ጤና ገጽታዎች",
      downloadLink: "/pdf/Youth and SRH - Yes I Do Factsheet.pdf"
    },
    {
      id: 5,
      image: "/images/Factsheet-on-Adolescent-Health-Services-Barriers-Assessment-AHSB-Report-in-Ethiopia.jpg",
      title: "Factsheet on Adolescent Health Services Barriers Assessment (AHSB) Report in Ethiopia",
      downloadLink: "/pdf/Factsheet_on_Adolescent_Health_Services_Barriers_Assessment_AHSB.pdf"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection {...heroData} />

      <main className="py-12">
        <div className="container px-4 mx-auto">
          <article>
            {/* Proclamations Section */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-red-100 rounded-lg">
                  <img 
                    src="/images/doc-icon.png" 
                    alt="Document Icon"
                    className="w-8 h-8"
                  />
                </div>
                <h1 className="text-3xl font-bold text-gray-900">Proclamations & Related</h1>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {proclamations.map((resource) => (
                  <ResourceCard
                    key={resource.id}
                    image={resource.image}
                    title={resource.title}
                    downloadLink={resource.downloadLink}
                  />
                ))}
              </div>
            </section>

            {/* Middle Banner */}
            <div className="my-12">
              <hr className="mb-8 border-gray-300" />
              <div className="overflow-hidden rounded-xl">
                <img 
                  src="/images/factsheet.jpg" 
                  alt="Factsheet Banner"
                  className="w-full h-auto object-cover rounded-xl shadow-lg"
                  loading="lazy"
                />
              </div>
              <hr className="mt-8 border-gray-300" />
            </div>

            {/* Factsheets Section */}
            <section className="mt-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-red-100 rounded-lg">
                  <FileText className="text-red-600" size={24} />
                </div>
                <h1 className="text-3xl font-bold text-gray-900">FACTSHEETS</h1>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {factsheets.map((resource) => (
                  <ResourceCard
                    key={resource.id}
                    image={resource.image}
                    title={resource.title}
                    downloadLink={resource.downloadLink}
                  />
                ))}
              </div>
            </section>
          </article>
        </div>
      </main>
    </div>
  );
};

export default ResourcesPage;