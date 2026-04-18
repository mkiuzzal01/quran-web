"use client";

import { useEffect } from "react";
import Container from "@/app/components/shared/Container";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="bg-base min-h-screen flex items-center">
      <Container className="text-center space-y-6">

        {/* Title */}
        <h1 className="text-primary text-5xl font-bold">
          Something went wrong
        </h1>

        {/* Message */}
        <p className="text-secondary max-w-md mx-auto">
          An unexpected error occurred while loading this page.
          Please try again.
        </p>

        {/* Actions */}
        <div className="flex justify-center gap-3 pt-4">

          <button
            onClick={() => reset()}
            className="btn btn-primary shadow-theme"
          >
            Try again
          </button>

          <button
            onClick={() => window.location.reload()}
            className="btn btn-outline"
          >
            Reload page
          </button>

        </div>

      </Container>
    </div>
  );
}
