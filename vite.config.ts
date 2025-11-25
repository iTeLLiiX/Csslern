import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      injectRegister: 'auto',
      registerType: 'autoUpdate',
      includeAssets: ['logo.svg', 'favicon.ico', 'pwa-192x192.png', 'pwa-512x512.png'],
      strategies: 'generateSW',
      manifest: {
        name: 'Lernsystem - Klassenarbeit Vorbereitung',
        short_name: 'Lernsystem',
        description: 'Gamifiziertes Lernsystem für C# und WiKom Klassenarbeit - Lerne interaktiv mit Quizzen, Übungen und Fortschritts-Tracking',
        theme_color: '#114cff',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/?source=pwa',
        prefer_related_applications: false,
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: 'logo.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any'
          }
        ],
        categories: ['education', 'productivity'],
        lang: 'de',
        dir: 'ltr'
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2,woff,ttf,json}'],
        globIgnores: ['**/node_modules/**/*', 'sw.js', 'workbox-*.js', 'registerSW.js'],
        maximumFileSizeToCacheInBytes: 5000000,
        cleanupOutdatedCaches: true,
        skipWaiting: true,
        clientsClaim: true,
        // Alle Seiten für Offline-Nutzung verfügbar machen
        navigateFallback: '/index.html',
        navigateFallbackDenylist: [/^\/_/, /\/[^/?]+\.[^/]+$/],
        // Offline-Fallback für alle Routen
        navigationPreload: false,
        runtimeCaching: [
          {
            // HTML-Seiten - NetworkFirst für Updates, aber offline verfügbar
            urlPattern: /\.html$/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'html-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 7 // 7 Tage
              },
              networkTimeoutSeconds: 3
            }
          },
          {
            // Google Fonts - NetworkFirst mit Fallback
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 Jahr
              },
              cacheableResponse: {
                statuses: [0, 200]
              },
              networkTimeoutSeconds: 3
            }
          },
          {
            // Google Fonts Static - NetworkFirst mit Fallback
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 Jahr
              },
              cacheableResponse: {
                statuses: [0, 200]
              },
              networkTimeoutSeconds: 3
            }
          },
          {
            // Bilder - CacheFirst für Offline-Nutzung
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 Tage
              }
            }
          },
          {
            // Statische Ressourcen - StaleWhileRevalidate
            urlPattern: /\.(?:js|css|woff2?|ttf|eot)$/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'static-resources',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 7 // 7 Tage
              }
            }
          },
          {
            // Alle App-Routen - NetworkFirst mit Offline-Fallback
            urlPattern: /^\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'app-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 7 // 7 Tage für bessere Offline-Nutzung
              },
              cacheableResponse: {
                statuses: [0, 200]
              },
              networkTimeoutSeconds: 3
            }
          },
          {
            // Manifest und Service Worker - CacheFirst
            urlPattern: /\.(?:webmanifest|js)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'manifest-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 Jahr
              }
            }
          }
        ]
      },
      devOptions: {
        enabled: true,
        type: 'module',
        navigateFallback: 'index.html'
      }
    })
  ],
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'editor-vendor': ['monaco-editor', '@monaco-editor/react']
        }
      }
    }
  }
})
