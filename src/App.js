
import CountDown from './CountDown';

function Header(){
  return (
    <div>
      <h1 className="text-center">Dad To Be, Developer</h1>
      <p className='text-center'>Hi, Welcome to the most exciting journey I have ever embarked on. I am a self taught developer working through my career development, and have twins due in November.</p>
      <br></br>
      <p>The Twins are due : {CountDown()}</p>



    </div>
  )
}


export default Header;