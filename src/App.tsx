import './App.css'
import './styles/all.scss'
import Menu from './components/Menu'
import Header from './components/Header'
import About from './components/About'
import Grid from './components/Grid'
import BigTitle from './components/BigTitle'
import Expeditions from './components/Expeditions'

function App() {
	return (
		<>
			<div className='app'>
				<div className='app-wrapper'>
					<Menu />
					<Header />
					<About />
					<Grid />
					<BigTitle />
					<Expeditions />
				</div>
			</div>
		</>
	)
}

export default App
