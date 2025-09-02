"use client";
import { useState } from "react";
import { Turnstile } from "next-turnstile";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [turnstileStatus, setTurnstileStatus] = useState<
    "success" | "error" | "expired" | "required"
  >("required");
  const [error, setError] = useState<string | null>(null);

  const [locked, setLocked] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (locked) return; // no-op when locked

    setMsg(null);
    setError(null);
    setLoading(true);

    if (turnstileStatus !== "success" || !token) {
      setError("Please verify you are not a robot");
      setLoading(false);
      setToken(null);
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

    const j = await r.json().catch(() => ({}));
    setLoading(false);

    if (r.ok && j.ok) {
      setMsg("You're in!");
      setEmail("");
      setLocked(true); // lock after success
      setToken(null);
      return;
    }

    // Handle duplicate explicitly
    if (r.status === 409) {
      setMsg("You're already on the list.");
      setError(null);
      setLocked(true); // lock on duplicate so button stays disabled
      setToken(null);
      return;
    }

    // Other errors
    setError(j.error || "Something went wrong.");
    setMsg(j.error || "Something went wrong.");
    setToken(null);
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col w-full gap-2">
      {msg && <p className="text-sm text-gray-300">{msg}</p>}
      <div className="flex w-full gap-4">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (locked) {
              if (e.target.value !== email) setLocked(false);
            }
            console.log(email);
          }}
          placeholder="you@example.com"
          className="w-full max-w-90 rounded-2xl border bg-white/5 px-4 py-3 text-white placeholder:text-gray-400"
        />
        <button
          disabled={locked || loading || !token} // include locked + loading
          className="rounded-2xl bg-emerald-500 px-5 py-3 font-medium text-white disabled:opacity-50 cursor-pointer"
        >
          {loading ? "Joining…" : "Join waitlist"}
        </button>
      </div>
      {!loading && email && !locked && (
        <Turnstile
          className="max-w-90"
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
          retry="auto"
          refreshExpired="auto"
          sandbox={
            process.env.NODE_ENV === "development" &&
            process.env.NEXT_PUBLIC_TURNSTILE_BYPASS !== "true"
          }
          onError={() => {
            setTurnstileStatus("error");
            setError("Security check failed. Please try again.");
            setToken(null);
          }}
          onExpire={() => {
            setTurnstileStatus("expired");
            setError("Security check expired. Please verify again.");
            setToken(null);
          }}
          onLoad={() => {
            setTurnstileStatus("required");
            setError(null);
            setToken(null);
          }}
          onVerify={(token) => {
            setTurnstileStatus("success");
            setError(null);
            setToken(token);
          }}
        />
      )}
    </form>
  );
}
