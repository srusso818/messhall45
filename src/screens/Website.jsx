import { useState, useEffect } from 'react';
import menuData from '../assets/menu_data.json';
import MenuItem from '../components/MenuItem';
import PhotoMarquee from '../components/PhotoMarquee';

const heroPhotos = [
  "121027130_978306742578911_5855607385569959558_n.jpg", // Original featured sandwich photo
  "119670831_961353900940862_1884234012009405553_n.jpg",
  "142111407_1055305788212339_196626109641317168_n.jpg",
  "156982920_1075129586229959_7522565725786826067_n.jpg",
  "157447650_1075118316231086_2268595184406248547_n.jpg",
  "158444487_1078368525906065_7901421237245500420_n.jpg",
  "67348246_662829747459947_7169593077626044416_n.jpg",
  "73313642_723097168099871_3837722517867331584_n.jpg",
  "73323483_723096231433298_5830769033212854272_n.jpg",
  "73357356_903771720032414_4929524654817506823_n.jpg",
  "79152415_757549414654646_7538604860833267712_n.jpg",
  "unnamed2.jpg",
  "unnamed3.jpg",
  "unnamed4.jpg",
  "unnamed5.jpg"
];

const servicePhotos = [
  "487186412_1181097300475321_8796440816463142830_n.jpg",
  "487185109_1181097137142004_7563329017283596689_n.jpg",
  "487128707_1181097307141987_7787606316328739247_n.jpg",
  "487128277_1181097510475300_1646030746697130795_n.jpg",
  "487091605_1181097520475299_5872976498853076911_n.jpg",
  "487090300_1181097130475338_5614104334117083766_n.jpg",
  "487071036_1181097530475298_9117474318456797066_n.jpg",
  "487070713_1181097287141989_1170145399424652044_n.jpg",
  "487065951_1181097160475335_7145950792001871054_n.jpg",
  "487060057_1181097400475311_262542100722065865_n.jpg"
];

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="phone-icon-svg"
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const Website = () => {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhotoIdx((prev) => (prev + 1) % heroPhotos.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="website-container">
      {/* Top Header Bar */}
      <header className="site-header">
        <a href="#" className="site-header-brand">
          <img src="/MessHall45-logo.png" alt="Mess Hall 45" className="site-header-logo" />
          <span>Mess Hall 45</span>
        </a>
        <div className="site-header-actions">
          <a href="#menu" className="header-nav-link">Menu</a>
          <a href="tel:4793324051" className="header-phone-btn">
            <PhoneIcon />
            <span>(479) 332-4051</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        {/* Subtle Background Slideshow */}
        <div className="hero-slideshow" aria-hidden="true">
          {heroPhotos.map((photo, index) => (
            <img
              key={index}
              src={`/Food/${photo}`}
              alt=""
              className={`hero-slide-img ${index === activePhotoIdx ? 'active' : ''}`}
            />
          ))}
          <div className="hero-overlay" />
        </div>

        <div className="hero-content">
          <div className="hero-logo-wrapper">
            <img
              src="/MessHall45-logo.png"
              alt="Mess Hall 45"
              className="hero-logo"
            />
            <h1 className="sr-only">Mess Hall 45</h1>
          </div>
          <p className="hero-subtitle">Honoring Our Heroes with Every Bite</p>
          <div className="hero-actions">
            <a href="#menu" className="cta-button">View Menu</a>
            <a href="tel:4793324051" className="cta-button cta-button-secondary">
              <PhoneIcon />
              <span>(479) 332-4051</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-grid">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              Mess Hall 45 is more than just a sandwich shop. Located in Fayetteville, AR, 
              we are dedicated to serving top-tier comfort food—from our famous "Royal with Cheese" 
              to our signature po' boys—while honoring the military, first responders, and service 
              members who protect our community and our country.
            </p>
            <p>
              Brought to you by the creators of Green Submarine, we continue the legacy of 
              high-quality, fresh-made sandwiches in an atmosphere that pays tribute to true heroes.
            </p>
          </div>
          <div className="about-marquee-wrapper">
             <PhotoMarquee photos={servicePhotos} folder="Service Photos" title="Wall of Honor" />
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="menu-section">
        <h2 className="section-title">Our Menu</h2>
        <nav className="menu-nav-pills" aria-label="Menu categories">
          {menuData.categories.map((category, idx) => {
            const slug = category.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            return (
              <a key={idx} href={`#${slug}`} className="menu-nav-pill">
                {category.name}
              </a>
            );
          })}
        </nav>
        <div className="website-menu-grid">
          {menuData.categories.map((category, idx) => {
            const slug = category.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            return (
              <div key={idx} id={slug} className="website-category">
                <h3>{category.name}</h3>
                {category.note && <p className="web-category-note">{category.note}</p>}
                <div className="web-item-list">
                  {category.items.map((item, i) => (
                    <MenuItem key={i} item={item} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-info">
            <div className="footer-brand">
              <img src="/MessHall45-logo.png" alt="Mess Hall 45" className="footer-logo" />
              <h3>Mess Hall 45</h3>
            </div>
            <p>1830 N Crossover Rd, Suite #2</p>
            <p>Fayetteville, AR 72701</p>
            <p className="footer-phone">
              <a href="tel:4793324051" className="footer-phone-link">
                <PhoneIcon />
                <span>(479) 332-4051</span>
              </a>
            </p>
          </div>
          <div className="footer-social">
            <a href="https://www.facebook.com/messhall45" target="_blank" rel="noopener noreferrer" className="social-link">
              Follow us on Facebook
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Mess Hall 45. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Website;
