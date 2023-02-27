import React from "react"
import  { ChecklistWithGuide } from ".."
import { render, screen, fireEvent } from '@testing-library/react'
import { StepData } from "../../../types"

describe('ChecklistWithGuide', () => { 

  afterEach(() => {
    jest.resetAllMocks()
  })

  const stepData: StepData = {
    id: 'project',
    title: 'Create a project',
    stepName: 'Create a project',
    subtitle: 'Go back to home page',
    primaryButtonUri: '/',
    primaryButtonUriTarget: '_self',
    primaryButtonTitle: 'Get Started',
    secondaryButtonTitle: 'Do Later',
    complete: false,
    handlePrimaryButtonClick: jest.fn(),
    handleSecondaryButtonClick: jest.fn(),
  }

  const testProps = {
    title: 'Test Checklist',
    subtitle: 'Test Checklist subtitle',
    visible: true,
    stepsTitle: 'Custom steps title for guide checklist',
    onClose: jest.fn(),
    steps: [ stepData ]
  }

  test('renders', () => {
    render(<ChecklistWithGuide {...testProps} />)
    expect(screen.getByText(testProps.stepsTitle)).toBeDefined()
  })

  test('handles primary button click', () => {
    render(<ChecklistWithGuide {...testProps} />)
    fireEvent.click(screen.getByText(stepData.primaryButtonTitle as string))
    expect(stepData.handlePrimaryButtonClick).toHaveBeenCalledTimes(1)
  })

  test('handles secondary click', () => {
    render(<ChecklistWithGuide {...testProps} />)
    fireEvent.click(screen.getByText(stepData.secondaryButtonTitle as string))
    expect(stepData.handleSecondaryButtonClick).toHaveBeenCalledTimes(1)
  })
})