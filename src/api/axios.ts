import axios, { AxiosResponse, Method } from 'axios'

type RequestType = 'get' | 'post' | 'delete'

export const sendRequest = async (
  method: RequestType,
  url: string,
  data?: any
): Promise<AxiosResponse> => {

  try {
    const response = await axios({
      method: method as Method,
      url: url,
      data: data,
    })

    return response
  } catch (error) {
    // Обработка ошибки
    throw error
  }
}
