import React from 'react';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark mb-4">Nossa Localização</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded"></div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-2xl h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.5!2d-47.4!3d-23.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAvenida%20Paran%C3%A1%2C%203756%20-%20Bar%C3%A7%C3%A3o%201%2C%20Cajuru%20do%20Sul%2C%20Sorocaba%20-%20SP%2C%2018105-001!5e0!3m2!1spt-BR!2sbr!4v1640995200000!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Localização da Vargas Disk Entulhos"
          />
        </div>
        
        <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Endereço Completo</h3>
              <p className="text-base text-gray-700 mb-2">
                <strong>Avenida Paraná, 3756 - Barção 1</strong>
              </p>
              <p className="text-base text-gray-700 mb-2">
                Cajuru do Sul
              </p>
              <p className="text-base text-gray-700 mb-2">
                Sorocaba - SP, CEP: 18105-001
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-base text-gray-600 mb-2">
                  <strong>Razão Social:</strong> Andre Vargas Porteiro Cacambas
                </p>
                <p className="text-base text-gray-600 mb-2">
                  <strong>Nome Fantasia:</strong> Vargas Disk Entulhos
                </p>
                <p className="text-base text-gray-600">
                  <strong>CNPJ:</strong> 10.932.319/0001-09
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Como Chegar</h3>
              <p className="text-base text-gray-700 mb-2">
                Localizada no bairro Cajuru do Sul, região de Sorocaba.
              </p>
              <p className="text-base text-gray-700 mb-4">
                Fácil acesso por transporte público e particular.
              </p>
              <a
                href="https://www.google.com/maps/dir//Avenida+Paraná,+3756+-+Barção+1,+Cajuru+do+Sul,+Sorocaba+-+SP,+18105-001"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Ver Rotas no Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;