import './index.css'

const DenominationItem = props => {
  const {itemList, onDecrease} = props
  const {value} = itemList
  const onChangeValue = () => {
    onDecrease(value)
  }
  return (
    <li className="list-container">
      <button type="button" onClick={onChangeValue} className="button">
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
