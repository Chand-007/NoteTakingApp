import { Route,Routes } from "react-router-dom";

import Heading from './component/Heading'
import AddNotes from './component/AddNotes'
import DeleteNotes from './component/DeleteNotes'
import EditNotes from './component/EditNotes'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Heading/>}/>
      <Route path="/notes/create" element={<AddNotes/>}/>
      <Route path="/notes/delete/:id" element={<DeleteNotes/>}/>
      <Route path="/notes/edit/:id" element={<EditNotes/>}/>
    </Routes>
  );
}

export default App;
