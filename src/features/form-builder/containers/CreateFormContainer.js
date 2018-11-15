import React, { Component } from 'react'
import { createQuestion } from '../../../utils/helpers'
import Question from '../components/Question'
import { Button, Input, Label } from 'semantic-ui-react'
import { setItem, getItem } from '../../../utils/localStorage'
import { FUZE_FORM_KEY } from '../constants'

function initialState() {
  return {
    title: '',
    questions: [createQuestion()]
  }
}

class CreateFormContainer extends Component {
  constructor(props) {
    super(props)

    this.state = initialState()
  }

  addQuestion = () => {
    this.setState({
      questions: [...this.state.questions, createQuestion()]
    })
  }

  addOption = question => {
    const { questions } = this.state

    const newQuestions = questions.map(q => {
      if (q.id === question.id) {
        return {
          ...question,
          options: [...question.options, '']
        }
      }

      return q
    })

    this.setQuestionState(newQuestions)
  }

  removeOption = (question, idx) => {
    const { questions } = this.state

    const newQuestions = questions.map(q => {
      if (q.id === question.id) {
        return {
          ...question,
          options: question.options.filter((opt, index) => index !== idx)
        }
      }

      return q
    })

    this.setQuestionState(newQuestions)
  }

  setQuestionState = questions => {
    this.setState({ questions })
  }

  handleOptionInput = optInput => {
    const { queIdx, optIdx, value } = optInput

    const question = this.state.questions[queIdx]
    question.options[optIdx] = value

    this.setState({
      questions: this.state.questions
    })
  }

  handleQuestionInput = queInput => {
    const { queIdx, value } = queInput

    const question = this.state.questions[queIdx]
    question.question = value

    this.setState({
      questions: this.state.questions
    })
  }

  handleTitleInput = titleInput => {
    const { value } = titleInput

    this.setState({ title: value })
  }

  handleInput = (type, payload) => {
    switch (type) {
      case 'option':
        this.handleOptionInput(payload)
        break
      case 'questionnaireTitle':
        this.handleTitleInput(payload)
        break
      case 'question':
        this.handleQuestionInput(payload)
        break
      default:
        console.log(`handleInput() - No case for ${type}`)
    }
  }

  saveQuestionnaire = () => {
    const previousForms = getItem(FUZE_FORM_KEY)
    const saveToLocalStorage = previousForms
      ? [...previousForms, this.state]
      : [this.state]

    setItem(FUZE_FORM_KEY, saveToLocalStorage)

    const newState = initialState()

    this.setState(newState)
  }

  hasTitle = title => {
    return Boolean(title)
  }

  hasValidQuestions = questions => {
    for (let que of questions) {
      if (!que.question) {
        return false
      }

      const hasEmptyOption = que.options.includes('')

      if (hasEmptyOption) {
        return false
      }
    }

    return true
  }

  render() {
    const { questions, title } = this.state
    const hasQuestions = questions.length !== 0
    const canSubmit = this.hasTitle(title) && this.hasValidQuestions(questions)

    return (
      <div>
        <div className="form__form-title">
          <Input
            transparent
            type="text"
            value={title}
            placeholder="Questionnaire Title"
            onChange={e =>
              this.handleInput('questionnaireTitle', { value: e.target.value })
            }
          />
        </div>
        {questions.map((q, idx) => (
          <Question
            key={idx}
            queIdx={idx}
            question={q}
            addOption={this.addOption}
            removeOption={this.removeOption}
            handleInput={this.handleInput}
          />
        ))}

        <div className="form__button-group">
          <Button
            size="large"
            primary
            className="form__add-question"
            onClick={this.addQuestion}
          >
            Add question
          </Button>
          {hasQuestions && (
            <Button
              size="large"
              color="green"
              className="form__save"
              onClick={this.saveQuestionnaire}
              disabled={!canSubmit}
            >
              Save Questionnaire
            </Button>
          )}
        </div>
      </div>
    )
  }
}

export default CreateFormContainer
