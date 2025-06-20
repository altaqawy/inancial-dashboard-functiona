"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, Video } from "lucide-react"

const upcomingMeetings = [
  {
    id: 1,
    title: "Weekly Team Standup",
    time: "10:00 AM - 11:00 AM",
    date: "Today",
    participants: 8,
    type: "recurring",
    status: "upcoming",
  },
  {
    id: 2,
    title: "Client Presentation",
    time: "2:00 PM - 3:30 PM",
    date: "Tomorrow",
    participants: 5,
    type: "one-time",
    status: "upcoming",
  },
  {
    id: 3,
    title: "Project Review",
    time: "9:00 AM - 10:00 AM",
    date: "Jul 25",
    participants: 6,
    type: "one-time",
    status: "scheduled",
  },
]

const recentMeetings = [
  {
    id: 1,
    title: "Budget Planning",
    duration: "45 min",
    date: "Yesterday",
    participants: 4,
    recording: true,
  },
  {
    id: 2,
    title: "Marketing Strategy",
    duration: "1h 20min",
    date: "Jul 18",
    participants: 7,
    recording: false,
  },
]

export default function MeetingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Meetings</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Schedule
          </Button>
          <Button>
            <Video className="mr-2 h-4 w-4" />
            Start Meeting
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Meetings</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Hours</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24h</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Participants</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Upcoming Meetings */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Meetings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingMeetings.map((meeting) => (
              <div key={meeting.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <h3 className="font-medium">{meeting.title}</h3>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      {meeting.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="mr-1 h-3 w-3" />
                      {meeting.time}
                    </span>
                    <span className="flex items-center">
                      <Users className="mr-1 h-3 w-3" />
                      {meeting.participants}
                    </span>
                  </div>
                  <div className="mt-2">
                    <Badge variant={meeting.type === "recurring" ? "default" : "secondary"}>{meeting.type}</Badge>
                  </div>
                </div>
                <Button size="sm">
                  <Video className="mr-2 h-4 w-4" />
                  Join
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Meetings */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Meetings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentMeetings.map((meeting) => (
              <div key={meeting.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <h3 className="font-medium">{meeting.title}</h3>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span>{meeting.date}</span>
                    <span>{meeting.duration}</span>
                    <span>{meeting.participants} participants</span>
                  </div>
                  {meeting.recording && (
                    <Badge variant="outline" className="mt-2">
                      Recorded
                    </Badge>
                  )}
                </div>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
