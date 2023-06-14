import { useState } from "react"
import { AxiosResponse } from 'axios'

type RequestButtonProps = {
  text: string
  request: (loading: React.Dispatch<React.SetStateAction<boolean>>) => Promise<AxiosResponse<any, any> | undefined>
}

const RequestButton = ({
  text,
  request
}: RequestButtonProps) => {

  const [isLoader, setLoader] = useState<boolean>(false)

  return (
    <>
      {
        isLoader
          ? 'Loading'
          : <button onClick={request.bind(this, setLoader)}>
            <p>Выполнить {text} запрос</p>
          </button>
      }
    </>

  )
}

export default RequestButton
