import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// ========== PROJECTS WITH MAP IMAGES & REPORT LINKS ==========
const projects = [
  {
    title: "Processing 45 Million Elevation Points from LiDAR DEM",
    description:
      "Processed a 0.5m resolution DEM containing over 150 million pixels and extracted 45 million valid elevation points using Python, GDAL, and Rasterio.",
    mapImage: "/images/DTM.jpg",
    reportLink: "/Projects/DTM-Points-Extraction.pdf",
  },
  {
    title: "Crime Hotspot Analysis (USA)",
    description:
      "Performed Kernel Density Estimation (KDE) on open crime datasets to identify spatial crime hotspots and support decision-making.",
    mapImage: "/images/crime-map.jpg",
    reportLink: "/Projects/PROJECT%201%20(Crime).pdf",
  },
  {
    title: "Population Density Mapping (Nigeria)",
    description:
      "Created dot density maps using GRID3 population data (2025) to visualize population distribution and spatial patterns.",
    mapImage: "/images/population.jpg",
    reportLink: "/Projects/PROJECT%202%20(Population).pdf",
  },
  {
    title: "LiDAR Terrain & Contour Analysis",
    description:
      "Processed LiDAR data in ArcGIS Pro to generate contours and analyze terrain for slope and elevation understanding.",
    mapImage: "/images/lidar.jpg",
    reportLink: "/Projects/PROJECT%203.%20(LIDAR)pdf.pdf",
  },
  {
    title: "Urban Building Height Analysis (London)",
    description:
      "Derived building heights from OpenStreetMap data for urban density and skyline analysis.",
    mapImage: "/images/building-height.jpg",
    reportLink: "/Projects/PROJECT%204%20(3d%20Buildings).pdf",
  },
  {
    title: "Police Station Buffer Analysis (Nigeria)",
    description:
      "Performed 5km buffer analysis to assess police service coverage and identify underserved regions.",
    mapImage: "/images/police-buffer.jpg",
    reportLink: "/Projects/PROJECT%205%20(Police).pdf",
  },
  {
    title: "Road Network GIS for Urban Safety & Security (Awka)",
    description:
      "Developed a spatial decision-support system using ArcGIS Network Analyst to identify high-risk security zones, optimize emergency routes, and reveal underserved areas. Published in IJRIAS.",
    mapImage: "/images/road-gis.jpg",
    reportLink: "https://doi.org/10.51584/IJRIAS.2026.11030042",
  },
];

// ========== EXPERIENCE, EDUCATION, CERTIFICATIONS (unchanged) ==========
const experiences = [
  {
    role: "Surveyor (Crew Chief Surveyor)",
    company: "Alphageo India Limited",
    location: "Andhra Pradesh, Nigeria",
    period: "Apr 2025 – Present",
    achievements: [
      "Lead 2D land seismic geophysical data acquisition for MA-KG Basin mission.",
      "Automated QA/QC protocols achieving 100% spatial accuracy compliance.",
      "Automated UTM→WGS84 conversion and KML generation using Python.",
      "Produced all operational maps in ArcGIS/QGIS for seismic layouts.",
      "Used SQL to identify anomalies in large navigation datasets.",
    ],
  },
  {
    role: "Navigator QC / Land QC Surveyor",
    company: "United Geophysical Nigeria Limited",
    location: "Akwa Ibom, Nigeria",
    period: "Jan 2021 – Mar 2025",
    achievements: [
      "QC & processing of seismic field data for OML 13, OML 56, OPL 2005, 2006.",
      "Python scripts to clean marine navigation datasets, identify missing shots.",
      "SQL filtering to ensure 100% database integrity for receiver locations.",
      "Supervised a field team of 390 workers, maintained timelines & safety.",
    ],
  },
  {
    role: "Enumeration Survey Supervisor",
    company: "Ministry of Finance",
    location: "Calabar, Nigeria",
    period: "Jun 2022",
    achievements: [
      "Processed & cleaned building attribute data from ArcGIS Survey123.",
      "Mapped & analyzed building distributions across Calabar Municipal.",
    ],
  },
  {
    role: "Graduate Surveyor Intern",
    company: "Office of the Surveyor General",
    location: "Calabar, Nigeria",
    period: "Jun 2020 – Dec 2020",
    achievements: [
      "Carried out land, cadastral, engineering & geodetic surveys.",
      "Developed components of a Land Information System (LIS) using ArcGIS.",
      "Digitized 500+ land parcels into a spatial database.",
    ],
  },
];

const education = [
  {
    degree: "Post Graduate Diploma (PGD) – Surveying & Geoinformatics",
    institution: "Nnamdi Azikiwe University, Awka, Nigeria",
    period: "Apr 2023 – Aug 2024",
    thesis: "Development of Road Network GIS for Urban Safety and Security in Awka, Anambra State",
    level: "EQF Level 7",
  },
  {
    degree: "Higher National Diploma (HND) – Surveying & Geoinformatics (BSc equivalent)",
    institution: "Federal Polytechnic Oko, Nigeria",
    period: "Oct 2013 – Oct 2018",
    grade: "Upper Credit (Second Class Upper)",
    thesis: "Mapping and Analysis of Water Facilities in Oko Campus",
    level: "EQF Level 6",
  },
];

const certifications = [
  { name: "Basic Offshore Safety Induction and Emergency Training (OPITO)", date: "Jun 2024" },
  { name: "HSE Level 1-3 (British International Safety Organization)", date: "May 2020" },
];

