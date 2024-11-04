import React from "react";
import Work from "../components/Work";
import { personalDetails, workDetails, eduDetails, certifDetails} from "../Details";

function About() {
  return (
    <main className="bg-dark-mode container mx-auto max-width pt-5 pb-20 ">
      <section>
      <h1 className="text-xl text-dark-heading dark:text-cream md:text-3xl xl:text-4xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p className="text-content py-8 lg:max-w-3xl">{personalDetails.about}</p>
      </section>
      <section>
      <h1 className="text-xl text-dark-heading dark:text-cream md:text-3xl xl:text-4xl xl:leading-tight font-bold">
          Experience
        </h1>
        {React.Children.toArray(
          workDetails.map(({ Position, Description, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              description={Description}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
      <section>
      <h1 className="text-xl text-dark-heading dark:text-cream md:text-3xl xl:text-4xl xl:leading-tight font-bold">
          Education
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Position, Description, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              description={Description}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
      <section>
      <h1 className="text-xl text-dark-heading dark:text-cream md:text-3xl xl:text-4xl xl:leading-tight font-bold">
        Certification
        </h1>
        <p className="text-content py-8 lg:max-w-3xl">{certifDetails.certif}</p>
      </section>
    </main>
  );
}

export default About;
