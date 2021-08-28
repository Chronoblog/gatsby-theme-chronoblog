import { TabTest } from '../components/Tab'
import { Test } from '../components/Test'
import Feed from '@chronoblog/feed'

export default function Page() {
  return <div>
    <Feed />
    <div className="text-blue"><h1>Test Test Test Test Test Test</h1></div>
    <TabTest />
    <Test />
  </div>
}
