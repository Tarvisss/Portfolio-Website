import { Box, Divider, Stack, Typography } from "@mui/joy"
import ProjectCard from "./ProjectCard"

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

function Projects() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography level="h1" sx={{ mb: 2 }}>Projects</Typography>

      <Typography level="body-lg" sx={{ fontSize: "1.5rem", mb: 4 }}>
        Click any of the cards below to explore my work.
      </Typography>

      {/* Professional Projects Section */}
      <Typography level="h2" sx={{ mb: 2 }}>Professional Projects</Typography>
      {professionalProjects.length > 0 ? (
        <Stack
          direction="row"
          spacing={3}
          sx={{ flexWrap: 'wrap', justifyContent: 'center', gap: 3, mb: 4 }}
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
        </Stack>
      ) : (
        <Typography level="body-md" sx={{ mb: 4, color: 'text.secondary' }}>
          Coming soon...
        </Typography>
      )}

      <Divider sx={{ my: 4 }} />

      {/* Personal Projects Section */}
      <Typography level="h2" sx={{ mb: 2 }}>Personal Projects</Typography>
      <Stack
        direction="row"
        spacing={3}
        sx={{ flexWrap: 'wrap', justifyContent: 'center', gap: 3 }}
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
      </Stack>

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography level="body-md">
          Please visit the contact section if you'd like help with your next project
        </Typography>
      </Box>

      <Box component="footer" sx={{ mt: 3, textAlign: 'center' }}>
        <Typography level="body-sm">Thanks for visiting!</Typography>
      </Box>
    </Box>
  );
}

export default Projects;
