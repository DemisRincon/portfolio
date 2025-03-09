"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const navLinks = [
		{ href: "#home", label: "Home" },
		{ href: "#about", label: "About" },
		{ href: "#projects", label: "Projects" },
		{ href: "#contact", label: "Contact" },
	];

	return (
		<header
			className={`fixed top-0 w-full z-50 transition-all duration-300 ${
				scrolled
					? "bg-white/95  backdrop-blur-md shadow-sm"
					: "bg-transparent"
			}`}
		>
			<div className="container mx-auto px-6 py-6 flex items-center justify-between">
				<Link
					href="/"
					className="text-2xl font-bold tracking-tight text-gray-900 "
					data-testid="cypress-title"
					aria-label="Portfolio Home"
				>
					Portfolio
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center space-x-10">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="text-sm font-medium text-gray-700 hover:text-gray-900  transition-colors duration-300"
							data-testid="cypress-nav-links"
							aria-label={link.label}
						>
							{link.label}
						</Link>
					))}
					<a
						href="/resume.pdf"
						download
						target="_blank"
						rel="noopener noreferrer"
						className="px-6 py-2 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-700 transition-colors duration-300  "
						aria-label="Download Resume"
					>
						Resume
					</a>
				</nav>

				{/* Mobile Navigation Toggle */}
				<button
					className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900"
					onClick={toggleMenu}
					aria-label="Toggle menu"
					aria-expanded={isOpen}
					aria-controls="mobile-menu"
				>
					{isOpen ? (
						<X className="h-6 w-6" />
					) : (
						<Menu className="h-6 w-6" />
					)}
				</button>
			</div>

			{/* Mobile Navigation Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-200 "
						id="mobile-menu"
						role="menu"
						aria-label="Mobile Navigation"
					>
						<nav className="container mx-auto px-6 py-8 flex flex-col space-y-6">
							{navLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="text-base font-medium text-gray-700 hover:text-gray-900  transition-colors"
									onClick={() => setIsOpen(false)}
									aria-label={link.label}
									role="menuitem"
								>
									{link.label}
								</Link>
							))}
							<a
								href="/resume.pdf"
								download
								target="_blank"
								rel="noopener noreferrer"
								className="px-6 py-2 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-700 transition-colors duration-300  "
								aria-label="Download Resume"
								role="menuitem"
							>
								Resume
							</a>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
