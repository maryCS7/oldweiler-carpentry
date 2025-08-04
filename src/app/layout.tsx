import './globals.css';
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
        <main className="max-w-5xl mx-auto px-6 py-12">
          {children}
        </main>
        <FloatingButtons />
      </body>
    </html>
  );
}