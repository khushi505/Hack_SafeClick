// import { useState } from "react";
// import "../URLClone/URLClone.css";
// const UrlSafetyChecker = () => {
//   const [inputUrl, setInputUrl] = useState("");
//   const [apiResponse, setApiResponse] = useState(null);
//   const apiUrl = "https://clone-6nb2.onrender.com/check-clone"; // Replace with your actual API URL

//   const checkUrl = async (suspectUrl) => {
//     try {
//       const response = await fetch(apiUrl, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ suspect_url: suspectUrl }),
//       });

//       if (!response.ok) throw new Error("API request failed");
//       return await response.json();
//     } catch (error) {
//       console.error("Error fetching API:", error);
//       return { error: "Failed to check the URL" };
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await checkUrl(inputUrl);
//     setInputUrl("");
//     setApiResponse(response);
//   };

//   return (
//     <div className="p-6 max-w-lg mx-auto">
//       <h1 className="text-2xl font-bold mb-4">URL Clone Checker</h1>
//       <form onSubmit={handleSubmit} className="mb-4">
//         <input
//           type="text"
//           value={inputUrl}
//           onChange={(e) => setInputUrl(e.target.value)}
//           placeholder="Enter URL"
//           className="p-2 border rounded w-full"
//           required
//         />
//         <button type="submit" className="submit-button" disabled={loading}>
//           {loading ? "Getting status" : "connect url"}
//         </button>
//       </form>

//       {apiResponse && !apiResponse.error ? (
//         <div className="p-4 border rounded-lg shadow-md bg-white">
//           <p>
//             <strong>Suspect URL:</strong> {apiResponse.suspect_url}
//           </p>
//           <p>
//             <strong>Extracted Domain:</strong> {apiResponse.extracted_domain}
//           </p>
//           <p>
//             <strong>Best Match Domain:</strong> {apiResponse.best_match_domain}
//           </p>
//           <p>
//             <strong>Matching Accuracy:</strong> {apiResponse.matching_accuracy}
//           </p>
//           <p
//             className={`font-bold text-lg ${
//               apiResponse.isClone ||
//               parseFloat(apiResponse.matching_accuracy) < 90
//                 ? "text-red-600"
//                 : "text-green-600"
//             }`}
//           >
//             {parseFloat(apiResponse.matching_accuracy) < 80
//               ? "⚠️ This URL may be a clone and unsafe! Proceed with caution."
//               : "✅ This URL is safe!"}
//           </p>
//         </div>
//       ) : apiResponse?.error ? (
//         <p className="text-red-500">Error: {apiResponse.error}</p>
//       ) : null}
//     </div>
//   );
// };

// export default UrlSafetyChecker;

import { useState } from "react";
import "../URLClone/URLClone.css";

const UrlSafetyChecker = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [apiResponse, setApiResponse] = useState(null);
  const [loading, setLoading] = useState(false); // Define the loading state
  const apiUrl = "https://clone-6nb2.onrender.com/check-clone"; // Replace with your actual API URL

  const checkUrl = async (suspectUrl) => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ suspect_url: suspectUrl }),
      });

      if (!response.ok) throw new Error("API request failed");
      return await response.json();
    } catch (error) {
      console.error("Error fetching API:", error);
      return { error: "Failed to check the URL" };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true before the API call
    const response = await checkUrl(inputUrl);
    setInputUrl(""); // Clear the input field
    setApiResponse(response); // Set the API response
    setLoading(false); // Set loading to false after the API call
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">URL Clone Checker</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          placeholder="Enter URL"
          className="p-2 border rounded w-full"
          required
        />
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? "Getting status" : "Connect URL"}
        </button>
      </form>

      {apiResponse && !apiResponse.error ? (
        <div className="p-4 border rounded-lg shadow-md bg-white">
          <p>
            <strong>Suspect URL:</strong> {apiResponse.suspect_url}
          </p>
          <p>
            <strong>Extracted Domain:</strong> {apiResponse.extracted_domain}
          </p>
          <p>
            <strong>Best Match Domain:</strong> {apiResponse.best_match_domain}
          </p>
          <p>
            <strong>Matching Accuracy:</strong> {apiResponse.matching_accuracy}
          </p>
          <p
            className={`font-bold text-lg  ${
              apiResponse.isClone ||
              parseFloat(apiResponse.matching_accuracy) < 90
                ? "text-red-600"
                : "text-green-600"
            }`}
          >
            {parseFloat(apiResponse.matching_accuracy) < 80
              ? "⚠️ This URL may be a clone and unsafe! Proceed with caution."
              : "✅ This URL is safe!"}
          </p>
        </div>
      ) : apiResponse?.error ? (
        <p className="text-red-500">Error: {apiResponse.error}</p>
      ) : null}
    </div>
  );
};

export default UrlSafetyChecker;
