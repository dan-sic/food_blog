import { Image } from "../shared/models"

export interface Category {
  strapiId: number
  name: string
  description: string
  categoryImage: Image
}
