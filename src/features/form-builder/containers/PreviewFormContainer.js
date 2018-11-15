import React, { Component } from 'react'
import { getItem } from '../../../utils/localStorage'
import { FUZE_FORM_KEY } from '../constants'
import PreviewForm from '../components/PreviewForm'
import FormList from '../components/FormList'

class PreviewFormContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      forms: [],
      selectedForm: ''
    }
  }

  componentDidMount() {
    const forms = getItem(FUZE_FORM_KEY)

    if (!forms) return

    this.setState({ forms })
  }

  setSelectedForm = form => {
    this.setState({ selectedForm: form })
  }

  render() {
    const { forms, selectedForm } = this.state

    return (
      <div className="preview__container">
        <FormList forms={forms} selectForm={this.setSelectedForm} />
        <PreviewForm form={selectedForm} />
      </div>
    )
  }
}

export default PreviewFormContainer
