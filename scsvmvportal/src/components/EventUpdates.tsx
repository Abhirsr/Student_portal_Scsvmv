'use client'

type EventItem = {
  title: string
  time: string
  status: 'approved' | 'rejected' | 'pending' // 🔁 scalable
}

interface EventUpdatesProps {
  events: EventItem[]
  date?: string
}

const statusColor = {
  approved: 'text-green-600',
  rejected: 'text-red-600',
  pending: 'text-yellow-600',
}

const EventUpdates = ({ events, date }: EventUpdatesProps) => {
  return (
    <div className="p-4 rounded-lg border w-full max-w-sm bg-blue-50 shadow">
      <h2 className="text-xl font-bold mb-4 text-blue-900">
        {date || 'Event Updates'}
      </h2>
      <div className="space-y-4">
        {events.length === 0 ? (
          <div className="text-sm text-gray-500">No events found.</div>
        ) : (
          events.map((event, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center text-sm"
            >
              <div>
                <div className="font-semibold text-blue-900">
                  {event.title}
                </div>
                <div className="text-gray-600">{event.time}</div>
              </div>
              <div className={`text-xl ${statusColor[event.status]}`}>→</div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default EventUpdates
