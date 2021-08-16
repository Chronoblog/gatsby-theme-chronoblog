import Feed from '@chronoblog/feed'
import Menu from '../components/Menu'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Feed />
      <Menu />
    </div>
  )
}