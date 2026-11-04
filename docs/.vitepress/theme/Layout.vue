<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>
<template>
  <Layout>
    <template #layout-bottom>
      <footer class="credits" aria-label="Copyright and contact">
        <p>© 2026 Teerasej Jiraphatchandej. All rights reserved.</p>
        <nav aria-label="Contact links">
          <a href="mailto:teerasej@nextflow.in.th">Email me</a>
          <a href="https://www.facebook.com/teerasej">Facebook</a>
          <a href="https://www.youtube.com/teerasej">YouTube</a>
        </nav>
      </footer>
    </template>
  </Layout>
</template>
