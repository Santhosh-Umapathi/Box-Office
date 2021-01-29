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
                  	numberOfRatings,
                  	poster(size: W500),
                    backdrop(size: W300),
                  	rating,
                  	details
                  	{
                      genres
                      {
                        name
                      },
                      runtime
                    },
                  	credits
                    {
                      cast
                      {
                        character,
                        value
                        {
                          name,
                          profilePicture(size:W45)                                               
                        }
                      }
                    }
                }
            }
        }
    }
}
`