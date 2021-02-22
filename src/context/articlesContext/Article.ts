export interface Article {
  id: string
  title: string
  body: string
  description: string
  tags: Tag[]
  image: Image
  category: Category
  publishDate: string
  slug: string
}

interface Tag {
  id: number
  name: string
}

interface Image {
  childImageSharp: {
    fluid: {}
  }
}

interface Category {
  id: number
  name: string
}
