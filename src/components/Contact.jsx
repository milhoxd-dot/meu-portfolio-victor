import { useState } from 'react'
import { Mail, MapPin, Send, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você pode implementar o envio do formulário
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      project: '',
      message: ''
    })
    alert('Mensagem enviada com sucesso! Entrarei em contato em breve.')
  }

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Vamos Conversar
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Tem um projeto em mente? Quer discutir uma ideia? 
            Estou sempre aberto para novos desafios e parcerias.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">
              Informações de Contato
            </h3>
            
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                  <a 
                    href="mailto:vpdesgin@gmail.com"
                    className="text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    vpdesgin@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Localização</h4>
                  <p className="text-gray-300">São Paulo, SP - Brasil</p>
                </div>
              </div>

              {/* Portfolio Links */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Portfólio</h4>
                  <a 
                    href="https://www.behance.net/victor-oliveira"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    Behance Portfolio
                  </a>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 p-6 bg-gray-800 rounded-lg border border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-2">
                Pronto para começar?
              </h4>
              <p className="text-gray-300 mb-4">
                Se você quer impacto com propósito e não só estética bonita, 
                talvez a gente devesse conversar.
              </p>
              <Button 
                className="bg-orange-500 hover:bg-orange-600 text-white"
                onClick={() => window.open('mailto:vpdesgin@gmail.com', '_blank')}
              >
                Enviar Email Direto
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">
              Envie uma Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-white placeholder-gray-400"
                  placeholder="Seu nome completo"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-white placeholder-gray-400"
                  placeholder="seu@email.com"
                />
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="project" className="block text-sm font-medium text-gray-300 mb-2">
                  Tipo de Projeto
                </label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-white"
                >
                  <option value="">Selecione o tipo de projeto</option>
                  <option value="identidade-visual">Identidade Visual</option>
                  <option value="design-grafico">Design Gráfico</option>
                  <option value="edicao-video">Edição de Vídeo</option>
                  <option value="manipulacao-imagem">Manipulação de Imagem</option>
                  <option value="campanha">Campanha Publicitária</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none text-white placeholder-gray-400"
                  placeholder="Conte-me sobre seu projeto, objetivos e como posso ajudar..."
                />
              </div>

              {/* Submit Button */}
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3"
              >
                <Send size={20} className="mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

