import Link from "next/link";
import Container from "@/app/components/shared/Container";

export default function NotFound() {
  return (
    <div className="bg-base min-h-screen flex items-center">
      <Container className="text-center space-y-6">

        {/* Code */}
        <h1 className="text-primary text-6xl font-bold tracking-wide">
          404
        </h1>

        {/* Title */}
        <h2 className="text-lg text-secondary">
          Page not found
        </h2>

        {/* Message */}
        <p className="text-muted max-w-md mx-auto">
          The page you are looking for doesn’t exist or may have been moved.
        </p>

        {/* Action */}
        <div className="pt-4">
          <Link href="/" className="btn btn-primary shadow-theme">
            Go back home
          </Link>
        </div>

      </Container>
    </div>
  );
}
