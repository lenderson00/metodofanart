import axios from 'axios'
import { token } from "../token"

export const click = () => {
  axios.post(`https://graph.facebook.com/v14.0/1058744178364766/events?access_token=${token}`, {
        "data": [
            {
                "event_name": "InitiateCheckout",
                "event_time": Date.now(),
                "action_source": "website"
            }
        ]
    })
}