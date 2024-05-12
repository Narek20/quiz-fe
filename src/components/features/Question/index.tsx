import { FC, useState } from 'react'
import { Box, Checkbox, Radio, RadioGroup, Typography } from '@mui/material'
import { IQuestion } from 'types/quiz.type'

import styles from './styles.module.scss'

const getBackgroundColor = (
  answer: { correctAnswer: number; chosenAnswer: number },
  ind: number
) => {}

interface IProps {
  question: IQuestion
  isReviewing: boolean
  answer?: {
    correctAnswer: number
    chosenAnswer: number
  }
  setAnswer: (
    question: string,
    correctAnswer: number,
    chosenAnswer: number
  ) => void
}

const Question: FC<IProps> = ({ question, isReviewing, answer, setAnswer }) => {
  return (
    <Box className={styles.question}>
      <Typography className={styles.questionText}>
        {question.questionText}
      </Typography>
      <Box className={styles.options}>
        {question.options.map((option, ind) => (
          <Box
            key={option}
            style={
              isReviewing && answer?.correctAnswer === ind + 1
                ? { boxShadow: "2px 2px 2px 1px green"}
                : {
                    boxShadow:
                      answer?.chosenAnswer === ind + 1
                        ? '2px 2px 2px 1px #C67353'
                        : '',
                  }
            }
            className={styles.option}
            onClick={
              isReviewing
                ? undefined
                : () =>
                    setAnswer(
                      question.questionText,
                      ind + 1,
                      question.correctAnswer
                    )
            }
          >
            <Checkbox
              sx={{
                '& svg': {
                  fill: '#C67353',
                },
              }}
              checked={answer?.chosenAnswer === ind + 1}
            />
            <Typography className={styles.text}>{option}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Question
