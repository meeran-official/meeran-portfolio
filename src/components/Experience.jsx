import React from 'react';
import './Experience.css';
import Reveal from './Reveal'; 

const experienceData = {
  company: 'Softeon',
  location: 'Chennai, India',
  role: 'Product Engineer (Previously Software Engineer)',
  duration: 'Feb 2021 – Present',
  achievements: [
    {
      title: 'AI-Powered Process Automation',
      story: "Pioneered AI-driven development within the organization by innovating a prompt engineering solution to automate a critical bottleneck: the creation of ADHOC UIs. I designed a sophisticated prompt for a generative AI model that takes a single SQL query and instantly generates all required scripts, reducing a manual process that typically took 3 hours to two days down to minutes. My initiative led to company-wide adoption of AI tools, earning me recognition as an 'AI guru' and an offer to join the new AI team, validating my impact on productivity and innovation."
    },
    {
      title: 'Advanced Cross-Service Debugging',
      story: "Resolved a critical, months-long production bug where logs were scattered across multiple modules. I proactively developed AI-assisted Python scripts to fetch and consolidate these disparate logs by timestamp, creating a unified view that enabled rapid root cause analysis and successful ticket closure. This approach significantly streamlined debugging, including an instance where I pinpointed an exact issue from 856 files in under an hour."
    },
    {
      title: 'Modernization & Mentorship',
      story: "Spearheaded the company's modernization initiatives, pioneering the adoption of new development practices by introducing and championing GIT, Maven, and JUnit — technologies previously unused within the organization. I accelerated organization-wide adoption by authoring the primary technical documentation for the new SLICE framework, utilizing Markdown and Mermaid diagrams to create a comprehensive onboarding resource. This was complemented by conducting a company-wide knowledge transfer session, establishing new standards for version control and testing."
    },
    {
      title: 'Task-Interleaving System',
      story: "Engineered and deployed a novel task-interleaving feature for the core Warehouse Management System (WMS). This system significantly optimizes warehouse efficiency by minimizing 'deadhead' travel time, enabling seamless transitions between different work types for associates. The feature is now successfully live with a major client and is being prepared for deployment with a second client."
    },
    {
      title: 'Strategic Architectural Contribution (JSON-based Routing Utility)',
      story: 'Designed and implemented a JSON-based utility configuration as a central routing point for an expanding proprietary framework (SLICE). This critical component efficiently routes incoming exposed endpoints to desired internal APIs based on request body content, laying foundational groundwork for replacing the legacy monolithic architecture with a more scalable microservices approach.'
    },
    {
      title: 'Pioneering Organizational Documentation & Wiki Adoption',
      story: "Initiated and championed the adoption of the organization's internal wiki for comprehensive process documentation. I was the first to utilize it extensively, documenting workflows in Markdown format, and successfully advocated its benefits to management, leading to its widespread use and significantly improving knowledge retention and transfer across the organization."
    }, 
    {
      title: 'AI-Powered Retrieval Augmented Generation (RAG) Application',
      story: "Developed and hosted a local large language model (LLM) using Ollama within the organization's system and built a Retrieval Augmented Generation (RAG) application for internal documentation. This innovative solution leverages AI to provide intelligent insights and quick access to information, enhancing knowledge discovery within the company."
    },
    {
      title: 'Proactive Developer Tooling & Automation (Executable JARs)',
      story: "Developed and shared playful yet highly effective executable JARs to automate repetitive developer tasks, such as mapping unmapped parameters in log-generated queries (for queries with up to 50+ parameters) and replacing hardcoded timestamps in database scripts with SYSDATE or NOW() using regex. These tools significantly streamlined workflows, enabling one-click automation for processes that previously required manual, tedious effort."
    },
    {
      title: 'Full-Stack UI Beautification with AI',
      story: "Utilized AI tools, specifically GitHub Copilot (as the first and only enterprise license user), to significantly beautify and enhance the User Experience (UX), look, and feel of existing application front-ends. Despite having less extensive frontend exposure, I leveraged AI to achieve tangible improvements in the application's user interface."
    }
  ]
};

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2>Professional Experience</h2>
      <div className="experience-wrapper">
        <div className="job-header">
          <h3>{experienceData.role}</h3>
          <span className="company-duration">{experienceData.company} | {experienceData.duration}</span>
        </div>
        <div className="achievements-list">
          {experienceData.achievements.map((achievement, index) => (
            <Reveal key={index}>
              <div className="achievement-item">
                <h4>{achievement.title}</h4>
                <p>{achievement.story}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;