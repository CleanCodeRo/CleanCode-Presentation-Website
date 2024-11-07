import React from 'react';
import Navbar from '@components/Navbar';
import Landing from '@components/Landing';
import DisplayMenu from '@components/DisplayMenu';
import Contact from '@components/Contact';
import Technologies from '@components/Technologies';
import { MenuProps } from '@models/menu';
import { MenuItemProps } from '@models/menuItem';




const services: MenuItemProps[] = [
  {
    name: "Web Development",
    cards: [
      {
        name: "Frontend Development",
        description: "Building responsive and interactive user interfaces.",
        icon: "frontend-icon.svg"
      },
      {
        name: "Backend Development",
        description: "Creating robust server-side applications.",
        icon: "backend-icon.svg"
      },
      {
        name: "Full-Stack Development",
        description: "Developing both frontend and backend systems.",
        icon: "fullstack-icon.svg"
      }
    ]
  },
  {
    name: "Mobile Development",
    cards: [
      {
        name: "iOS Development",
        description: "Creating high-performance applications for iOS devices.",
        icon: "ios-icon.svg"
      },
      {
        name: "Android Development",
        description: "Developing Android applications with rich features.",
        icon: "android-icon.svg"
      },
      {
        name: "Cross-Platform Development",
        description: "Building apps that run on multiple platforms.",
        icon: "crossplatform-icon.svg"
      }
    ]
  },
  {
    name: "Cloud Computing",
    cards: [
      {
        name: "Cloud Integration",
        description: "Seamlessly integrating applications with cloud services.",
        icon: "cloud-icon.svg"
      },
      {
        name: "Cloud Storage Solutions",
        description: "Providing scalable and secure cloud storage.",
        icon: "cloudstorage-icon.svg"
      },
      {
        name: "Cloud Security",
        description: "Ensuring data protection in the cloud.",
        icon: "cloudsecurity-icon.svg"
      }
    ]
  },
  {
    name: "DevOps",
    cards: [
      {
        name: "CI/CD Pipelines",
        description: "Automating deployment and continuous integration.",
        icon: "cicd-icon.svg"
      },
      {
        name: "Infrastructure as Code",
        description: "Managing infrastructure with code-based tools.",
        icon: "iac-icon.svg"
      },
      {
        name: "Monitoring & Logging",
        description: "Setting up monitoring and logging systems.",
        icon: "monitoring-icon.svg"
      }
    ]
  },
  {
    name: "UI/UX Design",
    cards: [
      {
        name: "User Research",
        description: "Conducting user research to inform design decisions.",
        icon: "userresearch-icon.svg"
      },
      {
        name: "Wireframing & Prototyping",
        description: "Creating wireframes and prototypes for testing.",
        icon: "wireframe-icon.svg"
      },
      {
        name: "Visual Design",
        description: "Designing visually appealing interfaces.",
        icon: "visualdesign-icon.svg"
      }
    ]
  }
]
export default function Home() {

  return (
    <>
      <Navbar />
      <Landing />
      <Technologies />
      <DisplayMenu menuItems={services} />
      <Contact />
    </>
  );
};