import Content from './components/Content'
import Header from './components/Header'
import Total from './components/Total'

function App() {
  const course = 'Half Stack application development'

  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
      <Header header={course} />
      <Content />
      <Total
        exercise1={exercises1}
        exercise2={exercises2}
        exercise3={exercises3}
      />
    </div>
  )
}

export default App
