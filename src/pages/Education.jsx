import { EDU_DATA } from "../constants";
import { GraduationCap, MapPin, Calendar, Book } from "lucide-react"; // Importing icons

function Education() {
  return (
    <div className="w-full second-bg pb-12 position-x">
      <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl p-8 shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-blue-500/10 rounded-xl blur-lg"></div>
        <div className="relative">
          <h1 className="text-white font-semibold text-4xl text-center">
            Education
          </h1>
          <div className="pt-24 flex flex-wrap gap-6">
            {EDU_DATA.map((x, index) => (
              <Card data={x} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ data }) {
  return (
    <div className="flex-1 min-w-[200px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl p-8 shadow-lg hover:ring-2 hover:ring-blue-500 hover:-translate-y-3 transition-all duration-200 ease-in-out cursor-pointer">
      <div className="text-white">
        <h1 className="text-white flex items-center gap-2 text-lg font-bold">
          <GraduationCap className="text-blue-400" size={20} />
          {data.name}
        </h1>
        <div className="mt-2 space-y-2 text-sm">
          <p className="flex items-center gap-2">
            <MapPin size={18} className="text-blue-400" /> {data.place}
          </p>
          <p className="flex items-center gap-2">
            <Book size={18} className="text-blue-400" /> {data.type}
          </p>
          <p className="flex items-center gap-2">
            <GraduationCap size={18} className="text-blue-400" /> CGPA: {data.cgp}
          </p>
          <p className="flex items-center gap-2">
            <Calendar size={18} className="text-blue-400" /> {data.year}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
