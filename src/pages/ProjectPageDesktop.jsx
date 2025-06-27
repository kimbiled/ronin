import HeaderDesktop from "../components/HeaderDesktop";
import FooterDesktop from "../components/FooterDesktop";
import { useParams, useNavigate } from "react-router-dom";
import projects from "../components/ProjectData";

const ProjectPageDesktop = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === parseInt(id));

  const getBadgeStyles = () => {
    if (project.verified) return "bg-[#1D1D1D] rounded-[100px] pl-[18px] pr-[18px] pt-[4px] pb-[4px]";
    if (project.starred) return "bg-[#FFD700] bg-opacity-20 rounded-[100px] pl-[18px] pr-[18px] pt-[4px] pb-[4px]";
    return "";
  };

  if (!project) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl">Проект не найден</h2>
        <button onClick={() => navigate(-1)} className="mt-4 underline text-blue-500">Назад</button>
      </div>
    );
  }

  return (
    <div className="font-ppneue flex flex-col items-center gap-3">
      <HeaderDesktop />
      <div className="font-ppneue flex flex-col w-[85%] items-center mt-[68px] mx-auto">
        <div className="flex flex-col max-w-[1440px] w-full justify-between mb-[168px]">
          <div className="flex flex-col gap-7">
            <h1 className="text-[64px] leading-[70px] font-medium text-[#090C21] w-[660px]">
              {project.title ? project.title : "Без названия"}
            </h1>

            <p className="mt-4 text-[#090C21] font-book text-[24px] leading-[38px] w-full">
              {project.description2 ? project.description2 : "Описание проекта отсутствует."}
            </p>
          </div>

          <div className="mt-7 text-[#9CA3AF] flex items-center gap-2">
            <span>
              By <span className="ml-1 underline-offset-4 text-[#090C21]">Ronin</span>
            </span>
            <span>•</span>
            <span>Jun 25, 2025</span>
            <span>•</span>
            <span>2 min read</span>
          </div>

         <div className="flex flex-col gap-4 mt-16">
           <div>
            <img src={project.image1} alt="image1" />
          </div>

          <div className="flex flex-row justify-between w-full mt-28">
            <div className="w-1/2">
              <h3 className="text-[32px] font-medium">About</h3>
            </div>
            <div className="w-2/3 text-[24px] leading-[38px]">
                <p>{project.description}</p>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-16">
            <img src={project.image2} alt="image1" />
            <img src={project.image3} alt="image2" />
            
          </div>

          <div className="flex flex-row justify-between w-full mt-28">
            <div className="w-1/2">
              <h3 className="text-[32px] font-medium">The Brief</h3>
            </div>
            <div className="w-2/3 text-[24px] leading-[38px]">
                <p>{project.description3}</p>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-16">
            <img src={project.image4} alt="image1" />
          </div>

            <div className="flex flex-row justify-between w-full mt-28">
            <div className="w-1/2">
              <h3 className="text-[32px] font-medium">Concept</h3>
            </div>
            <div className="w-2/3 text-[24px] leading-[38px]">
                <p>{project.description4}</p>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-16">
            <img src={project.image5} alt="image1" />
          </div>

           <div className="flex flex-row justify-between w-full mt-28">
            <div className="w-1/2">
              <h3 className="text-[32px] font-medium">UX/UI Design</h3>
            </div>
            <div className="w-2/3 text-[24px] leading-[38px]">
                <p>{project.description5}</p>
                <br/>
                <p>{project.description6}</p>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-16">
             <img src={project.image6} alt="image1" />
            <img src={project.image7} alt="image2" />
          </div>

          <div className="flex flex-row justify-between w-full mt-28">
            <div className="w-1/2">
              <h3 className="text-[32px] font-medium">Social media</h3>
            </div>
            <div className="w-2/3 text-[24px] leading-[38px]">
                <p>{project.description7}</p>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-16">
             <img src={project.image8} alt="image1" />
          </div>

           <div className="flex flex-row justify-between w-full mt-28">
            <div className="w-1/2">
              <h3 className="text-[32px] font-medium">Digital Identity System</h3>
            </div>
            <div className="w-2/3 text-[24px] leading-[38px]">
                <p>{project.description8}</p>
                <br/>
                <p>{project.description9}</p>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-16">
             <img src={project.image9} alt="image1" />
             <img src={project.image10} alt="image1" />
          </div>

           <div className="flex flex-row justify-between w-full mt-28">
              <h3 className="text-[44px] leading-[44px] font-medium">Other projects</h3>
          </div>
          <div className="flex flex-row justify-between mt-16">
             <div>
              <div className="w-[450px] h-[450px] rounded-[24px] bg-gray-400"></div>
              <p className="text-[24px] font-medium mt-8">Name of the project</p>
             </div>
              <div>
              <div className="w-[450px] h-[450px] rounded-[24px] bg-gray-400"></div>
              <p className="text-[24px] font-medium mt-8">Name of the project</p>
             </div>
              <div>
              <div className="w-[450px] h-[450px] rounded-[24px] bg-gray-400"></div>
              <p className="text-[24px] font-medium mt-8">Name of the project</p>
             </div>
          </div>
          
         </div>
         
        </div>
      </div>
      <FooterDesktop />
    </div>
  );
};

export default ProjectPageDesktop;