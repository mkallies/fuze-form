import CreateFormContainer from './CreateFormContainer'
import React from 'react'
import { render, fireEvent } from 'react-testing-library'

describe('CreateFormContainer', () => {
  test('should not submit when inputs are empty', () => {
    const { getByText } = render(<CreateFormContainer />)

    const submitBtn = getByText(/save/i)

    expect(submitBtn).toHaveAttribute('disabled')
  })

  test('should be able to submit when inputs have text', () => {
    const {
      getByText,
      queryAllByPlaceholderText,
      getByPlaceholderText
    } = render(<CreateFormContainer />)

    const questionnaireTitle = getByPlaceholderText(/questionnaire/i)
    const submitBtn = getByText(/save/i)
    const optionInputs = queryAllByPlaceholderText('Enter option')
    const questionTitle = getByPlaceholderText('Enter question here')

    expect(optionInputs).toHaveLength(2)

    fireEvent.change(questionnaireTitle, { target: { value: 'My New Form' } })

    fireEvent.change(optionInputs[0], { target: { value: 'Answer A' } })
    fireEvent.change(optionInputs[1], { target: { value: 'Answer B' } })

    fireEvent.change(questionTitle, { target: { value: 'Question one' } })

    expect(submitBtn).not.toHaveAttribute('disabled')
  })
})
