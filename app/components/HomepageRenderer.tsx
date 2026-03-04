'use client'

import Link from 'next/link'
import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { Home, Waves, Compass } from 'lucide-react'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const highlights = [
  { icon: Home, title: 'Handpicked Homes', description: 'Comfortable, design-forward properties across top destinations.' },
  { icon: Waves, title: 'Beachside Access', description: 'Stay steps away from the shoreline and coastal activities.' },
  { icon: Compass, title: 'Local Guidance', description: 'Insider recommendations for dining, outings, and hidden gems.' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>
      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mb-4">Your Coastal Escape</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Relaxed stays with premium amenities and effortless booking.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-700" />
                  </div>
                  <h3 className="font-display text-xl text-primary-900 font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      <footer className="bg-primary-950 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-display font-bold text-accent-400 mb-4">Coastal Getaways</h3>
              <p className="text-gray-400 mb-4">Handpicked vacation homes steps from the shore along the Gulf Coast.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/properties" className="hover:text-accent-400 transition-colors">Properties</Link></li>
                <li><Link href="/amenities" className="hover:text-accent-400 transition-colors">Amenities</Link></li>
                <li><Link href="/attractions" className="hover:text-accent-400 transition-colors">Attractions</Link></li>
                <li><Link href="/about" className="hover:text-accent-400 transition-colors">About</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>200 Gulf Shore Drive</li>
                <li>Gulf Shores, FL 32459</li>
                <li>hello@coastalgetaways.com</li>
                <li>(850) 555-0120</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-900 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Coastal Getaways. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
