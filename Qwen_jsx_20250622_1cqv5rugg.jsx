import { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const packages = [
    {
      name: 'AI Social Spark',
      price: '$50/mês',
      features: [
        '15 posts (imagem + copy otimizada)',
        '1 vídeo curto (até 30s)',
        'Criação do avatar de IA inicial',
        'Perfil Instagram otimizado',
        'Conteúdo entregue semanalmente'
      ],
      description: 'Perfeito para iniciar sua presença online única com IA.'
    },
    {
      name: 'AI Content Accelerator',
      price: '$150/mês',
      features: [
        '25 posts (imagem + copy otimizada)',
        '2 vídeos curtos (até 30s cada)',
        '1 avatar de influenciador IA personalizado',
        '3-5 trechos de copy promocional adicionais',
        'Conteúdo entregue semanalmente'
      ],
      description: 'Ideal para acelerar sua estratégia de conteúdo e construir uma identidade de marca mais forte.'
    },
    {
      name: 'AI Content Domination',
      price: '$300/mês',
      features: [
        '50 posts (imagem + copy otimizada)',
        '5 vídeos curtos (até 30s cada)',
        '3 avatares de IA personalizados',
        '5-10 peças de copy estratégicas',
        'Sessão de estratégia de 30 minutos',
        'Calendário de conteúdo mensal',
        'Análise de concorrentes assistida por IA'
      ],
      description: 'A solução definitiva para dominar sua presença nas redes sociais com conteúdo estratégico e exclusivo.'
    }
  ];

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold">IA & Influenciadores Digitais</h1>
          <nav className="space-x-4 hidden md:flex">
            <button onClick={() => setActiveTab('home')} className="hover:underline">Início</button>
            <button onClick={() => setActiveTab('packages')} className="hover:underline">Pacotes</button>
            <button onClick={() => setActiveTab('why-us')} className="hover:underline">Por Que Nós?</button>
            <button onClick={() => setActiveTab('contact')} className="hover:underline">Contato</button>
          </nav>
          <button className="md:hidden focus:outline-none" onClick={() => setActiveTab('menu')}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {activeTab === 'menu' && (
        <div className="md:hidden bg-white shadow-md p-4 space-y-3">
          <button onClick={() => setActiveTab('home')} className="block w-full text-left hover:bg-gray-100 p-2 rounded">Início</button>
          <button onClick={() => setActiveTab('packages')} className="block w-full text-left hover:bg-gray-100 p-2 rounded">Pacotes</button>
          <button onClick={() => setActiveTab('why-us')} className="block w-full text-left hover:bg-gray-100 p-2 rounded">Por Que Nós?</button>
          <button onClick={() => setActiveTab('contact')} className="block w-full text-left hover:bg-gray-100 p-2 rounded">Contato</button>
        </div>
      )}

      {/* Hero Section */}
      {activeTab === 'home' && (
        <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto text-center max-w-4xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              Transforme Sua Presença Online com Conteúdo de IA e Influenciadores Digitais!
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Oferecemos criação de conteúdo para redes sociais usando IA e avatares digitais únicos. Ideal para pequenas empresas, coaches e criadores de conteúdo.
            </p>
            <img src="https://picsum.photos/seed/socialmedia/800/400"  alt="Avatar digital" className="rounded-lg shadow-lg mx-auto mb-8" />
            <button onClick={() => setActiveTab('contact')} className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full text-lg font-semibold transition duration-300 transform hover:scale-105">
              Fale Conosco Agora
            </button>
          </div>
        </section>
      )}

      {/* Packages Section */}
      {activeTab === 'packages' && (
        <section id="packages" className="py-16 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Nossos Pacotes Mensais</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {packages.map((pkg, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white text-center">
                    <h3 className="text-xl font-bold">{pkg.name}</h3>
                    <p className="text-2xl font-extrabold my-2">{pkg.price}</p>
                  </div>
                  <div className="p-6">
                    <ul className="mb-6 space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-gray-600 italic mb-4">{pkg.description}</p>
                    <button onClick={() => setActiveTab('contact')} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-medium transition">
                      Contratar Este Pacote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Us Section */}
      {activeTab === 'why-us' && (
        <section id="why-us" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Por Que Nos Escolher?</h2>
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-700">
              <p><span className="font-semibold">Serviço "Feito Para Você":</span> Cuidamos de tudo, desde a criação do avatar IA até a geração de conteúdo. Não precisa aprender ferramentas complexas!</p>
              <p><span className="font-semibold">Marca Única com Influenciador IA:</span> Destaque-se com um rosto digital consistente e personalizado para sua marca.</p>
              <p><span className="font-semibold">Eficiência da IA + Criatividade Humana:</span> Obtenha conteúdo de alta qualidade rapidamente, refinado pelo toque humano de um especialista.</p>
              <p><span className="font-semibold">Foco em Resultados:</span> Nosso objetivo final é ajudar você a aumentar o engajamento, atrair seguidores e impulsionar as vendas.</p>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeTab === 'contact' && (
        <section id="contact" className="py-16 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Como Contratar / Próximos Passos</h2>
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <ol className="list-decimal list-inside space-y-4 text-lg text-gray-700 mb-8">
                <li>Escolha o pacote que melhor se adapta às suas necessidades.</li>
                <li>Entre em contato conosco através do WhatsApp ou E-mail.</li>
                <li>Discutiremos suas necessidades e confirmaremos os detalhes do serviço.</li>
                <li>O pagamento será feito via transferência bancária após confirmação do serviço.</li>
                <li>Assim que o pagamento for confirmado, iniciaremos o trabalho.</li>
              </ol>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/SEUNUMERO"  target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full text-center font-semibold transition">
                  Fale no WhatsApp
                </a>
                <a href="mailto:SEUEMAIL@SEUDOMINIO.COM" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full text-center font-semibold transition">
                  Enviar E-mail
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 AI & Influenciadores Digitais. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">Desenvolvido com inteligência artificial e paixão pela inovação.</p>
        </div>
      </footer>
    </div>
  );
}