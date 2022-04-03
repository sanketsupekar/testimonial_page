import './App.css';
import SlideCard from './components/CardSlider';
import Header from './components/Header';

function App() {
  const user = {
    pictureUrl : "https://randomuser.me/api/portraits/women/72.jpg",
    name : "THEO SOREL",
    position : "DESIGNER",
    about : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cupiditate voluptatibus numquam. Commodi a magnam dolor iure consectetur quas facere !"
  }
  return (
    <>
    <Header></Header>
    <SlideCard></SlideCard>
    </>
  );
}

export default App;
