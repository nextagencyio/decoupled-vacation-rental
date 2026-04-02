import { getClient } from '@/lib/drupal-client'
import { Metadata } from 'next'
import { GET_ATTRACTIONS } from '@/lib/queries'
import { AttractionsData } from '@/lib/types'
import Header from '../components/Header'
import AttractionCard from '../components/AttractionCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Attractions | Vacation Rental',
  description: 'Browse our attractions.',
}

async function getAttractions() {
  try {
    const client = getClient()
    const { data } = await client.raw(GET_ATTRACTIONS, { first: 50 })
    return data?.nodeAttractions?.nodes || []
  } catch (error) {
    console.error('Error fetching attractions:', error)
    return []
  }
}

export default async function AttractionsPage() {
  const items = await getAttractions()

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      <section className="relative bg-primary-900 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1920&q=80&fit=crop)' }} />
        <div className="absolute inset-0 bg-primary-950/40" />
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" className="fill-stone-50" />
        </svg>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center pt-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">Attractions</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">Explore our attractions.</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Attractions Yet</h2>
              <p className="text-gray-500">
                Attractions will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <AttractionCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
