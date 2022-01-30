import { gql } from '@apollo/client';

export const PULL_ME = gql`
    {
        me {
            _id
            username
            email
            bookCount
            savedBooks {
                image
                link
                title
                authors
                bookId
            }
        }
    }
`;
