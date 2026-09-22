import { Page, PageTitle, Section, TextLink } from '@/components/Prose';

const AWARD_URL = 'https://engineering.jhu.edu/designcenter/designday/awards/#dean';
const DVRK_PAPER_URL = 'https://arxiv.org/abs/2405.07453';
const THAKOR_PAPER_URL =
  'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=b9AcfwMAAAAJ&citation_for_view=b9AcfwMAAAAJ:9yKSN-GCB0IC';

export default function Research() {
  return (
    <Page>
      <PageTitle title="Research" />

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
          at Johns Hopkins on lineup optimization, which won JHU Design Day —
          see the award <TextLink href={AWARD_URL}>here</TextLink>.
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
          This summer, I am working at the{' '}
          <TextLink href="https://smarts.lcsr.jhu.edu/">SMARTS Lab</TextLink> on
          the force estimation team of the{' '}
          <TextLink href="https://www.intuitive-foundation.org/dvrk/">
            da Vinci Research Kit
          </TextLink>
          . [
          <TextLink href={DVRK_PAPER_URL}>paper</TextLink>]
        </p>
      </Section>

      <Section title="Nitesh Thakor Lab">
        <p>
          I am also working at the{' '}
          <TextLink href="https://neuroengineering.bme.jhu.edu/">
            Nitesh Thakor Lab
          </TextLink>{' '}
          to develop a commercial product that uses sensors and deep learning in
          insoles to measure
          joint torque and ground reaction forces in the gait cycle. Currently,
          I am writing a SSL model to predict joint angles in the gait cycle. [
          <TextLink href={THAKOR_PAPER_URL}>paper</TextLink>]
        </p>
      </Section>

      <Section title="Intuitive Computing Lab">
        <p>
          I also work as a data analyst researcher at the{' '}
          <TextLink href="https://intuitivecomputing.github.io/">
            Intuitive Computing Lab
          </TextLink>
          . We are currently in the process of publishing a paper with the
          JHU CTY team to analyze problem solving techniques in children using
          NLP from survey responses, expected by the end of the summer.
        </p>
      </Section>
    </Page>
  );
}
