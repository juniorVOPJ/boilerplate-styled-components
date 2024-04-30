import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import StyledComponentsRegistry from '@/lib/registry'
import { Providers } from './providers'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Super Boilerplate JSC 1.0',
    description: 'NextJS, TypeScript, Styled Components e Storybook'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <StyledComponentsRegistry>
                    <Providers>{children}</Providers>
                </StyledComponentsRegistry>
            </body>
        </html>
    )
}
