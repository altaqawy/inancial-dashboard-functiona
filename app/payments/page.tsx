"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus, CreditCard, Smartphone, Banknote } from "lucide-react"

const paymentMethods = [
  { id: 1, type: "Credit Card", details: "**** **** **** 1234", provider: "Visa", isDefault: true },
  { id: 2, type: "Bank Account", details: "**** **** 5678", provider: "Chase Bank", isDefault: false },
  { id: 3, type: "Digital Wallet", details: "PayPal Account", provider: "PayPal", isDefault: false },
]

const recentPayments = [
  {
    id: "PAY-001",
    recipient: "Electric Company",
    amount: 120.5,
    method: "Credit Card",
    status: "completed",
    date: "2023-07-20",
  },
  {
    id: "PAY-002",
    recipient: "Internet Provider",
    amount: 79.99,
    method: "Bank Account",
    status: "pending",
    date: "2023-07-19",
  },
  {
    id: "PAY-003",
    recipient: "John Doe",
    amount: 250.0,
    method: "Digital Wallet",
    status: "completed",
    date: "2023-07-18",
  },
]

export default function PaymentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Payments</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Payment
        </Button>
      </div>

      {/* Payment Methods */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Payment Methods</CardTitle>
            <Button variant="outline">
              <Plus className="mr-2 h-4 w-4" />
              Add Method
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {paymentMethods.map((method) => (
              <Card key={method.id} className="relative">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      {method.type === "Credit Card" && <CreditCard className="mr-2 h-5 w-5" />}
                      {method.type === "Bank Account" && <Banknote className="mr-2 h-5 w-5" />}
                      {method.type === "Digital Wallet" && <Smartphone className="mr-2 h-5 w-5" />}
                      <span className="font-medium">{method.type}</span>
                    </div>
                    {method.isDefault && <Badge variant="secondary">Default</Badge>}
                  </div>
                  <p className="text-sm text-muted-foreground">{method.details}</p>
                  <p className="text-sm font-medium mt-1">{method.provider}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Payments */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Payments</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Payment ID</TableHead>
                <TableHead>Recipient</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentPayments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell className="font-medium">{payment.id}</TableCell>
                  <TableCell>{payment.recipient}</TableCell>
                  <TableCell>${payment.amount.toFixed(2)}</TableCell>
                  <TableCell>{payment.method}</TableCell>
                  <TableCell>
                    <Badge variant={payment.status === "completed" ? "default" : "secondary"}>{payment.status}</Badge>
                  </TableCell>
                  <TableCell>{payment.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
