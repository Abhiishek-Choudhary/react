import './App.css'
import Card from "./components/Card";

function App() {

  return (
     <>
      <div className='bg-green-400 text-black p-4 rounded-xl'>
        Tailwind test
      </div>
      <Card username="Abhishek" btnTxt = "Visit me"/>
      <Card username="Abhinav" btnTxt="Read me" />
     </>
  )
}

export default App
