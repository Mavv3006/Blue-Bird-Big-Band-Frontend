export type Concert = {
  id: number
  date: string
  start_time: string
  end_time: string
  address: {
    street: string
    city: string
    plz: number
    number: string
  }
  band: string
  description: {
    event: string
    venue: string
  }
}
