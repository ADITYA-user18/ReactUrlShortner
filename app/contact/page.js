import React from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react"; 

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-amber-100 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full bg-amber-300 shadow-lg rounded-2xl p-8 mb-18">
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">
          Contact <span className="text-blue-600">Me</span>
        </h1>

        <p className="text-gray-600 text-center mb-8">
          Let s connect! Feel free to reach out through any of the platforms below.
        </p>

        
        <div className="space-y-6">
        
          <div className="flex items-center gap-4 p-4 border rounded-xl hover:shadow-md transition">
            <Mail className="text-blue-600 w-6 h-6" />
            <a
              href="mailto:yourmail@gmail.com"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
             adityagw20@gmail.com
            </a>
          </div>

          
          <div className="flex items-center gap-4 p-4 border rounded-xl hover:shadow-md transition">
            <Phone className="text-green-600 w-6 h-6" />
            <a
              href="tel:+917975094214"
              className="text-gray-700 hover:text-green-600 font-medium"
            >
              +91 7975094214
            </a>
          </div>

         
          <div className="flex items-center gap-4 p-4 border rounded-xl hover:shadow-md transition">
            <Github className="text-gray-800 w-6 h-6" />
            <a
              href="https://github.com/ADITYA-user18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              github.com/ADITYA-user18
            </a>
          </div>

         
          <div className="flex items-center gap-4 p-4 border rounded-xl hover:shadow-md transition">
            <Linkedin className="text-blue-700 w-6 h-6" />
            <a
              href="https://www.linkedin.com/in/aditya-g-wandakar-875007343/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              linkedin.com/in/aditya-g-wandakar-875007343/
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
