import Container from "components/Container";
import React from "react";

const about = () => {
  return (
    <Container
      title="About – Kushal Raut"
      description="See some of my side projects."
    >
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {
            "I'm a 17 year old self taught developer from India. I love to build things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences"
          }
        </p>
      </div>
    </Container>
  );
};

export default about;
