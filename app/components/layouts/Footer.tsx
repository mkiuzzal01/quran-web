import Container from '../shared/Container'

export default function Footer() {
  return (
    <footer className="h-16 bg-base border-t flex items-center">
      <Container className="flex items-center w-full">
        <div className="flex-1 flex justify-center">
          <span className="text-muted text-sm">
            © {new Date().getFullYear()} The Holy Qur’an. All rights reserved.
          </span>
        </div>
      </Container>
    </footer>
  )
}
