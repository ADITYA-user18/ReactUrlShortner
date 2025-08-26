import React from "react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 ">
      <div className="max-w-3xl w-full bg-amber-200 shadow-lg rounded-2xl p-8 mb-22">
       
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-2">
          About <span className="text-blue-600">Shortly</span>
        </h1>

        
        <p className="text-gray-600 text-lg leading-relaxed mb-6 text-center">
          Shortly is a simple and fast URL shortener that helps you create
          short, shareable links in seconds. Whether you're sharing on social
          media, sending links to friends, or managing long URLs, Shortly makes
          it easy and efficient.
        </p>

        
        <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
          <div className="p-4 border rounded-xl hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              🚀 Fast
            </h3>
            <p className="text-gray-500 text-sm">
              Create and share short links instantly with no extra steps.
            </p>
          </div>

          <div className="p-4 border rounded-xl hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              🔒 Secure
            </h3>
            <p className="text-gray-500 text-sm">
              Your data is safe. All links are generated securely and reliably.
            </p>
          </div>

          <div className="p-4 border rounded-xl hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              📊 Trackable
            </h3>
            <p className="text-gray-500 text-sm">
              (Optional) Analytics support for tracking your link clicks.
            </p>
          </div>
        </div>

        
        <div className="text-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
