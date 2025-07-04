<template>
  <section class="home-section">
    <div class="hero">
      <div class="hero-content">
        <h1>Biuro Inżynierii Środowiska</h1>
        <p class="hero-subtitle">Kompleksowe rozwiązania w zakresie ochrony środowiska i inżynierii ekologicznej</p>
        <div class="hero-buttons">
          <router-link to="/oferta" class="btn btn-primary">Poznaj Ofertę</router-link>
          <router-link to="/kontakt" class="btn btn-secondary">Skontaktuj się</router-link>
        </div>
      </div>
      <div class="hero-image">
        <Logo :is-hero="true" :is-no-text="false" />
      </div>
    </div>

    <div class="about-section">
      <div class="about-content">
        <div class="about-text">
          <h2>Jakość i niezawodność</h2>
          <p>Biuro Inżynierii Środowiska to firma z wieloletnim doświadczeniem na rynku polskim. Specjalizujemy się w projektowaniu oraz wykonywaniu zaawansowanych systemów sanitarnych i hydraulicznych.</p>
          <p>Od deski kreślarskiej, aż do uruchomienia instalacji. Zajmujemy się kompleksową budową i projektowaniem skomplikowanych budowli hydrotechnicznych, m.in.:</p>
          <ul class="services-list">
            <li>stacje uzdatniania wody</li>
            <li>oczyszczalnie ścieków</li>
            <li>systemy odprowadzenia i zagospodarowania deszczówki</li>
            <li>myjnie przemysłowe</li>
          </ul>
          <p>Zarówno w przypadku nowatorskich konstrukcji, jak i standardowych rozwiązań, nasze projekty cechuje dbałość o najdrobniejsze szczegóły, które mają wpływ na długą bezawaryjną eksploatację systemu.</p>
        </div>
        <div class="about-image">
          <img src="../../assets/33.jpg" alt="Oczyszczalnia ścieków" />
        </div>
      </div>
    </div>

    <div class="reliability-section">
      <div class="reliability-content">
        <div class="reliability-image">
          <img src="../../assets/22.png" alt="Oczyszczalnia ścieków" />
        </div>
        <div class="reliability-text">
          <h2>Solidność i terminowość</h2>
          <p>Nasi inżynierowie korzystają z najnowszych rozwiązań technicznych. Sterowanie skomplikowanym układem odbywa się, w zależności od potrzeb klienta, za pomocą mikroprocesorowych sterowników oraz optymalnie zaprogramowanych interfejsów komputerowych.</p>
          <p>Układ dziesiątek pomp i czujników dostępny jest po naciśnięciu przycisku na ekranie komputera.</p>
          <p class="cta-text">Jeśli zależy ci na solidnej i terminowej firmie, oferującej doskonałe rozwiązania hydrotechniczne oparte na urządzeniach światowych marek skorzystaj z usług Biura Inżynierii Środowiska.</p>
        </div>
      </div>
    </div>

    <div class="features">
      <div class="feature-card">
        <div class="feature-icon">
          <svg viewBox="0 0 100 100" class="feature-svg">
            <path d="M50 5 L80 20 L80 45 C80 65 50 85 50 85 C50 85 20 65 20 45 L20 20 Z" fill="#4CAF50" />
            <path d="M35 40 L45 50 L65 30" stroke="white" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <h3>Ochrona Środowiska</h3>
        <p>Kompleksowe rozwiązania w zakresie ochrony środowiska naturalnego</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">
          <svg viewBox="0 0 100 100" class="feature-svg">
            <rect x="10" y="60" width="8" height="30" fill="#2196F3" rx="2" />
            <rect x="25" y="45" width="8" height="45" fill="#2196F3" rx="2" />
            <rect x="40" y="30" width="8" height="60" fill="#2196F3" rx="2" />
            <rect x="55" y="20" width="8" height="70" fill="#2196F3" rx="2" />
            <rect x="70" y="10" width="8" height="80" fill="#2196F3" rx="2" />
            <path d="M15 55 L30 40 L45 25 L60 15 L75 5" stroke="#FFC107" stroke-width="3" fill="none" stroke-linecap="round" />
          </svg>
        </div>
        <h3>Doradztwo Techniczne</h3>
        <p>Profesjonalne doradztwo w zakresie technologii środowiskowych</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">
          <svg viewBox="0 0 100 100" class="feature-svg">
            <circle cx="50" cy="50" r="35" fill="#FF9800" />
            <path d="M40 35 C45 30 55 30 60 35 M40 50 L55 50 M40 45 L50 45 M40 65 C45 70 55 70 60 65" stroke="white" stroke-width="4" fill="none" stroke-linecap="round" />
          </svg>
        </div>
        <h3>Fundusze UE</h3>
        <p>Pomoc w pozyskiwaniu środków z funduszy europejskich</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">
          <svg viewBox="0 0 100 100" class="feature-svg">
            <rect x="15" y="30" width="8" height="50" fill="#9C27B0" rx="2" transform="rotate(45 19 55)" />
            <rect x="20" y="10" width="15" height="8" fill="#9C27B0" rx="2" transform="rotate(45 27.5 14)" />
            <path d="M60 20 L80 40 L75 45 L70 40 L65 45 L60 40 L55 45 L50 40 L55 35 L60 20 Z" fill="#9C27B0" />
            <rect x="45" y="70" width="25" height="6" fill="#9C27B0" rx="3" />
          </svg>
        </div>
        <h3>Projektowanie i Wykonawstwo</h3>
        <p>Kompleksowe usługi od projektu po realizację systemów sanitarnych</p>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '../components/Logo.vue';

