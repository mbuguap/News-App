import { gql } from 'graphql-request';

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDyanamic?: boolean
) => {
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myquery(
        access_key: $access_key
        categories: $categories
        countries: 'ke'
        sort: 'published_desc'
        keywords: $keywords
      ) {
        data {
          author
          category
          image
          description
          country
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;

  const res = await fetch('https://qufu.stepzen.neasal-butterfly/__graphql', {
    method: 'POST',
    cache: isDyanamic ? 'no-cache' : 'default',
    next: isDyanamic ? { revalidate: 0 } : { revalidate: 20 },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
    },
    body: JSON.stringify({
      query,
      variables: {
        access_key: process.env.MEDIASTACK_API_KEY,
        categories: category,
        keywords: keywords,
      },
    }),
  });

  console.log(category, keywords)

  const newsResponse = await res.json()

  //stepzen import curl "http://api.mediastack.com/v1/news?access_key=266bb383e98c909f6b7ac76ff7742fd4"
};

export default fetchNews;
