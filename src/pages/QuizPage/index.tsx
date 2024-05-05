import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Box, Button, Typography } from '@mui/material'
import Question from '@features/Question'
import { getSingleQuiz } from 'services/quizzes.service'
import { IQuestion, IQuiz } from 'types/quiz.type'

import styles from './styles.module.scss'

const getScoreColor = (score: { answered: number; total: number }) => {
  if (score.answered / score.total === 1) {
    return { text: 'Great Job!', color: 'green' }
  } else if (
    score.answered / score.total < 1 &&
    score.answered / score.total > 0.4
  ) {
    return { text: 'Not Bad!', color: 'orange' }
  } else {
    return { text: 'Bad', color: 'gray' }
  }
}

const QuizPage = () => {
  const [step, setStep] = useState(1)
  const [score, setScore] = useState({ answered: 0, total: 0 })
  const [isComplete, setIsComplete] = useState(false)
  const [data, setData] = useState<IQuiz | null>(null)
  const [isReviewing, setIsReviewing] = useState(false)
  const [question, setQuestion] = useState<IQuestion | undefined>()
  const [answers, setAnswers] = useState<{
    [key: string]: { correctAnswer: number; chosenAnswer: number }
  }>({})

  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()

  const handleComplete = async () => {
    if (data) {
      const answered = Object.values(answers).filter(
        (answer) => answer.chosenAnswer === answer.correctAnswer
      ).length
      const total = data.questions.length

      setIsComplete(true)
      setScore({ answered, total })
    }
  }

  const handleReview = () => {
    setIsReviewing(true)
    setIsComplete(false)
    setStep(1)
  }

  const getQuiz = async () => {
    if (id) {
      const data = await getSingleQuiz(+id)

      if (data.data) {
        setData(data.data)
      }
    }
  }

  useEffect(() => {
    getQuiz()
  }, [])

  useEffect(() => {
    if (data) {
      setQuestion(data.questions[step - 1])
    }
  }, [data, step])

  return (
    data && (
      <Box className={styles.quizPage}>
        <Box className={styles.header}>
          <Typography className={styles.quizName}>{data.name}</Typography>
          <Typography className={styles.quizDescription}>
            {data.description}
          </Typography>
        </Box>
        {question && !isComplete && (
          <Question
            isReviewing={isReviewing}
            question={question}
            answer={answers[question.questionText]}
            setAnswer={(question, chosenAnswer, correctAnswer) =>
              setAnswers({
                ...answers,
                [question]: { correctAnswer, chosenAnswer },
              })
            }
          />
        )}
        {isComplete && (
          <Box className={styles.scoreContainer}>
            <Typography
              className={styles.grade}
              style={{ color: getScoreColor(score).color }}
            >
              {getScoreColor(score).text}
            </Typography>
            <Typography
              className={styles.score}
              style={{ color: getScoreColor(score).color }}
            >
              You scored {score.answered}/{score.total}
            </Typography>
          </Box>
        )}
        <Box className={styles.footer}>
          <Typography className={styles.questionNum}>
            Question {step}/{data.questions.length}
          </Typography>
          <Box className={styles.buttons}>
            {!isComplete && (
              <>
                <Button
                  className={styles.prev}
                  variant="outlined"
                  disabled={step === 1}
                  onClick={() => setStep((prev) => prev - 1)}
                >
                  Previous
                </Button>
                {step !== data.questions.length && (
                  <Button
                    variant="outlined"
                    className={styles.next}
                    onClick={() => setStep((prev) => prev + 1)}
                  >
                    Next
                  </Button>
                )}
                {step === data.questions.length && !isReviewing && (
                  <Button className={styles.complete} onClick={handleComplete}>
                    Complete
                  </Button>
                )}
                {step === data.questions.length && isReviewing && (
                  <Button
                    className={styles.complete}
                    onClick={() => navigate('/')}
                  >
                    Dashboard
                  </Button>
                )}
              </>
            )}
            {isComplete && (
              <Button className={styles.prev} onClick={handleReview}>
                Review
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    )
  )
}

export default QuizPage
