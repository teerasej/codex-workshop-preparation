import DefaultTheme from 'vitepress/theme'
import '@fontsource/noto-sans-thai/400.css'
import '@fontsource/noto-sans-thai/600.css'
import './custom.css'
import Layout from './Layout.vue'
import PrepImage from './components/PrepImage.vue'
import DownloadTest from './components/DownloadTest.vue'
import SectionCards from './components/SectionCards.vue'
export default { extends: DefaultTheme, Layout, enhanceApp({ app }) {
  app.component('PrepImage', PrepImage)
  app.component('DownloadTest', DownloadTest)
  app.component('SectionCards', SectionCards)
} }
