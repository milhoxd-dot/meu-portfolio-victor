import { ArrowDown, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Olá, eu sou{' '}
            <span className="text-orange-500">Victor Pacheco</span>
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 font-light">
            Designer Gráfico • Artista Visual • Editor de Vídeos
          </h2>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Design bonito por design bonito, tem de monte. Eu prefiro o que comunica. 
            O que tem intenção, direção, presença e alma.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={scrollToPortfolio}
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
            >
              Ver meu trabalho
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 text-lg"
            >
              Vamos conversar
            </Button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-500 mb-2">Role para baixo</p>
            <button 
              onClick={scrollToPortfolio}
              className="animate-bounce text-orange-500 hover:text-orange-600 transition-colors"
            >
              <ArrowDown size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

