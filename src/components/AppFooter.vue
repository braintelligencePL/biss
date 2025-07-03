<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h4>Biuro Inżynierii Środowiska</h4>
        <p>Profesjonalne rozwiązania w zakresie ochrony środowiska i inżynierii ekologicznej.</p>
      </div>
      <div class="footer-section">
        <h4>Kontakt</h4>
        <p>ul. Środowiskowa 123<br>00-001 Warszawa</p>
        <p>Tel: +48 22 123 45 67</p>
        <p>Email: biuro@bis.pl</p>
      </div>
      <div class="footer-section">
        <h4>Usługi</h4>
        <ul>
          <li>Gospodarka wodna</li>
          <li>Ochrona powietrza</li>
          <li>Energia odnawialna</li>
          <li>Fundusze UE</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 Biuro Inżynierii Środowiska. Wszystkie prawa zastrzeżone.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.footer {
  background: var(--primary-color);
  color: white;
  padding: 50px 0 20px;
  margin-top: 80px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.footer-section h4 {
  margin-bottom: 20px;
  color: white;
}

.footer-section p {
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0.8);
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section li {
  margin-bottom: 8px;
  color: rgba(255, 255, 255, 0.8);
}

.footer-bottom {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 30px;
}

.footer-bottom p {
  color: rgba(255, 255, 255, 0.6);
}
</style>
