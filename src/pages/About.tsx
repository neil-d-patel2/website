import { Page, Section } from '@/components/Prose';

export default function About() {
  return (
    <Page>
      <p className="page-intro">
        Aspiring ML systems engineer, and a computer science and computer
        engineering major.
      </p>

      <Section title="Overview">
        <p>
          I'm a sophomore at Johns Hopkins University studying computer science
          and computer engineering. I'm interested in computer networks,
          embedded systems, deep learning, and distributed systems.
        </p>
      </Section>

      <Section title="Past Projects">
        <p>
          AI voice-recognition scorekeeping system for the Atlantic League,
          sponsored by president Rick White built under the SARG Lab as Lead
          Software Engineer.
        </p>
      </Section>
    </Page>
  );
}
