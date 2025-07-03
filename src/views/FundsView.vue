<template>
  <section class="funds-section">
    <div class="section-header">
      <h2>Fundusze Europejskie</h2>
      <p>Pomoc w pozyskiwaniu środków na projekty środowiskowe</p>
    </div>

    <div class="funds-content">
      <div class="funds-intro">
        <h3>Specjalizujemy się w pozyskiwaniu funduszy UE</h3>
        <p>Nasz zespół ma bogate doświadczenie w przygotowywaniu wniosków o dofinansowanie projektów środowiskowych z funduszy europejskich. Oferujemy kompleksową obsługę od identyfikacji odpowiedniego programu po rozliczenie projektu.</p>
      </div>

      <div class="funds-programs">
        <div class="program-card">
          <h4>Program LIFE</h4>
          <p>Główny instrument finansowy UE wspierający projekty środowiskowe i klimatyczne</p>
          <div class="program-details">
            <span>Dofinansowanie: do 60%</span>
            <span>Obszar: Ochrona środowiska</span>
          </div>
        </div>

        <div class="program-card">
          <h4>Fundusze Strukturalne</h4>
          <p>EFRR, EFS+ - finansowanie projektów infrastrukturalnych i rozwojowych</p>
          <div class="program-details">
            <span>Dofinansowanie: do 85%</span>
            <span>Obszar: Infrastruktura</span>
          </div>
        </div>

        <div class="program-card">
          <h4>Horyzont Europa</h4>
          <p>Program badawczy UE wspierający innowacyjne rozwiązania środowiskowe</p>
          <div class="program-details">
            <span>Dofinansowanie: do 100%</span>
            <span>Obszar: Badania i innowacje</span>
          </div>
        </div>
      </div>

      <div class="funds-services">
        <h3>Nasze Usługi</h3>
        <div class="service-list">
          <div class="service-item">
            <i class="fas fa-search"></i>
            <div>
              <h4>Identyfikacja Programów</h4>
              <p>Znajdziemy najlepsze źródła finansowania dla Twojego projektu</p>
            </div>
          </div>
          <div class="service-item">
            <i class="fas fa-edit"></i>
            <div>
              <h4>Przygotowanie Wniosków</h4>
              <p>Kompleksowe przygotowanie dokumentacji aplikacyjnej</p>
            </div>
          </div>
          <div class="service-item">
            <i class="fas fa-project-diagram"></i>
            <div>
              <h4>Zarządzanie Projektem</h4>
              <p>Profesjonalne zarządzanie realizacją dofinansowanego projektu</p>
            </div>
          </div>
          <div class="service-item">
            <i class="fas fa-calculator"></i>
            <div>
              <h4>Rozliczenie Projektu</h4>
              <p>Prawidłowe rozliczenie środków zgodnie z wymogami UE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FundsView'
}
</script>

<style scoped>
.funds-section {
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

.funds-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.funds-intro {
  text-align: center;
  margin-bottom: 60px;
}

.funds-intro h3 {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 20px;
}

.funds-intro p {
  font-size: 1.2rem;
  color: var(--text-light);
  max-width: 800px;
  margin: 0 auto;
}

.funds-programs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.program-card {
  background: var(--bg-white);
  border-radius: 10px;
  padding: 30px;
  box-shadow: var(--shadow);
  border-left: 4px solid var(--secondary-color);
}

.program-card h4 {
  font-size: 1.3rem;
  color: var(--primary-color);
  margin-bottom: 15px;
}

.program-card p {
  color: var(--text-light);
  margin-bottom: 20px;
}

.program-details {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.program-details span {
  background: var(--bg-light);
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.9rem;
  color: var(--text-dark);
}

.funds-services h3 {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 30px;
  text-align: center;
}

.service-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.service-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  background: var(--bg-light);
  border-radius: 10px;
}

.service-item i {
  font-size: 2rem;
  color: var(--secondary-color);
  margin-top: 5px;
}

.service-item h4 {
  color: var(--primary-color);
  margin-bottom: 10px;
}

.service-item p {
  color: var(--text-light);
}

@media (max-width: 768px) {
  .funds-programs {
    grid-template-columns: 1fr;
  }

  .service-list {
    grid-template-columns: 1fr;
  }
}
</style>
