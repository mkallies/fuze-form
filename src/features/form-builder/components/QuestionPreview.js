import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class QuestionPreview extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { question, queIdx } = this.props
    const { value } = this.state
    const number = queIdx + 1

    return (
      <div className="question__container">
        <label className="question__title">
          {`${number}. ${question.question}`}
        </label>

        <Form className="question__option-container preview">
          {question.options.map((opt, idx) => (
            <Form.Radio
              label={opt}
              key={idx}
              className="question__option"
              value={idx}
              checked={value === idx}
              onChange={this.handleChange}
            />
          ))}
        </Form>
      </div>
    )
  }
}

export default QuestionPreview
