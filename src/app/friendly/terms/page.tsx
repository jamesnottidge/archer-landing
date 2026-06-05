import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalProse } from '@/components/friendly/legal-prose';
import { friendlyLegalConfig as config } from '@/lib/friendly-legal-config';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of Service and End User License Agreement for the Friendly mobile app.',
};

export default function FriendlyTermsPage() {
  return (
    <LegalProse>
      <h1>Terms of Service &amp; End User License Agreement for Friendly</h1>

      <div className="legal-meta">
        <p>
          <strong>Effective date:</strong> {config.effectiveDate}
        </p>
        <p>
          <strong>Last updated:</strong> {config.lastUpdated}
        </p>
      </div>

      <p>
        These Terms of Service (&quot;Terms&quot;) are a legal agreement between
        you and <strong>{config.legalName}</strong> (&quot;we&quot;, &quot;us&quot;,
        &quot;our&quot;) governing your use of the Friendly mobile app and related
        services (&quot;Friendly&quot;). By creating an account or using Friendly,
        you agree to these Terms and to our{' '}
        <Link href="/friendly/privacy">Privacy Policy</Link>. If you do not agree,
        do not use Friendly.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        You must be at least 13 years old (or the minimum age of digital consent in
        your country) to use Friendly. By using Friendly you confirm that you meet
        this requirement and that the information you provide is accurate.
      </p>

      <h2>2. Your account</h2>
      <p>
        You are responsible for your account and for keeping your login credentials
        secure. You are responsible for activity that happens under your account.
        Tell us promptly at{' '}
        <a href={`mailto:${config.contactEmail}`}>{config.contactEmail}</a> if you
        suspect unauthorized use.
      </p>

      <h2>3. License</h2>
      <p>
        We grant you a personal, limited, non-exclusive, non-transferable, revocable
        license to use Friendly for its intended purpose — sharing weekly moments
        within your private group. You may not copy, modify, reverse-engineer,
        resell, or distribute the app except as permitted by law.
      </p>

      <h2>4. Your content</h2>
      <p>
        You keep ownership of the photos, text, comments, and reactions you create
        (&quot;Your Content&quot;). You grant us a limited license to host, store,
        process, and display Your Content <strong>solely to operate Friendly for you
        and the members of your group</strong> (for example, resizing photos and
        showing them at the weekly reveal). Friendly has no public feed, profiles,
        or search — Your Content is shown only to your group.
      </p>
      <p>
        You represent that you have the rights to share Your Content and that it
        does not infringe anyone&apos;s rights or break any law.
      </p>

      <h2>5. Acceptable use and zero tolerance for objectionable content</h2>
      <p>
        Friendly is a kind, private space.{' '}
        <strong>
          There is zero tolerance for objectionable content or abusive behavior.
        </strong>{' '}
        You agree not to post or do anything that is:
      </p>
      <ul>
        <li>unlawful, harassing, threatening, hateful, or bullying;</li>
        <li>sexually explicit, pornographic, or exploitative of minors;</li>
        <li>violent, gory, or promoting self-harm;</li>
        <li>defamatory, deceptive, or impersonating others;</li>
        <li>
          infringing someone&apos;s intellectual-property or privacy rights; or
        </li>
        <li>spam, malware, or an attempt to disrupt or abuse the service.</li>
      </ul>
      <p>
        <strong>Safety tools and enforcement.</strong> Any member can{' '}
        <strong>report</strong> content and <strong>block</strong> another user from
        within the app. We review reports and <strong>aim to act within 24 hours</strong>{' '}
        — including removing content and <strong>terminating accounts</strong> of users
        who post objectionable content or behave abusively. Because Friendly is a
        closed, invite-only group with no public discovery, reactive reporting and
        blocking are our content-safety safeguards.
      </p>

      <h2>6. Termination</h2>
      <p>
        You may stop using Friendly and delete your account at any time (
        <strong>You → Delete account</strong>), which removes your profile, entries,
        and photos. We may suspend or terminate your access if you violate these
        Terms or to protect users or the service. Sections that by their nature
        should survive termination (e.g. content licenses you&apos;ve granted to your
        group, disclaimers, limitations of liability) will survive.
      </p>

      <h2>7. Disclaimers</h2>
      <p>
        Friendly is provided <strong>&quot;as is&quot; and &quot;as available,&quot;
        without warranties of any kind</strong>, express or implied, to the fullest
        extent permitted by law. We do not warrant that the app will be uninterrupted,
        error-free, or that content will always be delivered or preserved.
      </p>

      <h2>8. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, we will not be liable for any
        indirect, incidental, special, consequential, or punitive damages, or for loss
        of data, content, or goodwill, arising from your use of Friendly. Our total
        liability for any claim is limited to <strong>{config.liabilityCap}</strong>.
      </p>

      <h2>9. Indemnity</h2>
      <p>
        You agree to indemnify and hold us harmless from claims arising out of Your
        Content or your violation of these Terms or any law, to the extent permitted
        by applicable law.
      </p>

      <h2>10. Changes to the service and these Terms</h2>
      <p>
        We may change, suspend, or discontinue parts of Friendly, and we may update
        these Terms. For material changes we will provide notice in the app and update
        the &quot;Last updated&quot; date. Continued use after changes means you
        accept the updated Terms.
      </p>

      <h2>11. Governing law</h2>
      <p>
        These Terms are governed by the laws of <strong>{config.jurisdiction}</strong>,
        without regard to conflict-of-laws rules.
      </p>

      <h2>12. Apple App Store terms</h2>
      <p>If you downloaded Friendly from the Apple App Store, you acknowledge that:</p>
      <ul>
        <li>
          These Terms are between you and us, <strong>not Apple</strong>, and Apple is
          not responsible for Friendly or its content.
        </li>
        <li>Apple has no obligation to provide support or maintenance for Friendly.</li>
        <li>
          To the extent Friendly fails to conform to any applicable warranty, you may
          notify Apple for a refund of the purchase price (if any); otherwise Apple has
          no warranty obligation.
        </li>
        <li>
          Apple is <strong>a third-party beneficiary</strong> of these Terms and may
          enforce them against you.
        </li>
        <li>
          You confirm you are not located in a U.S.-embargoed country or on a U.S.
          prohibited-parties list, and you will comply with applicable export laws.
        </li>
      </ul>

      <h2>13. Contact</h2>
      <p>
        <strong>{config.legalName}</strong>
        <br />
        Email:{' '}
        <a href={`mailto:${config.contactEmail}`}>{config.contactEmail}</a>
        {config.mailingAddress && (
          <>
            <br />
            {config.mailingAddress}
          </>
        )}
      </p>
    </LegalProse>
  );
}
