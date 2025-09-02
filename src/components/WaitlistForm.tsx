"use client";
import { useState } from "react";
import { Input } from "./ui/input";
import { Turnstile } from "next-turnstile";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [turnstileStatus, setTurnstileStatus] = useState<
    "success" | "error" | "expired" | "required"
  >("required");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);
    setLoading(true);

    if (turnstileStatus !== "success") {
      setError("Please verify you are not a robot");
      setLoading(false);
      return;
    }

    const r = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email.trim(),
        source: "hero",
        turnstileToken: token,
      }),
    });
    const j = await r.json();
    setLoading(false);
    if (j.ok) setMsg("You're in!");
    else {
      // setMsg("Something went wrong.");
      setError(j.error);
      setMsg(j.error);
    }
    if (j.ok) setEmail("");
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col w-full gap-2">
      {msg && <p className="text-sm text-gray-300">{msg}</p>}
      <div className="flex w-full gap-4">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full max-w-90 rounded-2xl border bg-white/5 px-4 py-3 text-white placeholder:text-gray-400"
        />
        {/* <Input */}
        {/*   type="email" */}
        {/*   required */}
        {/*   placeholder="you@example.com" */}
        {/*   value={email} */}
        {/*   onChange={(e) => setEmail(e.target.value)} */}
        {/*   className="border bg-white/5 px-4 py-3 text-white placeholder:text-gray-400" */}
        {/* /> */}
        <button
          disabled={!token}
          className="rounded-2xl bg-emerald-500 px-5 py-3 font-medium text-white disabled:opacity-50 cursor-pointer"
        >
          {loading ? "Joining…" : "Join waitlist"}
        </button>
      </div>
      {!loading && email && (
        <Turnstile
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
          retry="auto"
          refreshExpired="auto"
          sandbox={
            process.env.NODE_ENV === "development" ||
            process.env.TURNSTILE_BYPASS === "true"
          }
          onError={() => {
            setTurnstileStatus("error");
            setError("Security check failed. Please try again.");
          }}
          onExpire={() => {
            setTurnstileStatus("expired");
            setError("Security check expired. Please verify again.");
          }}
          onLoad={() => {
            setTurnstileStatus("required");
            setError(null);
          }}
          onVerify={(token) => {
            setTurnstileStatus("success");
            setError(null);
            setTimeout(() => setLoading(false), 2000);
            setToken(token);
          }}
        />
      )}
    </form>
  );
}
