import { Route, Routes } from "react-router-dom"
import Navigation from "./components/ui/Navigation/Navigation"
import RequestsContainer from "./components/ui/RequestsContainer/RequestsContainer"
import Home from "./components/pages/Home/Home"
import Get from "./components/pages/Get/Get"
import Post from "./components/pages/Post/Post"
import Delete from "./components/pages/Delete/Delete"

const App = () => {

  return (
    <div style={{ margin: '0 auto', width: '300px' }}>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get" element={<Get />} />
        <Route path="/post" element={<Post />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>

      <RequestsContainer />
    </div>
  )
}

export default App
