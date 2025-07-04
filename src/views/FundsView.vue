<template>
  <section class="funds-section">
    <div class="section-header">
      <h2>Fundusze Europejskie</h2>
      <p>Dokumentacja projektów badawczych</p>
    </div>

    <div class="funds-content">
      <div class="procurement-documents">
        <h3>Dokumenty Postępowania</h3>

        <div class="document-list">
          <div class="document-item">
            <div class="document-content">
              <h4>Rozstrzygnięcie postępowania</h4>
              <p>Informacja o rozstrzygnięciu postępowania „Zakup usług badawczych w jednostce naukowej w zakresie doboru filtrów membranowych dla ultrafiltracji ścieków przemysłowych"</p>
            </div>
            <a href="#" class="download-link">
              <i class="fas fa-file-pdf"></i>
              pobierz plik PDF
            </a>
          </div>

          <div class="document-item">
            <div class="document-content">
              <h4>Zapytania ofertowe</h4>
              <p><strong>OGŁOSZENIE W DZIEDZINIE UDZIELENIA ZAMÓWIENIA</strong><br>
                „zakup usług badawczych w jednostce naukowej w zakresie doboru filtrów membranowych dla ultrafiltracji ścieków przemysłowych"</p>
              <div class="cpv-details">
                <span><strong>Kod CPV:</strong> 73111000-3</span>
                <span><strong>Nazwa kodu CPV:</strong> laboratoryjne usługi badawcze</span>
              </div>
            </div>
            <a href="#" class="download-link">
              <i class="fas fa-file-pdf"></i>
              pobierz plik PDF
            </a>
          </div>

          <div class="document-item">
            <div class="document-content">
              <h4>Specyfikacja istotnych warunków zamówienia (SIWZ)</h4>
              <p>na realizację zadania pod nazwą: „zakup usług badawczych w jednostce naukowej w zakresie doboru filtrów membranowych dla ultrafiltracji ścieków przemysłowych"</p>
            </div>
            <a href="#" class="download-link">
              <i class="fas fa-file-pdf"></i>
              pobierz plik PDF
            </a>
          </div>
        </div>
      </div>

      <div class="voucher-section">
        <h3>Fundusz Badań i Wdrożeń – Voucher Badawczy</h3>



        <div class="company-info">
        <img src="../../assets/123.png" alt="voucher" />
          <img src="../../assets/221133.png" alt="grant, voucher" />
        </div>

        <div class="voucher-text">
          <p>W dniu <strong>25 września 2017 roku</strong> został złożony wniosek do <strong>KUJAWSKO-POMORSKIEJ AGENCJI INNOWACJI sp. z o.o.</strong></p>

          <div class="project-info">
            <strong>„FUNDUSZ BADAŃ I WDROŻEŃ – VOUCHER BADAWCZY"</strong><br>
            w sprawie dofinansowania przedsięwzięcia pod nazwą: „Zakup usług badawczych w jednostce naukowej w zakresie doboru filtrów membranowych dla ultrafiltracji ścieków przemysłowych".
          </div>

          <div class="timeline">
            <div class="timeline-entry">
              <span class="timeline-date">12.01.2018</span>
              <p>Pismem nr L.dz. 562/W/2018 zostaliśmy poinformowani, że przedsięwzięcie to w ramach oceny merytorycznej jakościowej (punktowej) uzyskało wymaganą ilość punktów niezbędną do otrzymania wsparcia.</p>
            </div>

            <div class="timeline-entry">
              <span class="timeline-date">31.01.2018</span>
              <p>Została podpisana z Kujawsko-Pomorską Agencją Innowacji sp. z o.o. umowa, o powierzenie grantu na realizację ww. przedsięwzięcia.</p>
            </div>

            <div class="timeline-entry">
              <span class="timeline-date">29.06.2018</span>
              <p>Termin zakończenia prac określonych umową. Będziemy informowali o realizowanych pracach badawczych w ramach otrzymanego grantu.</p>
            </div>
          </div>

          <div class="signature">
            <em>Marek Pianowski</em>
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
  background: var(--bg-light);
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
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
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}

.procurement-documents {
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  margin-bottom: 40px;
}

.procurement-documents h3 {
  font-size: 1.8rem;
  color: var(--primary-color);
  margin-bottom: 30px;
  text-align: center;
  border-bottom: 2px solid var(--bg-light);
  padding-bottom: 15px;
}

.document-list {
  space-y: 25px;
}

.document-item {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
  gap: 30px;
}

.document-item:last-child {
  border-bottom: none;
}

.document-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.document-content h4 {
  color: var(--primary-color);
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.document-content p {
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 10px;
}

.cpv-details {
  margin-top: 15px;
  padding: 15px;
  background: #f8f9fa;
  border-left: 3px solid var(--secondary-color);
  border-radius: 4px;
}

.cpv-details span {
  display: block;
  margin-bottom: 5px;
  color: var(--text-dark);
  font-size: 0.9rem;
}

.download-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  padding: 10px 20px;
  border: 2px solid var(--primary-color);
  border-radius: 15px;
  transition: all 0.3s ease;
  white-space: nowrap;
  align-self: flex-end;
  margin-top: auto;
}

.download-link:hover {
  background: var(--primary-color);
  color: white;
}

.download-link i {
  font-size: 1.2rem;
  color: #dc3545;
}

.download-link:hover i {
  color: white;
}

.voucher-section {
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}

.voucher-section h3 {
  font-size: 1.8rem;
  color: var(--primary-color);
  margin-bottom: 30px;
  text-align: center;
  border-bottom: 2px solid var(--bg-light);
  padding-bottom: 15px;
}

.company-info {
  text-align: center;
  margin-bottom: 30px;
}

.company-info h4 {
  font-size: 1.4rem;
  color: var(--primary-color);
  margin: 0;
  font-weight: 600;
}

.voucher-text p {
  color: var(--text-light);
  line-height: 1.9;
  font-size: 0.8rem;
  margin-bottom: 25px;
}

.project-info {
  background: #f8f9fa;
  padding: 25px;
  border-left: 4px solid var(--secondary-color);
  margin: 25px 0;
  color: var(--text-dark);
  line-height: 1.7;
  font-style: italic;
}

.timeline {
  margin: 30px 0;
}

.timeline-entry {
  margin-bottom: 25px;
  padding-left: 120px;
  position: relative;
}

.timeline-date {
  position: absolute;
  left: 0;
  top: 0;
  font-weight: 600;
  color: var(--primary-color);
  font-size: 0.95rem;
  width: 100px;
}

.timeline-entry p {
  color: var(--text-light);
  line-height: 1.6;
  margin: 0;
}

.signature {
  text-align: right;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  color: var(--primary-color);
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .document-item {
    flex-direction: column;
    gap: 15px;
  }

  .download-link {
    align-self: flex-start;
  }

  .timeline-entry {
    padding-left: 0;
  }

  .timeline-date {
    position: static;
    display: block;
    margin-bottom: 8px;
    width: auto;
  }

  .procurement-documents,
  .voucher-section {
    padding: 25px;
  }
}
.voucher-section img {
  width: 100%;
  max-width: 600px;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin: 20px auto 30px auto;
  display: block;
}
</style>