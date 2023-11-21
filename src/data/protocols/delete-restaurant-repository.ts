export interface DeleteRestaurantRepository {
  delete: (id: string) => Promise<void>
}
