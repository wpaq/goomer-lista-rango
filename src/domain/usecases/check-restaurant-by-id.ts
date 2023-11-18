export interface CheckRestaurantById {
  checkById: (id: string) => Promise<boolean>
}
