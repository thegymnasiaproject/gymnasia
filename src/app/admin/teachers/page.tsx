import React from 'react'
import Link from 'next/link'

/*async function getData () {
  const res = await fetch(`${process.env.BASE_FETCH_URL}/api/teachers`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}*/

const Page = async () => {
  const teachers: [] = [] // await getData()

  return (

    <main className={''}>
      admin teachers page

      <form action="">
        add a teacher
        <input type="email" name="" id="" />
        <button>send an invite</button>
      </form>

      <section>
        <h3>Teachers</h3>
        <ul>
          {teachers.map((teacher: { id: string, username: string, firstName: string, secondName: string }) => (
            <li
              key={teacher.id}
            >
              <Link
                href={`/admin/teachers/${teacher.username}`}
              >
                {teacher.firstName} {teacher.secondName}
              </Link>
            </li>
          ))
          }
        </ul>
      </section>
    </main>
  )
}

export default Page
