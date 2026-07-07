import { Avatar } from "@nextui-org/react";

const ProjectCard = ({ title, projectImage, imageUrl, developer, profileLink, projectLink }) => {
  return (
    <div className="w-full max-w-[20rem] mx-auto glass-card border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:border-blue-500/30 hover:shadow-blue-500/10 transition-all duration-300">
      <a href={projectLink}>
        <img className="w-full object-cover max-h-52 h-48 rounded-t-2xl transform hover:scale-105 transition-transform duration-300" src={projectImage} alt={title} />
      </a>
      <div className="px-5 py-4 flex flex-col justify-end">
        <h5 className="text-lg font-bold tracking-tight text-white line-clamp-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {title}
        </h5>
        <div className="flex items-center mt-3 gap-2">
          <Avatar src={imageUrl} className="w-6 h-6 border border-white/20" />
          <a href={profileLink}>
            <span className="bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-full transition-colors duration-200">
              {developer}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
