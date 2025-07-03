<template>
  <header class="app-header">
    <div class="header-content">
      <div class="logo-section">
        <Logo :is-header="true" :is-no-text="true"/>
      </div>

      <nav class="navbar">
        <div class="nav-container">
          <ul class="nav-menu" :class="{ active: mobileMenuOpen }">
            <li>
              <router-link to="/" class="nav-link" @click="closeMobileMenu">Strona Główna</router-link>
            </li>
            <li>
              <router-link to="/o-nas" class="nav-link" @click="closeMobileMenu">O Nas</router-link>
            </li>
            <li>
              <router-link to="/oferta" class="nav-link" @click="closeMobileMenu">Oferta</router-link>
            </li>
            <li>
              <router-link to="/fundusze-europejskie" class="nav-link" @click="closeMobileMenu">Fundusze Europejskie
              </router-link>
            </li>
            <li>
              <router-link to="/realizacje" class="nav-link" @click="closeMobileMenu">Realizacje</router-link>
            </li>
            <li>
              <router-link to="/kontakt" class="nav-link" @click="closeMobileMenu">Kontakt</router-link>
            </li>
          </ul>

          <div class="hamburger" :class="{ active: mobileMenuOpen }" @click="toggleMobileMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from './Logo.vue';

export default {
  name: 'AppHeader',
  components: {
    Logo
  },
  data() {
    return {
      mobileMenuOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false
    }
  }
}
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 12px;
}

.company-name {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
}

.navbar {
  background: white;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: left;
  height: 40px;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 30px;
  margin: 0;
  padding: 0;
}

.nav-link {
  text-decoration: none;
  color: var(--text-dark);
  font-weight: 500;
  transition: var(--transition);
  position: relative;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--secondary-color);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--secondary-color);
  transition: var(--transition);
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background: var(--text-dark);
  margin: 3px 0;
  transition: var(--transition);
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    top: 80px;
    left: -100%;
    width: 100%;
    height: calc(100vh - 80px);
    background: white;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 50px 0;
    transition: var(--transition);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-menu li {
    margin: 20px 0;
  }
}
</style>
