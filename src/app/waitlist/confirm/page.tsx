import { EmailTokenStatus } from "@/lib/waitlist";

type ConfirmSearchParams = {
  status?: EmailTokenStatus;
};

export default async function Confirm({
  searchParams,
}: {
  searchParams: Promise<ConfirmSearchParams>;
}) {
  const { status } = await searchParams;

  let message;
  switch (status) {
    case "ok":
      message = "✅ Email confirmed. You're in!";
      break;
    case "invalid":
      message = "❌ Invalid or expired token. Please try again.";
      break;
    case "missing":
      message = "⚠️ Missing token. Please use the link in your email.";
      break;
    default:
      message = "Unknown confirmation state.";
  }

  return (
    <div className="container mx-auto flex h-[78vh] items-center justify-center text-center">
      <h2 className="text-gray-200 text-2xl font-semibold animate-in fade-in duration-1000 ease-in-out">
        {message}
      </h2>
    </div>
  );
}
