"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shorturl, setShorturl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = async () => {
    try {
      const response = await fetch("/api/generate", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ url, shorturl }),
});


      const result = await response.json();
      console.log("API result:", result);

      if (!result.success) {
        alert(result.message || "Error generating URL");
        return;
      }

    
      const host = window.location.origin;
      setGenerated(`${host}/${result.shorturl}`);

      setShorturl("");
      setUrl("");
      alert("URL Generated Successfully");
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  const text = "Generate Your Short Urls";

  return (
    <div className="gap-4 flex flex-col my-10 items-center bg-amber-200 w-1/2 m-auto rounded-2xl text-amber-800 h-auto">
      <h1 className="flex my-3 text-3xl font-bold text-center">
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.05, delay: index * 0.05 }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h1>

      <input
        type="text"
        placeholder="Enter Your Url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-11/12 outline-none bg-transparent border-2 hover:border-amber-400 border-amber-800 rounded-xl p-3"
      />
      <input
        type="text"
        value={shorturl}
        onChange={(e) => setShorturl(e.target.value)}
        placeholder="Enter Your Preferred short url text"
        className="w-11/12 outline-none bg-transparent border-2 hover:border-amber-400 border-amber-800 rounded-xl p-3"
      />
      <button
        onClick={generate}
        className="bg-amber-500 p-2 rounded-xl hover:bg-amber-700 hover:scale-105 text-black"
      >
        Generate
      </button>

      <h1 className="font-bold">Shortened URL :</h1>
      {generated && (
        <code>
          <Link href={generated} target="_blank">
            {generated}
          </Link>
        </code>
      )}
    </div>
  );
};

export default Shorten;
