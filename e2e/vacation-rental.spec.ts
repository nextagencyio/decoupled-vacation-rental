import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('renders hero content from Drupal', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1')).toContainText(/Coastal|Beach|Getaway/i)
  })

  test('renders stats section', async ({ page }) => {
    await page.goto('/')
    const statsSection = page.locator('text=Highlights')
    await expect(statsSection).toBeVisible()
  })

  test('has navigation links', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('nav a[href="/properties"]').first()).toBeVisible()
    await expect(page.locator('nav a[href="/amenities"]').first()).toBeVisible()
    await expect(page.locator('nav a[href="/attractions"]').first()).toBeVisible()
  })
})

test.describe('Properties', () => {
  test('listing page shows property cards', async ({ page }) => {
    await page.goto('/properties')
    await expect(page.locator('h1')).toContainText('Properties')
    const cards = page.locator('a[href^="/properties/"]')
    await expect(cards.first()).toBeVisible()
  })

  test('detail page renders property', async ({ page }) => {
    await page.goto('/properties/sunset-villa')
    await expect(page.locator('h1')).toContainText('Sunset Villa')
  })
})

test.describe('Amenities', () => {
  test('listing page shows amenity cards', async ({ page }) => {
    await page.goto('/amenities')
    await expect(page.locator('h1')).toContainText('Amenities')
    const cards = page.locator('a[href^="/amenities/"]')
    await expect(cards.first()).toBeVisible()
  })

  test('detail page renders amenity', async ({ page }) => {
    await page.goto('/amenities/community-pool')
    await expect(page.locator('h1')).toContainText('Community Pool')
  })
})

test.describe('Attractions', () => {
  test('listing page shows attraction cards', async ({ page }) => {
    await page.goto('/attractions')
    await expect(page.locator('h1')).toContainText('Attractions')
    const cards = page.locator('a[href^="/attractions/"]')
    await expect(cards.first()).toBeVisible()
  })

  test('detail page renders attraction', async ({ page }) => {
    await page.goto('/attractions/sunset-beach')
    await expect(page.locator('h1')).toContainText('Sunset Beach')
  })
})

test.describe('Static pages', () => {
  test('about page renders', async ({ page }) => {
    await page.goto('/about')
    await expect(page.locator('text=Page Not Found')).not.toBeVisible()
  })
})
