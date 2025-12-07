import DoctorReg from "./pages/DoctorReg"
import DoctorFaq from "./pages/DoctorFaq"
import {Routes, Route} from "react-router-dom"
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DoctorReg />} />
      <Route path="/faq" element={<DoctorFaq />} />
    </Routes>
  )
}

export default App