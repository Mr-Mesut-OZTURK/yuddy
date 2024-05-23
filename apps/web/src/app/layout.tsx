import { FooterMain, HeaderMain } from '@/sections'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './globals.css'
import { AppProvider } from '@/providers';

import { Fab } from '@mui/material'
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { ScrollToTopButton } from '@/components';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yuddy',
  description: 'Created by Mesut ÖZTÜRK',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body className={`${inter.className} min-h-[100vh] flex flex-col relative`} >
        <div id="back-to-top-anchor" />
        <AppProvider>

          <HeaderMain />

          <main className='flex-1'>
            {children}
          </main>

          <FooterMain />

          <Fab
            color="primary"
            aria-label="add"
            sx={{
              position: 'fixed',
              bottom: 20,
              right: { xs: 20, sm: 20 },
              bgcolor: '#4400f0',
            }}
          >
            <ModeCommentOutlinedIcon />
          </Fab>

          <ScrollToTopButton>
            <Fab size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollToTopButton>

        </AppProvider>
      </body>
    </html>
  )
}
