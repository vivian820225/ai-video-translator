import { useState } from 'react'
import Form from './components/Form'
import VideoPlayer from './components/VideoPlayer'

function App() {
  const [videoURL, setVideoURL] = useState(null)
  return (
    <main className="h-screen w-full bg-neutral-900 text-neutral-50 font-sans">
      <section className="relative flex flex-col place-content-center min-h-screen mx-auto w-full max-w-screen-lg px-2.5 md:px-20">
        <Form setVideoURL={setVideoURL} />
        <VideoPlayer videoURL={videoURL} />
      </section>
    </main>
  )
}

export default App
