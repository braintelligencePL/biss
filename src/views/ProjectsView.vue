<template>
  <section class="projects-section">
    <div class="section-header">
      <h2>Nasze Realizacje</h2>
      <p>Przykłady projektów, które z sukcesem zrealizowaliśmy</p>
    </div>

    <div class="projects-grid">
      <div class="project-card">
        <div class="project-image">
          <i class="fas fa-industry"></i>
        </div>
        <div class="project-content">
          <h3>Oczyszczalnia Ścieków - Kraków</h3>
          <p>Modernizacja oczyszczalni ścieków obsługującej 50 000 mieszkańców. Projekt współfinansowany z funduszy UE.</p>
          <div class="project-details">
            <span class="project-date">2023</span>
            <span class="project-value">15 mln PLN</span>
          </div>
          <div class="project-tags">
            <span class="tag">Gospodarka wodna</span>
            <span class="tag">Fundusze UE</span>
          </div>
        </div>
      </div>

      <div class="project-card">
        <div class="project-image">
          <i class="fas fa-solar-panel"></i>
        </div>
        <div class="project-content">
          <h3>Farma Fotowoltaiczna - Lublin</h3>
          <p>Budowa farmy fotowoltaicznej o mocy 2 MW z systemem magazynowania energii.</p>
          <div class="project-details">
            <span class="project-date">2024</span>
            <span class="project-value">8 mln PLN</span>
          </div>
          <div class="project-tags">
            <span class="tag">Energia odnawialna</span>
            <span class="tag">Fotowoltaika</span>
          </div>
        </div>
      </div>

      <div class="project-card">
        <div class="project-image">
          <i class="fas fa-recycle"></i>
        </div>
        <div class="project-content">
          <h3>Sortownia Odpadów - Gdańsk</h3>
          <p>Nowoczesna sortownia odpadów segregowanych z linią do przetwarzania odpadów organicznych.</p>
          <div class="project-details">
            <span class="project-date">2023</span>
            <span class="project-value">12 mln PLN</span>
          </div>
          <div class="project-tags">
            <span class="tag">Gospodarka odpadami</span>
            <span class="tag">Recykling</span>
          </div>
        </div>
      </div>

      <div class="project-card">
        <div class="project-image">
          <i class="fas fa-wind"></i>
        </div>
        <div class="project-content">
          <h3>System Monitoringu Powietrza</h3>
          <p>Wdrożenie systemu monitoringu jakości powietrza w aglomeracji śląskiej.</p>
          <div class="project-details">
            <span class="project-date">2024</span>
            <span class="project-value">5 mln PLN</span>
          </div>
          <div class="project-tags">
            <span class="tag">Monitoring</span>
            <span class="tag">Ochrona powietrza</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsView'
}
</script>

<style scoped>
.projects-section {
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.project-card {
  background: var(--bg-white);
  border-radius: 10px;
  box-shadow: var(--shadow);
  overflow: hidden;
  transition: var(--transition);
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.project-image {
  background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-image i {
  font-size: 3rem;
  color: white;
}

.project-content {
  padding: 25px;
}

.project-content h3 {
  font-size: 1.3rem;
  color: var(--primary-color);
  margin-bottom: 15px;
}

.project-content p {
  color: var(--text-light);
  margin-bottom: 20px;
}

.project-details {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.project-date,
.project-value {
  font-weight: 600;
  color: var(--text-dark);
}

.project-tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.tag {
  background: var(--bg-light);
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.85rem;
  color: var(--text-dark);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
