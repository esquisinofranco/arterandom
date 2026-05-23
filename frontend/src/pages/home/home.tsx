import "./home.css";
import logo from "../../assets/logo.png";

const WHATSAPP_NUMBER = "5492262223625"; // Cambiar acá: código país + número, sin + ni espacios
const WHATSAPP_MESSAGE =
  "Hola Arte Random, quiero consultar por publicidad o información del proyecto.";

const INSTAGRAM_URL = "https://www.instagram.com/arterandom.ar"; // Cambiar acá
const PUBLICITY_TEXT =
  "Publicitá en este sitio y conectá tu propuesta con una comunidad creativa.";

function buildWhatsAppLink() {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`;
}

function WhatsAppIcon() {
  return (
    <svg
      className="home-button-icon"
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M16.02 3.2C8.96 3.2 3.22 8.86 3.22 15.82c0 2.22.6 4.38 1.74 6.28L3.1 28.8l6.9-1.78a12.9 12.9 0 0 0 6.02 1.5c7.06 0 12.8-5.66 12.8-12.62S23.08 3.2 16.02 3.2Zm0 22.98c-1.86 0-3.68-.5-5.26-1.46l-.38-.22-4.1 1.06 1.1-3.9-.26-.4a10.3 10.3 0 0 1-1.58-5.44c0-5.68 4.7-10.3 10.48-10.3 5.78 0 10.48 4.62 10.48 10.3 0 5.74-4.7 10.36-10.48 10.36Zm5.74-7.72c-.32-.16-1.88-.92-2.18-1.02-.3-.12-.52-.16-.74.16-.22.32-.84 1.02-1.04 1.24-.18.22-.38.24-.7.08-.32-.16-1.34-.48-2.54-1.54-.94-.82-1.58-1.84-1.76-2.16-.18-.32-.02-.5.14-.66.14-.14.32-.38.48-.56.16-.2.22-.32.32-.54.12-.22.06-.4-.02-.56-.08-.16-.74-1.76-1.02-2.42-.26-.64-.54-.56-.74-.56h-.62c-.22 0-.56.08-.86.4-.3.32-1.12 1.08-1.12 2.64s1.14 3.08 1.3 3.28c.16.22 2.24 3.38 5.44 4.74.76.32 1.36.52 1.82.66.76.24 1.46.2 2 .12.62-.1 1.88-.76 2.14-1.5.26-.74.26-1.38.18-1.5-.08-.14-.28-.22-.6-.38Z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      className="home-button-icon"
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M16 8.34c2.5 0 2.8.02 3.78.06.92.04 1.42.2 1.76.34.44.18.76.38 1.1.72.34.34.54.66.72 1.1.14.34.3.84.34 1.76.04.98.06 1.28.06 3.78s-.02 2.8-.06 3.78c-.04.92-.2 1.42-.34 1.76-.18.44-.38.76-.72 1.1-.34.34-.66.54-1.1.72-.34.14-.84.3-1.76.34-.98.04-1.28.06-3.78.06s-2.8-.02-3.78-.06c-.92-.04-1.42-.2-1.76-.34a2.96 2.96 0 0 1-1.1-.72 2.96 2.96 0 0 1-.72-1.1c-.14-.34-.3-.84-.34-1.76-.04-.98-.06-1.28-.06-3.78s.02-2.8.06-3.78c.04-.92.2-1.42.34-1.76.18-.44.38-.76.72-1.1.34-.34.66-.54 1.1-.72.34-.14.84-.3 1.76-.34.98-.04 1.28-.06 3.78-.06Zm0-2.34c-2.54 0-2.86.02-3.86.06-1 .04-1.68.2-2.28.44a5.22 5.22 0 0 0-1.9 1.24A5.22 5.22 0 0 0 6.72 9.64c-.24.6-.4 1.28-.44 2.28-.04 1-.06 1.32-.06 3.86s.02 2.86.06 3.86c.04 1 .2 1.68.44 2.28.26.62.6 1.16 1.24 1.9.74.64 1.28.98 1.9 1.24.6.24 1.28.4 2.28.44 1 .04 1.32.06 3.86.06s2.86-.02 3.86-.06c1-.04 1.68-.2 2.28-.44.62-.26 1.16-.6 1.9-1.24.64-.74.98-1.28 1.24-1.9.24-.6.4-1.28.44-2.28.04-1 .06-1.32.06-3.86s-.02-2.86-.06-3.86c-.04-1-.2-1.68-.44-2.28a5.22 5.22 0 0 0-1.24-1.9 5.22 5.22 0 0 0-1.9-1.24c-.6-.24-1.28-.4-2.28-.44-1-.04-1.32-.06-3.86-.06Zm0 4.88a5.12 5.12 0 1 0 0 10.24 5.12 5.12 0 0 0 0-10.24Zm0 8.44a3.32 3.32 0 1 1 0-6.64 3.32 3.32 0 0 1 0 6.64Zm5.4-8.72a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z"
      />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg className="home-spark" viewBox="0 0 32 32" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16 2.8l2.8 10.4L29.2 16l-10.4 2.8L16 29.2l-2.8-10.4L2.8 16l10.4-2.8L16 2.8Z"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-card">
        <div className="home-orbit home-orbit-top" />
        <div className="home-orbit home-orbit-bottom" />

        <div className="home-logo-wrap">
          <img src={logo} alt="Arte Random" className="home-logo" />
        </div>

        <div className="home-kicker">
          <span />
          Proyecto artístico independiente
          <span />
        </div>

        <h1>Arte Random está tomando forma</h1>

        <p className="home-description">
          Un espacio para conectar distintas expresiones del arte: música,
          escritura, teatro, pintura, ideas y proyectos creativos.
        </p>

        <div className="home-notice">
          <SparkIcon />
          <div>
            <strong>Sitio en construcción</strong>
            <p>
              Muy pronto vas a encontrar novedades, propuestas, colaboraciones y
              contenido artístico.
            </p>
          </div>
        </div>

        <p className="home-publicity">{PUBLICITY_TEXT}</p>

        <div className="home-actions">
          <a
            className="home-button home-button-whatsapp"
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon />
            Contactar por WhatsApp
          </a>

          <a
            className="home-button home-button-instagram"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
            Ver Instagram
          </a>
        </div>
      </section>
    </main>
  );
}
