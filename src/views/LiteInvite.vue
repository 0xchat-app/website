<template>
  <div class="lite-invite">
    <div class="container">
      <img class="logo" src="/icon_lite.png" alt="XChat" />
      <h1>This invite link is out of date</h1>
      <p class="subtitle">
        It was created by an older version of XChat and is missing the
        information needed to join a circle.
      </p>

      <div class="steps">
        <h3>Ask your friend for a new link</h3>
        <ol>
          <li>In XChat, open <strong>Settings</strong></li>
          <li>Choose the circle they want you in</li>
          <li>Tap <strong>Invite members</strong></li>
          <li>Share that link — it will bring you straight in</li>
        </ol>
      </div>

      <div class="divider"></div>

      <p class="get-app">Don't have XChat yet?</p>
      <div class="action-buttons">
        <a class="action-btn" href="/download">Get XChat</a>
      </div>

      <div class="fallback">
        <h4>Why did this happen?</h4>
        <p>
          A link in this format carries only a circle id, with no relay address
          or invitation code, so the app has no way to find the circle it points
          at. Newer invite links include both and work immediately.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LiteInvite',
})
</script>

<style scoped>
.lite-invite {
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
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.15),
    0 4px 8px rgba(0, 0, 0, 0.15),
    0 8px 16px rgba(0, 0, 0, 0.15),
    0 16px 32px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #333;
  font-size: 28px;
  font-weight: 700;
  margin: 0 auto 10px;
}

.subtitle {
  color: #666;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 30px;
}

.steps {
  background: #f7f8fc;
  border-radius: 14px;
  padding: 24px 24px 20px;
  text-align: left;
}

.steps h3 {
  color: #333;
  font-size: 17px;
  font-weight: 600;
  margin: 0 0 14px;
  text-align: center;
}

.steps ol {
  /* Tailwind's preflight strips list markers; put them back. */
  list-style: decimal outside;
  margin: 0;
  padding-left: 22px;
  color: #555;
  font-size: 15px;
  line-height: 1.9;
}

.steps li::marker {
  color: #667eea;
  font-weight: 600;
}

.steps strong {
  color: #333;
}

.divider {
  height: 1px;
  background: #eee;
  margin: 30px 0 24px;
}

.get-app {
  color: #666;
  font-size: 15px;
  margin: 0 0 14px;
}

.action-buttons {
  display: flex;
  justify-content: center;
}

.action-btn {
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  padding: 14px 34px;
  border-radius: 12px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.action-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 18px rgba(102, 126, 234, 0.35);
}

.fallback {
  margin-top: 32px;
  padding-top: 22px;
  border-top: 1px solid #eee;
  text-align: left;
}

.fallback h4 {
  color: #333;
  font-size: 15px;
  font-weight: 600;
  margin: 0 0 8px;
}

.fallback p {
  color: #888;
  font-size: 13.5px;
  line-height: 1.7;
  margin: 0;
}

@media (prefers-reduced-motion: reduce) {
  .action-btn {
    transition: none;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 30px 20px;
  }

  h1 {
    font-size: 24px;
  }

  .steps {
    padding: 20px 18px 16px;
  }
}
</style>
