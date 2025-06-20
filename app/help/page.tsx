"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, MessageCircle, Book, Phone, Mail, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "How do I reset my password?",
    answer:
      "You can reset your password by clicking on the 'Forgot Password' link on the login page. Follow the instructions sent to your email.",
  },
  {
    question: "How do I add a new payment method?",
    answer:
      "Go to Settings > Payment Methods and click 'Add New Method'. You can add credit cards, bank accounts, or digital wallets.",
  },
  {
    question: "Can I export my transaction data?",
    answer:
      "Yes, you can export your transaction data from the Transactions page by clicking the 'Export' button. Choose your preferred format (CSV, PDF, Excel).",
  },
  {
    question: "How do I set up notifications?",
    answer:
      "Navigate to Settings > Notifications to customize your notification preferences. You can choose email, push, or SMS notifications.",
  },
  {
    question: "Is my financial data secure?",
    answer:
      "Yes, we use bank-level encryption and security measures to protect your data. All transactions are secured with SSL encryption.",
  },
]

export default function HelpPage() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Help & Support</h1>
        <p className="text-muted-foreground">Find answers to your questions or get in touch with our support team</p>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search for help articles, FAQs, or guides..." className="pl-10" />
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-6 text-center">
            <Book className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">User Guide</h3>
            <p className="text-sm text-muted-foreground">Complete documentation</p>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-6 text-center">
            <MessageCircle className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">Live Chat</h3>
            <p className="text-sm text-muted-foreground">Chat with support</p>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-6 text-center">
            <Phone className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">Phone Support</h3>
            <p className="text-sm text-muted-foreground">Call us directly</p>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-6 text-center">
            <Mail className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">Email Support</h3>
            <p className="text-sm text-muted-foreground">Send us an email</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* FAQs */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <HelpCircle className="mr-2 h-5 w-5" />
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Support</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">Subject</label>
              <Input placeholder="What can we help you with?" />
            </div>
            <div>
              <label className="text-sm font-medium">Message</label>
              <Textarea placeholder="Describe your issue or question in detail..." rows={4} />
            </div>
            <div>
              <label className="text-sm font-medium">Priority</label>
              <select className="w-full p-2 border rounded-md">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Urgent</option>
              </select>
            </div>
            <Button className="w-full">Send Message</Button>
          </CardContent>
        </Card>
      </div>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center">
              <Phone className="h-6 w-6 mx-auto mb-2 text-primary" />
              <h3 className="font-medium">Phone</h3>
              <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
              <p className="text-xs text-muted-foreground">Mon-Fri 9AM-6PM EST</p>
            </div>
            <div className="text-center">
              <Mail className="h-6 w-6 mx-auto mb-2 text-primary" />
              <h3 className="font-medium">Email</h3>
              <p className="text-sm text-muted-foreground">support@flowersandsaints.com</p>
              <p className="text-xs text-muted-foreground">We'll respond within 24 hours</p>
            </div>
            <div className="text-center">
              <MessageCircle className="h-6 w-6 mx-auto mb-2 text-primary" />
              <h3 className="font-medium">Live Chat</h3>
              <p className="text-sm text-muted-foreground">Available 24/7</p>
              <Button variant="outline" size="sm" className="mt-2">
                Start Chat
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
