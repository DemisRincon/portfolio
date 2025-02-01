"use client";
import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("5 seconds have passed");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>This is a clean page component.</p>
    </div>
  );
};

export default Page;
