type IPart = {
  content: string
  value: number
}

const Part = ({ content, value }: IPart) => {
  return (
    <div>
      {content} {value}
    </div>
  )
}

export default Part
