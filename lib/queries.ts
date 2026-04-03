// Tagged template that returns the query string
const gql = (strings: TemplateStringsArray, ...values: any[]) => strings.reduce((a, s, i) => a + s + (values[i] || ''), '')

export const GET_ARTICLE_TEASERS = gql`
  query GetArticleTeasers($first: Int = 10) {
    nodeArticles(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created {
          timestamp
        }
        changed {
          timestamp
        }
        ... on NodeArticle {
          body {
            processed
            summary
          }
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_ARTICLE_BY_PATH = gql`
  query GetArticleByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeArticle {
            id
            title
            body {
              processed
            }
            created {
              timestamp
            }
            changed {
              timestamp
            }
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription { processed }
        statsItems {
          ... on ParagraphStatItem {
            id
            number
            label
          }
        }
        featuredItemsTitle
        ctaTitle
        ctaDescription { processed }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            __typename
            id
            title
            body {
              processed
            }
          }
          ... on NodeArticle {
            __typename
            id
            title
            body {
              processed
            }
            created {
              timestamp
            }
            changed {
              timestamp
            }
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
                name
                url
                width
                height
              }
            }
          }
          ... on NodeHomepage {
            __typename
            id
            title
            heroTitle
            heroSubtitle
            heroDescription {
              processed
            }
            featuredItemsTitle
            statsItems {
              ... on ParagraphStatItem {
                id
                number
                label
              }
            }
            ctaTitle
            ctaDescription {
              processed
            }
            ctaPrimary
            ctaSecondary
          }
          ... on NodeProperty {
            __typename
            id
            title
            path
            body { processed summary }
            propertyType { ... on TermPropertyType { name } }
            nightlyRate
            bedrooms
            bathrooms
            maxGuests
            propertyFeatures
            locationArea
            image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
            featured
          }
          ... on NodeAmenity {
            __typename
            id
            title
            path
            body { processed summary }
            amenityCategory { ... on TermAmenityCategory { name } }
            availability
            included
            image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          }
          ... on NodeAttraction {
            __typename
            id
            title
            path
            body { processed summary }
            attractionType { ... on TermAttractionType { name } }
            distance
            address
            image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          }
        }
      }
    }
  }
`

export const GET_PROPERTIES = gql`
  query GetProperties($first: Int = 10) {
    nodeProperties(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeProperty {
          body { processed summary }
          propertyType { ... on TermPropertyType { name } }
          nightlyRate
          bedrooms
          bathrooms
          maxGuests
          propertyFeatures
          locationArea
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          featured
        }
      }
    }
  }
`

export const GET_PROPERTY_BY_PATH = gql`
  query GetPropertyByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeProperty {
            id
            title
            path
            body { processed summary }
            propertyType { ... on TermPropertyType { name } }
            nightlyRate
            bedrooms
            bathrooms
            maxGuests
            propertyFeatures
            locationArea
            image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
            featured
          }
        }
      }
    }
  }
`

export const GET_AMENITIES = gql`
  query GetAmenities($first: Int = 10) {
    nodeAmenities(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeAmenity {
          body { processed summary }
          amenityCategory { ... on TermAmenityCategory { name } }
          availability
          included
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
        }
      }
    }
  }
`

export const GET_AMENITY_BY_PATH = gql`
  query GetAmenityByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeAmenity {
            id
            title
            path
            body { processed summary }
            amenityCategory { ... on TermAmenityCategory { name } }
            availability
            included
            image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          }
        }
      }
    }
  }
`

export const GET_ATTRACTIONS = gql`
  query GetAttractions($first: Int = 10) {
    nodeAttractions(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeAttraction {
          body { processed summary }
          attractionType { ... on TermAttractionType { name } }
          distance
          address
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
        }
      }
    }
  }
`

export const GET_ATTRACTION_BY_PATH = gql`
  query GetAttractionByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeAttraction {
            id
            title
            path
            body { processed summary }
            attractionType { ... on TermAttractionType { name } }
            distance
            address
            image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          }
        }
      }
    }
  }
`
