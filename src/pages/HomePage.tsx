import FilmsGrid from '../components/HomePage/FilmsGrid/FilmsGrid'
import HomePageLayout from '../components/Layouts/HomePageLayout/HomePageLayout'
import SearchBar from '../components/HomePage/SearchBar/SearchBar'
import logo from '../assets/Logo_MOTB.svg'

export default function HomePage() {
  return (
    <HomePageLayout>
      <img src={logo} alt="" style={{ height: 100, width: '100%' }} />
      <div style={{ width: '50vw' }}><SearchBar /></div>
      <FilmsGrid />
    </HomePageLayout>
  )
}
