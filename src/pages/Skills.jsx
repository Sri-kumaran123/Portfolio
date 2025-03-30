import { SKILL_DATA } from "../constants";
function Skiils(){
    return (
        <div className="position-x bg-[rgba(32,12,100,1)] pt-12 pb-12 w-full h-[100vh]  ">
            <div class="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl p-8 shadow-lg h-full w-full element overflow-y-scroll">
                <div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-blue-500/10 rounded-xl blur-lg"></div>
                     <div class="relative">
                        <h1 class="text-white text-3xl font-bold pb-12 ">
                            Skills
                        </h1>
                     </div>
                     <div className=" w-full flex flex-wrap gap-6 relative z-0">
                        {
                            SKILL_DATA.map((x,index)=><Card data={x} key={index} />)
                        }
                     </div>
            </div>
    </div>
    );
}

function Card({data}){
    return <div class="relative group w-full max-w-sm p-6 bg-black/40 rounded-lg shadow-lg transition duration-300 hover:bg-white/10">
    <div class="flex items-center justify-center w-16 h-16 bg-gray-700 rounded-full"> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 20a10 10 0 110-20 10 10 0 010 20zm0-18a8 8 0 100 16 8 8 0 000-16z" />
     </svg>
    </div>
    <h3 class="mt-4 text-lg font-medium text-white group-hover:text-gray-100"> {data.name}</h3>
    <p class="mt-2 text-sm text-gray-400">
    {data.desc}
    </p>

<div class="absolute inset-0 rounded-lg ring-2 ring-transparent group-hover:ring-blue-500 group-hover:animate-pulse"></div>
</div>
}

export default Skiils;