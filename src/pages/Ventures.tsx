import { Page, PageTitle, Section, TextLink } from '@/components/Prose';

export default function Ventures() {
  return (
    <Page>
      <PageTitle title="Ventures" />

      <Section title="Swish">
        <p>
          I am serving as CTO of{' '}
          <TextLink href="https://github.com/neil-d-patel2/swish-website">
            Swish
          </TextLink>
          , a multi-agent system focused on decreasing the data gap between
          small businesses and large enterprises.
        </p>
      </Section>

      <Section title="SafeSock">
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
    </Page>
  );
}
