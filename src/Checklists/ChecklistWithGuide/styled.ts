import { CSSProperties } from 'react'
import styled from 'styled-components'
import { getCustomClassOverrides } from '../../shared/appearance'

// Styles for top level container and text

export const ContainerStyle: CSSProperties = {
  boxShadow: '0px 6px 25px rgba(0, 0, 0, 0.06)',
  borderRadius: '6px',
  padding: '32px',
  maxHeight: '700px',
  msOverflowStyle: 'none' /* IE and Edge */,
  scrollbarWidth: 'none' /* Firefox */,
  paddingBottom: '12px',
  minHeight: '610px',
}

export const ScrollContainer = styled.div`
  max-height: 350px;
  padding-bottom: 40px;
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`

export const ChecklistTitle = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  margin-bottom: 16px;
`
export const ChecklistSubtitle = styled.h2`
  font-weight: 400;
  color: #8c8c8c;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 16px;
  padding-left: 1px;
`

export const StepsContainer = styled.div`
  :not(${(props) => getCustomClassOverrides(props)}) {
    border: 1px solid #fafafa;
  }
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  min-height: 240px;
  overflow: hidden;
`

export const StepsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const StepsTitle = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
  color: #8c8c8c;
  margin: 20px;
`

export const StepsBody = styled.div`
  display: flex;
  flex-direction: row;
`

export const StepListContainer = styled.div`
  flex: 1;
`

// Styles for Step content

export const StepContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  flex: 1;
`

export const StepTitle = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;

  text-align: center;
  color: #434343;
  margin-top: 20px;
  margin-bottom: 16px;
`

export const StepSubtitle = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #8c8c8c;
  margin: 0;
`;

export const MultipleButtonContainer = styled.div`
  :not(${(props) => getCustomClassOverrides(props)}) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 8px;
  }
`

export const StepListItem = styled.div<{ selected: boolean }>`
  :not(${(props) => getCustomClassOverrides(props)}) {
    // Anything inside this block will be ignored if the user provides a custom class
    background-color: ${(props) => (props.selected ? '#FAFAFA' : '#FFFFFF')};
    :hover {
      background-color: #fafafa;
    }
  }
  //Check if attr disabled is true
  &[disabled] {
    opacity: 0.3;
    cursor: not-allowed;
  }

  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
`

export const StepListStepName = styled.p<{ selected: boolean }>`
  :not(${(props) => getCustomClassOverrides(props)}) {
    // Anything inside this block will be ignored if the user provides a custom class
    color: ${(props) => (props.selected ? '#434343' : '#BFBFBF')};
  }
  font-weight: ${(props) => (props.selected ? 500 : 400)};
  font-size: 14px;
  line-height: 22px;
  margin: 0;
`

export const StepListItemRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-content: center;
`

export const ProgressBarContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
  margin-right: 20px;
`
