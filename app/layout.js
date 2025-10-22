import './globals.css'
import { Web3Provider } from '../contexts/Web3Context'

export const metadata = {
  title: 'GreenXchange - Institutional Carbon Credit Trading',
  description: 'Enterprise-grade platform for tokenized carbon credit trading with zero gas fees and institutional security',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Web3Provider>
          {children}
        </Web3Provider>
      </body>
    </html>
  )
}