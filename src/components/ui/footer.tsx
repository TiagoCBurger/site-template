export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-lupi-darker border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="mb-4">
              <span className="text-xl font-bold text-white">
                <span className="neon-text">Lupi</span> Mídias
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Marketing digital focado em resultados reais. Desenvolvemos estratégias que 
              geram leads, vendas e crescimento para o seu negócio.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4 text-white">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#39FF14] transition-colors">
                  Assessoria de Marketing
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#39FF14] transition-colors">
                  Consultoria de Aceleração
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#39FF14] transition-colors">
                  Criação de Sites
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#39FF14] transition-colors">
                  Lançamentos Digitais
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-[#39FF14] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#39FF14] transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-[#39FF14] transition-colors">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-[#39FF14] transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#39FF14] transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4 text-white">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/lupimidias" 
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#39FF14]/20 transition-colors"
              >
                <span className="text-[#39FF14]">IG</span>
              </a>
              <a 
                href="https://facebook.com/lupimidias" 
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#39FF14]/20 transition-colors"
              >
                <span className="text-[#39FF14]">FB</span>
              </a>
              <a 
                href="https://linkedin.com/company/lupimidias" 
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#39FF14]/20 transition-colors"
              >
                <span className="text-[#39FF14]">IN</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {currentYear} Lupi Mídias. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
} 