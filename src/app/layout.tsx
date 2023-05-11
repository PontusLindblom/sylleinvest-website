import './globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: 'Sylle Invest',
    description: 'Brings knowledge to investing',
    icons: './favicon.webp'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
            <Navbar/>
            <div className='page-container'>
                {children}
            </div>
            <Footer/>
        </body>
        </html>
    )
}
