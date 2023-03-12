import React from 'react'
import { Appearance, StepData } from '../types'

export interface FormInputType {
  id: string
  title?: string
  type: string
  required?: boolean
}

export interface FormInputProps {
  formInput: FormInputType
  customFormTypeProps: CustomFormTypeProps
  onSaveInputData: (data: object) => void
  setFormValidationErrors: (errors: FormValidationError[]) => void
}

export interface FormValidationError {
  message: string
  id: string
}

export interface CustomFormTypeProps {
  stepData: StepData
  /**
   * @deprecated use appearance prop instead
   */
  primaryColor?: string
  canContinue: boolean
  setCanContinue: (canContinue: boolean) => void
  onSaveData: (data: object) => void
  appearance?: Appearance
}

export interface StepContentProps {
  stepData: StepData
  appearance?: Appearance
}
