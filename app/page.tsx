import fetchNews from '../lib/fetchNews';
import { categories } from '../constants';
import NewsList from './NewsList';
import response from '../response.json';

async function HomePage() {
  const news: NewsResponse =
    // response || 
    (await fetchNews(categories.join(',')));
  // console.log(news);

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}

export default HomePage;
