<template>
  <div class="x-invite">
    <div class="container">
      <img class="logo" src="/icon_lite.png" alt="XChat" />
      <h1>You've been invited!</h1>
      <p class="subtitle">Scan the QR code to connect with friends</p>
      
      <div class="qr-section">
        <h3>Scan to Connect</h3>
        <div class="qr-code" id="qrCode"></div>
        <p class="qr-text">Open XChat app</p>
        <p class="qr-text-small">Tap + → Scan QR Code</p>
      </div>
      
      <div class="divider"></div>
      
      <!-- Dynamic button section based on app installation and platform -->
      <div class="action-buttons">
        <!-- Show open button if app is installed -->
        <button v-if="isAppInstalled" @click="openApp" class="action-btn open-btn">
          <span>Open XChat</span>
        </button>
        
        <!-- Download buttons are now handled automatically in openApp function -->
        <!-- If app is not installed, user will be redirected to appropriate download page -->
      </div>
      
      <div class="features">
        <h3>Why XChat?</h3>
        <ul class="feature-list">
          <li>MLS End-to-end encryption</li>
          <li>Local encrypted storage</li>
          <li>Circle concept with independent config</li>
          <li>Native UI design for each platform</li>
          <li>Perfect for private groups</li>
          <li>Minimal & fast interface</li>
        </ul>
      </div>
      
      <div class="fallback">
        <h4>Having trouble connecting?</h4>
        <ul>
          <li>Make sure XChat is installed and updated</li>
          <li>Clear your browser cache</li>
          <li>Check your internet connection</li>
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
        // Desktop: redirect to Google Play
        window.location.href = 'https://play.google.com/store/apps/details?id=com.oxchat.lite'
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
      generateQRCode
    }
  }
})
</script>

<style scoped>
.x-invite {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.container {
  background: white;
  border-radius: 20px;
  padding: 40px;
  max-width: 500px;
  width: 100%;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.logo {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  display: block;
  border-radius: 16px;
  position: relative;
  /* iPhone app icon shadow effects */
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.15),
    0 4px 8px rgba(0, 0, 0, 0.15),
    0 8px 16px rgba(0, 0, 0, 0.15),
    0 16px 32px rgba(0, 0, 0, 0.1);
  transform: translateZ(0);
  transition: all 0.3s ease;
}

/* Add a subtle inner shadow and highlight for more depth */
.logo::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 16px;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(0, 0, 0, 0.05) 100%);
  pointer-events: none;
}

/* Add inner shadow for more depth */
.logo::after {
  content: '';
  position: absolute;
  top: 1px;
  left: 1px;
  right: 1px;
  bottom: 1px;
  border-radius: 15px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4);
  pointer-events: none;
}

/* Hover effect for interactive feel */
.logo:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 
    0 4px 8px rgba(0, 0, 0, 0.2),
    0 8px 16px rgba(0, 0, 0, 0.2),
    0 16px 32px rgba(0, 0, 0, 0.2),
    0 32px 64px rgba(0, 0, 0, 0.15);
}

h1 {
  color: #333;
  font-size: 28px;
  font-weight: 700;
  margin: 0 auto 10px;
  text-align: center;
}

.subtitle {
  color: #666;
  font-size: 16px;
  margin-bottom: 30px;
}

.qr-section {
  margin-bottom: 30px;
}

.qr-section h3 {
  color: #333;
  font-size: 18px;
  margin-bottom: 15px;
}

.qr-code {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}

.qr-text {
  color: #333;
  font-size: 14px;
  margin-bottom: 5px;
}

.qr-text-small {
  color: #999;
  font-size: 12px;
  margin-bottom: 0;
}

.divider {
  height: 1px;
  background: #eee;
  margin: 30px 0;
}

/* Action buttons section */
.action-buttons {
  margin-bottom: 30px;
}

.action-btn {
  display: inline-block;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 200px;
}

.open-btn {
  background: linear-gradient(135deg, #be84fc 0%, #838cf9 100%);
  color: white;
}

.open-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(52, 168, 83, 0.4);
}

/* Download button styles removed - no longer needed */

.features {
  margin-bottom: 30px;
}

.features h3 {
  color: #333;
  font-size: 18px;
  margin-bottom: 15px;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
}

.feature-list li {
  color: #666;
  font-size: 14px;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
  padding-left: 20px;
}

.feature-list li:before {
  content: "✓";
  color: #34A853;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.feature-list li:last-child {
  border-bottom: none;
}

.fallback {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 20px;
  text-align: left;
}

.fallback h4 {
  color: #333;
  font-size: 16px;
  margin-bottom: 10px;
}

.fallback ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.fallback li {
  color: #666;
  font-size: 14px;
  padding: 5px 0;
  position: relative;
  padding-left: 15px;
}

.fallback li:before {
  content: "•";
  color: #999;
  position: absolute;
  left: 0;
}

@media (max-width: 480px) {
  .container {
    padding: 30px 20px;
  }
  
  h1 {
    font-size: 24px;
  }
  
  .download-btn {
    display: block;
    margin: 0 0 10px 0;
  }
  
  .action-btn {
    min-width: 100%;
  }
}
</style>
