"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send, Phone, Video, MoreVertical } from "lucide-react"

const contacts = [
  { id: 1, name: "Alice Johnson", status: "online", lastMessage: "Thanks for the help!", time: "2m ago" },
  { id: 2, name: "Bob Smith", status: "offline", lastMessage: "See you tomorrow", time: "1h ago" },
  { id: 3, name: "Charlie Brown", status: "online", lastMessage: "Great work on the project", time: "3h ago" },
]

const messages = [
  { id: 1, sender: "Alice Johnson", content: "Hi there! How are you?", time: "10:30 AM", isOwn: false },
  { id: 2, sender: "You", content: "I'm doing great, thanks! How about you?", time: "10:32 AM", isOwn: true },
  { id: 3, sender: "Alice Johnson", content: "I'm good too. Thanks for asking!", time: "10:33 AM", isOwn: false },
]

export default function ChatPage() {
  const [selectedContact, setSelectedContact] = useState(contacts[0])
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add message logic here
      setNewMessage("")
    }
  }

  return (
    <div className="flex h-[calc(100vh-8rem)] gap-4">
      {/* Contacts Sidebar */}
      <Card className="w-80 flex flex-col">
        <CardHeader>
          <CardTitle>Messages</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 p-0">
          <div className="space-y-2 p-4">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className={`flex items-center p-3 rounded-lg cursor-pointer hover:bg-muted ${
                  selectedContact.id === contact.id ? "bg-muted" : ""
                }`}
                onClick={() => setSelectedContact(contact)}
              >
                <Avatar className="h-10 w-10">
                  <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                  <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="ml-3 flex-1">
                  <div className="flex justify-between items-center">
                    <p className="font-medium">{contact.name}</p>
                    <span className="text-xs text-muted-foreground">{contact.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{contact.lastMessage}</p>
                </div>
                <div
                  className={`w-2 h-2 rounded-full ${contact.status === "online" ? "bg-green-500" : "bg-gray-300"}`}
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Chat Area */}
      <Card className="flex-1 flex flex-col">
        {/* Chat Header */}
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Avatar className="h-10 w-10">
                <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                <AvatarFallback>{selectedContact.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <p className="font-medium">{selectedContact.name}</p>
                <p className="text-sm text-muted-foreground">{selectedContact.status}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Video className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {/* Messages */}
        <CardContent className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.isOwn ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p className="text-xs opacity-70 mt-1">{message.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>

        {/* Message Input */}
        <div className="border-t p-4">
          <div className="flex gap-2">
            <Input
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <Button onClick={handleSendMessage}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
