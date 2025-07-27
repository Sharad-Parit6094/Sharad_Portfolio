// React Portfolio for Sharad Parit with interactive hover effects

import React, { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
import profileImg from "./Sharad_Profile.jpg";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-pink-50 to-blue-100 text-gray-800 font-sans">
      <section data-aos="fade-down" className="bg-gradient-to-br from-[#141e30] via-[#243b55] to-[#141e30] text-white py-20 px-6 text-center">
        <img src={profileImg} alt="Sharad Parit" className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-white shadow-2xl" />
        <h1 className="text-5xl font-extrabold mb-2 tracking-wider">Balaga Sai Kumar</h1>
        <p className="text-xl font-medium">DevOps Engineer | AWS | Jenkins | SonarQube | Nexus | Terraform | Ansible | Docker | Kubernetes | Grafana | Prometheus | Nagios | BASH Shell | Linux | Java |SQL</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {["summary", "technical-summary", "skills", "projects", "certifications", "education", "contact"].map(section => (
            <a key={section} href={`#${section}`} className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold shadow hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-pink-500 hover:text-white transition capitalize">
              {section.replace("-", " ")}
            </a>
          ))}
        </div>
        <a
          href="/Sharad_Resume.pdf"
          download
          className="mt-6 inline-block bg-white text-indigo-900 px-6 py-3 rounded-full font-bold shadow-md hover:bg-indigo-100 transition duration-300"
        >
          ⬇️ Download Resume
        </a>
      </section>

      <section id="summary" data-aos="fade-left" className="p-8 max-w-5xl mx-auto bg-white rounded-xl shadow-lg hover:bg-indigo-50 transition duration-300">
        <h2 className="text-3xl font-bold mb-4 text-indigo-800 border-b-4 border-indigo-300 pb-2 text-center">
          🧾 Summary
        </h2>
        <p className="text-lg leading-relaxed text-gray-800">
          DevOps Engineer with Hands On experience in cloud infrastructure automation, CI/CD pipeline, Infrastructure as Code (IaC), scripting in Bash, Containerization using Docker-orchestration using Kubernetes And Work with Confluence, Jira tool. Also Hands-on with AWS (EC2, S3, IAM, RDS, VPC, Auto Scaling, Load Balancers, EKS, CloudWatch and CloudTrail).
        </p>
      </section>
      
      <section id="education" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12 border-b-4 border-blue-400 pb-2">🎓 Education</h2>
        {[{
          title: "B.E – Shivaji University Kolhapur",
          desc: "2017 – 2021 | Electrical Engineering"
        }
        }].map((edu, i) => (
          <div key={i} data-aos="fade-up" className="bg-gradient-to-br from-blue-100 via-white to-blue-50 rounded-xl shadow p-6 mb-6">
            <h3 className="text-xl font-semibold mb-2">{edu.title}</h3>
            <p className="text-gray-700">{edu.desc}</p>
          </div>
        ))}
      </section>


      <section id="technical-summary" data-aos="zoom-in" className="p-8 max-w-5xl mx-auto bg-gradient-to-r from-teal-100 via-white to-purple-100 rounded-xl shadow hover:shadow-2xl transition duration-300">
        <h2 className="text-3xl font-bold mb-4 text-teal-800 border-b-4 border-teal-400 pb-2 text-center">
          📘 Technical Summary
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-800">
          <li>CI/CD pipeline and implementation using Git, GitHub, Jenkins, Maven, SonarQube and Docker</li>
          <li>Infrastructure automation using Terraform and Configuration Management using Ansible</li>
          <li>Monitoring workloads with CloudWatch, Prometheus, Grafana and Nagios</li>
          <li>Kubernetes cluster management and application deployment</li>
          <li>Automated recovery systems using Lambda, SNS, and CloudWatch</li>
        </ul>
      </section>

      <section id="skills" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-12 border-b-4 border-purple-400 pb-2">🧠 Technical Skills</h2>
        <div data-aos="fade-up" className="bg-gradient-to-r from-purple-100 via-white to-indigo-100 rounded-xl shadow p-6 mb-6">
          <h3 className="text-xl font-semibold text-purple-800 mb-2">☁️ AWS Services</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>EC2, S3, IAM, VPC, RDS, Lambda, CloudTrail, CloudWatch, Auto Scaling, ELB, ECS, EKS</li>
          </ul>
        </div>
        <div data-aos="fade-up" className="bg-gradient-to-r from-pink-100 via-white to-rose-100 rounded-xl shadow p-6 mb-6">
          <h3 className="text-xl font-semibold text-pink-800 mb-2">🔧 DevOps Tools</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Git, GitHub, Jenkins, Github Action, Maven, SonarQube, Nexus, Terraform, Ansible, Docker, Kubernetes, Confluence, Jira</li>
          </ul>
        </div>
        <div data-aos="fade-up" className="bg-gradient-to-r from-teal-100 via-white to-green-100 rounded-xl shadow p-6 mb-6">
          <h3 className="text-xl font-semibold text-green-800 mb-2">💻 Programming & OS</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Java, SQL, Bash Shell Scripting</li>
            <li>Linux (RHEL, Ubuntu), Windows</li>
          </ul>
        </div>
      </section>

      <section id="projects" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-yellow-700 mb-12 border-b-4 border-yellow-400 pb-2">🚀 Projects</h2>
        {[{
          title: "Zapin (Pune, IN) – AWS & DevOps Engineer",
          desc: • Implemented CI/CD Pipelines: Developed and maintained automated CI/CD pipelines using Jenkins, Git, GitHub Code Pipeline to streamline application deployment and enhance software delivery speed.
          • Cloud Infrastructure Management: Managed and optimized AWS resources (EC2, S3, VPC, Lambda, etc.) ensuring high availability, scalability, and cost-efficiency of cloud infrastructure for the Zapin project.
          • Infrastructure as Code (IaC): Utilized tools like Terraform & Ansible to automate the provisioning and management of infrastructure, reducing manual intervention and improving consistency across environments.
          • Resolved JIRA tickets and priority incidents, delivering fast and effective solutions."
        } {
          title: "Barclays Bank (UK)- DevOps Engineer",
          desc: "•	Built and maintained CI/CD pipelines using Jenkins, Git, and GitHub.
•	Automated infrastructure provisioning and management with tools like Terraform and Ansible, reducing manual effort.
•	Automated the provisioning, deployment, and management of application servers using Ansible.
•	Configured and managed web servers (Apache) and application servers (Tomcat) to support code deployments.
•	Ensured code quality by performing checks using SonarQube.
•	Developed and implemented monitoring and alerting systems with Nagios and Grafana for performance tracking.
•	Documented deployment processes and configurations in Confluence to improve team collaboration and efficiency.
•	Collaborated effectively with developers, operations teams, and security personnel to diagnose complex technical
problems and implement sustainable solutions."
        } {
          title: "Takenaka Corporation (Japan)- Cloud Engineer",
          desc: "•Launched and configured Amazon EC2 instances (Linux) to meet application requirements and optimize resource usage.
•	Configured and scheduled Cron jobs for task automation and efficient system management.
•	Assisted in resolving multiple issues by providing timely inputs based on root cause analysis.
•	Monitored system performance and identified issues proactively using CloudWatch & CloudTrail.
•	Provide regular updates and reports on assigned tasks and system performance."
        }
        }].map((project, index) => (
          <div key={index} data-aos="fade-up" className="bg-gradient-to-br from-yellow-100 via-white to-yellow-50 rounded-xl shadow p-6 mb-6">
            <h3 className="text-xl font-semibold text-yellow-800 mb-2">📌 {project.title}</h3>
            <p className="text-gray-700 whitespace-pre-line">{project.desc}</p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-600 underline">GitHub</a>
            )}
          </div>
        ))}
      </section>

      <section id="certifications" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-teal-700 mb-12 border-b-4 border-teal-400 pb-2">📜 Certifications</h2>
        <div data-aos="fade-up" className="bg-gradient-to-br from-green-100 via-white to-lime-100 rounded-xl shadow p-6 mb-6">
          <h3 className="text-lg font-semibold">•	AWS certified Cloud Practitioner | Issued on [ May, 2023] | Credential ID EFMCGN41VEBQQF9Y, •	AWS Certified Developer Associate | Issued on [ June, 2023] | Credential ID YRW5QDR2V1B41N3R, •	Google Associate Cloud Engineer Certificate (ACE)| Issued on [ April, 2023] | Credential ID 9270dbe0c9e14dd3b30cf0634814508b</h3>
        </div>
      </section>

      <section id="contact" data-aos="fade-up" className="bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white p-12 text-center">
        <h2 className="text-3xl font-bold mb-6">📬 Get in Touch</h2>
        <p className="mb-2">📧 <a href="mailto:sharadparit2124@gmail.com" className="hover:underline text-blue-300">sharadparit2124@gmail.com</a></p>
        <p className="mb-2">📞 <a href="tel:+919552309642" className="hover:underline text-blue-300">+91 9552309642</a></p>
        <p>📍 Hyderabad, India</p>
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://github.com/Sharad-Parit6094" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition"><FaGithub size={30} /></a>
          <a href="https://www.linkedin.com/in/sharad-parit-3477081a2/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition"><FaLinkedin size={30} /></a>
          <a href="mailto:sharadparit2124@gmail.com" className="hover:text-yellow-300 transition"><MdEmail size={30} /></a>
          <a href="tel:9552309642" className="hover:text-yellow-300 transition"><MdPhone size={30} /></a>
        </div>
      </section>
    </main>
  );
}
