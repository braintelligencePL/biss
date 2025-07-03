<template>
  <div class="logo-container" :class="{ 'logo-header': isHeader, 'logo-hero': isHero }">
    <svg viewBox="0 0 200 200" class="logo-svg">
      <defs>
        <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color: #e0f7fa; stop-opacity: 1" />
          <stop offset="100%" style="stop-color: #e8f5e9; stop-opacity: 1" />
        </linearGradient>
        <!-- Path for the bottom text -->
        <path id="text-arc" d="M 40,150 A 60,60 0 0,1 160,150" fill="none" />
      </defs>

      <!-- Left Blue Element -->
      <path class="wave-element" d="M 30,100 C 50,70 70,130 90,100" fill="none" stroke="#007BFF" stroke-width="10" stroke-linecap="round">
        <animate
            attributeName="d"
            dur="4s"
            repeatCount="indefinite"
            values="M 30,100 C 50,70 70,130 90,100; M 30,100 C 60,80 80,120 90,100; M 30,100 C 50,70 70,130 90,100;"
        />
      </path>

      <!-- Right Green Element -->
      <path class="wave-element" d="M 170,100 C 150,130 130,70 110,100" fill="none" stroke="#28a745" stroke-width="10" stroke-linecap="round">
        <animate
            attributeName="d"
            dur="4s"
            repeatCount="indefinite"
            values="M 170,100 C 150,130 130,70 110,100; M 170,100 C 140,120 120,80 110,100; M 170,100 C 150,130 130,70 110,100;"
        />
      </path>
      <!-- Central Text "BIŚ" -->
      <text x="100" y="105" font-family="Arial, sans-serif" font-size="50" font-weight="bold" text-anchor="middle" fill="#333">
        BIŚ
      </text>

      <text v-if="!isNoText" x="100" y="140" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="grey">
        Biuro Inżynierii Środowiska
      </text>

    </svg>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    isHeader: {
      type: Boolean,
      default: false
    },
    isHero: {
      type: Boolean,
      default: false
    },
    isNoText: {
      type: Boolean
    }
  }
}
</script>

<style scoped>
.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-svg {
  transition: all 0.3s ease;
}

.logo-header .logo-svg {
  width: 130px;
  height: 130px;
}

.logo-hero .logo-svg {
  width: 400px;
  height: 400px;
  max-width: 100%;
}

@media (max-width: 768px) {
  .logo-header .logo-svg {
    width: 50px;
    height: 50px;
  }

  .logo-hero .logo-svg {
    width: 200px;
    height: 200px;
  }
}

svg {
  max-width: 100%;
  height: auto;
  transition: transform 0.5s ease-out;
}

.wave-element {
  stroke-opacity: 0.7;
  transition: stroke-opacity 0.5s ease-out;
}
</style>