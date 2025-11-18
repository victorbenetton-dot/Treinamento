const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container px-6">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Leandro Boni
          </h3>
          <p className="text-muted-foreground">
            Transformando vidas através do desenvolvimento pessoal e profissional.
          </p>
          <div className="pt-4 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Leandro Boni. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
