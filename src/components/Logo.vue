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

        <!-- Animated gradients for wave elements -->
        <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color: #4FC3F7; stop-opacity: 1">
            <animate attributeName="stop-color" dur="4s" repeatCount="indefinite"
                     values="#4FC3F7;#007BFF;#4FC3F7"/>
          </stop>
          <stop offset="100%" style="stop-color: #007BFF; stop-opacity: 1">
            <animate attributeName="stop-color" dur="4s" repeatCount="indefinite"
                     values="#007BFF;#0056b3;#007BFF"/>
          </stop>
        </linearGradient>

        <linearGradient id="green-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color: #66BB6A; stop-opacity: 1">
            <animate attributeName="stop-color" dur="4s" repeatCount="indefinite"
                     values="#66BB6A;#28a745;#66BB6A"/>
          </stop>
          <stop offset="100%" style="stop-color: #28a745; stop-opacity: 1">
            <animate attributeName="stop-color" dur="4s" repeatCount="indefinite"
                     values="#28a745;#155724;#28a745"/>
          </stop>
        </linearGradient>
      </defs>

      <!-- Subtle background pulse -->
      <circle cx="100" cy="100" r="85" fill="url(#bg-gradient)" opacity="0.1" class="pulse-bg">
        <animate attributeName="r" dur="6s" repeatCount="indefinite" values="85;90;85"/>
        <animate attributeName="opacity" dur="6s" repeatCount="indefinite" values="0.1;0.05;0.1"/>
      </circle>

      <!-- Left Blue Element -->
      <path class="wave-element" d="M 30,100 C 50,70 70,130 90,100" fill="none" stroke="url(#blue-gradient)" stroke-width="10" stroke-linecap="round">
        <animate
            attributeName="d"
            dur="5s"
            repeatCount="indefinite"
            values="M 30,100 C 50,70 70,130 90,100; M 30,100 C 60,80 80,120 90,100; M 30,100 C 50,70 70,130 90,100;"
        />
        <animate
            attributeName="stroke-width"
            dur="3s"
            repeatCount="indefinite"
            values="10;8;12;10"
        />
      </path>

      <!-- Right Green Element -->
      <path class="wave-element" d="M 170,100 C 150,130 130,70 110,100" fill="none" stroke="url(#green-gradient)" stroke-width="10" stroke-linecap="round">
        <animate
            attributeName="d"
            dur="5s"
            repeatCount="indefinite"
            values="M 170,100 C 150,130 130,70 110,100; M 170,100 C 140,120 120,80 110,100; M 170,100 C 150,130 130,70 110,100;"
        />
        <animate
            attributeName="stroke-width"
            dur="3s"
            repeatCount="indefinite"
            values="10;12;8;10"
        />
      </path>

      <!-- Central Text "BIŚ" with subtle scale animation -->
      <text x="100" y="105" font-family="Arial, sans-serif" font-size="50" font-weight="bold" text-anchor="middle" fill="#333" class="main-text">
        BIŚ
        <animateTransform
            attributeName="transform"
            type="scale"
            dur="4s"
            repeatCount="indefinite"
            values="1;1.02;1"
        />
      </text>

      <!-- Subtitle with fade animation -->
      <text v-if="!isNoText" x="100" y="140" font-family="Arial, sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="grey" class="subtitle-text">
        Biuro Inżynierii Środowiska
        <animate attributeName="opacity" dur="4s" repeatCount="indefinite" values="1;0.7;1"/>
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

.logo-svg:hover {
  transform: scale(1.05);
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
  stroke-opacity: 0.8;
  transition: stroke-opacity 0.5s ease-out;
}

.wave-element:hover {
  stroke-opacity: 1;
}

.main-text {
  transform-origin: center;
}

.pulse-bg {
  animation: subtle-pulse 6s ease-in-out infinite;
}

@keyframes subtle-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.01); }
}
</style>