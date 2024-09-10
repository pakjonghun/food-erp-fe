import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ApolloClientProvider from '@/providers/ApolloClientProvider';
import MuiThemeProvider from '@/providers/ThemeProvider';
import SnackProvider from '@/context/snackContext/SnackProvider';
import LocalizationProvider from '@/providers/LocalizationProvider';
const inter = Inter({ subsets: ['latin'] });
import './globals.css';

export const metadata: Metadata = {
  title: '전산 시스템',
  description: '매출, 재고관리를 위한 전산 입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloClientProvider>
          <MuiThemeProvider>
            <LocalizationProvider>
              <SnackProvider>{children}</SnackProvider>
            </LocalizationProvider>
          </MuiThemeProvider>
        </ApolloClientProvider>
      </body>
    </html>
  );
}
