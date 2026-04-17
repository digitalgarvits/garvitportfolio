import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <h2 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-4">404</h2>
      <h3 className="text-3xl font-semibold mb-6">Page Not Found</h3>
      <p className="text-xl text-muted-foreground mb-8 max-w-md">
        Could not find requested resource. The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <Link href="/" className="px-8 py-4 rounded-full bg-foreground text-background font-medium hover:scale-105 transition-transform">
        Return Home
      </Link>
    </div>
  )
}
