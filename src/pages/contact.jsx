import { Phone, Mail, FileText } from "lucide-react";
import resume from "/resume.pdf";

function Contact() {
  return (
    <div className="h-screen w-full flex flex-col lg:flex-row items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white px-20">
      {/* Left: Contact Details */}
      <div className="flex flex-col gap-6 w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-white/80 text-lg">
          Feel free to reach out for collaborations, opportunities, or just a chat.
        </p>

        {/* Phone */}
        <div className="flex items-center gap-4 bg-white/10 px-6 py-4 rounded-lg shadow-md hover:bg-white/20 transition-all">
          <Phone size={24} className="text-blue-400" />
          <a href="tel:9361771945" className="text-lg hover:text-blue-500 transition">
            9361771945
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center gap-4 bg-white/10 px-6 py-4 rounded-lg shadow-md hover:bg-white/20 transition-all">
          <Mail size={24} className="text-green-400" />
          <a href="mailto:srikumaran.sivarajan@gmail.com" className="text-lg hover:text-blue-500 transition">
            srikumaran.sivarajan@gmail.com
          </a>
        </div>

        {/* Resume Button */}
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-800 text-white text-lg px-6 py-3 rounded-md transition-all shadow-md">
            <FileText size={22} />
            Download Resume
          </button>
        </a>
      </div>

      {/* Right: SVG Illustration */}
      <div className="hidden lg:flex w-full lg:w-1/2 justify-center">
        <img src="/design2.svg" 
             alt="Contact Illustration" 
             className="w-96 opacity-80" />
      </div>
    </div>
  );
}

export default Contact;
