import React from 'react'
import { List, Header } from 'semantic-ui-react'

function FormList({ forms, selectForm }) {
  console.log('forms', forms)
  return (
    <div className="preview__form-list">
      <Header content="Forms" />
      {forms.length ? (
        <List
          celled
          selection
          animated
          size="big"
          className="preview__list-container"
        >
          {forms.map((form, idx) => {
            return (
              <List.Item key={idx} onClick={() => selectForm(form)}>
                {form.title}
              </List.Item>
            )
          })}
        </List>
      ) : (
        <div>No forms to display</div>
      )}
    </div>
  )
}

export default FormList
