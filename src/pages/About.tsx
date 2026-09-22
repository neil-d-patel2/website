import { Page, Section, TextLink } from '@/components/Prose';

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

      <Section title="Sports Analytics">
        <p>
          I am continuing work with the{' '}
          <TextLink href="https://sports-analytics.cs.jhu.edu/who-we-are/">
            Sports Analytics Research Group
          </TextLink>{' '}
          under{' '}
          <TextLink href="https://engineering.jhu.edu/faculty/anton-dahbura/">
            Anton Dahbura
          </TextLink>{' '}
          at Johns Hopkins on lineup optimization, which won JHU Design Day —{' '}
          <TextLink href="https://engineering.jhu.edu/designcenter/designday/awards/#dean">
            see the award here
          </TextLink>
          . We are now in early stages of conversations with coaches and managers
          from the Atlantic League and are set to be featured on the front page
          of the JHU Engineering Magazine. You can try it out for yourself at{' '}
          <TextLink href="https://www.lineupoptimization.com/">
            lineupoptimization.com
          </TextLink>
          .
        </p>
      </Section>

      <Section title="Research">
        <p>
          This summer, I am working at the{' '}
          <TextLink href="https://smarts.lcsr.jhu.edu/">SMARTS Lab</TextLink> on
          the force estimation team of the{' '}
          <TextLink href="https://www.intuitive-foundation.org/dvrk/">
            da Vinci Research Kit
          </TextLink>
          . <TextLink href="https://arxiv.org/abs/2405.07453">[paper]</TextLink>
        </p>
        <p>
          I am also working at the{' '}
          <TextLink href="https://neuroengineering.bme.jhu.edu/">
            Nitesh Thakor Lab
          </TextLink>{' '}
          to develop a commercial product that uses sensors and deep learning in
          insoles to measure joint torque and ground reaction forces in the gait
          cycle. Currently, I am writing a SSL model to predict joint angles in
          the gait cycle.{' '}
          <TextLink href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=b9AcfwMAAAAJ&citation_for_view=b9AcfwMAAAAJ:9yKSN-GCB0IC">
            [paper]
          </TextLink>
        </p>
        <p>
          I also work as a data analyst researcher at the{' '}
          <TextLink href="https://intuitivecomputing.github.io/">
            Intuitive Computing Lab
          </TextLink>
          . We are currently in the process of publishing a paper with the JHU
          CTY team to analyze problem solving techniques in children using NLP
          from survey responses, expected by the end of the summer.
        </p>
      </Section>

      <Section title="Ventures">
        <p>
          I am serving as CTO of{' '}
          <TextLink href="https://github.com/neil-d-patel2/swish-website">
            Swish
          </TextLink>
          , a multi-agent system focused on decreasing the data gap between small
          businesses and large enterprises.
        </p>
        <p>
          I am also Lead Engineer at{' '}
          <TextLink href="https://safesock.net">SafeSock</TextLink>, where our
          4-person team is developing a smart compression sock with embedded
          pressure sensors, haptic feedback actuators, and real-time biomechanical
          data acquisition for post-surgical monitoring by orthopedic surgeons.
          We placed in the top 10 at the Americas 250 Startups competition out of
          hundreds of early-stage ventures, and raised ~$105,000 pre seed.
        </p>
      </Section>

      <Section title="Past Projects">
        <ul>
          <li>
            AI voice-recognition scorekeeping system for the Atlantic League,
            sponsored by president Rick White built under the{' '}
            <TextLink href="https://sports-analytics.cs.jhu.edu/">
              SARG Lab
            </TextLink>{' '}
            as Lead Software Engineer.
          </li>
        </ul>
      </Section>
    </Page>
  );
}
