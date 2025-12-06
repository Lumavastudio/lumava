import React, { PropsWithChildren } from "react";

interface ContainerProps {
  className?: string; // اجازه می‌دهد کلاس اضافه شود
}

export default function Container({ children, className }: PropsWithChildren<ContainerProps>) {
  return (
    <div className={`max-w-7xl mx-auto px-4 md:px-6 lg:px-8 ${className || ""}`}>
      {children}
    </div>
  );
}
