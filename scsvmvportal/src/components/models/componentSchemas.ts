// Schema definitions for component props

// EventUpdates
export type EventItem = {
  title: string
  time: string
  status: 'approved' | 'rejected' | 'pending'
}

export interface EventUpdatesProps {
  events: EventItem[]
  date?: string
}

// AttendanceReport
export type AttendanceReportProps = {
  chartData: {
    labels: string[]
    datasets: {
      label: string
      data: number[]
      backgroundColor?: string | string[]
      borderColor?: string | string[]
      borderWidth?: number
    }[]
  }
}

// LeavesTaken
export type LeavesTakenProps = {
  chartData: {
    labels: string[]
    datasets: {
      data: number[]
      backgroundColor?: string[]
      borderColor?: string[]
      borderWidth?: number
    }[]
  }
}
