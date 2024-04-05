import { Lato } from 'next/font/google';
import './globals.css';
import Menubar from '@/components/menubar/Menubar';
import { Toaster } from 'react-hot-toast';




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
      <body className={lato.className}>
        <Toaster position='top-center' />
        <Menubar />
        {children}
      </body>
    </html>
  );
}
