import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 shadow-inner">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Section - Branding & Copyright */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-2xl font-semibold">Srikumaran Sivarajan</h2>
          <p className="text-gray-400 mt-2">&copy; {new Date().getFullYear()} All Rights Reserved</p>
        </div>

        {/* Middle Section - Navigation Links */}
        <div className="flex gap-6 text-gray-300 text-sm">
          
        </div>

        {/* Right Section - Social Media */}
        <div className="flex gap-4 mt-6 md:mt-0">
         
          
          <a href="https://www.instagram.com/blender_world_3.3/?hl=en" target="_blank" className="hover:text-pink-500 transition">
            <Instagram size={24} />
          </a>
          <a href="https://www.linkedin.com/in/srikumaran-s-450866245/" target="_blank" className="hover:text-blue-600 transition">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/Sri-kumaran123" target="_blank" className="hover:text-blue-600 transition">
            <Github size={24} />
          </a>
        </div>

      </div>
    </footer>
  );
}
