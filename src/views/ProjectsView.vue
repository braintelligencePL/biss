<template>
  <section class="projects-section">
    <div class="section-header">
      <h2>Nasze Realizacje</h2>
      <p>Przykłady projektów, które z sukcesem zrealizowaliśmy</p>
    </div>

    <div class="projects-grid">
      <div class="project-card">
        <div class="project-image">
          <i class="fas fa-water"></i>
        </div>
        <div class="project-content">
          <h3>Budowle Hydrotechniczne</h3>
          <p>Projekt i wykonanie budowli hydrotechnicznych obejmujących infrastrukturę wodną i regulację przepływów.</p>
          <div class="project-details">
            <span class="project-date">2020-2024</span>
            <span class="project-status">Realizacje</span>
          </div>
          <div class="project-tags">
            <span class="tag">Hydrotechnika</span>
            <span class="tag">Infrastruktura wodna</span>
          </div>
        </div>
      </div>

      <div class="project-card">
        <div class="project-image">
          <i class="fas fa-industry"></i>
        </div>
        <div class="project-content">
          <h3>Modernizacja Oczyszczalni Ścieków Kapuściska - II etap</h3>
          <p>Modernizacja oczyszczalni oraz wykonanie inteligentnego systemu zarządzania sieciami wodno-kanalizacyjnymi dla MWiK Bydgoszcz.</p>
          <div class="project-details">
            <span class="project-date">2018-2023</span>
            <span class="project-value">98,2 mln PLN</span>
          </div>
          <div class="project-tags">
            <span class="tag">Oczyszczalnie ścieków</span>
            <span class="tag">Systemy inteligentne</span>
            <span class="tag">Infrastruktura</span>
          </div>
        </div>
      </div>

      <div class="project-card">
        <div class="project-image">
          <i class="fas fa-filter"></i>
        </div>
        <div class="project-content">
          <h3>Technologie Ultrafiltracji Ścieków</h3>
          <p>Wykonanie usług badawczych i doboru filtrów membranowych dla ultrafiltracji ścieków - zaawansowane technologie oczyszczania.</p>
          <div class="project-details">
            <span class="project-date">2023-2024</span>
            <span class="project-type">Badania i doradztwo</span>
          </div>
          <div class="project-tags">
            <span class="tag">Ultrafiltracja</span>
            <span class="tag">Membrany</span>
            <span class="tag">Badania</span>
          </div>
        </div>
      </div>

      <div class="project-card">
        <div class="project-image">
          <i class="fas fa-pipe-section"></i>
        </div>
        <div class="project-content">
          <h3>Sieci Wodno-Kanalizacyjne</h3>
          <p>Projektowanie i wykonanie sieci wodociągowych i kanalizacyjnych, przyłączy wodociągowych i kanalizacyjnych oraz instalacji towarzyszących.</p>
          <div class="project-details">
            <span class="project-date">2020-2024</span>
            <span class="project-type">Projekty ciągłe</span>
          </div>
          <div class="project-tags">
            <span class="tag">Sieci wodociągowe</span>
            <span class="tag">Kanalizacja</span>
            <span class="tag">Przyłącza</span>
          </div>
        </div>
      </div>

      <div class="project-card">
        <div class="project-image">
          <i class="fas fa-cogs"></i>
        </div>
        <div class="project-content">
          <h3>Systemy Zarządzania Sieciami</h3>
          <p>Inteligentne systemy nadzoru i zarządzania infrastrukturą wodno-kanalizacyjną z wykorzystaniem nowoczesnych technologii monitoring.</p>
          <div class="project-details">
            <span class="project-date">2021-2024</span>
            <span class="project-type">Automatyka</span>
          </div>
          <div class="project-tags">
            <span class="tag">Automatyka</span>
            <span class="tag">Monitoring</span>
            <span class="tag">IoT</span>
          </div>
        </div>
      </div>

      <div class="project-card">
        <div class="project-image">
          <i class="fas fa-euro-sign"></i>
        </div>
        <div class="project-content">
          <h3>Projekty Współfinansowane z UE</h3>
          <p>Realizacja projektów infrastrukturalnych z wykorzystaniem funduszy europejskich w zakresie ochrony środowiska i gospodarki wodnej.</p>
          <div class="project-details">
            <span class="project-date">2018-2024</span>
            <span class="project-type">Fundusze UE</span>
          </div>
          <div class="project-tags">
            <span class="tag">Fundusze europejskie</span>
            <span class="tag">Dofinansowanie</span>
            <span class="tag">Środowisko</span>
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
.project-value,
.project-status,
.project-type {
  font-weight: 600;
  color: var(--text-dark);
  font-size: 0.9rem;
}

.project-status {
  color: var(--secondary-color);
}

.project-type {
  color: var(--primary-color);
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
