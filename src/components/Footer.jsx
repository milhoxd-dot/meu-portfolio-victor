import { Heart, ExternalLink } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/vp-logo.png" 
                alt="VP Design" 
                className="w-8 h-8"
              />
              <button 
                onClick={scrollToTop}
                className="text-xl font-bold text-white hover:text-orange-400 transition-colors"
              >
                Victor Pacheco
              </button>
            </div>
            <p className="text-gray-400 mb-4">
              Designer Gráfico • Artista Visual • Editor de Vídeos
            </p>
            <p className="text-gray-400 text-sm">
              Transformando ideias em soluções visuais que emocionam e performam.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Portfólio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2">
              <p className="text-gray-400">
                <a 
                  href="mailto:vpdesgin@gmail.com"
                  className="hover:text-orange-400 transition-colors"
                >
                  vpdesgin@gmail.com
                </a>
              </p>
              <p className="text-gray-400">São Paulo, SP - Brasil</p>
              <div className="pt-2">
                <a 
                  href="https://www.behance.net/victor-oliveira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-400 hover:text-orange-400 transition-colors"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Behance Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Victor Pacheco. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            Feito com <Heart size={16} className="mx-1 text-orange-400" /> e muito café
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

