import { Box, Stack, Typography } from "@mui/joy"
import ExperienceCard from "./ExperienceCard"
import Footer from "./footer";

type ExperienceProps = {
  isDarkMode: boolean;
};

const experiences = [
  {
    company: "Zelifcam",
    role: "Software Developer",
    image: "Zelifcam.png",
    url: "https://zelifcam.net",
    descriptions: [
      "Developed full-stack applications for clients across real estate, manufacturing, medical, legal, and IT industries, adapting quickly to diverse project requirements.",
      "Integrated third-party services such as Stripe for payments, WebSockets for real-time features, and GraphQL APIs for efficient data access.",
      "Containerized environments with Docker to streamline development, testing, and deployment workflows.",
      "Experienced in supporting legacy systems as well as building greenfield projects from scratch."
    ]
  },
  {
    company: "Springboard",
    role: "Student",
    image: "/1_h1smA07x491LsEGJMnJIEA@2x.jpg",
    url: "https://www.springboard.com",
    descriptions: [
      "Completing 830+ hours of hands-on course material, with 1:1 industry expert mentor oversight, and completion of 4 in-depth portfolio projects.",
      "Mastering skills in front-end and back-end web development, databases, and data structures and algorithms."
    ]
  },
  {
    company: "Superior Silica Sands",
    role: "Maintenance Supervisor",
    image: "/c2711d_7cd40d7e619d44a2b0e415c6fd6e4459~mv2.png",
    url: "https://www.sssand.com",
    descriptions: [
      "Directed plant maintenance operations with up to 30 employees, including electricians, welders and equipment operators.",
      "Trained employees in proper maintenance protocols across the entire project lifecycle, including issue diagnosis, inventory management, lock-out/tag-out procedures, and executing the necessary steps to complete tasks efficiently."
    ]
  },
  {
    company: "All My Sons",
    role: "Crew Lead",
    image: "/AMS_Logo2.jpg",
    url: "https://www.allmysons.com",
    descriptions: [
      "Led teams of up to eight movers, coordinating tasks and maintaining workflow on-site. Managed customer communication to ensure smooth moves and saving the customer money."
    ]
  },
  {
    company: "Black Mountain Sands",
    role: "Maintenance Technician III",
    image: "/Blackmountain.png",
    url: "https://www.blackmountainsand.com",
    descriptions: [
      "Collaborated with other technicians to maintain safe and consistent plant operations. Implemented new CMMS procedures to maintain uniformity among other technicians.",
      "Responsibilities included: welding and fabrication, poly fusion, conveyor patches and replacement, rotary kiln repairs, bearing replacement, fan alignment, wash and dry plant maintenance."
    ]
  }
];

function Experience({ isDarkMode }: ExperienceProps) {
  return (
    <Box sx={{ p: 10 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 5 }}>
  
        <Typography level="h1">Experience</Typography>
       
      </Box>
       
      <Stack spacing={2} sx={{ width: '100%', alignItems: 'center' }}>
        {experiences.map((exp, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 3,
              // transform: index % 2 === 0 ? 'translateX(-9%)' : 'translateX(9%)',
              transition: 'transform 0.3s ease',
            }}
          >
            {/* Image on left */}
            <Box
              component="img"
              src="/Right.png"
              alt=""
              sx={{
                opacity: .3,
                padding: 2,
                width: 400,
                height: 220,
                objectFit: 'contain',
              }}
            />

            <ExperienceCard
              company={exp.company}
              role={exp.role}
              image={exp.image}
              url={exp.url}
              descriptions={exp.descriptions}
              isDarkMode={isDarkMode}
            />

            {/* Image on right */}
            <Box
              component="img"
              src="/Left.png"
              alt=""
              sx={{
                opacity: .3,
                padding: 2,
                width: 400,
                height: 220,
                objectFit: 'contain',
              }}
            />
            <hr />
          </Box>
        ))}
      </Stack>
      <Footer/>
    </Box>
  );
}

export default Experience;
