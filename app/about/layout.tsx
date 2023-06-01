export const metadata = {
    title: 'About - First Next JS test APP',
    description: 'Student Project',
  }

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <>
    <nav>About NavBar</nav>
    <main>
        {children}
    </main>
    </>

  )
}
