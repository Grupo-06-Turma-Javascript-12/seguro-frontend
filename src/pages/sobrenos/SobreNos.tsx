import { useNavigate } from "react-router-dom";

type TeamCardProps = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  image: string;
  linkedin: string;
};

function TeamCard({ name, role, bio, image, linkedin }: TeamCardProps) {
  return (
    <div className="bg-[#0F3B5F] border border-[#D4AF37]/40 rounded-2xl p-6 text-center group hover:-translate-y-1 hover:border-[#D4AF37] transition duration-300 shadow-lg">

      <div className="w-20 h-20 mx-auto mb-4 perspective">
        <div className="relative w-full h-full transition-transform duration-500 transform-style group-hover:rotate-y-180">

          <div className="absolute inset-0 backface-hidden">
            <img
              src={image}
              alt={name}
              className="w-20 h-20 rounded-full object-cover border-2 border-[#D4AF37]"
            />
          </div>

        </div>
      </div>

      <h4 className="text-white font-semibold">{name}</h4>
      <p className="text-[#D4AF37] text-sm mb-2">{role}</p>
      <p className="text-slate-300 text-sm mb-4">{bio}</p>

      {/* Divisor dourado */}
      <div className="w-10 h-0.5 bg-[#D4AF37] mx-auto mb-4" />

      <div className="flex justify-center">
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`LinkedIn de ${name}`}
          className="flex items-center gap-2 bg-[#0A66C2] px-4 py-2 rounded-full text-white text-sm font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          Perfil do LinkedIn
        </a>
      </div>
    </div>
  );
}

