import './App.css'
import './styles/all.scss'
import Menu from './components/Menu'
import Header from './components/Header'
import About from './components/About'
import Grid from './components/Grid'
import BigTitle from './components/BigTitle'
import Expeditions from './components/Expeditions'
import SmallGrid from './components/SmallGrid'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Reviews from './components/Reviews'

function App() {
	return (
		<>
			<div className='app'>
				<Menu />
				<Header />
				<About />
				<Grid />
				<BigTitle />
				<Expeditions />
				<SmallGrid />
				<Reviews />
				<Contact />
				<Footer />
			</div>
		</>
	)
}

export default App
