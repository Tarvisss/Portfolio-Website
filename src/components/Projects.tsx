import { Box, Divider, Typography } from "@mui/joy"
import ProjectCard from "./ProjectCard"

type ProjectsProps = {
  isDarkMode: boolean;
};

const personalProjects = [
  {
    title: "Jam Space",
    image: "/Jam_Space1.png",
    url: "https://jam-space.onrender.com",
    description: "Music collaboration platform"
  },
  {
    title: "Fit+Together",
    image: "/Screenshot from 2025-06-26 09-19-18.png",
    url: "https://fit-together-frontend.onrender.com",
    description: "Fitness tracking app"
  }
];

type Project = {
  title: string;
  image: string;
  url: string;
  description: string;
};

const professionalProjects: Project[] = [
  {
    title: "ClaimWizard",
    image: "/Screenshot from 2026-01-17 19-19-00.png",
    url: "https://claimwizard.com/",
    description: "Workflow management for public adjusting firms"
  },
  {
    title: "We Buy Everything",
    image: "/Screenshot from 2026-01-17 19-24-44.png",
    url: "https://www.webuyeverything.com/",
    description: "Multi-location pawn shop chain"
  }
];

function Projects({ isDarkMode }: ProjectsProps) {
  return (
    <Box sx={{ p: 4, pt: 12, minHeight: '100vh' }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography level="h1" sx={{ mb: 2, textShadow: isDarkMode ? '0 0 10px rgba(255, 255, 255, 0.8)' : '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Projects</Typography>
        <Divider sx={{ mb: 2, mx: 'auto', width: 400 }} />
        <Typography level="body-lg" sx={{ maxWidth: 600, mx: 'auto' }}>
          Click any of the cards below to explore my work.
        </Typography>
      </Box>

      {/* Professional Projects Section */}
      <Box sx={{ mb: 6 }}>
        <Typography level="h2" sx={{ textAlign: 'center', mb: 4 }}>
          Professional Projects
        </Typography>
        {professionalProjects.length > 0 ? (
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 4,
            }}
          >
            {professionalProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                image={project.image}
                url={project.url}
                description={project.description}
              />
            ))}
          </Box>
        ) : (
          <Typography level="body-md" sx={{ textAlign: 'center', color: 'text.secondary' }}>
            Coming soon...
          </Typography>
        )}
      </Box>

      <Divider sx={{ my: 6, mx: 'auto', maxWidth: 800 }} />

      {/* Personal Projects Section */}
      <Box sx={{ mb: 6 }}>
        <Typography level="h2" sx={{ textAlign: 'center', mb: 4 }}>
          Personal Projects
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 4,
          }}
        >
          {personalProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              image={project.image}
              url={project.url}
              description={project.description}
            />
          ))}
        </Box>
      </Box>

      {/* Footer Section */}
\     
    </Box>
  );
}

export default Projects;
