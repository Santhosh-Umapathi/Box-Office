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
          releaseDate,
          poster(size: W500),
          details
          {
            genres
            {
              name
            },
            runtime
          }
        }
      }
    }
  }
}
`


export const MOVIE_DETAILS = (movieId) => `
query
{
  movies
  {
    movie(id: ${movieId})
    {
      title,
      overview,
      releaseDate,
      numberOfRatings,
      poster(size: W185),
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
`