import React, { ComponentType, useEffect, useState, ReactNode } from "react";

interface WithClientValidationProps {
  children?: ReactNode;
}

const withClientValidation = <P extends object>(
  Component: ComponentType<P>
) => {
  const HOC: React.FC<P & WithClientValidationProps> = ({
    children,
    ...restProps
  }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);

    return isClient ? (
      <Component {...(restProps as P)}>{children}</Component>
    ) : null;
  };

  return HOC;
};

export default withClientValidation;
