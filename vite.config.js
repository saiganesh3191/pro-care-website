import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'

const routeSeo = [
  {
    route: 'lab-tests',
    title: 'Lab Tests in Musheerabad, Hyderabad | PROCARE Polyclinic',
    description: 'Book lab tests at PROCARE Polyclinic in Musheerabad, Hyderabad. View available tests and prices, and request clinic collection or home sample pickup.',
    keywords: 'lab tests Musheerabad, diagnostic tests Hyderabad, blood test Musheerabad, home sample collection Musheerabad, PROCARE Polyclinic lab tests',
    schemaType: 'WebPage',
    pageName: 'Lab Tests & Sample Collection | PROCARE Polyclinic',
  },
  {
    route: 'gallery',
    title: 'PROCARE Polyclinic Gallery | Musheerabad, Hyderabad',
    description: 'View the PROCARE Polyclinic gallery and learn more about our clinic, facilities and patient care in Musheerabad, Hyderabad.',
    keywords: 'PROCARE Polyclinic gallery, clinic photos Musheerabad, polyclinic Musheerabad Hyderabad, PROCARE clinic facilities',
    schemaType: 'CollectionPage',
    pageName: 'PROCARE Polyclinic Gallery',
  },
]

function buildStaticRouteHtml(baseHtml, page) {
  const url = `https://procarepolyclinic.com/${page.route}`
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': page.schemaType,
    name: page.pageName,
    description: page.description,
    url,
    isPartOf: {
      '@type': 'WebSite',
      name: 'PROCARE Polyclinic',
      url: 'https://procarepolyclinic.com/',
    },
    about: {
      '@type': 'MedicalClinic',
      name: 'PROCARE Polyclinic',
      telephone: '+919848188898',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Beside Marjan Hotel, Diara Market, Mushirabad',
        addressLocality: 'Hyderabad',
        addressRegion: 'Telangana',
        postalCode: '500020',
        addressCountry: 'IN',
      },
    },
  }

  return baseHtml
    .replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${page.description}`)
    .replace(/(<meta name="keywords" content=")[^"]*/, `$1${page.keywords}`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${page.title}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${page.description}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
    .replace(/(<meta name="twitter:title" content=")[^"]*/, `$1${page.title}`)
    .replace(/(<meta name="twitter:description" content=")[^"]*/, `$1${page.description}`)
    .replace(
      '</head>',
      `    <script type="application/ld+json">${JSON.stringify(pageSchema)}</script>\n  </head>`,
    )
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'static-page-routes',
      closeBundle() {
        const html = readFileSync('dist/index.html', 'utf8')

        for (const page of routeSeo) {
          mkdirSync(`dist/${page.route}`, { recursive: true })
          writeFileSync(
            `dist/${page.route}/index.html`,
            buildStaticRouteHtml(html, page),
          )
        }
      },
    },
  ],
})
