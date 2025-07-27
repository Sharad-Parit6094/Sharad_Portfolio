// React Portfolio for Sharad Parit with interactive hover effects

import React, { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import profileImg from "./Sharad_Profile.jpg";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-pink-50 to-blue-100 text-gray-800 font-sans">
      {/* Header Section */}
      <section data-aos="fade-down" className="bg-gradient-to-br from-[#141e30] via-[#243b55] to-[#141e30] text-white py-20 px-6 text-center">
        <img src={profileImg} alt="Sharad Parit" className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-white shadow-2xl" />
        <h1 className="text-5xl font-extrabold mb-2 tracking-wider">Sharad Parit</h1>
        <p className="text-xl font-medium">
          DevOps Engineer | CI/CD | Terraform | Docker | Kubernetes | Monitoring | Linux | Bash | Jenkins
        </p>
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

      {/* Summary Section */}
      <section id="summary" data-aos="fade-left" className="p-8 max-w-5xl mx-auto bg-white rounded-xl shadow-lg hover:bg-indigo-50 transition duration-300">
        <h2 className="text-3xl font-bold mb-4 text-indigo-800 border-b-4 border-indigo-300 pb-2 text-center">🧾 Summary</h2>
        <p className="text-lg leading-relaxed text-gray-800">
          Results-driven AWS Cloud & DevOps Engineer with 3.6 years of experience in cloud infrastructure automation, CI/CD pipelines, Infrastructure as Code (IaC), containerization, monitoring, and scripting. Hands-on with AWS (EC2, S3, IAM, RDS, VPC, Lambda, EKS, CloudWatch, CloudTrail), Docker, Jenkins, Terraform, Ansible, Prometheus, Grafana, and Kubernetes.
        </p>
      </section>

      {/* Education Section */}
      <section id="education" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12 border-b-4 border-blue-400 pb-2">🎓 Education</h2>
        <div data-aos="fade-up" className="bg-gradient-to-br from-blue-100 via-white to-blue-50 rounded-xl shadow p-6 mb-6">
          <h3 className="text-xl font-semibold mb-2">Bachelor of Engineering – Shivaji University, Kolhapur</h3>
          <p className="text-gray-700">Electrical Engineering | 2017 – 2021 | Percentage – 90.25%</p>
        </div>
      </section>

      {/* Technical Summary */}
      <section id="technical-summary" data-aos="zoom-in" className="p-8 max-w-5xl mx-auto bg-gradient-to-r from-teal-100 via-white to-purple-100 rounded-xl shadow hover:shadow-2xl transition duration-300">
        <h2 className="text-3xl font-bold mb-4 text-teal-800 border-b-4 border-teal-400 pb-2 text-center">📘 Technical Summary</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-800">
          <li>CI/CD pipeline implementation using Git, GitHub, Jenkins, GitHub Actions, Maven, SonarQube, Nexus</li>
          <li>Infrastructure automation with Terraform; Configuration Management using Ansible</li>
          <li>Monitoring using CloudWatch, Prometheus, Grafana, and Nagios</li>
          <li>Kubernetes cluster deployment and management</li>
          <li>Cloud resource optimization on AWS (EKS, EC2, S3, Lambda, etc.)</li>
        </ul>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-12 border-b-4 border-purple-400 pb-2">🧠 Technical Skills</h2>
        <div data-aos="fade-up" className="grid gap-6 sm:grid-cols-2">
          <div className="bg-purple-100 rounded-xl p-6 shadow">
            <h3 className="font-semibold text-lg mb-2 text-purple-800">☁️ AWS</h3>
            <p>EC2, S3, IAM, Lambda, RDS, VPC, EKS, CloudWatch, CloudTrail, ELB, Auto Scaling</p>
          </div>
          <div className="bg-pink-100 rounded-xl p-6 shadow">
            <h3 className="font-semibold text-lg mb-2 text-pink-800">🛠 DevOps Tools</h3>
            <p>Git, GitHub, Jenkins, GitHub Actions, SonarQube, Nexus, Terraform, Ansible, Docker, Kubernetes, JIRA, Confluence</p>
          </div>
          <div className="bg-green-100 rounded-xl p-6 shadow">
            <h3 className="font-semibold text-lg mb-2 text-green-800">💻 Programming & OS</h3>
            <p>Bash, Java, SQL | Linux (Ubuntu, Amazon Linux), Windows</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-yellow-700 mb-12 border-b-4 border-yellow-400 pb-2">🚀 Projects</h2>
        {[
          {
            title: "Zapin (Pune, IN) – AWS & DevOps Engineer",
            desc: `• Developed CI/CD pipelines using Jenkins, Git, GitHub, and CodePipeline\n• Managed AWS resources including EC2, S3, VPC, Lambda\n• Used Terraform and Ansible for IaC and provisioning\n• Handled JIRA ticket resolution and incident management`
          },
          {
            title: "Barclays Bank (UK) – DevOps Engineer",
            desc: `• Built CI/CD pipelines with Jenkins, GitHub\n• Managed infrastructure with Terraform and Ansible\n• Deployed with Apache/Tomcat, monitored via Grafana/Nagios\n• Ensured code quality using SonarQube\n• Documented with Confluence`
          },
          {
            title: "Takenaka Corporation (Japan) – Cloud Engineer",
            desc: `• Deployed EC2 instances and monitored with CloudWatch\n• Automated tasks using cron jobs\n• Performed root cause analysis and system monitoring`
          }
        ].map((project, index) => (
          <div key={index} data-aos="fade-up" className="bg-yellow-100 rounded-xl shadow p-6 mb-6">
            <h3 className="text-xl font-semibold text-yellow-800 mb-2">{project.title}</h3>
            <p className="text-gray-800 whitespace-pre-line">{project.desc}</p>
          </div>
        ))}
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-teal-700 mb-12 border-b-4 border-teal-400 pb-2">📜 Certifications</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-800">
          <li>AWS Certified Cloud Practitioner – May 2023 – Credential ID: EFMCGN41VEBQQF9Y</li>
          <li>AWS Certified Developer Associate – June 2023 – Credential ID: YRW5QDR2V1B41N3R</li>
          <li>Google Associate Cloud Engineer – April 2023 – Credential ID: 9270dbe0c9e14dd3b30cf0634814508b</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" data-aos="fade-up" className="bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white p-12 text-center">
        <h2 className="text-3xl font-bold mb-6">📬 Get in Touch</h2>
        <p className="mb-2">📧 <a href="mailto:sharadparit2124@gmail.com" className="hover:underline text-blue-300">sharadparit2124@gmail.com</a></p>
        <p className="mb-2">📞 <a href="tel:+919552309642" className="hover:underline text-blue-300">+91 9552309642</a></p>
        <p>📍 Pune, India</p>
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
