import React, { FC } from "react";
interface SectionTitleProps {
  title: string;
}
const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="max-w-4xl mx-auto text-center mb-20">
      <h2 className="text-4xl font-bold mb-6 text-coal-700 dark:text-primary-100">
        {title}
      </h2>
      <div className="h-1 w-20 bg-coal-700 mx-auto mb-10"></div>
    </div>
  );
};

export default SectionTitle;
