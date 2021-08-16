import { instance } from '../config/axios'

export const getNavigation = async () => {
  try {
    const { data } = await instance(`/settings/?key=${process.env.NEXT_PUBLIC_GHOST_KEY}`)
    console.log(data)
    return data.settings.navigation
  } catch (error) {
    console.log({ error })
  }
}
