import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), {
    name: 'static-page-routes',
    closeBundle() {
      const html = readFileSync('dist/index.html', 'utf8');
      for (const [route, title, description] of [
        ['gallery', 'Gallery | PROCARE Polyclinic', 'Explore PROCARE Polyclinic. Clinic and facility photos coming soon.'],
        ['lab-tests', 'Lab Tests | PROCARE Polyclinic', 'Choose lab tests and request clinic collection or home sample pickup from PROCARE Polyclinic.'],
      ]) {
        mkdirSync(`dist/${route}`, { recursive: true });
        writeFileSync(`dist/${route}/index.html`, html
          .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
          .replace(/(<meta name="description" content=")[^"]*/, `$1${description}`)
          .replace(/(<link rel="canonical" href=")[^"]*/, `$1https://procarepolyclinic.com/${route}/`)
          .replace(/(<meta property="og:url" content=")[^"]*/, `$1https://procarepolyclinic.com/${route}/`)
          .replace(/(<meta (?:property="og:title"|name="twitter:title") content=")[^"]*/g, `$1${title}`));
      }
    },
  }],
})
