"use client";

import { Mail, Phone, MapPin } from "lucide-react";

import SectionTitle from "./ui/sectionTitle";
import ContactCard from "./ui/contactCard";
import { FC } from "react";
import { LiaLinkedin } from "react-icons/lia";
import { BsGithub } from "react-icons/bs";
import WrapperFadeIn from "./ui/wrapperFadeIn";

interface ContactProps {
  title: string;
  subTitle: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
}
const Contact: FC<ContactProps> = ({
  title,
  subTitle,
  email,
  phone,
  location,
  github,
  linkedin,
}) => {
  return (
    <div className="container mx-auto px-6">
      <WrapperFadeIn>
        <div className="max-w-4xl mx-auto text-center mb-20">
          <SectionTitle title={title} />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {subTitle}
          </p>
        </div>
      </WrapperFadeIn>
      <WrapperFadeIn>
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <a href={`mailto:${email}`} className="cursor-pointer">
            <ContactCard name="Email" text={email}>
              <Mail className="h-7 w-7 text-primary-600 dark:text-primary-400" />
            </ContactCard>
          </a>
          <a href={`tel:${phone}`} className="cursor-pointer">
            <ContactCard name="Phone" text={phone}>
              <Phone className="h-7 w-7 text-primary-600 dark:text-primary-400" />
            </ContactCard>
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <ContactCard name="Github" text={""}>
              <BsGithub className="h-7 w-7 text-primary-600 dark:text-primary-400" />
            </ContactCard>
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <ContactCard name="Linkedin" text={""}>
              <LiaLinkedin className="h-7 w-7 text-primary-600 dark:text-primary-400" />
            </ContactCard>
          </a>
          <ContactCard name="Location" text={location}>
            <MapPin className="h-7 w-7 text-primary-600 dark:text-primary-400" />
          </ContactCard>
        </div>
      </WrapperFadeIn>
    </div>
  );
};

export default Contact;
