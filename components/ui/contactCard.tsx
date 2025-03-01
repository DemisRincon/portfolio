import { FC } from "react";
interface ContactCardProps {
  children: React.ReactNode;
  name: string;
  text: string;
}
const ContactCard: FC<ContactCardProps> = ({ children, name, text }) => {
  return (
    <div className="bg-white  p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-50  hover:scale-105 transition-transform duration-300 cursor-pointer">
      <div className="flex items-center gap-5">
        <div className="bg-primary-100  p-4 rounded-full">{children}</div>
        <div>
          <h3 className=" text-lg text-primary-900">{name}</h3>
          <p className="text-gray-600 text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
