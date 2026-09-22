import { Page, PageTitle, Section, TextLink } from '@/components/Prose';

// TODO(neil): swap these placeholder hrefs for the real links.
const AWARD_URL = '#';
const DVRK_PAPER_URL = '#';
const THAKOR_PAPER_URL = '#';

export default function Research() {
  return (
    <Page>
      <PageTitle title="Research" />

      <Section title="Sports Analytics">
        <p>
          I am continuing work with the Sports Analytics Research Group under
          Anton Dahbura at Johns Hopkins on lineup optimization, which won JHU
          Design Day — see the award <TextLink href={AWARD_URL}>here</TextLink>.
          We are now in early stages of conversations with coaches and managers
          from the Atlantic League and are set to be featured on the front page
          of the JHU Engineering Magazine. You can try it out for yourself at{' '}
          <TextLink href="https://lineupoptimization.com">
            lineupoptimization.com
          </TextLink>
          .
        </p>
      </Section>

      <Section title="SMARTS Lab">
        <p>
          This summer, I am working at the SMARTS Lab on the force estimation
          team of the da Vinci Research Kit. [
          <TextLink href={DVRK_PAPER_URL}>paper</TextLink>]
        </p>
      </Section>

      <Section title="Nitesh Thakor Lab">
        <p>
          I am also working at the Nitesh Thakor Lab to develop a commercial
          product that uses sensors and deep learning in insoles to measure
          joint torque and ground reaction forces in the gait cycle. Currently,
          I am writing a SSL model to predict joint angles in the gait cycle. [
          <TextLink href={THAKOR_PAPER_URL}>paper</TextLink>]
        </p>
      </Section>

      <Section title="Intuitive Computing Lab">
        <p>
          I also work as a data analyst researcher at the Intuitive Computing
          Lab. We are currently in the process of publishing a paper with the
          JHU CTY team to analyze problem solving techniques in children using
          NLP from survey responses, expected by the end of the summer.
        </p>
      </Section>
    </Page>
  );
}
