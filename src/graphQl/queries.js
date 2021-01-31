import gql from 'graphql-tag';

//Get Trending Movies
export const TRENDING_MOVIES = gql`
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

//Get Selected Movie Details
export const MOVIE_DETAILS = (movieId) => gql`
  query
  {
    movies
    {
      movie(id: ${movieId})
      {
        title,
        overview,
        releaseDate,
        rating,
        poster(size: W500),
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
              profilePicture(size:W185)                                         
            }
          }
        }
      }
    }
  }
`