import { useQuery } from '@tanstack/react-query'
import { createLazyFileRoute } from '@tanstack/react-router'
import { getTorrents } from '../lib/api'

export const Route = createLazyFileRoute('/')({
  component: () => {
    const torrents = useQuery({ queryKey: ["torrents"], queryFn: getTorrents })

    console.log(document.cookie)
    return <div className="bg-black h-full">
      <h1>eee</h1>
    </div>
  }
})
