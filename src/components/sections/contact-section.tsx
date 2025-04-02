import { useState } from "react";
import { Button } from "@/components/ui/button";
import { EnvelopeClosedIcon, ChatBubbleIcon } from "@radix-ui/react-icons";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "marketing"
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        service: "marketing"
      });
    }, 1500);
  };

  return (
    <section className="section-padding relative" id="contact">
      {/* Background effects */}
      <div className="absolute inset-0 bg-lupi-darker"></div>
      <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-10"></div>
      <div className="absolute inset-0 bg-neon-gradient pointer-events-none opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vamos <span className="neon-text">Conversar</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Pronto para impulsionar seus resultados? Entre em contato com nossa equipe.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="h-24 w-24 rounded-full bg-[#39FF14]/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-[#39FF14] text-4xl">✓</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Mensagem Enviada!</h3>
                <p className="text-gray-300 mb-8">
                  Obrigado pelo seu contato. Nossa equipe entrará em contato com você em breve.
                </p>
                <Button 
                  className="neon-button"
                  onClick={() => setIsSubmitted(false)}
                >
                  Enviar Nova Mensagem
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Nome*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-lupi-dark border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#39FF14]/50"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-lupi-dark border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#39FF14]/50"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">
                      Serviço de Interesse*
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full bg-lupi-dark border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#39FF14]/50"
                    >
                      <option value="marketing">Assessoria de Marketing</option>
                      <option value="consultoria">Consultoria de Aceleração</option>
                      <option value="site">Criação de Sites</option>
                      <option value="lancamento">Lançamentos Digitais</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-lupi-dark border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#39FF14]/50"
                      placeholder="Como podemos ajudar?"
                    ></textarea>
                  </div>
                  
                  <div>
                    <Button 
                      type="submit" 
                      className="neon-button w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                    </Button>
                  </div>
                </div>
              </form>
            )}
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-10">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-full bg-[#39FF14]/20 flex items-center justify-center flex-shrink-0">
                  <EnvelopeClosedIcon className="h-6 w-6 text-[#39FF14]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <a href="mailto:contato@lupimidias.com.br" className="text-gray-300 hover:text-[#39FF14] transition-colors">
                    contato@lupimidias.com.br
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-full bg-[#39FF14]/20 flex items-center justify-center flex-shrink-0">
                  <ChatBubbleIcon className="h-6 w-6 text-[#39FF14]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                  <a 
                    href="https://wa.me/5511987654321" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#39FF14] transition-colors"
                  >
                    Clique para iniciar conversa
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 