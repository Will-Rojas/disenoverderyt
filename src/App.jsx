import React, { useEffect, useState } from 'react'
import { siteData } from './data'
import {
  MessageCircle,
  CheckCircle,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  ArrowRight,
  Star,
  Settings,
  Palette,
  Truck,
  HeartPulse,
  ShieldCheck,
  Map,
  Sprout
} from 'lucide-react'
import { trackWhatsAppClick, trackFormSubmit } from './utils/google-ads'

// --- Mapeo de Iconos para Servicios (Fuera del render para evitar recreación) ---
const icons = {
  settings: <Settings size={32} />,
  pincel: <Palette size={32} />,
  truck: <Truck size={32} />,
  heart: <HeartPulse size={32} />,
  shield: <ShieldCheck size={32} />
};

const ServiceIcon = ({ name }) => {
  return icons[name] || <CheckCircle size={32} />;
};

// --- Componentes de Sección ---

const CoverageBanner = () => (
  <div style={{
    backgroundColor: 'var(--primary-dark)',
    color: 'white',
    padding: '12px 0',
    textAlign: 'center',
    fontSize: '0.95rem',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px'
  }}>
    <Truck size={20} />
    <span>Instalamos en las 7 provincias de Costa Rica</span>
  </div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${scrolled ? 'nav-scrolled' : ''} ${menuOpen ? 'nav-open' : ''}`}>
      <div className="container navbar-container">

        {/* Logo */}
        <a href="#inicio" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          <img
            src="/img/logo-ryt-transparent.png"
            alt="R&T Diseño Verde"
            className="navbar-logo__img"
          />
        </a>

        {/* Desktop Links + Mobile Overlay */}
        <div className={`nav-links-wrapper ${menuOpen ? 'active' : ''}`}>
          <div className="nav-links">
            <a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a>
            <a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a>
            <a href="#tipos-zacate" onClick={() => setMenuOpen(false)}>Variedades</a>
            <a href="#cobertura" onClick={() => setMenuOpen(false)}>Cobertura</a>
            <a href="#proyectos" onClick={() => setMenuOpen(false)}>Proyectos</a>
            <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
          </div>
        </div>

        {/* Right Side: CTA + Hamburger */}
        <div className="navbar-actions">
          <a href={siteData.whatsapp} onClick={trackWhatsAppClick} className="btn btn-primary navbar-cta">
            <MessageCircle size={18} style={{ marginRight: '8px' }} />
            <span className="cta-text">Cotizar</span>
          </a>

          <button
            className="mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

      </div>
    </nav>
  );
};

const Hero = () => (
  <section id="inicio" className="fade-in" style={{
    marginTop: '0px',
    padding: '0',
    height: '100vh',
    minHeight: '600px',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.95) 100%), url(${siteData.hero.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    color: 'white'
  }}>
    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
      <div style={{ maxWidth: '850px' }}>
        <h1 style={{
          fontSize: 'clamp(2.8rem, 8vw, 5.5rem)',
          marginBottom: '24px',
          letterSpacing: '-0.04em',
          fontWeight: '800',
          color: 'white',
          textShadow: '0 4px 20px rgba(0,0,0,0.3)'
        }}>
          {siteData.hero.title}
        </h1>
        <p style={{
          fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
          maxWidth: '700px',
          marginBottom: '40px',
          color: 'rgba(255,255,255,0.9)',
          fontWeight: '400',
          lineHeight: '1.4',
          textShadow: '0 2px 10px rgba(0,0,0,0.3)'
        }}>
          {siteData.hero.subtitle}
        </p>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <a href={siteData.whatsapp} onClick={trackWhatsAppClick} className="btn btn-primary" style={{ padding: '20px 40px', fontSize: '1.2rem', backgroundColor: '#25d366', border: 'none' }}>
            <MessageCircle size={24} style={{ marginRight: '12px' }} />
            {siteData.hero.ctaWhatsApp}
          </a>
          <a href="#tipos-zacate" className="btn" style={{ backgroundColor: 'white', color: 'var(--primary-dark)', padding: '20px 40px', fontSize: '1.2rem' }}>
            Ver Variedades
          </a>
        </div>
      </div>
    </div>
  </section>
)

const Services = () => {
  const prepAndDesignServices = siteData.services.filter(s => s.category === 'prep-design');
  const maintenanceServices = siteData.services.filter(s => s.category === 'maintenance');

  return (
    <section id="servicios" style={{ backgroundColor: '#f9fbf9' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Servicios Profesionales</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem' }}>Mucho más que solo grama. Ofrecemos soluciones integrales para su jardín.</p>
        </div>

        {/* Grupo 1: Preparación y Diseño */}
        <div style={{ marginBottom: '80px' }}>
          <h3 style={{ fontSize: '2.5rem', marginBottom: '40px', textAlign: 'center', color: 'var(--primary-dark)' }}>Preparación y Diseño</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {prepAndDesignServices.map((service, idx) => (
              <div key={service.id} className={`service-card reveal delay-${idx % 3 + 1}`}>
                <div className="icon-box">
                  <ServiceIcon name={service.icon} />
                </div>
                <h3 style={{ marginBottom: '15px', fontSize: '1.6rem' }}>{service.title}</h3>
                <p style={{ marginBottom: '20px', lineHeight: '1.6', color: 'var(--text-muted)' }}>{service.desc}</p>
                <ul style={{ opacity: 0.8 }}>
                  {service.items.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', fontSize: '0.9rem' }}>
                      <CheckCircle size={14} color="var(--primary)" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Grupo 2: Mantenimiento y Cuidado */}
        <div>
          <h3 style={{ fontSize: '2.5rem', marginBottom: '40px', textAlign: 'center', color: 'var(--primary-dark)' }}>Mantenimiento y Cuidado</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {maintenanceServices.map((service, idx) => (
              <div key={service.id} className={`service-card reveal delay-${idx % 2 + 1}`}>
                <div className="icon-box">
                  <ServiceIcon name={service.icon} />
                </div>
                <h3 style={{ marginBottom: '15px', fontSize: '1.6rem' }}>{service.title}</h3>
                <p style={{ marginBottom: '20px', lineHeight: '1.6', color: 'var(--text-muted)' }}>{service.desc}</p>
                <ul style={{ opacity: 0.8 }}>
                  {service.items.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', fontSize: '0.9rem' }}>
                      <CheckCircle size={14} color="var(--primary)" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
};

const ZacateCatalog = () => (
  <section id="tipos-zacate">
    <div className="container">
      <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '3.5rem', marginBottom: '15px' }}>Nuestras Variedades</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto' }}>Seleccionamos las mejores variedades adaptadas al clima tropical de Costa Rica.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
        {siteData.zacateTypes.map((type, i) => (
          <div key={type.id} className={`zacate-card reveal delay-${i % 4 + 1}`}>
            <div style={{ height: '220px', overflow: 'hidden' }}>
              <img src={type.image} alt={type.name} loading="lazy" />
            </div>
            <div style={{ padding: '30px' }}>
              <span style={{
                fontSize: '0.75rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                color: 'var(--primary)',
                letterSpacing: '0.1em',
                marginBottom: '10px',
                display: 'block'
              }}>{type.ideal}</span>
              <h3 style={{ marginBottom: '15px', fontSize: '1.5rem' }}>{type.name}</h3>
              <p style={{ marginBottom: '20px', fontSize: '0.95rem' }}>{type.desc}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-dark)', fontWeight: '600', fontSize: '0.9rem' }}>
                <CheckCircle size={16} /> {type.advantages}
              </div>
            </div>
          </div>
        ))}
      </div>
      <p style={{
        textAlign: 'center',
        marginTop: '40px',
        color: 'var(--text-muted)',
        fontStyle: 'italic',
        fontSize: '0.9rem',
        opacity: 0.8
      }}>
        * Imágenes con fines ilustrativos. El tono y textura natural pueden variar según la temporada.
      </p>
    </div>
  </section>
)

const DeliverySection = () => (
  <section id="cobertura" style={{ backgroundColor: 'var(--primary-dark)', color: 'white' }}>
    <div className="container">
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '60px',
        alignItems: 'center'
      }}>
        <div className="reveal">
          <h2 style={{ color: 'white', fontSize: '3.5rem', marginBottom: '25px' }}>{siteData.coverage}</h2>
          <p style={{ color: '#a0c0b0', fontSize: '1.2rem', marginBottom: '35px' }}>
            No importa dónde se encuentre su proyecto. Contamos con logística propia para entregar e instalar en San José, Alajuela, Cartago, Heredia, Guanacaste, Puntarenas y Limón.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <div className="coverage-item">
              <Map size={20} /> <span>Logística Propia</span>
            </div>
            <div className="coverage-item">
              <CheckCircle size={20} /> <span>Sin Intermediarios</span>
            </div>
          </div>
        </div>
        <div className="reveal delay-2" style={{
          backgroundColor: 'rgba(255,255,255,0.05)',
          padding: '40px',
          borderRadius: '40px',
          border: '1px solid rgba(255,255,255,0.1)',
          textAlign: 'center'
        }}>
          <MapPin size={60} color="var(--primary-light)" style={{ marginBottom: '20px' }} />
          <h3 style={{ color: 'white', fontSize: '2rem', marginBottom: '15px' }}>Desde el GAM hasta las costas</h3>
          <p style={{ color: '#a0c0b0' }}>Consulte por su zona. Ofrecemos visitas técnicas de evaluación en todo el territorio nacional (visitas gratuitas dentro de la GAM).</p>
        </div>
      </div>
    </div>
  </section>
)

// Componente de Slider de Comparación (Antes/Después)
const ProjectComparisonSlider = ({ project, id }) => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  return (
    <div className="project-card reveal">
      <div className="comparison-slider" id={`slider-${id}`}>
        <div className="img background-img" style={{ backgroundImage: `url(${project.before})` }}></div>
        <div className="img foreground-img" style={{ backgroundImage: `url(${project.after})`, width: `${sliderValue}%` }}></div>
        <input
          type="range"
          min="1"
          max="100"
          value={sliderValue}
          className="slider"
          name="slider"
          onInput={handleSliderChange}
        />
        <div className="slider-button" style={{ left: `${sliderValue}%` }}></div>
      </div>
      <h4 style={{ marginTop: '20px', fontSize: '1.4rem' }}>{project.title}</h4>
      <p style={{ fontSize: '0.95rem' }}>{project.desc}</p>
    </div>
  );
};


const App = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    whatsapp: '',
    ubicacion: '',
    detalles: ''
  });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    trackFormSubmit();

    const phone = "50670145395";
    const message = `¡Hola R&T Diseño Verde! Me interesa una cotización.
    
*Nombre:* ${formData.nombre}
*WhatsApp:* ${formData.whatsapp}
*Ubicación:* ${formData.ubicacion}
*Detalles del proyecto:* ${formData.detalles}`;

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="App">
      <Navbar />
      <CoverageBanner />
      <Hero />
      <Services />
      <ZacateCatalog />
      <DeliverySection />

      {/* Sección Proyectos */}
      <section id="proyectos" style={{ backgroundColor: '#f9fbf9' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '15px' }}>Galería de Proyectos</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>Resultados reales: transformaciones de "Antes y Después" que inspiran.</p>
          </div>
          <div className="grid-comparacion">
            {siteData.projects.map((project, idx) => (
              <ProjectComparisonSlider key={idx} project={project} id={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto">
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '80px' }}>
            <div className="reveal">
              <h2 style={{ fontSize: '3.5rem', marginBottom: '25px' }}>Solicite su Cotización</h2>
              <p style={{ marginBottom: '40px', fontSize: '1.1rem' }}>Nuestro equipo técnico le contactará para asesorarle sobre el mejor zacate para su terreno.</p>

              <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--accent)', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Phone size={28} color="var(--primary)" /></div>
                <div>
                  <h4 style={{ marginBottom: '5px', fontSize: '1.2rem' }}>Llámenos</h4>
                  <p style={{ fontSize: '1.1rem', fontWeight: '600' }}>{siteData.phone}</p>
                </div>
              </div>

              <a href={siteData.whatsapp} onClick={trackWhatsAppClick} className="btn btn-primary" style={{ backgroundColor: '#25d366', width: '100%', fontSize: '1.2rem', padding: '25px', boxShadow: '0 10px 30px rgba(37,211,102,0.2)' }}>
                <MessageCircle size={28} style={{ marginRight: '15px' }} /> Hablar por WhatsApp
              </a>
            </div>

            <div className="reveal delay-2" style={{ backgroundColor: 'white', borderRadius: '40px', padding: '50px', boxShadow: 'var(--shadow)', border: '1px solid #eee' }}>
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '10px', fontWeight: '600', color: 'var(--primary-dark)' }}>Nombre Completo</label>
                  <input
                    name="nombre"
                    type="text"
                    placeholder="Juan Pérez"
                    style={{ width: '100%', padding: '18px', borderRadius: '15px', border: '1px solid #eee', backgroundColor: '#f9f9f9', fontSize: '1rem' }}
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '10px', fontWeight: '600', color: 'var(--primary-dark)' }}>Ubicación del Proyecto</label>
                  <input
                    name="ubicacion"
                    type="text"
                    placeholder="Ej: Santa Ana, San José"
                    style={{ width: '100%', padding: '18px', borderRadius: '15px', border: '1px solid #eee', backgroundColor: '#f9f9f9', fontSize: '1rem' }}
                    value={formData.ubicacion}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div style={{ marginBottom: '30px' }}>
                  <label style={{ display: 'block', marginBottom: '10px', fontWeight: '600', color: 'var(--primary-dark)' }}>Mensaje / Detalles</label>
                  <textarea
                    name="detalles"
                    placeholder="Cuéntenos qué necesita (m², tipo de zacate, etc.)"
                    rows="4"
                    style={{ width: '100%', padding: '18px', borderRadius: '15px', border: '1px solid #eee', backgroundColor: '#f9f9f9', fontSize: '1rem', resize: 'none' }}
                    value={formData.detalles}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '22px', fontSize: '1.1rem' }}>
                  Pedir Presupuesto <ArrowRight size={22} style={{ marginLeft: '12px' }} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ backgroundColor: 'var(--primary-dark)', color: 'white', padding: '100px 0 40px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '60px', marginBottom: '80px' }}>
            <div style={{ gridColumn: 'span 2' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'transparent', marginBottom: '1.5rem' }}>
                <img
                  src="/img/logo-ryt-transparent.png"
                  alt="R&T Diseño Verde"
                  style={{
                    maxHeight: '60px',
                    filter: 'brightness(0) invert(1)'
                  }}
                />
              </div>
              <p style={{ color: 'var(--primary-light)', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '15px' }}>{siteData.slogan}</p>
              <p style={{ color: '#a0c0b0', maxWidth: '400px', lineHeight: '1.8' }}>Transformamos espacios exteriores en experiencias naturales de alta gama. Especialistas en zacate y paisajismo profesional en Costa Rica.</p>
              <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
                <a href="#" className="social-icon" style={{ background: 'rgba(255,255,255,0.05)', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}><Facebook size={24} /></a>
                <a href="#" className="social-icon" style={{ background: 'rgba(255,255,255,0.05)', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}><Instagram size={24} /></a>
              </div>
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '25px', fontSize: '1.2rem' }}>Navegación</h4>
              <ul style={{ color: '#a0c0b0' }}>
                <li style={{ marginBottom: '12px' }}><a href="#inicio">Inicio</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#servicios">Servicios</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#tipos-zacate">Variedades</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#proyectos">Proyectos</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '25px', fontSize: '1.2rem' }}>Contacto</h4>
              <p style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#a0c0b0', marginBottom: '15px' }}><Phone size={18} /> {siteData.phone}</p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#a0c0b0', marginBottom: '15px' }}><MapPin size={18} /> {siteData.location}</p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#a0c0b0', marginBottom: '15px' }}><Map size={18} /> Cobertura Nacional</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.05)', color: '#667', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} R&T Diseño Verde. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      <a href={siteData.whatsapp} onClick={trackWhatsAppClick} className="whatsapp-float">
        <MessageCircle size={32} />
      </a>
    </div>
  )
}

export default App

