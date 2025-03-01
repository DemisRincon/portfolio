import Link from "next/link";

interface ButtonLinkProps {
  icon?: React.ReactNode;
  buttonColor: "darkBlue" | "lightBlue" | "black";
  text: string;
  href: string;
  toggle?: () => void;
}

const Button: React.FC<ButtonLinkProps> = ({
  text = "View My Work",
  icon,
  buttonColor = "darkBlue",
  href,
  toggle,
}) => {
  const btnColor = {
    darkBlue:
      "text-white bg-primary-600 rounded-full hover:bg-primary-700 transition-colors duration-300  ",
    lightBlue:
      "text-primary-900 bg-primary-100 rounded-full hover:bg-primary-200 transition-colors duration-300",
    black:
      "text-white bg-coal-700 rounded-full hover:bg-gray-800 transition-colors duration-300",
  };

  if (!href) {
    return (
      <button
        className={`px-8 py-3 text-sm font-medium flex items-center ${btnColor[buttonColor]}`}
        onClick={toggle}
      >
        {text} {icon}
      </button>
    );
  }
  return (
    <Link
      href={href}
      className={`px-8 py-3 text-sm font-medium flex items-center ${btnColor[buttonColor]}`}
    >
      {text} {icon}
    </Link>
  );
};

export default Button;
