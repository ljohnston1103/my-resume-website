import EnterForm from "./EnterForm";
import { normalizeRedirectPath } from "../../lib/siteAuth";

export const metadata = {
  title: "Enter Site",
};

export default async function EnterPage({ searchParams }) {
  const params = await searchParams;
  const redirectTo = normalizeRedirectPath(params?.redirect);

  return (
    <main className="entryGate">
      <section className="entryGatePanel">
        <p className="eyebrow">Private Access</p>
        <h1 className="entryGateTitle">Enter the site</h1>
        <p className="entryGateCopy">
          This website is currently password protected. Enter the password
          below to continue to Dr. Luke Johnston&apos;s site.
        </p>
        <EnterForm redirectTo={redirectTo} />
      </section>
    </main>
  );
}
