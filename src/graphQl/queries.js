export const TRENDING_MOVIES = `
query
{
    movies
    {
        trending(first: 10)
        {
            edges
            {
                node
                {
                    id,
                    title,
                    overview,
                    releaseDate,
                    images{
                        backdrops{
                          image(size: W780)
                          
                        },
                        posters
                        {
                          image(size: W154)
                          
                        }
                      }
                }
            }
        }
    }
}
`