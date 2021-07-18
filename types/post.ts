export type TPost = {
  created_at: string
  custom_excerpt: string
  excerpt: string
  feature_image: string
  featured: boolean
  frontmatter: null
  html: string
  id: string
  published_at: string
  reading_time: 2
  slug: string
  title: string
  twitter_description: null
  updated_at: string
  uuid: string
  tags: TTag[]
  authors: TAuthor[]
  primary_tag: TTag
  primary_author: TAuthor
}

export type TTag = {
  id: string
  name: string
  slug: string
  description: string | null
  feature_image: string | null
}

export type TAuthor = {
  slug: string
  id: string
  name: string
  profile_image: string
  bio: string
  website: string
  location: string
  facebook: string
}

export type TPagination = {
  page: number
  limit: number
  pages: number
  total: number
  next: number | null
  prev: number | null
}
