import { Link } from "react-router-dom";
import { DiferenciaisSection } from "../../components/section/DiferenciaisSection";
import SegurosCarouselSection from "../../components/section/SegurosCarouselSection";

function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      

      <section className="bg-[#0F3B5F] text-white">
        <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 items-center gap-12">
          
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Conectando você à segurança que realmente importa
            </h1>

            <p className="text-lg text-slate-200">
              A ELOSeguros une tecnologia, proteção e atendimento humanizado
              para oferecer soluções completas em seguros.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link
                to="/cadastrarseguro"
              className="px-6 py-3 bg-[#D4AF37] text-[#0F3B5F] font-semibold rounded-lg hover:brightness-110 transition-all duration-300">
                Simular Seguro </Link>

              <Link
              to="/categorias"
              className="px-6 py-3 border border-[#D4AF37] 
             text-[#D4AF37] rounded-lg 
             hover:bg-[#D4AF37] hover:text-[#0F3B5F] 
             transition-all duration-300 inline-block">
              Conhecer Planos
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://ik.imagekit.io/ycn9hqmaw/Logo.hd?updatedAt=1772462577564"
              alt="Clientes protegidos pela ELOSeguros"
              className="rounded-2xl w-full max-w-md object-cover"
            />
          </div>

        </div>
      </section>

      <SegurosCarouselSection />

      <DiferenciaisSection />

      <section className="relative overflow-hidden bg-[#0F3B5F] text-white py-28">
        
        <div className="absolute inset-0 bg-linear-to-br from-[#0F3B5F] via-[#123E63] to-[#0B2C45]" />
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_40%,#D4AF37_0%,transparent_65%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-0.5 bg-[#D4AF37]" />

        <div className="relative container mx-auto px-6 text-center max-w-5xl">

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8 tracking-tight">
            Segurança é conexão.
            <span className="block text-[#D4AF37]">
              E a sua começa agora.
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate-200 mb-12 leading-relaxed max-w-3xl mx-auto">
            Tecnologia integrada ao backend ELO, atendimento humanizado
            e proteção inteligente para tudo o que você construiu.
          </p>

          <div className="flex justify-center">
            <button
              className="group relative inline-flex items-center gap-3
                         px-12 py-5
                         bg-[#D4AF37] text-[#0F3B5F]
                         font-bold text-lg
                         rounded-2xl
                         shadow-xl
                         transition-all duration-300 ease-out
                         hover:-translate-y-2 hover:shadow-2xl hover:brightness-110
                         focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/50"
            >
              <Link to='/cadastrarseguro'>Simular Seguro</Link>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>

          <div className="mt-12 flex justify-center gap-6 text-sm text-slate-300 flex-wrap">
            <span>✔ Atendimento rápido</span>
            <span>✔ 100% digital</span>
            <span>✔ Transparência garantida</span>
          </div>

        </div>
      </section>

    </main>
  );
}

export default Home;