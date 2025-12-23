const ResourceCard = ({ title, image, file }) => {
  return (
    <div className="flex flex-col items-center p-4 text-center transition bg-white shadow-md rounded-xl hover:shadow-xl">
      <img
        src={image}
        alt={title}
        className="w-[150px] h-auto rounded-md shadow"
      />

      <p className="mt-4 text-sm font-medium text-gray-700">
        {title}
      </p>

      <a
        href={file}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block px-4 py-2 text-sm font-semibold text-white bg-[#236fa1] rounded-full hover:bg-[#1b567f] transition"
      >
        Download
      </a>
    </div>
  );
};

export default ResourceCard;
