import { useState } from 'react'
import { Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'LAYR | Direção visual, ambientações e criativos',
      category: 'design',
      description: 'Criação de ambientações completas a partir de imagens de produto em baixa resolução.',
      image: '/project-layr.png',
      tags: ['Design Visual', 'Direção de Arte', 'Branding'],
      behanceUrl: 'https://www.behance.net/gallery/230337789/LAYR-Direcao-visual-ambientacoes-e-criativos'
    },
    {
      id: 2,
      title: 'Identidade Visual para Singles e EP - Artista Thai',
      category: 'design',
      description: 'Criação de identidades visuais para singles e EPs, explorando diferentes conceitos.',
      image: '/project-thai-identity.jpg',
      tags: ['Identidade Visual', 'Design Gráfico', 'Música'],
      behanceUrl: 'https://www.behance.net/victor-oliveira'
    },
    {
      id: 3,
      title: 'Projeto Gráfico — Capa de Livro',
      category: 'design',
      description: 'Design completo para capa do livro "Penélope – Uma odisseia interior".',
      image: '/project-book-cover.png',
      tags: ['Design Editorial', 'Capa de Livro', 'Diagramação'],
      behanceUrl: 'https://www.behance.net/victor-oliveira'
    },
    {
      id: 4,
      title: 'Space Lamp - Projeto com IA + PS',
      category: 'manipulation',
      description: 'Arte digital que combina elementos gerados por IA com manipulação no Photoshop.',
      image: '/project-space-lamp.png',
      tags: ['Arte Digital', 'IA', 'Photoshop'],
      behanceUrl: 'https://www.behance.net/victor-oliveira'
    },
    {
      id: 5,
      title: 'Campanha lançamento de marca',
      category: 'design',
      description: 'Campanha desenvolvida para marca de roupas com foco em manipulação e retoque.',
      image: '/project-campaign.jpg',
      tags: ['Campanha', 'Retoque', 'Moda'],
      behanceUrl: 'https://www.behance.net/victor-oliveira'
    },
    {
      id: 6,
      title: 'Ensaio fotográfico - Artista Thai',
      category: 'photography',
      description: 'Ensaio fotográfico capturando diferentes momentos e expressões do artista.',
      image: '/project-thai-photo.png',
      tags: ['Fotografia', 'Direção de Arte', 'Retrato'],
      behanceUrl: 'https://www.behance.net/gallery/228889641/Ensaio-fotografico-Artista-Thai'
    }
  ]

  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'design', label: 'Design Gráfico' },
    { id: 'manipulation', label: 'Manipulação' },
    { id: 'photography', label: 'Fotografia' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Meu Portfólio</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes em design gráfico, manipulação de imagens e direção visual.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-3">
                    <Button 
                      size="sm" 
                      className="bg-white text-gray-900 hover:bg-gray-100"
                      onClick={() => window.open(project.behanceUrl, '_blank')}
                    >
                      <Eye size={16} className="mr-2" />
                      Ver no Behance
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            size="lg"
            className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3"
            onClick={() => window.open('https://www.behance.net/victor-oliveira', '_blank')}
          >
            Ver todos os projetos no Behance
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Portfolio

