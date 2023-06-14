
import { getMethod } from "../../../api/methods"
import RequestButton from "../../ui/RequestButton/RequestButton"

const Get = () => {
  return (
    <RequestButton text="get" request={getMethod} />
  )
}

export default Get
