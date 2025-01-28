import { MainContent } from "@/components/MainLayout";
import { PageContainer } from "@/components/styled";
import React from "react";

const template = ({ children }) => {
  return <MainContent>{children}</MainContent>;
};

export default template;
