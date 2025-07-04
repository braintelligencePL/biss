<template>
  <section class="contact-section">
    <div class="container">
      <div class="section-header">
        <h2>Kontakt</h2>
        <p>Skontaktuj się z nami, aby omówić swój projekt</p>
      </div>

      <div class="company-info">
        <strong>Biuro Inżynierii Środowiska Aleksandra Zalewska &amp; Marek Pianowski</strong>
      </div>

      <div class="contact-content">
        <div class="contact-info">
          <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <div>
              <h4>Adres</h4>
              <p>ul. Staroszkolna 16/28<br>85-209 Bydgoszcz</p>
            </div>
          </div>
          <div class="contact-item">
            <i class="fas fa-phone"></i>
            <div>
              <h4>Telefon</h4>
              <p>+48 52 327 65 65</p>
            </div>
          </div>
          <div class="contact-item">
            <i class="fas fa-fax"></i>
            <div>
              <h4>Fax</h4>
              <p>+48 52 327 65 66</p>
            </div>
          </div>
          <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <div>
              <h4>Email</h4>
              <p><a href="mailto:biuro@bissc.pl">biuro@bissc.pl</a></p>
            </div>
          </div>
          <div class="contact-item">
            <i class="fas fa-globe"></i>
            <div>
              <h4>Strona internetowa</h4>
              <p><a href="http://www.bissc.pl" target="_blank" rel="noopener">www.bissc.pl</a></p>
            </div>
          </div>
          <div class="contact-item">
            <i class="fas fa-clock"></i>
            <div>
              <h4>Godziny pracy</h4>
              <p>Pon-Pt: 8:00-17:00<br>Sob: 9:00-14:00</p>
            </div>
          </div>
          <div class="contact-item">
            <i class="fas fa-building"></i>
            <div>
              <h4>Dane firmowe</h4>
              <p>NIP: 123-456-78-90<br>REGON: 123456789</p>
            </div>
          </div>
          <div class="contact-item">
            <i class="fas fa-shield-alt"></i>
            <div>
              <h4>Uprawnienia</h4>
              <p>Uprawnienia budowlane<br>Certyfikat ISO 9001</p>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <h3>Napisz do nas</h3>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <input
                type="text"
                v-model="form.name"
                placeholder="Imię i nazwisko"
                required
              >
            </div>
            <div class="form-group">
              <input
                type="email"
                v-model="form.email"
                placeholder="Email"
                required
              >
            </div>
            <div class="form-group">
              <input
                type="tel"
                v-model="form.phone"
                placeholder="Telefon"
              >
            </div>
            <div class="form-group">
              <select v-model="form.subject" required>
                <option value="">Wybierz temat</option>
                <option value="offer">Zapytanie o ofertę</option>
                <option value="funds">Fundusze europejskie</option>
                <option value="project">Realizacja projektu</option>
                <option value="other">Inne</option>
              </select>
            </div>
            <div class="form-group">
              <textarea
                v-model="form.message"
                rows="5"
                placeholder="Treść wiadomości"
                required
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
              {{ isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość' }}
            </button>
          </form>

          <div v-if="submitMessage" class="submit-message" :class="submitMessageType">
            {{ submitMessage }}
          </div>
        </div>
      </div>


      <div class="map-container">
        <iframe
            title="Mapa - Biuro Inżynierii Środowiska"
            src="https://www.google.com/maps?q=ul.+Staroszkolna+16%2F28,+85-209+Bydgoszcz&output=embed"
            width="100%"
            height="350"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      },
      isSubmitting: false,
      submitMessage: '',
      submitMessageType: ''
    }
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true

      try {
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000))

        // Reset form
        this.form = {
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        }

        this.submitMessage = 'Dziękujemy za wiadomość! Skontaktujemy się z Państwem w ciągu 24 godzin.'
        this.submitMessageType = 'success'

      } catch (error) {
        this.submitMessage = 'Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.'
        this.submitMessageType = 'error'
      } finally {
        this.isSubmitting = false

        // Clear message after 5 seconds
        setTimeout(() => {
          this.submitMessage = ''
        }, 5000)
      }
    }
  }
}
</script>

<style scoped>
.contact-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
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

.company-info {
  text-align: center;
  margin-bottom: 40px;
  font-size: 1.2rem;
  color: var(--text-color, black);
  line-height: 1.7;
  padding: 25px;
}

.company-info a {
  color: var(--primary-color, #007BFF);
  text-decoration: underline;
  word-break: break-all;
}

.map-container {
  margin: 40px 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 40px;
  margin-top: 50px;
  align-items: stretch;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 25px;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  height: 100%;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.contact-item i {
  font-size: 1.5rem;
  color: var(--secondary-color);
  margin-top: 5px;
}

.contact-item h4 {
  color: var(--primary-color);
  margin-bottom: 5px;
}

.contact-item p {
  color: var(--text-light);
}

.contact-item a {
  color: var(--primary-color, #007BFF);
  text-decoration: none;
  transition: var(--transition);
}

.contact-item a:hover {
  text-decoration: underline;
  color: var(--secondary-color, #28a745);
}

.contact-form {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.contact-form h3 {
  font-size: 1.8rem;
  color: var(--primary-color);
  margin-bottom: 25px;
}

.contact-form form {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.contact-form .form-group:last-of-type {
  flex-grow: 1;
}

.contact-form .form-group:last-of-type textarea {
  height: 100%;
  min-height: 120px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: var(--transition);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--secondary-color);
}

.form-group textarea {
  resize: vertical;
}

.btn {
  padding: 12px 30px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
}

.btn-primary {
  background: var(--secondary-color);
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background: var(--primary-color);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit-message {
  margin-top: 20px;
  padding: 15px;
  border-radius: 5px;
  font-weight: 500;
}

.submit-message.success {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.submit-message.error {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

@media (max-width: 768px) {
  .container {
    padding: 0 15px;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 30px;
    margin-top: 30px;
  }

  .contact-form,
  .contact-info {
    padding: 25px;
  }

  .company-info {
    padding: 20px;
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .section-header h2 {
    font-size: 2rem;
  }

  .contact-form,
  .contact-info {
    padding: 20px;
  }
}
</style>
