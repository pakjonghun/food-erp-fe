import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@mui/material';
import ApolloClientProvider from '@/providers/ApolloClientProvider';
import './globals.css';
import MuiThemeProvider from '@/providers/ThemeProvider';
import SnackProvider from '@/context/snackContext/SnackProvider';

const inter = Inter({ subsets: ['latin'] });

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
        <MuiThemeProvider>
          <ApolloClientProvider>
            <SnackProvider>{children}</SnackProvider>
          </ApolloClientProvider>
        </MuiThemeProvider>
      </body>
    </html>
  );
}
