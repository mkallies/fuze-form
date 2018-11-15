import React, { Component } from 'react'
import CreateFormContainer from './CreateFormContainer'
import PreviewFormContainer from './PreviewFormContainer'
import Sidebar from '../components/Sidebar'
import '../form-builder.css'

const possibleViews = {
  create: CreateFormContainer,
  preview: PreviewFormContainer
}

export class FormContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentView: null
    }
  }

  handleView = (e, { name }) => {
    this.setState({
      currentView: name
    })
  }

  render() {
    const { currentView } = this.state
    const ElementToRender = possibleViews[currentView]

    return (
      <div className="form__container">
        <Sidebar handleView={this.handleView} activeItem={currentView} />

        <div className="form__right-side">
          {ElementToRender && <ElementToRender />}
        </div>
      </div>
    )
  }
}

export default FormContainer
