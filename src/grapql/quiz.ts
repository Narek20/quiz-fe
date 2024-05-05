import { gql } from '@apollo/client'

export const getUserQuizzes = gql`
  query {
    getUserQuizzes {
      id
      name
      description
      questions {
        id
        questionText
        options
        correctAnswer
      }
    }
  }
`

export const getQuiz = gql`
  query GetQuiz($id: Int!) {
    quiz(id: $id) {
      id
      name
      description
      questions {
        id
        questionText
        options
        correctAnswer
      }
    }
  }
`

export const answerQuiz = gql`
  mutation AnswerQuiz(
    $quizId: ID!
    $userName: String!
    $answers: [Int!]!
    $score: Int!
  ) {
    answerQuiz(
      answerInput: {
        quizId: $quizId
        userName: $userName
        answers: $answers
        score: $score
      }
    )
  }
`
