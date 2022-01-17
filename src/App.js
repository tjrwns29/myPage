import './App.css';
import moment from 'moment';
import 'moment/locale/ko';

function App() {
  // NowTime
  const NowTime = moment().format('YYYY년 MM월 DD일 HH : mm : ss')
  //
  return (
    <div className="App">
      <div className="bgcr"></div> {/*BackGround Color*/}
      <span className="NowTime">{NowTime}</span> {/* MowTime */}
      <a href="./index.html" className="Header">Mechanical Engineering 21s</a> {/* Title */}
    </div>
  );
}

export default App;