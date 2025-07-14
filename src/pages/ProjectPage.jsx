import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams, useNavigate } from "react-router-dom";
import projects from "../components/ProjectData";

const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === parseInt(id));
 

  const goPages = (id) => {
  navigate(`/projects/${id}`);
  window.scrollTo(0, 0);
  }

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
      <Header />
      <div className="font-ppneue flex flex-col w-[85%] max-w-[1440px] items-center mx-auto">
        
          <div className="flex flex-col gap-7">
            <h1 className="text-[32px] leading-[40px] font-medium text-[#090C21]">
              {project.title ? project.title : "Без названия"}
            </h1>

            <p className="text-[#090C21] font-base leading-[24px] w-full">
              {project.description ? project.description : "Описание проекта отсутствует."}
            </p>
          </div>

         <div className="flex flex-col items-start w-full">
           <div className="text-[#9CA3AF] flex gap-2 mt-4 text-sm">
            <span>
              By <span className="ml-1 underline-offset-4 text-[#090C21] underline">Ronin</span>
            </span>
            <span>•</span>
            <span>Jun 25, 2025</span>
            <span>•</span>
            <span>2 min read</span>
          </div>
         </div>

         <div className="flex flex-col gap-4 mt-4 w-full">
           <div>
            <img src={project.imageMob1} alt="image1" />
          </div>


          {project.isSingle ? (
  <>
    <div className="flex flex-col justify-between w-full mt-8">
      <div >
        <h3 className="text-[24px] font-medium">About</h3>
      </div>
      <div className=" leading-[24px] mt-4">
        <p>{project.description2}</p>
      </div>
    </div>

    <div className="flex flex-col justify-between mt-16">
      <img src={project.imageMob2} alt="image2" />
    </div>

    <div className="flex flex-col justify-between w-full mt-8">
      <div >
        <h3 className="text-[24px] font-medium">The Brief</h3>
      </div>
      <div className=" leading-[24px] mt-4">
        <p>{project.description3}</p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 w-full">
      <img src={project.image3} alt="image3"  className="w-full h-auto object-cover"/>
      <img src={project.image4} alt="image4"  className="w-full h-auto object-cover"/>
    </div>
  </>
) : (
  <>
     <div className="flex flex-col justify-between w-full mt-8">
            <div >
              <h3 className="text-[24px] font-medium">About</h3>
            </div>
            <div className=" leading-[24px] mt-4">
                <p>{project.description2}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 w-full">
  <img 
    src={project.image2} 
    alt="image1" 
    className="w-full h-auto object-cover"
  />
  <img 
    src={project.image3} 
    alt="image2" 
    className="w-full h-auto object-cover"
  />
</div>

          <div className="flex flex-col justify-between w-full mt-16">
            <div >
              <h3 className="text-[24px] font-medium">The Brief</h3>
            </div>
            <div className="leading-[24px] mt-4">
                <p>{project.description3}</p>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-8">
            <img src={project.imageMob2} alt="image1" />
          </div>
  </>
)}


            <div className="flex flex-col justify-between w-full mt-16">
            <div >
              <h3 className="text-[24px] font-medium">Concept</h3>
            </div>
            <div className="leading-[24px] mt-4">
                <p>{project.description4}</p>
            </div>
          </div>
          <div className="flex flex-col justify-between mt-8">
            <img src={project.imageMob3} alt="image1" />
          </div>

           {project.isBranding ? (
 <>
 <div className="flex flex-col justify-between w-full mt-16">
        <div >
          <h3 className="text-[24px] font-medium">Branding</h3>
        </div>
        <div className="leading-[24px] mt-4">
          <p>{project.description5}</p>
          <br />
          <p>{project.description6}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 w-full">
        <img src={project.image6} alt="image1" className="w-full h-auto object-cover"/>
        <img src={project.image7} alt="image2" className="w-full h-auto object-cover"/>
      </div>
      </>
) : (
  project.isUi ? (
    <>
      <div className="flex flex-col justify-between w-full mt-16">
        <div >
          <h3 className="text-[24px] font-medium">UX/UI Design</h3>
        </div>
        <div className="leading-[24px] mt-4">
          <p>{project.description5}</p>
          <br />
          <p>{project.description6}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 w-full">
        <img src={project.image6} alt="image1" className="w-full h-auto object-cover"/>
        <img src={project.image7} alt="image2" className="w-full h-auto object-cover"/>
      </div>

      <div className="flex flex-col justify-between w-full mt-16">
        <div >
          <h3 className="text-[24px] font-medium">{project.isDunes? "" : "Social media"}</h3>
        </div>
        <div className="leading-[24px] mt-4">
          <p>{project.description7}</p>
        </div>
      </div>

      <div className="flex flex-col justify-between mt-8">
        {project.isDunes? "" : (<>
        <img src={project.imageMob4} alt="image1" />
        </>)}
      </div>
    </>
  ) : (
    <>
      <div className="flex flex-col justify-between w-full mt-16">
        <div >
          <h3 className="text-[24px] font-medium">{project.isDunes? "" : "Social media"}</h3>
        </div>
        <div className="leading-[24px] mt-4">
          <p>{project.description5}</p>
        </div>
      </div>

      <div className="flex flex-col justify-between mt-8">
        <img src={project.image6} alt="image1" />
      </div>
    </>
  )
)}



           {project.isAdded &&
          <>
           <div className="flex flex-col justify-between w-full mt-16">
            <div >
              <h3 className="text-[24px] font-medium">{project.isMobile ? "Mobile Design" : "Digital Identity System"}</h3>
            </div>
            <div className="leading-[24px] mt-4">
                <p>{project.description8}</p>
                <br/>
                <p>{project.description9}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 w-full">
             <img src={project.image9} alt="image1" className="w-full h-auto object-cover"/>
             <img src={project.image10} alt="image1" className="w-full h-auto object-cover"/>
          </div>
          </> 
           }

           <div className="flex flex-col justify-between w-full mt-16">
              <h3 className="text-[24px] leading-[34px] font-medium">Other projects</h3>
          </div>

         
          {/* <div className="flex flex-col justify-between mt-16">
            

              {project.others.map((otherProject) => (
    <div className="w-[450px] h-[450px] rounded-[24px] cursor-pointer"
    onClick={()=>goPages(otherProject.id)}>
      <img 
        src={otherProject.image} 
        alt="others"
      />
      <p className="text-[24px] font-medium mt-8 cursor-pointer"
      onClick={()=>goPages(otherProject.id)}
      >{otherProject.projectName}</p>
    </div>
  ))}
            
 
          </div> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
  {project.others.map((otherProject) => (
    <div 
      key={otherProject.id}
      className="w-full aspect-square rounded-[24px] cursor-pointer "
      onClick={() => goPages(otherProject.id)}
    >
      <img 
        src={otherProject.image} alt="others"
        className="w-full h-full object-cover"
      />
     <p className="text-sm font-medium mt-3 cursor-pointer"
      onClick={()=>goPages(otherProject.id)}
      >{otherProject.projectName}</p>
    </div>
  ))}
</div>
              
         </div>
         
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPage;