<template>
  <section class="contact-section">
    <div class="section-header">
      <h2>Kontakt</h2>
      <p>Skontaktuj się z nami, aby omówić swój projekt</p>
    </div>

    <div class="contact-content">
      <div class="contact-info">
        <div class="contact-item">
          <i class="fas fa-map-marker-alt"></i>
          <div>
            <h4>Adres</h4>
            <p>ul. Środowiskowa 123<br>00-001 Warszawa</p>
          </div>
        </div>
        <div class="contact-item">
          <i class="fas fa-phone"></i>
          <div>
            <h4>Telefon</h4>
            <p>+48 22 123 45 67</p>
          </div>
        </div>
        <div class="contact-item">
          <i class="fas fa-envelope"></i>
          <div>
            <h4>Email</h4>
            <p>biuro@bis.pl</p>
          </div>
        </div>
        <div class="contact-item">
          <i class="fas fa-clock"></i>
          <div>
            <h4>Godziny pracy</h4>
            <p>Pon-Pt: 8:00-17:00<br>Sob: 9:00-14:00</p>
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

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 30px;
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

.contact-form {
  background: var(--bg-light);
  padding: 40px;
  border-radius: 10px;
  position: relative;
}

.contact-form h3 {
  font-size: 1.8rem;
  color: var(--primary-color);
  margin-bottom: 25px;
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
  .contact-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .contact-form {
    padding: 25px;
  }
}
</style>

