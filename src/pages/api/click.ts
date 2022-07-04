import { NextApiRequest, NextApiResponse } from "next";
import { click } from "../../components/event";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  click()
}