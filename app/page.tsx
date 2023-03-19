import fetchNews from "../lib/fetchNews"
import { categories } from "../constants"

async function HomePage() {

  const news:NewsResponse = await fetchNews(categories.join(','))

  return (
    <div>

    </div>
  )
}

export default HomePage