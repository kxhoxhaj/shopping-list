import React from 'react'
import ItemList from './ItemList';

const Content = ({items, handleCheck, handleDelete}) => {
  // const [greating , setGreating] = useState('Hello, and welcome!😄')
  // const [count , setCount] = useState(0);

  // const handleGreating = () => {
  //   const greatings = ['Hello, and welcome!😃', 'Goood to see you again!🙂', 'Oh my god, not you again!😠']
  //   const int = Math.floor(Math.random() * 3)
  //   setGreating(greatings[int])
  // }

  // const handleCount = () => {
  //   setCount(count + 1)
  //   console.log(count);
  // }

  // let value = ''
  // if (count === 1) {
  //   value = 'time'
  // } else {
  //   value = 'times'
  // }

  return (
    <main>
      {items.length ? (
        <ItemList
          items = {items}
          handleCheck = {handleCheck}
          handleDelete = {handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}> Your list is empty</p>
      )}
      {/* <p>{greating}</p>
      <button onClick={handleGreating}>
        Change Greating
      </button>
      <button onClick={handleCount}>
        Count
      </button>
      <p>You have clicked {count} {value}
      </p> */}
    </main>
  )
}

export default Content
