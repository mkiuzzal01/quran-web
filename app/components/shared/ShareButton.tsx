"use client";

import { Share2 } from "lucide-react";
import { useState } from "react";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title: "The Holy Qur'an",
          text: "Explore the Holy Quran",
          url,
        });
        return;
      }

      await navigator.clipboard.writeText(url);
      setCopied(true);

      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.log("Share failed:", err);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="icon-btn cursor-pointer relative"
    >
      <Share2 className="w-5 h-5" />

      {copied && (
        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-surface border border-theme px-2 py-1 rounded shadow-theme">
          Copied!
        </span>
      )}
    </button>
  );
}
