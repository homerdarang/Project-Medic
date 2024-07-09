import { Routes, Route } from 'react-router-dom';

import './App.css';

import Nav from './components/navbar/Nav';
import About from './components/navbar/About';
import Contact from './components/navbar/Contact';
import PageNotFound from './components/PageNotFound';
import Faqs from './components/navbar/Faqs';
import Home from './components/navbar/Home';
import NutritionMonitoring from './components/services_offeed/NutritionMonitoring';
import MentalDevelopment from './components/services_offeed/MentalDevelopment';
import HealthAndWellness from './components/services_offeed/HealthAndWellness';
import SleepConsultation from './components/services_offeed/SleepConsultation';
import ParentingTechniques from './components/services_offeed/ParentingTechniques';
import Donate from './components/Donate';
import PickerCalendar from './components/PickerCalendar';
// import CalendarPicker from './components/CalendarPicker';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Nav />} >
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/faqs' element={<Faqs />} />
          <Route path='/nutrition-monitoring' element={<NutritionMonitoring />} />
          <Route path='/mental-development' element={<MentalDevelopment />} />
          <Route path='/health-wellness' element={<HealthAndWellness />} />
          <Route path='/sleep-consultation' element={<SleepConsultation />} />
          <Route path='/parenting-techniques' element={<ParentingTechniques />} />
          <Route path='/donate' element={<Donate />} />
          {/* <Route path='/book-now' element={<CalendarPicker />} /> */}
          <Route path='/book-now' element={<PickerCalendar />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}
export default App;