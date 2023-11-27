export interface CheckProductById {
  checkById: (id: string) => Promise<boolean>
}
