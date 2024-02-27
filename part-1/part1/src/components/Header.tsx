type IHeader = {
  header: string
}

const Header = ({ header }: IHeader) => {
  return <div>{header}</div>
}

export default Header