export default {
  name: 'HomeView',
  components: {
    Logo
  }
}
</script>

<style scoped>
.home-section {
  padding: 120px 0 80px 0;
}

.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  margin-bottom: 100px;
}

.hero-content h1 {
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 20px;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: var(--text-light);
  margin-bottom: 30px;
}

.hero-desc {
  display: block;
  font-size: 1.05rem;
  color: #388e3c;
  margin-top: 8px;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 20px;
}

.btn {
  padding: 12px 30px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background: var(--secondary-color);
  color: white;
}

.btn-primary:hover {
  background: var(--primary-color);
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: var(--secondary-color);
  border: 2px solid var(--secondary-color);
}

.btn-secondary:hover {
  background: var(--secondary-color);
  color: white;
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
}

.hero-image:hover >>> svg {
  transform: rotateY(15deg) rotateX(5deg) scale(1.05);
}

.hero-image:hover >>> .wave-element {
  stroke-opacity: 1;
}

.about-section {
  max-width: 1200px;
  margin: 0 auto 100px auto;
  padding: 0 20px;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.about-text h2 {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 25px;
  line-height: 1.2;
}

.about-text p {
  font-size: 1.1rem;
  color: var(--text-dark);
  line-height: 1.6;
  margin-bottom: 20px;
}

.services-list {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.services-list li {
  padding: 8px 0;
  padding-left: 25px;
  position: relative;
  color: var(--text-dark);
  font-size: 1.1rem;
}

.services-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--secondary-color);
  font-weight: bold;
  font-size: 1.2rem;
}

.about-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.reliability-section {
  background: var(--bg-light);
  padding: 80px 0;
  margin-bottom: 100px;
}

.reliability-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.reliability-text h2 {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 25px;
  line-height: 1.2;
}

.reliability-text p {
  font-size: 1.1rem;
  color: var(--text-dark);
  line-height: 1.6;
  margin-bottom: 20px;
}

.cta-text {
  font-weight: 500;
  color: var(--secondary-color);
  border-left: 4px solid var(--secondary-color);
  padding-left: 20px;
  margin-top: 30px;
}

.reliability-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.feature-card {
  text-align: center;
  padding: 40px 30px 35px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid #f0f0f0;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.feature-icon {
  width: 70px;
  height: 70px;
  margin: 0 auto 25px;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-svg {
  width: 46px;
  height: 46px;
}

.feature-card h3 {
  font-size: 1.4rem;
  color: var(--primary-color);
  margin-bottom: 15px;
  font-weight: 600;
}

.feature-card p {
  color: var(--text-light);
  line-height: 1.6;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .home-section {
    padding: 90px 0 60px 0;
  }

  .hero-image {
    margin-top: 70px;
    margin-bottom: 40px;
    transform: scale(2.5);
  }

  .hero {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .about-text h2,
  .reliability-text h2 {
    font-size: 2rem;
  }

  .reliability-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .reliability-section {
    padding: 60px 0;
  }

  .hero-image >>> svg {
    max-width: 180px;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .hero-buttons .btn {
    width: 200px;
    text-align: center;
  }

  .features {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .feature-card {
    padding: 35px 25px 30px;
  }

  .feature-icon {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
  }

  .feature-svg {
    width: 36px;
    height: 36px;
  }

  .feature-card h3 {
    font-size: 1.2rem;
  }
}
</style>