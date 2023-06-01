import './globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {Roboto_Flex} from 'next/font/google';

const robotoFlex = Roboto_Flex({ subsets: ['latin'] });

export const metadata = {
    title: 'Sylle Invest',
    description: 'Brings knowledge to investing',
    icons: 'favicon.webp'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={robotoFlex.className}>
            <Navbar/>
            <main className='content-container'>
                {children}
            </main>
            <Footer/>
        </body>
        </html>
    )
}
