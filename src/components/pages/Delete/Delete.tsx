import { deleteMethod } from "../../../api/methods"
import RequestButton from "../../ui/RequestButton/RequestButton"

const Delete = () => {
  return (
    <RequestButton text="delete" request={deleteMethod} />
  )
}

export default Delete
