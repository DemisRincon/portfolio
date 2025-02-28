import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 py-16 bg-coal">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2 text-white dark:text-primary-100">
              Demis Rincon
            </h3>
            <p className="text-white dark:text-gray-400 max-w-md">
              A passionate Software developer focused on creating exceptional
              digital experiences.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex space-x-6">
              <Link
                href="https://github.com/DemisRincon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300"
              >
                <BsGithub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/demisrincon/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300"
              >
                <LiaLinkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
            <p className="text-sm text-white dark:text-gray-400">
              © {new Date().getFullYear()} Demis Rincon. Open source.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
