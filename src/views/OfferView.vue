<template>
  <section class="offer-section">
    <div class="section-header">
      <h2>Nasza Oferta</h2>
      <p>Kompleksowe usługi w zakresie inżynierii środowiska</p>
    </div>

    <div class="offer-grid">
      <div class="offer-card">
        <i class="fas fa-water"></i>
        <h3>Gospodarka Wodna</h3>
        <p>Projekty systemów wodociągowych i kanalizacyjnych, oczyszczalnie ścieków, zarządzanie wodami opadowymi.</p>
        <ul>
          <li>Projektowanie instalacji wodociągowych</li>
          <li>Systemy kanalizacyjne</li>
          <li>Oczyszczalnie ścieków</li>
          <li>Retencja wód opadowych</li>
        </ul>
      </div>

      <div class="offer-card">
        <i class="fas fa-wind"></i>
        <h3>Ochrona Powietrza</h3>
        <p>Monitoring jakości powietrza, systemy oczyszczania spalin, projekty redukcji emisji zanieczyszczeń.</p>
        <ul>
          <li>Monitoring jakości powietrza</li>
          <li>Systemy oczyszczania spalin</li>
          <li>Redukcja emisji CO2</li>
          <li>Audyty środowiskowe</li>
        </ul>
      </div>

      <div class="offer-card">
        <i class="fas fa-recycle"></i>
        <h3>Gospodarka Odpadami</h3>
        <p>Projekty systemów segregacji i utylizacji odpadów, kompostownie, instalacje odzysku energii.</p>
        <ul>
          <li>Systemy segregacji odpadów</li>
          <li>Kompostownie</li>
          <li>Odzysk energii z odpadów</li>
          <li>Plany gospodarki odpadami</li>
        </ul>
      </div>

      <div class="offer-card">
        <i class="fas fa-solar-panel"></i>
        <h3>Energia Odnawialna</h3>
        <p>Projekty instalacji fotowoltaicznych, systemów geotermalnych, farm wiatrowych i biomasy.</p>
        <ul>
          <li>Instalacje fotowoltaiczne</li>
          <li>Systemy geotermalne</li>
          <li>Farmy wiatrowe</li>
          <li>Energia z biomasy</li>
        </ul>
      </div>

      <div class="offer-card">
        <i class="fas fa-tint"></i>
        <h3>Stacje Uzdatniania Wody</h3>
        <p>Projektowanie i budowa nowoczesnych stacji uzdatniania wody pitnej oraz przemysłowej.</p>
        <ul>
          <li>Stacje uzdatniania wody pitnej</li>
          <li>Uzdatnianie wody przemysłowej</li>
          <li>Systemy filtracji</li>
          <li>Modernizacja istniejących stacji</li>
        </ul>
      </div>

      <div class="offer-card">
        <i class="fas fa-cogs"></i>
        <h3>Oczyszczalnie Ścieków</h3>
        <p>Kompleksowe rozwiązania w zakresie oczyszczania ścieków komunalnych i przemysłowych.</p>
        <ul>
          <li>Oczyszczalnie komunalne</li>
          <li>Oczyszczalnie przemysłowe</li>
          <li>Biologiczne oczyszczanie</li>
          <li>Systemy sterowania</li>
        </ul>
      </div>

      <div class="offer-card">
        <i class="fas fa-cloud-rain"></i>
        <h3>Systemy Deszczówki</h3>
        <p>Projektowanie systemów odprowadzenia i zagospodarowania wód opadowych.</p>
        <ul>
          <li>Systemy odprowadzenia</li>
          <li>Zagospodarowanie deszczówki</li>
          <li>Retencja wód opadowych</li>
          <li>Infiltracja do gruntu</li>
        </ul>
      </div>

      <div class="offer-card">
        <i class="fas fa-industry"></i>
        <h3>Myjnie Przemysłowe</h3>
        <p>Specjalistyczne systemy mycia i czyszczenia dla przemysłu i transportu.</p>
        <ul>
          <li>Myjnie samochodowe</li>
          <li>Myjnie przemysłowe</li>
          <li>Systemy recyrkulacji wody</li>
          <li>Instalacje ciśnieniowe</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OfferView'
}
</script>

<style scoped>
.offer-section {
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

.offer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.offer-card {
  background: var(--bg-white);
  border-radius: 10px;
  padding: 30px;
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.offer-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.offer-card i {
  font-size: 3rem;
  color: var(--secondary-color);
  margin-bottom: 20px;
}

.offer-card h3 {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 15px;
}

.offer-card p {
  color: var(--text-light);
  margin-bottom: 20px;
}

.offer-card ul {
  list-style: none;
  padding: 0;
}

.offer-card li {
  padding: 5px 0;
  color: var(--text-light);
  position: relative;
  padding-left: 20px;
}

.offer-card li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--secondary-color);
  font-weight: bold;
}

@media (max-width: 768px) {
  .offer-grid {
    grid-template-columns: 1fr;
  }
}
</style>