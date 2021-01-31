import ApolloClient from 'apollo-boost';


//Apollo Client
export const graphQl = new ApolloClient({
    uri: 'https://tmdb.apps.quintero.io'
});