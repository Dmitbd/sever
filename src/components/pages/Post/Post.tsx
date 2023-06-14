import { postMethod } from "../../../api/methods"
import RequestButton from "../../ui/RequestButton/RequestButton"

const Post = () => {
  return (
    <RequestButton text="post" request={postMethod} />
  )
}

export default Post
