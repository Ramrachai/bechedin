import { Lato } from 'next/font/google';
import './globals.css';

const lato = Lato({
  weight: '400',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Bike Arot',
  description: 'Buy or Sell used bikes with confidence.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={lato.className}>{children}</body>
    </html>
  );
}
