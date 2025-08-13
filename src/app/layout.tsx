import './globals.css';
import Navigation from './components/Navigation';
import FloatingButtons from './components/FloatingButtons';

export const metadata = {
  title: 'Oldweiler Custom Carpentry',
  description: 'Custom carpentry and home improvement by a local craftsman in Rochester, NY.',
  keywords: ['custom carpentry', 'home improvement', 'Oldweiler', 'Rochester NY craftsman'],
  authors: [{ name: 'Oldweiler Custom Carpentry' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-[var(--color-background)] text-[var(--color-foreground)] font-sans antialiased">
        <Navigation />
        <main>
          {children}
        </main>
        <FloatingButtons />
      </body>
    </html>
  );
}