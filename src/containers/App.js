import Header from '../components/Header';
import StepOne from '../components/StepOne';
import StepThree from '../components/StepThree';

function App() {
  const path = window.location.href;
  const phoneNumber = path.slice(path.indexOf('t=') + 2, path.indexOf('t=') + 3) === 's' ? '+5491156014822' : '+5491156014822';

  localStorage.setItem('tel', phoneNumber)
  return (
    <> 
    <Header></Header>
    <StepOne></StepOne>
    <StepThree></StepThree>
    </>
  );
}

export default App;
