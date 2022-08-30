// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios, { AxiosRequestConfig } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

// type Response = {
//   success: boolean;
//   message: string;
//   data ?: any;
// }

export default async function handler(
  req: NextApiRequest,
  // res: NextApiResponse<Response>
  res: NextApiResponse
) {
  const config: AxiosRequestConfig = {
    headers: {},
  };

  try {
    const resp = await axios.get(
      `https://tiktok.fullstack.edu.vn/api/videos?type=for-you&page=1&l=5`,
      config
    );
    console.log(22222222, resp.data.data);
    res.status(200).json(resp.data.data);
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ message: "Fail getting data from API" });
  }
}
