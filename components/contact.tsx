"use client";

import { Mail, Phone } from "lucide-react";
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
	github: string;
	linkedin: string;
}

const Contact: FC<ContactProps> = ({
	title,
	subTitle,
	email,
	phone,
	github,
	linkedin,
}) => {
	const contactData = [
		{
			href: `mailto:${email}`,
			ariaLabel: `Send an email to ${email}`,
			name: "Email",
			text: email,
			icon: <Mail className="h-7 w-7 text-primary-600" />,
		},
		{
			href: `tel:${phone}`,
			ariaLabel: `Call ${phone}`,
			name: "Phone",
			text: phone,
			icon: <Phone className="h-7 w-7 text-primary-600" />,
		},
		{
			href: github,
			ariaLabel: "Visit Github profile",
			name: "Github",
			text: "",
			icon: <BsGithub className="h-7 w-7 text-primary-600 " />,
		},
		{
			href: linkedin,
			ariaLabel: "Visit Linkedin profile",
			name: "Linkedin",
			text: "",
			icon: <LiaLinkedin className="h-7 w-7 text-primary-600 " />,
		},
	];
	return (
		<div className="container mx-auto px-6">
			<WrapperFadeIn>
				<div className="max-w-4xl mx-auto text-center mb-20">
					<SectionTitle title={title} />
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						{subTitle}
					</p>
				</div>
			</WrapperFadeIn>
			<div className="grid  md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
				{contactData.map((contact, index) => (
					<WrapperFadeIn
						key={index}
						transition={{ duration: 0.6, delay: 0.1 * index }}
					>
						<a
							href={contact.href}
							target={
								contact.href.startsWith("http")
									? "_blank"
									: undefined
							}
							rel={
								contact.href.startsWith("http")
									? "noopener noreferrer"
									: undefined
							}
							className="cursor-pointer"
							aria-label={contact.ariaLabel}
						>
							<ContactCard
								name={contact.name}
								text={contact.text}
							>
								{contact.icon}
							</ContactCard>
						</a>
					</WrapperFadeIn>
				))}
			</div>
		</div>
	);
};

export default Contact;
