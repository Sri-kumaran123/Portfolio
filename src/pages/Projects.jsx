import { useRef } from "react";
import { NavLink } from "react-router-dom";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Github, Layers, FileText } from "lucide-react";
import { ChevronLeft, ChevronRight, Github, Layers, FileText } from "lucide-react";

function Projects() {
  const sliderRef = useRef(null);

  const handleSlide = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  const projectData = [
    {
      title: "Online Shop Management",
      techStack: "React, Node.js,Express js, MongoDB",
      description: "A full-stack MERN application for managing a grocery shop, including stock management and billing. It provides user login for balance management and employer login for attendance tracking.",
      githubLink1: "https://github.com/Sri-kumaran123/My_UG_Project_Client",
      githubLink2:"https://github.com/Sri-kumaran123/My_UG_Project_Server",
    },
    {
      title: "Class Room Management App",
      techStack: "Flutter, Node js, MongoDB",
      description: "A mobile app built using a cross-platform framework (Flutter) to enhance communication between students and teachers. It provides a way to share notes (PDF, DOCX), participate in group chats, and engage in class activities.",
      githubLink1: "https://github.com/Sri-kumaran123/class_room_management_app_front_end",
      githubLink2:"https://github.com/Sri-kumaran123/class_room_management_back_end",
    },
    {
      title: "Social Media Application",
      techStack: "React js , Python Flask, My SQL",
      description: "A React-based web application with a Flask backend. I developed a logistic regression-based model to detect harmful words using the TF-vectorization method. Flask is used to develop a REST API that integrates the model to prevent harmful words.",
      githubLink: "https://github.com/Sri-kumaran123/Social_media",
    },
    {
      title: "Atoz unique Gifts",
      techStack: "React js",
      description: "A freelancing project using React js and Tailwind CSS",
      githubLink: "https://atozuniquegifts.in/",
      live:true
    },
  ];

  return (
    <div className="h-[100vh] w-full position-x bg-gradient-to-t to-[rgba(32,12,100,1)] via-black from-black">
      {/* Header */}
      <h1 className="text-6xl font-semibold lg:pt-[20%] sm:pt-[40%] pt-[50%] text-center text-white">
        Projects
      </h1>

      {/* Background Decoration */}
      <div className="w-full flex flex-row justify-between relative">
        <div className="h-[40vh] w-1/3 bg-ani" />
        <div className="h-[40vh] w-1/3 bg-ani spl" />
      </div>

      {/* Scrollable Projects Section */}
      <div className="text-white relative top-[-30vh] h-[60vh] overflow-y-scroll pb-[30px] mask">
        <div className="h-2/3" />

        

      {/* Project Details Section */}
      <div className="mt-10 grid md:grid-cols-2 gap-6 px-10">
        {projectData.map((project, index) => (
          <div key={index} className="bg-black/50 rounded-lg shadow-lg p-6 border border-gray-700 hover:border-blue-400 transition-all">
            <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
              <FileText size={24} className="text-blue-400" />
              {project.title}
            </h2>

            <p className="text-white/70 flex items-center gap-2 mt-2">
              <Layers size={20} className="text-green-400" />
              {project.techStack}
            </p>

            <p className="text-white/80 mt-4 text-sm leading-relaxed">{project.description}</p>

            <div className="mt-4">
              {
                project.githubLink?
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 hover:underline transition-all">
                <Github size={20} />
                {project.live?"Web Site Link":"View on GitHub"}
                </a> :
                <div><a href={project.githubLink1} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 hover:underline transition-all">
                <Github size={20} />
                Client
                </a>
                <a href={project.githubLink2} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 hover:underline transition-all">
                <Github size={20} />
                Server
                </a>
                </div>
              }
              
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
