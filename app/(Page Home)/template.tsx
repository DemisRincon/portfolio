"use client";

import { MainContent } from "@/components/MainLayout";
import React from "react";

const template: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <MainContent>{children}</MainContent>;
};

export default template;
