import { createRootRoute, HeadContent, Outlet } from '@tanstack/react-router'

import { Header } from '@/components/shared/header'
import { Footer } from '@/components/shared/footer'
import { site } from '@/data/site'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: site.name },
      {
        name: 'description',
        content: `Official website of ${site.name}, a public sector college affiliated with the ${site.affiliation.university}.`,
      },
      { property: 'og:title', content: site.name },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: site.url },
    ],
  }),
  component: RootLayout,
})

function RootLayout() {
  return (
    <div className="flex min-h-svh flex-col">
      <HeadContent />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
