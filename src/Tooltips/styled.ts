import styled from 'styled-components'
import { Appearance } from '../types'
import { getCustomClassOverrides } from '../shared/appearance'

export const TooltipContainer = styled.div<{ maxWidth: number; appearance: Appearance }>`
  :not(${(props) => getCustomClassOverrides(props)}) {
    background: ${(props) => props.appearance.theme.colorBackground};
  }
  box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  max-width: ${(props) => props.maxWidth}px;
  min-width: 300px;
  padding: 10px 18px 10px 18px;
  z-index: 100;
`

export const TooltipHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: flex-start;
  margin-bottom: 12px;
  margin-top: 12px;
  margin-right: 12px;
`

export const TooltipTitle = styled.h2<{ appearance }>`
  display: flex;
  margin: 0;
  :not(${(props) => getCustomClassOverrides(props)}) {
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.appearance?.theme?.colorText};
  }
`

export const TooltipSubtitle = styled.p<{}>`
  :not(${(props) => getCustomClassOverrides(props)}) {
    font-size: 16px;
    font-weight: 400;
    color: ${(props) => props.appearance?.theme?.colorText};
  }
`

export const TooltipFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
`

export const TooltipStepCountContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`

export const TooltipCTAContainer = styled.div`
  display: flex;
  flex: 2;
  flex-shrink: 1;
  gap: 8px;
  :not(${(props) => getCustomClassOverrides(props)}) {
    flex-direction: row;
    justify-content: flex-end;
    align-content: center;
  }
`

export const TooltipStepCounter = styled.p`
  :not(${(props) => getCustomClassOverrides(props)}) {
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 22px;
    color: #808080;
  }
  margin: 0;
`
