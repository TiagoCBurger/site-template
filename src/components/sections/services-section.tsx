import { ArrowRightIcon } from "@radix-ui/react-icons";

export function ServicesSection() {
  const services = [
    {
      icon: "🚀",
      title: "Assessoria de Marketing Completa",
      description: "Tráfego pago e estratégias personalizadas para alcançar seu cliente onde ele estiver na internet.",
      features: [
        "Google Ads e Meta Ads",
        "Marketing de Conteúdo",
        "SEO e Tráfego Orgânico",
        "Analytics e Relatórios"
      ]
    },
    {
      icon: "🔍",
      title: "Consultoria de Aceleração",
      description: "Mentoria individual com encontros online para acelerar seus resultados de marketing.",
      features: [
        "Análise personalizada",
        "Plano de ação específico",
        "Mentorias semanais",
        "Acompanhamento de métricas"
      ]
    },
    {
      icon: "💻",
      title: "Criação de Sites",
      description: "Desenvolvimento de e-commerce, landing pages e sites institucionais com foco em conversão.",
      features: [
        "Design moderno e responsivo",
        "Otimização para SEO",
        "Integração com plataformas",
        "Alta velocidade de carregamento"
      ]
    },
    {
      icon: "📱",
      title: "Lançamentos Digitais",
      description: "Planejamento e execução de lançamentos de produtos e serviços digitais.",
      features: [
        "Estratégia de pré-lançamento",
        "Criação de conteúdo",
        "Webinars e lives",
        "Análise de resultados"
      ]
    }
  ];

  return (
    <section className="section-padding relative" id="services">
      {/* Background effects */}
      <div className="absolute inset-0 bg-lupi-darker"></div>
      <div className="absolute inset-0 bg-neon-gradient pointer-events-none opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Nossos <span className="neon-text">Serviços</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Oferecemos soluções completas para o crescimento do seu negócio, 
            sempre com foco em resultados reais e mensuráveis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card transition-all duration-300 hover:translate-y-[-5px]"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <div className="h-16 w-16 rounded-full bg-[#39FF14]/20 flex items-center justify-center mb-4">
                    <span className="text-[#39FF14] text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                </div>
                
                <div className="mt-auto">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#39FF14] mr-2">✓</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="#contact" 
                    className="inline-flex items-center text-[#39FF14] hover:underline"
                  >
                    <span>Saiba mais</span>
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="neon-button">
            Solicite um Orçamento
          </a>
        </div>
      </div>
    </section>
  );
} 