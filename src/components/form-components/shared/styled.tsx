import styled from 'styled-components'
import { getCustomClasOverrides } from '../../../shared/appearance'

export const FormLabel = styled.label`
  :not(${(props) => getCustomClasOverrides(props)}) {
    color: #434343;
    font-size: 12px;
    line-height: 20px;
  }
  display: flex;
`

export const RequiredSymbol = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #f5222d;
  display: flex;
  margin-right: 5px;
`

export const LabelWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: left;
  margin-bottom: 10px;
`
