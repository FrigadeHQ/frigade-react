import React, { useContext } from 'react'
import { FrigadeContext } from '../FrigadeProvider'
import { API_PREFIX, useConfig } from './common'
import { useUserFlowStates } from './user-flow-states'

interface AddPropertyToUserDTO {
  readonly foreignId: string
  readonly properties: { [key: string]: string | boolean | number | null }
}

export function useUser() {
  const { userId, setUserId, setUserProperties, userProperties } = useContext(FrigadeContext)
  const { config } = useConfig()
  const { mutateUserFlowState } = useUserFlowStates()

  async function addPropertiesToUser(properties: {
    [key: string]: string | boolean | number | null
  }) {
    const data: AddPropertyToUserDTO = {
      foreignId: userId,
      properties,
    }
    await fetch(`${API_PREFIX}users`, {
      ...config,
      method: 'POST',
      body: JSON.stringify(data),
    })
    setUserProperties({ ...userProperties, ...properties })
    mutateUserFlowState()
  }

  return { userId, setUserId, addPropertiesToUser }
}
