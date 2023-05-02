import './globals.css'

export const metadata = {
  title: 'gymnasia',
  description: 'gymnasia — education world for all',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
