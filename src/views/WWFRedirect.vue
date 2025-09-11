<template>
  <div class="redirect-page">
    <div class="container">
      <h1>Halt dich fest…</h1>
      <p>wir leiten dich weiter!</p>
      <div class="spinner"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  // Plausible erfasst UTM-Parameter automatisch
  // Kurz warten, dann weiterleiten
  setTimeout(() => {
    const targetUrl = 'https://remorrow.world/abend-fuer-die-moore-wwf'
    const redirectUrl = new URL(targetUrl)
    
    // UTM Parameter von der aktuellen URL an Ziel-URL anhängen
    const currentParams = new URLSearchParams(window.location.search)
    currentParams.forEach((value, key) => {
      if (key.startsWith('utm_')) {
        redirectUrl.searchParams.set(key, value)
      }
    })
    
    console.log('🚀 Redirecting to:', redirectUrl.toString())
    window.location.href = redirectUrl.toString()
  }, 2000)
})
</script>

<style scoped>
.redirect-page {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #1a1a1a;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  text-align: center;
}

.container {
  max-width: 500px;
  padding: 2rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.1rem;
  opacity: 0.8;
  margin-bottom: 2rem;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #333;
  border-top: 4px solid #ffffff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
