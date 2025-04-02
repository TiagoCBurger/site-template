import { CheckIcon, LightningBoltIcon, TargetIcon, RocketIcon } from "@radix-ui/react-icons";

export function AboutSection() {
  return (
    <section className="section-padding relative" id="about">
      {/* Background effects */}
      <div className="absolute inset-0 bg-lupi-darker"></div>
      <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-10"></div>
      <div className="absolute inset-0 bg-neon-gradient pointer-events-none opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sobre a <span className="neon-text">Lupi Mídias</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Somos uma agência de marketing digital focada em gerar resultados reais e mensuráveis 
            para o crescimento do seu negócio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Nossa Missão</h3>
                <p className="text-gray-300 mb-8">
                  Transformar negócios através de estratégias digitais eficientes, gerando 
                  crescimento consistente e resultados tangíveis para nossos clientes.
                </p>
                
                <h3 className="text-2xl font-bold mb-6">Por que nos escolher?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-6 w-6 rounded-full bg-[#39FF14]/20 flex items-center justify-center flex-shrink-0">
                      <CheckIcon className="h-4 w-4 text-[#39FF14]" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Resultados Comprovados</h4>
                      <p className="text-gray-400">
                        Nossos clientes experimentam crescimento real e mensurável.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-6 w-6 rounded-full bg-[#39FF14]/20 flex items-center justify-center flex-shrink-0">
                      <CheckIcon className="h-4 w-4 text-[#39FF14]" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Estratégias Personalizadas</h4>
                      <p className="text-gray-400">
                        Criamos planos específicos para as necessidades de cada cliente.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-6 w-6 rounded-full bg-[#39FF14]/20 flex items-center justify-center flex-shrink-0">
                      <CheckIcon className="h-4 w-4 text-[#39FF14]" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Equipe Especializada</h4>
                      <p className="text-gray-400">
                        Profissionais com ampla experiência em marketing digital.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-[#39FF14]/5 blur-xl"></div>
              <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[#39FF14]/5 blur-xl"></div>
            </div>
          </div>
          
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass-card p-6 h-full transition-all duration-300 hover:translate-y-[-5px]">
                <div className="h-12 w-12 rounded-full bg-[#39FF14]/20 flex items-center justify-center mb-4">
                  <LightningBoltIcon className="h-6 w-6 text-[#39FF14]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Estratégia Eficiente</h3>
                <p className="text-gray-400">
                  Desenvolvemos planos estratégicos completos para maximizar seu investimento em marketing.
                </p>
              </div>
              
              <div className="glass-card p-6 h-full transition-all duration-300 hover:translate-y-[-5px]">
                <div className="h-12 w-12 rounded-full bg-[#39FF14]/20 flex items-center justify-center mb-4">
                  <TargetIcon className="h-6 w-6 text-[#39FF14]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Foco em Resultados</h3>
                <p className="text-gray-400">
                  Nossa abordagem é orientada por dados e focada em métricas que realmente importam para o seu negócio.
                </p>
              </div>
              
              <div className="glass-card p-6 h-full transition-all duration-300 hover:translate-y-[-5px]">
                <div className="h-12 w-12 rounded-full bg-[#39FF14]/20 flex items-center justify-center mb-4">
                  <RocketIcon className="h-6 w-6 text-[#39FF14]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Crescimento Acelerado</h3>
                <p className="text-gray-400">
                  Implementamos táticas comprovadas para escalar seu negócio de forma sustentável e rápida.
                </p>
              </div>
              
              <div className="glass-card p-6 h-full transition-all duration-300 hover:translate-y-[-5px]">
                <div className="h-12 w-12 rounded-full bg-[#39FF14]/20 flex items-center justify-center mb-4">
                  <span className="text-[#39FF14] text-xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Parceria de Longo Prazo</h3>
                <p className="text-gray-400">
                  Construímos relacionamentos duradouros com nossos clientes, acompanhando cada etapa do crescimento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 