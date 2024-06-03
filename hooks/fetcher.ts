import axios, { AxiosRequestConfig } from "axios";

export interface IApiRequest {
  method?: "get" | "post" | "put" | "delete" | undefined;
  url: string;
  headers?: object | undefined;
  body?: any | undefined;
  withAuthToken?: boolean;
}

export async function fetcher({ ...props }: IApiRequest): Promise<any> {
  //const { TOKEN } = process.env
  const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTU5ODk5MWNlNWM1OWRmOGNkNmQxM2Q5ZDExYWVmZSIsInN1YiI6IjY2M2QzZDY1ZTBkNDdhNjc3YzMwMDA5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R1jwKkNDtT9AA5Prgakr2ty4KHH1qINXYs4pkOU3JxI"

  const options: AxiosRequestConfig = {
    method: props.method,
    baseURL: "https://api.themoviedb.org/3",
    url: props.url,
    headers: {
      "Content-Type": "application/json",
      //"Access-Control-Allow-Origin": "*",
      "Authorization": `Bearer ${TOKEN}`,
      ...props.headers
    },
    data: props.body
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw error;
  }
}
