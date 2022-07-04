import axios from 'axios'

export const click = async () => {
  await axios.get(`/api/click`)
}