export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-12 border-t border-border bg-card">
      <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-bold tracking-tighter">The Hetu's Touch</span>
          <p className="text-sm text-muted-foreground font-medium">
            © {currentYear} All rights reserved.
          </p>
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Instagram
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
