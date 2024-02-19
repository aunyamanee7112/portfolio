import './App.css'
import GetToKnowME from './components/getToKnowMe'
import Layout from './components/layout'
import MyCertificate from './components/myCert'
import MyExperience from './components/myExperience'
import MyProject from './components/myProject'
import MyStory from './components/myStory'
import ProFile from './components/profile'

function App() {

  return (
    <Layout>
      <ProFile/>
      <MyProject/>
      <MyStory/>
      <MyExperience/>
      <GetToKnowME/>
      <MyCertificate/>
    </Layout>
  )
}

export default App
