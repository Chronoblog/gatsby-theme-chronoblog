import { Test } from '../components/Test'
import { SwitchTest } from '../components/Switch'
import { Feed, Card } from '@chronoblog/feed'

const MockCardsData = [
  {
    title: 'Some Card 1',
  },
  {
    title: 'Some Card 2',
  },
  {
    title: 'Some Card 3',
  },
];

export default function Page() {
  return (
    <div className="bg-blue bg-opacity-5">
      <div className="container mx-auto">
        <Feed>{MockCardsData.map(card => <Card className='min-h-screen bg-gray-100 flex items-center overflow-hidden py-20' title={card.title} />)}</Feed>
      </div>
    </div>
  )
}
