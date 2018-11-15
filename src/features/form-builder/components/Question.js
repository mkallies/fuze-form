import React from 'react'
import { Button, Input } from 'semantic-ui-react'

function Question({ handleInput, queIdx, question, addOption, removeOption }) {
  const showRemove = question.options.length > 2
  const showAddOption = question.options.length <= 3
  const number = queIdx + 1

  return (
    <div className="question__container">
      <label className="question__title">
        {`${number}.`}
        <Input
          transparent
          type="text"
          className="question__title__input"
          name="question"
          placeholder="Enter question here"
          value={question.question}
          onChange={e =>
            handleInput('question', {
              value: e.target.value,
              queIdx
            })
          }
        />
      </label>

      <div className="question__option-container">
        {question.options.map((opt, idx) => {
          return (
            <div key={idx} className="question__option">
              <Input
                type="text"
                placeholder="Enter option"
                value={opt}
                onChange={e =>
                  handleInput('option', {
                    value: e.target.value,
                    queIdx,
                    optIdx: idx
                  })
                }
              />
              {showRemove && (
                <Button
                  circular
                  icon="close"
                  onClick={() => removeOption(question, idx)}
                />
              )}
            </div>
          )
        })}
      </div>

      {showAddOption && (
        <Button
          className="question__add-option"
          onClick={() => addOption(question)}
        >
          Add option
        </Button>
      )}
    </div>
  )
}

export default Question
