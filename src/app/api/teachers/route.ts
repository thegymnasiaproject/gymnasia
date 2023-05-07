import { NextResponse } from 'next/server'

export async function GET (request: Request) {
  return NextResponse.json({
    data: [
      {
        id: 0,
        username: 'murad',
        firstName: 'Murad',
        secondName: 'Ali',
      },
      {
        id: 1,
        username: 'alexbaumgertner',
        email: 'alex.baumgertner@gnail.com',
        firstName: 'Alex',
        secondName: 'Baumgertner'
      },
    ],
  })
}
