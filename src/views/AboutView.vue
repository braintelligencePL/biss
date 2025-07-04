<template>
  <section class="about-section">
    <div class="section-header">
      <h2>O Nas</h2>
      <p>Poznaj nasze doświadczenie i kompetencje</p>
    </div>

    <div class="about-content">
      <div class="about-text">
        <h3>Doświadczenie i Profesjonalizm</h3>
        <p>Biuro Inżynierii Środowiska działa od ponad 15 lat na rynku usług związanych z ochroną środowiska. Nasz zespół składa się z wykwalifikowanych specjalistów z dziedziny inżynierii środowiska, ekologii i zarządzania projektami.</p>

        <h3>Nasze Wartości</h3>
        <ul>
          <li><strong>Jakość:</strong> Każdy projekt realizujemy z najwyższą starannością</li>
          <li><strong>Innowacyjność:</strong> Stosujemy najnowsze technologie i rozwiązania</li>
          <li><strong>Współpraca:</strong> Budujemy długotrwałe relacje z klientami</li>
          <li><strong>Odpowiedzialność:</strong> Dbamy o środowisko w każdym aspekcie naszej działalności</li>
        </ul>
      </div>

      <div class="about-stats">
        <div class="stat-item">
          <span class="stat-number">232+</span>
          <span class="stat-label">Zrealizowanych Projektów</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">20+</span>
          <span class="stat-label">Lat Doświadczenia</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">89+</span>
          <span class="stat-label">Zadowolonych Klientów</span>
        </div>
      </div>
    </div>

    <div class="cta-section">
      <p>Chcesz dowiedzieć się więcej o naszych usługach?</p>
      <router-link to="/oferta" class="cta-button">
        Zobacz Naszą Ofertę
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped>
.about-section {
  padding: 80px 0;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.section-header h2 {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 15px;
}

.section-header p {
  font-size: 1.2rem;
  color: var(--text-light);
}

.about-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  align-items: start;
}

.about-text h3 {
  font-size: 1.8rem;
  color: var(--primary-color);
  margin-bottom: 20px;
}

.about-text p {
  margin-bottom: 25px;
  font-size: 1.1rem;
  color: var(--text-light);
}

.about-text ul {
  list-style: none;
  margin-bottom: 30px;
  padding: 0;
}

.about-text li {
  margin-bottom: 10px;
  font-size: 1.1rem;
  color: var(--text-light);
}

.about-text strong {
  color: var(--primary-color);
}

.cta-section {
  width: 100%;
  max-width: 1200px;
  margin: 80px auto 0;
  padding: 60px 20px;
  background: var(--bg-light);
  border-radius: 10px;
  text-align: center;
}

.cta-section p {
  margin-bottom: 25px;
  font-size: 1.3rem;
  color: var(--text-dark);
}

.cta-button {
  display: inline-block;
  padding: 18px 40px;
  background: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.about-stats {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.stat-item {
  text-align: center;
  padding: 30px;
  background: var(--bg-light);
  border-radius: 10px;
}

.stat-number {
  display: block;
  font-size: 3rem;
  font-weight: 700;
  color: var(--secondary-color);
  margin-bottom: 10px;
}

.stat-label {
  font-size: 1.1rem;
  color: var(--text-dark);
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .about-stats {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .stat-item {
    flex: 1;
    min-width: 150px;
  }

  .cta-section {
    margin-top: 40px;
    padding: 30px 20px;
  }

  .cta-section p {
    font-size: 1.1rem;
  }

  .cta-button {
    padding: 15px 30px;
    font-size: 1rem;
  }
}
</style>