import React, { FC, ReactNode } from "react";
import { MainContent } from "@/components/MainLayout";

interface TemplateProps {
  children: ReactNode;
}

const Template: FC<TemplateProps> = ({ children }) => {
  return <MainContent>{children}</MainContent>;
};

export default Template;
