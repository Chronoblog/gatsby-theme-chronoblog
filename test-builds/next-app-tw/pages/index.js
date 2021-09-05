import { Test } from '../components/Test'
import { SwitchTest } from '../components/Switch'
import Feed from '@chronoblog/feed'

export default function Page() {
  return <div className="container mx-auto">
    <div className="">
      <Feed />
      <div className="text-blue"><h1>Test Test Test Test Test Test</h1></div>
      <Test />
      <SwitchTest />
    </div>
  </div>
}
