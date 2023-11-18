export interface CheckRestaurantByIdRepository {
  checkById: (id: string) => Promise<boolean>
}
