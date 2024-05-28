import './App.css';
import Homepage from './pages/Homepage';
import {Route, Routes} from 'react-router-dom'
import Layout from './Layout';
import GeneralListPage from './pages/GeneralListPage';
import CharacterTypeIndex from './pages/CharacterIndexPage';
import { religionDB, speciesDB, worldDB } from './db/pageitemsdb';
import EntryDetailsWrapper from './components/page-components/EntryDetailsWrapper.js';
import { religionFilters, worldFilters } from './db/filtersdb.js';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>

          <Route index element={<Homepage/>}/>

          <Route path='/world' element={<GeneralListPage db={worldDB} filters={worldFilters} />}/>
          <Route path='/orgs' element={<GeneralListPage/>}/>
          <Route path='/species' element={<GeneralListPage db={speciesDB} />}/>
          <Route path='/religion' element={<GeneralListPage db={religionDB} filters={religionFilters}/>}/>
          <Route path='/ideologies' element={<GeneralListPage/>}/>
          <Route path='/dailylife' element={<GeneralListPage/>}/>
          <Route path='/characters' element={<CharacterTypeIndex/>}/>
          
          <Route path="characters/npcs" element={<GeneralListPage/>}/>
          <Route path="characters/players"/>
          
          <Route path='/world/:id' element={<EntryDetailsWrapper db={worldDB}/>}/>
          <Route path='/religion/:id' element={<EntryDetailsWrapper db={religionDB}/>}/>
          

          </Route>
    </Routes>
  );
}

export default App;
