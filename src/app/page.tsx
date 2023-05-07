import Link from 'next/link'

export default function Home () {
  return (
    <main>
      <h3>Hello, %username%!</h3>

      <section>
        <h3>Your tools for teaching:</h3>
        <ul>
          <li>your courses</li>
          <li>your students</li>
          <li>something else</li>
        </ul>
      </section>
      <section>
        <h3>Your tools for studying:</h3>
        <ul>
          <li>your courses</li>
          <li>your teachers</li>
          <li>something else</li>
        </ul>
      </section>

      <section>
        <h3>admin tools:</h3>
        <ul>
          <li><Link href="/admin/teachers">teachers</Link></li>
          <li>students</li>
          <li>courses</li>
          <li>something else</li>
        </ul>
      </section>
    </main>
  )
}
