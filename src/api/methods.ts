import RequestStore from "../store/RequestStore"
import { sendRequest } from "./axios"

export const getMethod = async (loading: React.Dispatch<React.SetStateAction<boolean>>) => {

  try {
    loading(true)

    const requestTime = new Date()
    const url = 'https://httpbin.org/get'
    const response = await sendRequest('get', url)

    RequestStore.increment(requestTime.toLocaleString(), url)
    console.log(response)
    loading(false)
    return response

  } catch (error) {
    console.log(error)
    alert('ошибка')
    loading(false)
  }

}

export const postMethod = async (loading: React.Dispatch<React.SetStateAction<boolean>>) => {

  try {
    loading(true)

    const requestTime = new Date()
    const url = 'https://httpbin.org/post'
    const response = await sendRequest('post', url)

    RequestStore.increment(requestTime.toLocaleString(), url)

    loading(false)
    console.log(response)
    return response

  } catch (error) {
    console.log(error)
    alert('ошибка')
    loading(false)
  }
}

export const deleteMethod = async (loading: React.Dispatch<React.SetStateAction<boolean>>) => {

  try {
    loading(true)

    const requestTime = new Date()
    const url = 'https://httpbin.org/delete'
    const response = await sendRequest('delete', url)

    RequestStore.increment(requestTime.toLocaleString(), url)

    loading(false)
    console.log(response)
    return response

  } catch (error) {
    console.log(error)
    alert('ошибка')
    loading(false)
  }
}
