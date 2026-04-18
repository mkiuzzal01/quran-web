import Container from "../shared/Container";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-theme mt-16">
      <Container className="py-8">
        <div className="flex flex-col items-center gap-4 text-center">

          {/* Branding */}
          <h3 className="text-primary text-lg font-semibold tracking-wide">
            The Holy Qur’an
          </h3>

          {/* Divider */}
          <div className="w-16 divider" />

          {/* Description */}
          <p className="text-secondary text-sm max-w-md">
            A simple and accessible Quran web app for reading, searching,
            and reflecting on the words of Allah.
          </p>

          {/* Footer Bottom */}
          <div className="text-muted text-xs pt-2">
            © {new Date().getFullYear()} The Holy Qur’an. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
