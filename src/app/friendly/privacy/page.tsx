import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalProse } from '@/components/friendly/legal-prose';
import { friendlyLegalConfig as config } from '@/lib/friendly-legal-config';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for the Friendly mobile app.',
};

function SubProcessorList() {
  const providers = [
    'Supabase — database, authentication, and photo storage hosting.',
    'Expo / EAS — push-notification delivery and app build/update infrastructure.',
    'Apple — app distribution' +
      (config.usesAppleSignIn ? ' and sign-in.' : '.'),
  ];

  if (config.usesSentry) {
    providers.push(
      `${config.sentryProviderName} — crash and error reporting.`
    );
  }

  return (
    <ul>
      {providers.map((provider) => (
        <li key={provider}>{provider}</li>
      ))}
    </ul>
  );
}

export default function FriendlyPrivacyPage() {
  return (
    <LegalProse>
      <h1>Privacy Policy for Friendly</h1>

      <div className="legal-meta">
        <p>
          <strong>Effective date:</strong> {config.effectiveDate}
        </p>
        <p>
          <strong>Last updated:</strong> {config.lastUpdated}
        </p>
      </div>

      <p className="legal-notice">
        This policy should be reviewed by qualified legal counsel before
        publication. Apple App Store Connect requires a publicly reachable URL
        hosting this page.
      </p>

      <p>
        Friendly (&quot;Friendly&quot;, &quot;we&quot;, &quot;us&quot;, or
        &quot;our&quot;) is a private, invite-only app for small friend groups to
        share one photo and one line each week. This Privacy Policy explains what we
        collect, why, and the choices you have. Friendly is operated by{' '}
        <strong>{config.legalName}</strong> (&quot;the operator&quot;).
      </p>

      <p>
        If you do not agree with this policy, please do not use Friendly. See also
        our <Link href="/friendly/terms">Terms of Service</Link>.
      </p>

      <h2>Who this applies to</h2>
      <p>
        Friendly is <strong>not directed to children under 13</strong> (or the
        minimum age of digital consent in your country, e.g. 16 in parts of the
        EU/UK). You must meet the minimum age to use Friendly. We do not knowingly
        collect data from children under that age; if you believe a child has
        provided us data, contact us at{' '}
        <a href={`mailto:${config.privacyEmail}`}>{config.privacyEmail}</a> and we
        will delete it.
      </p>

      <h2>Information we collect</h2>
      <p>We collect only what&apos;s needed to run the weekly ritual:</p>

      <p>
        <strong>You give us directly</strong>
      </p>
      <ul>
        <li>
          <strong>Account:</strong> your email address. Friendly uses passwordless
          sign-in: we send a one-time code (OTP) to your email when you log in. We do
          not collect, store, or use a password.
        </li>
        <li>
          <strong>Profile:</strong> your display name and an optional profile photo
          (avatar).
        </li>
        <li>
          <strong>Content you share:</strong> your weekly photos and the short line of
          text that goes with them, plus any comments and emoji reactions you add.
        </li>
        <li>
          <strong>Group data:</strong> the friend group you join or create, and invite
          codes you generate.
        </li>
        <li>
          <strong>Safety actions:</strong> reports and blocks you submit (so we can
          act on them).
        </li>
      </ul>

      <p>
        <strong>Collected automatically</strong>
      </p>
      <ul>
        <li>
          <strong>Push token:</strong> a device push-notification token so we can
          send the Sunday reveal and gentle reminders (only if you grant notification
          permission).
        </li>
        <li>
          <strong>Basic technical/diagnostic data:</strong> app version, device
          type/OS, and error logs used to keep the app working.
        </li>
      </ul>

      <p>
        <strong>We do not collect</strong>
      </p>
      <ul>
        <li>
          <strong>Precise or background location.</strong> Photos are processed on
          your device before upload to <strong>strip EXIF metadata (including
          GPS/location)</strong>.
        </li>
        <li>
          We do not run advertising, we do not sell your data, and we do not use
          third-party advertising trackers.
        </li>
      </ul>

      <h2>How your photos are handled</h2>
      <p>
        Before a photo leaves your device, Friendly resizes it, converts it to JPEG,
        and strips embedded metadata. Photos are stored in <strong>private
        storage</strong> and are only ever served to members of your group through{' '}
        <strong>short-lived, expiring signed links</strong>. Photos stay hidden until
        the weekly reveal, which is enforced server-side.
      </p>

      <h2>How we use your information</h2>
      <ul>
        <li>
          To provide the core service: create your account, show your group&apos;s
          weekly moments, deliver comments/reactions, and run the synchronized Sunday
          reveal.
        </li>
        <li>
          To send push notifications you&apos;ve opted into (reveal + reminders).
        </li>
        <li>
          To keep Friendly safe: review reports, honor blocks, and remove content or
          accounts that violate our Terms.
        </li>
        <li>To maintain, debug, and improve the app.</li>
      </ul>
      <p>
        We rely on the following legal bases where required (e.g. UK/EU GDPR):
        performance of our agreement with you, your consent (notifications), our
        legitimate interests (safety and improvement), and legal obligations.
      </p>

      <h2>Who we share it with</h2>
      <p>
        We share data only with <strong>service providers (&quot;sub-processors&quot;)</strong>{' '}
        that operate the app on our behalf, under contract, and only as needed:
      </p>
      <SubProcessorList />
      <p>
        We may also disclose information if required by law, to enforce our Terms, or
        to protect the rights and safety of users.{' '}
        <strong>
          Your content is only shared with members of your own private group
        </strong>{' '}
        — Friendly has no public feed, profiles, or search.
      </p>

      <h2>Data retention</h2>
      <p>
        We keep your information for as long as your account is active. When you
        delete your account (see below), we delete your profile, your entries, your
        photos, your comments, and your group membership. Content <strong>other
        members</strong> posted is not affected by your deletion. Backups and logs
        may persist for a limited period before being overwritten.
      </p>

      <h2>Your rights and choices</h2>
      <ul>
        <li>
          <strong>Delete your account and data</strong> at any time in the app:{' '}
          <strong>You → Delete account</strong>. This permanently removes your
          profile, entries, and photos.
        </li>
        <li>
          <strong>Notifications:</strong> turn push notifications off in your device
          settings at any time.
        </li>
        <li>
          <strong>Access, correction, portability, objection:</strong> depending on
          your region (e.g. GDPR, UK GDPR, CCPA/CPRA), you may have rights to access,
          correct, export, or restrict processing of your data. To exercise these,
          email{' '}
          <a href={`mailto:${config.privacyEmail}`}>{config.privacyEmail}</a>.
        </li>
        <li>
          <strong>California residents:</strong> we do not &quot;sell&quot; or
          &quot;share&quot; personal information as those terms are defined under the
          CCPA/CPRA.
        </li>
      </ul>

      <h2>Security</h2>
      <p>
        We protect your data with encryption in transit, row-level access controls in
        the database, and private photo storage. No system is perfectly secure, but we
        work to safeguard your information and to limit access to what&apos;s
        necessary.
      </p>

      <h2>International transfers</h2>
      <p>
        Your data may be processed in countries other than your own (for example,
        where our sub-processors host infrastructure). Where required, we use
        appropriate safeguards for such transfers.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. We&apos;ll revise the &quot;Last
        updated&quot; date and, for material changes, provide notice in the app.
        Continued use after changes means you accept the updated policy.
      </p>

      <h2>Contact</h2>
      <p>
        Questions or requests about your privacy:
        <br />
        <strong>{config.legalName}</strong>
        <br />
        Email:{' '}
        <a href={`mailto:${config.privacyEmail}`}>{config.privacyEmail}</a>
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
