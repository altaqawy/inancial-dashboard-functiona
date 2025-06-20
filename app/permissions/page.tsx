"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Shield, Users, Eye, Edit, Trash2 } from "lucide-react"

const roles = [
  { id: 1, name: "Super Admin", users: 1, color: "bg-red-500" },
  { id: 2, name: "Admin", users: 2, color: "bg-blue-500" },
  { id: 3, name: "Manager", users: 5, color: "bg-green-500" },
  { id: 4, name: "User", users: 15, color: "bg-gray-500" },
]

const permissions = [
  { module: "Dashboard", view: true, edit: true, delete: false },
  { module: "Analytics", view: true, edit: false, delete: false },
  { module: "Transactions", view: true, edit: true, delete: true },
  { module: "Invoices", view: true, edit: true, delete: false },
  { module: "Payments", view: true, edit: false, delete: false },
  { module: "Members", view: true, edit: true, delete: true },
  { module: "Settings", view: false, edit: false, delete: false },
]

export default function PermissionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Permissions & Roles</h1>
        <Button>
          <Shield className="mr-2 h-4 w-4" />
          Create Role
        </Button>
      </div>

      {/* Roles Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {roles.map((role) => (
          <Card key={role.id}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full ${role.color} mr-3`} />
                  <div>
                    <p className="font-medium">{role.name}</p>
                    <p className="text-sm text-muted-foreground">{role.users} users</p>
                  </div>
                </div>
                <Users className="h-5 w-5 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Permissions Matrix */}
      <Card>
        <CardHeader>
          <CardTitle>Permission Matrix</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-4 gap-4 font-medium text-sm">
              <div>Module</div>
              <div className="flex items-center">
                <Eye className="mr-2 h-4 w-4" />
                View
              </div>
              <div className="flex items-center">
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </div>
              <div className="flex items-center">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </div>
            </div>
            {permissions.map((permission, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 items-center py-2 border-t">
                <div className="font-medium">{permission.module}</div>
                <div>
                  <Switch checked={permission.view} />
                </div>
                <div>
                  <Switch checked={permission.edit} />
                </div>
                <div>
                  <Switch checked={permission.delete} />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Role Details */}
      <Card>
        <CardHeader>
          <CardTitle>Role Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {roles.map((role) => (
              <div key={role.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center">
                  <div className={`w-4 h-4 rounded-full ${role.color} mr-4`} />
                  <div>
                    <p className="font-medium">{role.name}</p>
                    <p className="text-sm text-muted-foreground">{role.users} users assigned</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                  <Button variant="outline" size="sm">
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
