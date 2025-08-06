import { Download, Award, Users, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'

const About = () => {
  const skills = [
    'Adobe Photoshop',
    'Adobe Illustrator', 
    'Adobe Premiere Pro',
    'CapCut',
    'Canva Pro',
    'Direção de Arte',
    'Visual Storytelling',
    'Manipulação de Imagem',
    'Identidade Visual',
    'Edição de Vídeo'
  ]

  const stats = [
    { icon: Briefcase, number: '4+', label: 'Anos de Experiência' },
    { icon: Users, number: '50+', label: 'Projetos Realizados' },
    { icon: Award, number: '100%', label: 'Satisfação dos Clientes' }
  ]

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/victor-photo.jpg"
                alt="Victor Pacheco"
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-24 h-24 bg-orange-500 rounded-lg opacity-20 -z-10"></div>
            <div className="absolute bottom-4 right-4 w-32 h-32 bg-orange-300 rounded-lg opacity-20 -z-10"></div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Sobre Mim
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Sou Victor Pacheco, designer gráfico e artista visual com uma trajetória 
                empreendedora que me proporcionou um olhar estratégico e pragmático para o design.
              </p>
              
              <p>
                Especializado em identidade visual, vídeo, imagem e narrativa visual, 
                atuo desde 2020 com foco em campanhas, manipulação de imagens, branding 
                e edição de vídeos.
              </p>
              
              <p>
                Não comecei em agência. Comecei empreendendo, errando, acertando e descobrindo 
                o peso que uma imagem mal pensada pode ter para um negócio ou projeto. 
                Foi isso que moldou meu olhar: visual, mas também pragmático.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 my-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-orange-500" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Habilidades Técnicas</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full shadow-sm border border-gray-700 hover:border-orange-500 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
            >
              <Download size={20} className="mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

