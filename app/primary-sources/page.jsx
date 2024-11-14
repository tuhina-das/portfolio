"use client";

import { useState } from "react";

const PrimarySources = () => {
  const [selectedPDF, setSelectedPDF] = useState(null);
  const [error, setError] = useState(null);

  const openPDF = async (pdfName) => {
    const pdfPath = `/assets/primary_pdfs/${pdfName}`;

    try {
      const response = await fetch(pdfPath);

      if (!response.ok) {
        throw new Error(`PDF not found: ${pdfName}`);
      }

      setSelectedPDF(pdfPath);
    } catch (err) {
      setError(`Could not find the PDF: ${pdfName}`);
      console.error(err);
    }
  };

  const closeModal = () => {
    setSelectedPDF(null);
  };

  const renderGrid = () => {
    const squares = [];
    for (let i = 1; i <= 2; i++) {
      squares.push(
        <div
          key={i}
          className="bg-blue-500 text-white flex items-center justify-center cursor-pointer h-24 rounded-lg font-bold text-lg transition duration-300 ease-in-out hover:bg-blue-700"
          onClick={() => openPDF(`ia${i}.pdf`)}
        >
          PDF {i}
        </div>
      );
    }
    return squares;
  };

  return (
    <>
      <title>Primary Sources</title>
      <div className="flex flex-col mx-auto items-center text-center max-w-5xl my-[3vh] p-3">
        <h1 className="text-5xl gradient_text my-[3vh]">PRIMARY SOURCES</h1>
      </div>
      <div className="w-4/5 mx-auto mt-12">
        {error && (
          <div className="text-red-600 font-bold mb-4">
            {error} {/*error message*/}
          </div>
        )}

        <div className="grid grid-cols-4 gap-4">{renderGrid()}</div>

        {selectedPDF && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-4/5 h-4/5 relative p-4 rounded-lg">
              <button
                className="absolute top-4 right-4 text-red-600 font-bold text-2xl"
                onClick={closeModal}
              >
                X
              </button>

              <iframe
                src={selectedPDF}
                className="w-full h-full"
                title="PDF Viewer"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PrimarySources;
