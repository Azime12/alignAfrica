import ResourceCard from "../components/ResourceCard";
import { proclamations, factsheets } from "../data/resources";

const Resources = () => {
  return (
    <main className="bg-gray-50">

      {/* Hero Header */}
      <section
        className="h-[300px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/resorces.jpg')" }}
      >
        <h1 className="text-4xl font-bold text-white md:text-5xl drop-shadow-lg">
          Resources
        </h1>
      </section>

      {/* Content */}
      <section className="px-4 py-16 mx-auto max-w-7xl">

        {/* Proclamations */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <img src="/images/doc-icon.png" alt="" className="w-8" />
            <h2 className="text-3xl font-bold text-gray-800">
              Proclamation & Related
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {proclamations.map((item, index) => (
              <ResourceCard key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Divider Image */}
        <div className="flex justify-center my-16">
          <img
            src="/images/factsheet.jpg"
            alt="Factsheet"
            className="max-w-full shadow-lg rounded-xl"
          />
        </div>

        {/* Factsheets */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <img src="/images/doc-icon.png" alt="" className="w-8" />
            <h2 className="text-3xl font-bold text-gray-800">
              Factsheets
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {factsheets.map((item, index) => (
              <ResourceCard key={index} {...item} />
            ))}
          </div>
        </div>

      </section>
    </main>
  );
};

export default Resources;
