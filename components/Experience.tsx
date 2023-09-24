import Paragraph from "./Paragraph";
import Position from "./Position";
import Subheader from "./Subheader";

export default function Experience() {
  return (
    <section id="experience" className="w-full p-6">
      <Subheader>Experience</Subheader>
      <div className="md:max-w-xl flex flex-col gap-8">
        <Position
          company="DPG Media"
          title="Java / Kotlin Developer"
          startDate="Nov 2023"
          endDate="Present"
          url="https://www.dpgmediagroup.com/nl-NL"
          skills={["Java", "Kotlin", "AWS"]}
        >
          <Paragraph>
            DPG Media is the largest media company in the Netherlands. Their
            Selectives platform is a digital news delivery platform powering
            dozens of mobile applications and websites.
          </Paragraph>
        </Position>
        <Position
          company="Picnic Technologies"
          title="Java Developer"
          startDate="Jan 2022"
          endDate="Oct 2023"
          url="https://picnic.app/nl/"
          skills={[
            "Java",
            "Spring Webflux",
            "MongoDB",
            "Docker",
            "Kubernetes",
            "Python",
          ]}
        >
          <Paragraph>
            Picnic is a fast-growing online grocery delivery scale-up which
            seeks to revolutionize the way people purchase groceries.
          </Paragraph>
          <Paragraph>
            As a Java developer I developed new features end-to-end for the
            customer-facing mobile app. I was Involved in all stages of the
            software development lifecycle and contributed to several impactful
            projects.
          </Paragraph>
          {/* <p className="my-2">
           I led the development of email-based 2FA from implementation to
              release, which decreased the egress of SMS messages and improved
              UX for customers. 
          </p>
          <p className="my-2">
          I also steered the development and migration of a centralized service
              that facilitates the gifting of free articles to customers.
            </p> */}
        </Position>
        <Position
          company="Netcompany"
          title="Software Developer"
          startDate="Dec 2019"
          endDate="Dec 2021"
          url="https://netcompany.com/"
          skills={[
            "TypeScript",
            "React",
            "Node.js",
            "C#",
            ".NET Core",
            "Docker",
          ]}
        >
          <Paragraph>
            Netcompany is a global IT consultancy that specializes in providing
            digital transformation, IT consulting, and software development
            services.
          </Paragraph>
          <Paragraph>
            As a fullstack developer I developed and implemented frontend
            components and contributed to backend applications for ongoing web
            application projects commisioned by government organizations.
          </Paragraph>
          {/* <p className="my-2">
          I also built an internal tool to synchronize items between two issue
              tracking systems, reducing the manual workload for end-users.
          </p> */}
        </Position>
        <Position
          company="Netherlands Aerospace Centre"
          title="Intern"
          startDate="Apr 2018"
          endDate="Jul 2018"
          url="https://www.nlr.nl/"
          skills={["MATLAB"]}
        >
          <Paragraph>
            The Netherlands Aerospace Centre (NLR) is an independent research
            and technology organization that specializes in aerospace research
            and development.
          </Paragraph>
          <Paragraph>
            As an intern I developed an internal tool to visualize the load
            paths on aircraft given sensor data recorded during flights.
          </Paragraph>
        </Position>
      </div>
    </section>
  );
}
