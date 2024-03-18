import { useState } from 'react'

const Form = ({ setVideoURL }) => {
  const [inputVal, setInputVal] = useState(
    'https://www.youtube.com/watch?v=bxmDnn7lrnk&list=PL4cUxeGkcC9gpXORlEHjc5bgnIi5HEGhw'
  )

  const handleSumbit = (e) => {
    e.preventDefault()
    const url = inputVal.trim()
    if (!url.length) {
      return
    }
    setVideoURL(url)
    setInputVal('')
  }
  return (
    <form className="w-full mb-12" onSubmit={handleSumbit}>
      <label htmlFor="url" className="block text-white text-sm font-bold mb-2">
        Youtube URL
      </label>
      <div className="flex items-center">
        <input
          id="url"
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="https://youtu.be/videoid"
          onChange={(e) => setInputVal(e.target.value)}
          value={inputVal}
        />
        <button
          type="sumbit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  )
}
export default Form
