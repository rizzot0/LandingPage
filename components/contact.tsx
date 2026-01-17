import Container from "./shared/container";

const Contact = () => {
  return (
    <Container>
      <div className="space-y-6">
        <div className="bg-black/40 border-2 border-white/20 rounded-lg p-6">
          <h3 className="pixel-text text-xl mb-4">Contacto</h3>
          <p className="font-pixel text-white/80 mb-6">
            Si te interesa colaborar o tienes preguntas, aquí tienes algunas formas de contactarme.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="mailto:bastianalonso92@gmail.com" className="bg-white/10 hover:bg-white/20 transition-colors border border-white/20 rounded-md p-4">
              <span className="pixel-text text-sm">Email</span>
              <p className="font-pixel text-white/70 text-xs break-all">bastianalonso92@gmail.com</p>
            </a>
            <a href="https://github.com/rizzot0" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 transition-colors border border-white/20 rounded-md p-4">
              <span className="pixel-text text-sm">GitHub</span>
              <p className="font-pixel text-white/70">github.com/rizzot0</p>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
