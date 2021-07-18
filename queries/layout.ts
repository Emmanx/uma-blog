import { SettingsResponse } from '@tryghost/content-api'
import { api } from '../config/ghost'

export const getNavigation = async () => {
  let settings = await api.settings
    .browse({
      limit: 'all'
    })
    .catch((err) => {
      console.error(err)
    })

  settings = settings as SettingsResponse

  return settings.navigation
}
