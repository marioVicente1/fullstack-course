type ITotal = {
  exercise1: number
  exercise2: number
  exercise3: number
}

const Total = ({ exercise1, exercise2, exercise3 }: ITotal) => {
  return <div> number of exercises {exercise1 + exercise2 + exercise3}</div>
}

export default Total
