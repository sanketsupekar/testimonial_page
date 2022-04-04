import './App.css';
import SlideCard from './components/CardSlider';
import SubHeader from './components/SubHeader';
import TestimonialForm from './components/TestimonialForm';

function App() {
  const user = {
    pictureUrl : "https://randomuser.me/api/portraits/women/72.jpg",
    name : "THEO SOREL",
    position : "DESIGNER",
    about : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cupiditate voluptatibus numquam. Commodi a magnam dolor iure consectetur quas facere !"
  }
  return (
    <>
    <div className='container'>
    <SubHeader title ="TESTIMONIAL PAGE"></SubHeader>
    <SlideCard></SlideCard>
    <SubHeader title ="YOUR EXPERIENCE WITH LMS"></SubHeader>
    <TestimonialForm></TestimonialForm>
    </div>
    
    </>
  );
}

export default App;
