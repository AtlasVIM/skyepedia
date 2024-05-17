import './App.css';
import Homepage from './pages/Homepage';
import {Route, Routes} from 'react-router-dom'
import Layout from './Layout';
import GeneralPage from './pages/GeneralPage';
import CreatePage from './pages/CreatePage';
import CharacterTypeIndex from './pages/CharacterIndexPage';
import { religionDB, speciesDB, worldDB } from './db/pageitemsdb';
import WorldDetailsWrapper from './components/page-components/world/WorldDetailsWrapper.js';
import { religionFilters, worldFilters } from './db/filtersdb.js';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>

          <Route index element={<Homepage/>}/>

          <Route path='/world' element={<GeneralPage db={worldDB} filters={worldFilters} />}/>
          <Route path='/orgs' element={<GeneralPage/>}/>
          <Route path='/species' element={<GeneralPage db={speciesDB} />}/>
          <Route path='/religion' element={<GeneralPage db={religionDB} filters={religionFilters}/>}/>
          <Route path='/ideologies' element={<GeneralPage/>}/>
          <Route path='/dailylife' element={<GeneralPage/>}/>
          <Route path='/characters' element={<CharacterTypeIndex/>}/>
          
          <Route path="characters/npcs" element={<GeneralPage/>}/>
          <Route path="characters/players"/>
          
          <Route path='/world/:id' element={<WorldDetailsWrapper/>}/>
          <Route path='/religion/:id' element={<WorldDetailsWrapper/>}/>
          
          <Route path='/create/page' element={<CreatePage/>} />

          </Route>
    </Routes>
  );
}

export default App;
