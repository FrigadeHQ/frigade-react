import React from 'react'
import styled from 'styled-components'
import { CustomFormTypeProps, FormInputType } from '../../FrigadeForm/types'
import { getClassName, getCustomClassOverrides } from '../../shared/appearance'

interface CallToActionStepProps {
  data?: FormInputType[]
}

// create flex that wraps if not enoug space
const CallToActionStepContainer = styled.div`
  :not(${(props) => getCustomClassOverrides(props)}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const HeaderTitle = styled.h1`
  :not(${(props) => getCustomClassOverrides(props)}) {
    font-style: normal;
    font-weight: 590;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
  }
`

const HeaderSubtitle = styled.h2`
  :not(${(props) => getCustomClassOverrides(props)}) {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-top: 12px;
    margin-bottom: 16px;
  }
`

export function CallToActionStepType({
  stepData,
  appearance,
  setCanContinue,
}: CustomFormTypeProps) {
  setCanContinue(true)
  return (
    <CallToActionStepContainer className={getClassName('callToActionContainer', appearance)}>
      <HeaderTitle className={getClassName('callToActionTitle', appearance)}>
        {stepData.title}
      </HeaderTitle>
      <HeaderSubtitle className={getClassName('callToActionSubtitle', appearance)}>
        {stepData.subtitle}
      </HeaderSubtitle>
    </CallToActionStepContainer>
  )
}