const SobreNos = () => {
  const navigate = useNavigate();

  const handleComecarAgora = () => {
    navigate("/cadastro");
  };

  return (
    <div className="min-h-screen bg-[#0F3B5F] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Sobre a EloSeguros 🔒
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Na <strong>EloSeguros</strong>, unimos tecnologia de ponta e cuidado humano para garantir que o seu futuro esteja sempre protegido.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          <div className="bg-[#0B2C45] rounded-2xl p-8 border border-[#D4AF37]/30 hover:bg-[#123E63] transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🎯</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Nossa Missão</h3>
            <p className="text-slate-200 text-center">
              Conectar pessoas à segurança através de uma plataforma digital inteligente, eliminando burocracias e fortalecendo o 
              elo de confiança entre a tecnologia e a proteção da vida.
            </p>
          </div>

          <div className="bg-[#0B2C45] rounded-2xl p-8 border border-[#D4AF37]/30 hover:bg-[#123E63] transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🔭</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Nossa Visão</h3>
            <p className="text-slate-200 text-center">
              Ser a principal referência em infraestrutura tecnológica para seguros no Brasil, onde cada linha de código do nosso ecossistema 
              serve para garantir um amanhã mais estável e seguro para nossos clientes.
            </p>
          </div>

          <div className="bg-[#0B2C45] rounded-2xl p-8 border border-[#D4AF37]/30 hover:bg-[#123E63] transition-all duration-300">
            <div className="text-4xl mb-4 text-center">💎</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Nossos Valores</h3>
            <ul className="text-slate-200 space-y-2 text-center">
              <li><strong>• Transparência Digital:</strong> Processos claros e dados acessíveis.</li>
              <li><strong>• Segurança Máxima:</strong> Proteção rigorosa em cada camada do nosso sistema.</li>
              <li><strong>• Inovação Contínua:</strong> Evoluindo nosso backend para antecipar riscos.</li>
            </ul>
          </div>

        </div>
        
        <div className="bg-[#0B2C45] rounded-2xl p-10 border border-[#D4AF37]/30">

  <div className="text-center mb-10">
    <p className="text-xs font-semibold text-[#D4AF37] tracking-[0.2em] uppercase mb-2">
      As pessoas por trás da Elo Seguros
    </p>

    <h2 className="text-3xl font-bold text-white">
      Conheça nosso time
    </h2>

    <p className="text-slate-300 text-sm mt-3 max-w-md mx-auto">
      Profissionais comprometidos em oferecer segurança, confiança
      e soluções eficientes para nossos clientes.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 divide-y md:divide-y-0 divide-[#D4AF37]/40">
  <TeamCard
  name="Débora Campos"
  role="Desenvolvedora Full Stack"
  bio="Especialista em soluções digitais e análise de dados."
  initials="DC"
  image="https://media.licdn.com/dms/image/v2/D4D03AQHokiNPBIPwFw/profile-displayphoto-scale_400_400/B4DZvC8A_MKcAg-/0/1768502071933?e=1773878400&v=beta&t=4ddFrOIIPSd4-hxKAYkSj9S3K0wdYAHjT9sC-rHuUeE"
  linkedin="https://www.linkedin.com/in/debora-campos-/"
/>

<TeamCard
  name="Paulo Brandão"
  role="Desenvolvedor Backend"
  bio="Responsável pela implementação técnica das soluções."
  initials="PB"
  image="https://media.licdn.com/dms/image/v2/D4E03AQFJNWod6QUYOg/profile-displayphoto-crop_800_800/B4EZx86YePH8AI-/0/1771622207330?e=1773878400&v=beta&t=orFiQKILFzdSAJTRVA0Izcq-N9FYCGA2G9tQJ61Abgg"
  linkedin="https://www.linkedin.com/in/paulo-brandao-b7386a179/"
/>

<TeamCard
  name="Rafael Bernardo"
  role="Especialista em Dados"
  bio="Transforma métricas em insights estratégicos."
  initials="RB"
  image="https://media.licdn.com/dms/image/v2/D4D03AQEY7QAB5eeoMg/profile-displayphoto-crop_800_800/B4DZrHMOxdJcAI-/0/1764278470241?e=1773878400&v=beta&t=_BJMJ233pWC-Q7W1Ul0A6azAT1RmxJz2cO_sPIcd7Lg"
  linkedin="https://www.linkedin.com/in/rafael-bernardo-dev/"
/>

<TeamCard
  name="Thays Peixoto"
  role="UI/UX Designer"
  bio="Cria experiências visuais intuitivas."
  initials="TP"
  image="https://media.licdn.com/dms/image/v2/D4D35AQGTXW5bQG6YbA/profile-framedphoto-shrink_800_800/B4DZq3ilUBJEAg-/0/1764015887943?e=1773079200&v=beta&t=zfpuNaQ16lZ-xB7ffMr4fRKamtviZM1Sd2Sin-axPPY"
  linkedin="https://www.linkedin.com/in/thays-peixoto-da-silva/"
/>

<TeamCard
  name="Wyrms Cordeiro"
  role="Desenvolvedor Full Stack"
  bio="Integra front-end e back-end com eficiência."
  initials="WC"
  image="https://media.licdn.com/dms/image/v2/D4E03AQHDrVmY_BpfdA/profile-displayphoto-crop_800_800/B4EZq8PV0IKMAM-/0/1764094730372?e=1773878400&v=beta&t=ajMdo35xWdPP-TkLfd5OAtIuzRPQTTpQQTxwS1o-was"
  linkedin="https://www.linkedin.com/in/wyrms-cordeiro-84374565567o63/"
/>
</div>
</div>

        <div className="text-center mt-12">
          <div className="bg-[#0B2C45] text-white rounded-2xl p-8 max-w-2xl mx-auto shadow-2xl border border-[#D4AF37]/30">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para transformar sua experiência com seguros?
            </h3>
            <p className="text-slate-200 mb-6">
              Junte-se a milhares de pessoas que já dormem mais tranquilos sabendo 
              que suas apólices estão em boas mãos (e bons servidores!).
            </p>
            <button 
              onClick={handleComecarAgora}
              className="bg-[#D4AF37] text-[#0F3B5F] px-8 py-4 rounded-2xl font-bold text-lg hover:brightness-110 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              🚀 Começar Agora
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SobreNos;