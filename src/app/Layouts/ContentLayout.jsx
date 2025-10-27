import React from "react";

const ContentLayout = ({ children, className = "" }) => {
  return (
    <div className={`container mx-auto px-4 ${className}`}>{children}</div>
  );
};

export default ContentLayout;
