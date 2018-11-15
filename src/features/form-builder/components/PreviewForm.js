import React from 'react'
import { Header } from 'semantic-ui-react'
import QuestionPreview from './QuestionPreview'

function PreviewForm({ form }) {
  if (!form) return null

  const { title, questions } = form
  return (
    <div className="preview__form-container">
      <Header content={title} />

      {questions.map((q, idx) => (
        <QuestionPreview key={q.id} question={q} queIdx={idx} />
      ))}
    </div>
  )
}

export default PreviewForm
