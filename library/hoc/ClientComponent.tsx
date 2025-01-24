import React, { ComponentType, useEffect, useState, ReactNode } from "react";

const withClientValidation = <P extends object>(
  Component: ComponentType<P>
) => {
  const HOC: React.FC<P & { children?: ReactNode }> = ({
    children,
    ...restProps
  }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);

    return (
      <>
        {isClient ? (
          <Component {...(restProps as P)}>{children}</Component>
        ) : null}
      </>
    );
  };
  return HOC;
};

export default withClientValidation;
