import React, { useState } from "react";
import { certifDetails } from "../Details";

function Certificate() {
  const [selectedCertif, setSelectedCertif] = useState(null);

  const handleCertifClick = (certif) => {
    setSelectedCertif(certif);
  };

  const handleClosePopup = () => {
    setSelectedCertif(null);
  };

  return (
    <div>
      <h1 className="text-xl text-cream dark:text-cream md:text-3xl xl:text-4xl xl:leading-tight font-bold">
        Certifications
      </h1>
      <p className="text-content dark:text-content py-8 lg:max-w-3xl">
      Learning through Information Technology I've achieved three certifications which are {""}
        <span onClick={() => handleCertifClick(certifDetails.certif1)} className="text-content py-8 lg:max-w-3xl cursor-pointer hover:text-cream">
          understanding kotlin concepts for android,
        </span> 
        {certifDetails.certif1.text.replace("understanding kotlin concepts for android", "")} {""}
        <span onClick={() => handleCertifClick(certifDetails.certif2)} className="text-content py-8 lg:max-w-3xl cursor-pointer hover:text-cream">
          get to know the basics of java,
        </span> 
        {certifDetails.certif2.text.replace("get to know the basics of java", "")} and {""}
        <span onClick={() => handleCertifClick(certifDetails.certif3)} className="text-content py-8 lg:max-w-3xl cursor-pointer hover:text-cream">
          get to know the kotlin programming language,
        </span> 
        {certifDetails.certif3.text.replace("get to know the kotlin programming language", "")} {""}
        all three of which I obtained from Hacktiv8.
      </p>
      {selectedCertif && selectedCertif.img && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50" 
          onClick={handleClosePopup}
        >
          <div className="relative bg-black p-0 rounded-md shadow-lg" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-0 right-2 text-black text-3xl" onClick={handleClosePopup}>
              &times;
            </button>
            <img src={selectedCertif.img} alt="Certificate" className="max-w-full max-h-[80vh]" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Certificate;
