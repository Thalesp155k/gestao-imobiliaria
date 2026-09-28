 import './globals.css'
  import type { Metadata } from 'next'

  export const metadata: Metadata = {
    title: 'Gestão Imobiliária',
    description: 'Sistema Profissional de Gestão Imobiliária',
    manifest: '/manifest.json', // Para o PWA funcionar
  }

  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="pt-br">
        <body className="bg-slate-50 text-slate-900 antialiased">
          {children}
        </body>
      </html>
    )
  }
