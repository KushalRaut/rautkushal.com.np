import Container from "components/Container";

export default function ProjectsPage({ fallbackData }) {
  return (
    <Container
      title="Projects – Kushal Raut"
      description="See some of my side projects."
    >
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Experience
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {
            "I have been working as a software engineer for a little over a year now. I primarily work with React but in the meantime work with backend technologies like Node,Express,MongoDB and Postgres."
          }
        </p>
        <div className="text-white">
          <div className="flex">
            <div className="w-1/4">
              <h3 className="font-normal text-base italic">
                APR 2022 - MAY 2023
              </h3>
            </div>
            <div className="w-3/4">
              <h3 className="font-bold text-xl">Software Engineer</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {
                  "I have been working as a software engineer for a little over a year now. I primarily work with React but in the meantime work with backend technologies like Node,Express,MongoDB and Postgres."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
