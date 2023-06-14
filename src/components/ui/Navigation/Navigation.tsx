import { Link } from "react-router-dom"

const headerLinks: string[] = ['get', 'post', 'delete']

const Navigation = () => {
  return (
    <nav>
      <ul>
        {headerLinks.map((item) => (
          <li key={item}>
            <Link to={item}>{item}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
