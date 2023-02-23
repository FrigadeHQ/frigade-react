import { CSSProperties } from 'react'

export interface StepData {
  id: string
  stepName?: string
  title?: string
  subtitle?: string
  primaryButtonTitle?: string
  primaryButtonUri?: string
  primaryButtonUriTarget?: string
  secondaryButtonTitle?: string
  secondaryButtonUri?: string
  secondaryButtonUriTarget?: string
  url?: string
  urlTarget?: string
  type?: string
  videoUri?: string
  imageUri?: string | null
  autoMarkCompleted?: boolean
  complete: boolean
  StepContent?: React.ReactNode
  handleCTAClick?: () => void
  handleSecondaryCTAClick?: () => void
  ctaActionType?: 'complete'
  imageStyle?: CSSProperties
  props?: any
  completionCriteria?: string
}

export interface CustomFormTypeProps {
  stepData: StepData
  primaryColor?: string
}
