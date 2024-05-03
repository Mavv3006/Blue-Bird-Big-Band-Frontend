import data from '~/server/data.json'
import type { Concert } from '~/types/concert'

export default defineEventHandler((): Concert[] => {
  const resultConcerts: Concert[] = []

  data.forEach((element) => {
    resultConcerts.push({
      id: element.id,
      date: element.date,
      start_time: element.start_time,
      end_time: element.end_time,
      address: {
        street: element.venue_street,
        city: element.venue_name,
        plz: element.venue_plz,
        number: element.venue_street_number,
      },
      band: element.band_name,
      description: {
        venue: element.venue_description,
        event: element.event_description,
      },
    })
  })

  return resultConcerts
})
