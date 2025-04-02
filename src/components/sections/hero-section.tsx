import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="home">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-lupi-darker bg-grid-pattern bg-[size:50px_50px]"></div>
      <div className="absolute inset-0 bg-neon-gradient pointer-events-none"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="neon-text">Marketing</span> focado em <br />
              <span className="neon-text">Resultados Reais</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Transformamos tráfego em vendas, leads em clientes e estratégias em crescimento para 
              o seu negócio alcançar resultados mensuráveis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="neon-button" asChild>
                <a href="#contact">Fale com um Especialista</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#services">Conheça Nossos Serviços</a>
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div className="flex flex-col items-center lg:items-start">
                <h3 className="text-3xl font-bold neon-text mb-2">+150</h3>
                <p className="text-gray-400">Clientes satisfeitos</p>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <h3 className="text-3xl font-bold neon-text mb-2">92%</h3>
                <p className="text-gray-400">Taxa de conversão</p>
              </div>
              <div className="flex flex-col items-center lg:items-start sm:col-span-1 col-span-2 mx-auto sm:mx-0">
                <h3 className="text-3xl font-bold neon-text mb-2">7x</h3>
                <p className="text-gray-400">Retorno sobre investimento</p>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="glass-card p-8 animate-glow">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="h-16 w-16 rounded-full bg-[#39FF14]/20 flex items-center justify-center">
                      <span className="text-[#39FF14] text-2xl">📈</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Tráfego Pago</h3>
                      <p className="text-gray-400">Google Ads, Meta Ads, LinkedIn</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="h-16 w-16 rounded-full bg-[#39FF14]/20 flex items-center justify-center">
                      <span className="text-[#39FF14] text-2xl">🔍</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">SEO</h3>
                      <p className="text-gray-400">Otimização para buscadores</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="h-16 w-16 rounded-full bg-[#39FF14]/20 flex items-center justify-center">
                      <span className="text-[#39FF14] text-2xl">🚀</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Estratégia Digital</h3>
                      <p className="text-gray-400">Planejamento para resultados</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-[#39FF14]/10 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#39FF14]/5 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <p className="text-gray-400 mb-2">Scroll</p>
        <div className="w-[2px] h-8 bg-[#39FF14]/50 animate-pulse"></div>
      </div>
    </section>
  );
} 