const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="font-sans text-xs text-muted-foreground">
        © {new Date().getFullYear()} — All rights reserved
      </p>
      <p className="font-display italic text-sm text-muted-foreground">
        Designed & built with care
      </p>
    </div>
  </footer>
);

export default Footer;
