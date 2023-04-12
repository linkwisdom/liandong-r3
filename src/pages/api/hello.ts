import { NextApiResponse } from 'next';

export default function Hello(req: Request, res: NextApiResponse) {
  res.status(200).json({ name: 'John Doe' });
}
