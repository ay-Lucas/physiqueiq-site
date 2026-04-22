"use client";

import { useEffect, useMemo } from "react";

const APP_SCHEME = "physiqueiq://reset-password";
const APP_STORE_URL = "https://apps.apple.com/";
const PLAY_STORE_URL = "https://play.google.com/store";

export default function ResetPasswordRedirectPage() {
  const deepLink = useMemo(() => {
    if (typeof window === "undefined") return null;

    const params = new URLSearchParams(window.location.search);
    const tokenHash = params.get("token_hash");
    const type = params.get("type") ?? "recovery";

    if (!tokenHash) return null;

    const appParams = new URLSearchParams({
      token_hash: tokenHash,
      type,
    });

    return `${APP_SCHEME}?${appParams.toString()}`;
  }, []);

  useEffect(() => {
    if (!deepLink) return;

    const start = Date.now();
    window.location.href = deepLink;

    const timer = window.setTimeout(() => {
      if (Date.now() - start < 1800) {
        const isAndroid = /Android/i.test(navigator.userAgent);
        window.location.href = isAndroid ? PLAY_STORE_URL : APP_STORE_URL;
      }
    }, 1500);

    return () => window.clearTimeout(timer);
  }, [deepLink]);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "24px",
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        background: "#0a0a0a",
        color: "#ffffff",
      }}
    >
      <div style={{ maxWidth: 420, textAlign: "center" }}>
        <h1 style={{ fontSize: 32, marginBottom: 12 }}>Opening PhysiqueIQ</h1>
        <p style={{ color: "#b3b3b3", marginBottom: 24 }}>
          If the app does not open automatically, use the button below.
        </p>

        {deepLink ? (
          <a
            href={deepLink}
            style={{
              display: "inline-block",
              padding: "14px 20px",
              borderRadius: 10,
              background: "#34d399",
              color: "#04130d",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Open app
          </a>
        ) : (
          <p style={{ color: "#f87171" }}>
            This reset link is missing required recovery parameters.
          </p>
        )}
      </div>
    </main>
  );
}
