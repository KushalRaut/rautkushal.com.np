import Container from "components/Container";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <Container
      title="About – Kushal Raut"
      description="See some of my side projects."
    >
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="flex flex-wrap">
          <div className="w-full h-[20rem] md:w-2/5 md:h-full flex justify-center md:justify-end lg:order-last">
            <Image
              src="/latestsm.jpg"
              className="rounded-lg object-cover"
              width={270}
              height={467}
              alt="no-img"
            />
          </div>
          <div className="w-full md:w-3/5 text-gray-600 dark:text-gray-400 mb-4">
            <p className="pb-5">
              Hi there! My name is Kushal Raut, and I&apos;m a software engineer
              specializing in Javascript, React Js, Next Js, Node Js, and
              databases like SQL and No-SQL. With a passion for building
              elegant, user-friendly applications, I&apos;ve spent years honing
              my skills and pushing the limits of what&apos;s possible.
            </p>

            <p className="pb-5">
              I thrive on solving complex problems, and I&apos;m constantly
              seeking out new challenges that can help me grow as an engineer.
              From designing responsive user interfaces to creating scalable,
              performant server-side systems, I&apos;m always pushing myself to
              do better and be better.
            </p>

            <p>
              Whether I&apos;m working on a personal project or collaborating
              with a team, I approach every challenge with creativity,
              enthusiasm, and a focus on delivering real value. And when
              I&apos;m not busy coding, you&apos;ll find me exploring the
              outdoors, reading up on the latest tech trends, or spending time
              with my family and friends.
            </p>

            <p>
              If you&apos;re interested in learning more about my work or
              exploring how we can work together, I&apos;d love to hear from
              you. Thanks for stopping by!
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