// ========== ANIMATION VARIANTS ==========
const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      {/* HERO SECTION */}
      <section className="px-4 py-16 md:py-24 text-center bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold"
        >
          📘 GIS & SPATIAL ANALYSIS
        </motion.h1>
        <p className="mt-4 text-2xl md:text-3xl font-semibold">Dobe Oji</p>
      </section>

      {/* ABOUT ME SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-12"
      >
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">🧑‍💼 ABOUT ME</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I am a professional Surveyor and GIS Specialist with over 7 years of experience in geospatial data acquisition, spatial analysis, and mapping across engineering, environmental, and security-related domains.
          </p>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            My expertise spans:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 dark:text-gray-300 ml-4">
            <li>Geographic Information Systems (GIS)</li>
            <li>Remote Sensing</li>
            <li>Spatial Data Analysis</li>
            <li>Surveying and Geoinformatics</li>
          </ul>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            I have worked on large-scale projects involving data collection, processing, and analysis, including supervising field operations and developing geospatial solutions for decision-making.
          </p>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            In addition, I am a published academic author, having co-authored a research paper titled:
          </p>
          <p className="mt-2 italic text-gray-800 dark:text-gray-200 font-medium">
            “Development of Road Network GIS for Urban Safety and Security in Awka, Anambra State”
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Published in the International Journal of Research and Innovation in Applied Science (March 2026)
          </p>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            My research and professional experience reflect a strong interest in applying geospatial technologies to solve real-world challenges in urban planning, security, and infrastructure development.
          </p>
        </div>
      </motion.section>

      {/* TECHNICAL SKILLS SECTION */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
        className="container mx-auto px-4 pb-12"
      >
        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">🧠 TECHNICAL SKILLS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-3">GIS & Spatial Analysis</h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li>✓ ArcGIS Pro</li>
                <li>✓ QGIS</li>
                <li>✓ Spatial Analyst</li>
              </ul>
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mt-4 mb-3">Programming & Data</h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li>✓ Python (GIS automation and analysis)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-3">Surveying & Engineering Tools</h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li>✓ GNSS / Total Station</li>
                <li>✓ AutoCAD / Civil 3D</li>
                <li>✓ Trimble Business Center</li>
                <li>✓ Leica Infinity</li>
              </ul>
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mt-4 mb-3">Other Tools</h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li>✓ Global Mapper</li>
                <li>✓ Google Earth</li>
                <li>✓ Microsoft Office Suite</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* PROJECTS SECTION WITH TWO BUTTONS */}
      <main className="flex-grow container mx-auto px-4 pb-16 space-y-20">
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="h-full flex flex-col shadow-lg rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform dark:bg-gray-800">
                  <div className="relative w-full h-48 bg-gray-200 dark:bg-gray-700">
                    <Image
                      src={project.mapImage}
                      alt={`Map for ${project.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/images/fallback.jpg";
                      }}
                    />
                  </div>
                  <CardContent className="p-5 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold dark:text-white">{project.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex gap-2 mt-4">
                      {/* View Map button - opens image in new tab */}
                      <Button asChild variant="outline" className="flex-1">
                        <a href={project.mapImage} target="_blank" rel="noopener noreferrer">
                          🗺️ View Map
                        </a>
                      </Button>
                      {/* View Report button - opens PDF or DOI */}
                      <Button asChild className="flex-1">
                        <a href={project.reportLink} target="_blank" rel="noopener noreferrer">
                          📄 View Report
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* PUBLICATION SECTION (unchanged) */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Publication
          </h2>
          <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl border dark:border-gray-600">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
              Development of Road Network GIS for Urban Safety and Security in Awka, Anambra State
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              <strong>Authors:</strong> Adeboboye, A. J., Oji Dobe Okpa, Atoki L.O.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Department of Surveying & Geoinformatics, Nnamdi Azikiwe University
            </p>
            <p className="mt-1 text-gray-700 dark:text-gray-300">
              <strong>Published:</strong> April 2026
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              This study developed a GIS-based road network model to enhance urban safety and emergency
              response in Awka, Nigeria. Using ArcGIS network analysis (Service Area, Closest Facility),
              the research identified gaps in police coverage and optimized emergency routes. Results
              revealed underserved areas like Ifite, Okpuno, and Ngozika Estate.
            </p>
            <div className="mt-6">
              <Button asChild>
                <a
                  href="https://doi.org/10.51584/IJRIAS.2026.11030042"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Publication (DOI)
                </a>
              </Button>
            </div>
          </div>
        </motion.section>

        {/* EXPERIENCE SECTION (unchanged) */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div key={idx} variants={itemVariants} className="border-b dark:border-gray-700 pb-6 last:border-0">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.role} – {exp.company}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{exp.location}</p>
                <ul className="mt-3 list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="text-sm">{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* EDUCATION SECTION (unchanged) */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <motion.div key={idx} variants={itemVariants} className="border-b dark:border-gray-700 pb-5 last:border-0">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{edu.institution}</p>
                {edu.grade && <p className="text-sm text-gray-600 dark:text-gray-400">Grade: {edu.grade}</p>}
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  <strong>Thesis:</strong> {edu.thesis}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">EQF Level: {edu.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CERTIFICATIONS SECTION (unchanged) */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8"
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center"
              >
                <p className="font-medium text-gray-900 dark:text-white">{cert.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CONTACT SECTION (unchanged) */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Let’s Connect</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I’m actively seeking opportunities to apply geospatial data science and GIS for impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="default">
              <a href="mailto:dobeoji@gmail.com">Email Me</a>
            </Button>
            <Button asChild variant="outline">
              <a href="https://www.linkedin.com/in/dobe-oji-b79023140/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="https://github.com/dobeoji-coder/Dobs.git" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          </div>
        </motion.section>
      </main>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 dark:text-gray-400 border-t dark:border-gray-800">
        <p>© {new Date().getFullYear()} Dobe Oji | GIS Portfolio</p>
      </footer>
    </div>
  );
}