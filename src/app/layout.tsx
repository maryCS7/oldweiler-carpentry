import './globals.css';
import FloatingButtons from './components/FloatingButtons';

export const metadata = {
  title: 'Oldweiler Custom Carpentry',
  description: 'Custom carpentry and home improvement by a local craftsman in Rochester, NY.',
  keywords: ['custom carpentry', 'home improvement', 'Oldweiler', 'Rochester NY craftsman'],
  authors: [{ name: 'Oldweiler Custom Carpentry' }],
  
  // Social Media Preview (Open Graph)
  openGraph: {
    title: 'Oldweiler Custom Carpentry',
    description: 'Custom carpentry and home improvement by a local craftsman in Rochester, NY.',
    images: [
      {
        url: '/oldweiler-logo.png', 
        width: 200,
        height: 80,
        alt: 'Oldweiler Custom Carpentry Logo'
      }
    ],
    type: 'website',
    locale: 'en_US',
    siteName: 'Oldweiler Custom Carpentry',
    url: 'https://oldweilercustomcarpentry.com',
  },
  
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-[var(--color-background)] text-[var(--color-foreground)] font-sans antialiased">
        <main>
          {children}
        </main>
        <FloatingButtons />
      </body>
    </html>
  );
}