import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-dots opacity-5"></div>

      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-16 text-dark-900"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="container-wide relative z-10 pt-24 pb-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block group">
              <div className="flex items-center">
                <div className="relative w-12 h-12 mr-3 overflow-hidden">
                  <div className="absolute inset-0 rounded-full bg-primary-600 group-hover:bg-accent-500 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl text-white">E</span>
                  </div>
                </div>
                <span className="font-display text-3xl font-bold tracking-tight text-white group-hover:text-accent-400 transition duration-300">
                  Estradeirando
                </span>
              </div>
            </Link>

            <p className="text-dark-300 mt-6 max-w-md text-lg">
              Compartilhando aventuras, descobertas e experiências pelo Brasil e pelo mundo.
              Junte-se a nós nessa jornada de exploração e inspiração.
            </p>

            <div className="mt-8 flex space-x-4">
              <SocialLink href="https://instagram.com" icon="instagram" label="Instagram" />
              <SocialLink href="https://facebook.com" icon="facebook" label="Facebook" />
              <SocialLink href="https://youtube.com" icon="youtube" label="YouTube" />
              <SocialLink href="https://pinterest.com" icon="pinterest" label="Pinterest" />
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {/* Navigation Links */}
              <div>
                <h3 className="text-lg font-bold mb-6 text-white">Navegação</h3>
                <ul className="space-y-4">
                  <FooterLink href="/" label="Home" />
                  <FooterLink href="/albums" label="Álbuns" />
                  <FooterLink href="/sobre" label="Sobre" />
                  <FooterLink href="/tags" label="Tags" />
                </ul>
              </div>

              {/* Destinos */}
              <div>
                <h3 className="text-lg font-bold mb-6 text-white">Destinos</h3>
                <ul className="space-y-4">
                  <FooterLink href="/tags/Santa%20Catarina" label="Santa Catarina" />
                  <FooterLink href="/tags/Nordeste" label="Nordeste" />
                  <FooterLink href="/tags/Pantanal" label="Pantanal" />
                  <FooterLink href="/albums/bento-goncalves" label="Bento Gonçalves" />
                </ul>
              </div>

              {/* Contato */}
              <div>
                <h3 className="text-lg font-bold mb-6 text-white">Contato</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-3">✉</span>
                    <a href="mailto:contato@estradeirando.com.br" className="text-dark-300 hover:text-primary-400 transition duration-300">
                      contato@estradeirando.com.br
                    </a>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-3">📱</span>
                    <span className="text-dark-300">
                      (51) 99999-9999
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-dark-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-dark-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Estradeirando. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <Link href="/termos" className="text-dark-400 text-sm hover:text-primary-400 transition duration-300">
              Termos de Uso
            </Link>
            <Link href="/privacidade" className="text-dark-400 text-sm hover:text-primary-400 transition duration-300">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Footer Link Component
function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="text-dark-300 hover:text-primary-400 transition duration-300"
      >
        {label}
      </Link>
    </li>
  );
}

// Social Media Link Component
function SocialLink({ href, icon, label }: { href: string; icon: string; label: string }) {
  // Mapeamento de ícones para emojis
  const iconMap: Record<string, string> = {
    'instagram': '📷',
    'facebook': '👍',
    'youtube': '📺',
    'pinterest': '📌'
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center hover:bg-primary-600 transition duration-300"
      aria-label={label}
    >
      <span className="text-lg">{iconMap[icon] || '🔗'}</span>
    </a>
  );
}
