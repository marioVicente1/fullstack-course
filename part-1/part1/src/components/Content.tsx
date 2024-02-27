import Part from './Part'

const Content = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Part content={part1} value={exercises1} />
      <Part content={part2} value={exercises2} />
      <Part content={part3} value={exercises3} />
    </div>
  )
}

export default Content
