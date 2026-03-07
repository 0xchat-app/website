<template>
  <div class="min-h-screen bg-white flex items-center justify-center px-4 py-16">
    <div class="w-full max-w-md">
      <!-- Top accent -->
      <div class="h-[3px] bg-emerald-500 rounded-full mb-10" />

      <!-- Logo + Title -->
      <div class="flex items-center gap-4 mb-8">
        <img src="/icon_lite.png" alt="XChat" class="w-14 h-14 rounded-2xl shadow-md" />
        <div>
          <h1 class="text-2xl font-black text-gray-900 tracking-tight">You've been invited!</h1>
          <p class="font-mono text-xs text-gray-400 mt-0.5">Scan the QR code to connect</p>
        </div>
      </div>

      <!-- QR code card -->
      <div class="border border-gray-200 rounded-2xl p-6 mb-4 bg-gray-50 text-center">
        <p class="font-mono text-xs uppercase tracking-widest text-gray-400 mb-4">Scan to Connect</p>
        <div id="qrCode" class="flex justify-center mb-4" />
        <p class="font-mono text-xs text-gray-500">Open XChat app</p>
        <p class="font-mono text-[10px] text-gray-400 mt-0.5">Tap + → Scan QR Code</p>
      </div>

      <!-- Open app button -->
      <div v-if="isAppInstalled" class="mb-4">
        <button
          @click="openApp"
          class="w-full bg-gray-900 text-white font-bold text-sm py-4 rounded-2xl hover:bg-gray-700 transition-colors"
        >
          Open XChat
        </button>
      </div>

      <div class="h-px bg-gray-100 my-6" />

      <!-- Why XChat -->
      <div class="border border-gray-200 rounded-2xl p-6 mb-4">
        <h3 class="font-bold text-gray-900 text-sm mb-4">Why XChat?</h3>
        <ul class="space-y-2.5">
          <li v-for="feat in features" :key="feat" class="flex items-center gap-3 font-mono text-xs text-gray-500">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
            {{ feat }}
          </li>
        </ul>
      </div>

      <!-- Troubleshooting -->
      <div class="border border-gray-100 rounded-2xl p-5 bg-gray-50">
        <h4 class="font-bold text-gray-700 text-xs mb-3">Having trouble connecting?</h4>
        <ul class="space-y-1.5">
          <li v-for="tip in tips" :key="tip" class="flex items-center gap-2 font-mono text-[10px] text-gray-400">
            <span class="text-gray-300">·</span>
            {{ tip }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref, computed } from 'vue'
import { isIOS, isAndroid, isMobile } from '../utils/is.js'

export default defineComponent({
  name: 'XInvite',
  setup() {
    // Device detection reactive variables
    const deviceIsIOS = ref(false)
    const deviceIsAndroid = ref(false)
    const deviceIsMobile = ref(false)
    
    // App installation detection
    const appInstalled = ref(false)
    const isCheckingApp = ref(true)

    // Computed properties for device detection
    const isIOSDevice = computed(() => deviceIsIOS.value)
    const isAndroidDevice = computed(() => deviceIsAndroid.value)
    const isMobileDevice = computed(() => deviceIsMobile.value)

    // Check if XChat app is installed
    const checkAppInstallation = () => {
      if (!isMobile) {
        // On desktop, assume app is not installed
        appInstalled.value = false
        isCheckingApp.value = false
        return
      }

      // For mobile devices, we'll try to detect if app is installed
      // by attempting to open it when user clicks the button
      // For now, we'll show the open button to let users try
      appInstalled.value = true
      isCheckingApp.value = false
    }

    // Open XChat app using custom URL scheme
    const openApp = () => {
      const currentUrl = window.location.href
      const urlObj = new URL(currentUrl)
      
      // Extract query parameters and construct the scheme URL
      const queryParams = urlObj.search
      const appUrl = `xchat://invite${queryParams}`
      
      // Try to open the app directly
      try {
        // Direct navigation - this will work if app is installed
        window.location.href = appUrl
        
        // Set timeout to redirect to download if app doesn't open
        setTimeout(() => {
          // Only redirect if we're still on the same page
          if (window.location.href === currentUrl) {
            redirectToDownload()
          }
        }, 1500)
        
      } catch (error) {
        console.error('Failed to open app:', error)
        // If error occurs, redirect to download
        redirectToDownload()
      }
    }
    
    // Redirect to appropriate download link based on platform
    const redirectToDownload = () => {
      if (isIOS) {
        window.location.href = 'https://apps.apple.com/us/app/xchat-for-nostr/id6747972868'
      } else if (isAndroid) {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.oxchat.lite'
      } else {
        // Desktop: redirect to desktop release page
        window.location.href = 'https://github.com/0xchat-app/0xchat-app-main/releases/tag/v1.5.3-release-desktop'
      }
    }

    // Generate QR code for current URL
    const generateQRCode = () => {
      // Use the complete current URL including all parameters
      const currentUrl = window.location.href
      const qrCodeElement = document.getElementById('qrCode')
      
      console.log('Generating QR code for:', currentUrl)
      
      if (typeof window.qrcode !== 'undefined') {
        try {
          // Create QR code instance (qrcode-generator API)
          // typeNumber: 0 means auto-detect, errorCorrectionLevel: 'M' for medium
          const qr = window.qrcode(0, 'M')
          qr.addData(currentUrl)
          qr.make()
          
          // Use smaller cell size for long URLs to keep QR code manageable
          const cellSize = currentUrl.length > 200 ? 3 : 4
          const margin = 2
          
          // Generate QR code as image tag
          const qrImg = qr.createImgTag(cellSize, margin)
          
          if (qrCodeElement) {
            qrCodeElement.innerHTML = qrImg
            // Style the generated image
            const img = qrCodeElement.querySelector('img')
            if (img) {
              img.style.maxWidth = '200px'
              img.style.height = 'auto'
              img.style.display = 'block'
              img.style.margin = '0 auto'
            }
          }
        } catch (error) {
          console.error('QR code generation error:', error)
          if (qrCodeElement) {
            qrCodeElement.innerHTML = '<div style="text-align: center; color: #999; font-size: 12px;">QR Code<br>Generation<br>Failed</div>'
          }
        }
      } else {
        console.error('qrcode library not loaded')
        if (qrCodeElement) {
          qrCodeElement.innerHTML = '<div style="text-align: center; color: #999; font-size: 12px;">QR Code<br>Library<br>Not Loaded</div>'
        }
      }
    }

    onMounted(() => {
      // Set device detection values
      deviceIsIOS.value = isIOS
      deviceIsAndroid.value = isAndroid
      deviceIsMobile.value = isMobile

      console.log('Device detection:', {
        isIOS: deviceIsIOS.value,
        isAndroid: deviceIsAndroid.value,
        isMobile: deviceIsMobile.value
      })

      // Check app installation
      checkAppInstallation()

      // Generate QR code
      generateQRCode()
    })

    return {
      isIOS: isIOSDevice,
      isAndroid: isAndroidDevice,
      isMobile: isMobileDevice,
      isAppInstalled: computed(() => appInstalled.value),
      isCheckingApp: computed(() => isCheckingApp.value),
      openApp,
      generateQRCode,
      features: [
        'MLS end-to-end encryption',
        'Local encrypted storage',
        'Circle concept with independent config',
        'Native UI design for each platform',
        'Perfect for private groups',
        'Minimal & fast interface',
      ],
      tips: [
        'Make sure XChat is installed and updated',
        'Clear your browser cache',
        'Check your internet connection',
      ],
    }
  }
})
</script>


<style scoped>
/* No additional styles — Tailwind handles everything */
</style>
