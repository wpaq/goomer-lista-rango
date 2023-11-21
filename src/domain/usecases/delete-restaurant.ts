export interface DeleteRestaurant {
  delete: (id: string) => Promise<void>
}
