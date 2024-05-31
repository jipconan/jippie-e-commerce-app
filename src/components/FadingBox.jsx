import React, { useState, useRef, useEffect } from "react";
import { Box } from "@chakra-ui/react";

const FadingBox = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // console.log("FadingBox entered viewport");
        }
      });
    });

    observer.observe(boxRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Box
      ref={boxRef}
      className={`animated-box ${isVisible ? "visible" : ""}`}
      opacity={isVisible ? 1 : 0}
      transition="opacity 1.0s ease-in"
    >
      {props.children}
    </Box>
  );
};

export default FadingBox;
