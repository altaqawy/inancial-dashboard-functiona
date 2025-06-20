"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Building2,
  Users,
  MapPin,
  Phone,
  Mail,
  Globe,
  Edit,
  Plus,
  Calendar,
  DollarSign,
  TrendingUp,
  Award,
  Target,
  Briefcase,
} from "lucide-react"

const organizationInfo = {
  name: "Flowers&Saints Financial Services",
  logo: "/placeholder.svg?height=80&width=80",
  description:
    "A leading financial technology company providing innovative banking and investment solutions to individuals and businesses worldwide.",
  industry: "Financial Technology",
  founded: "2018",
  employees: "250-500",
  headquarters: "New York, NY",
  website: "https://flowersandsaints.com",
  email: "contact@flowersandsaints.com",
  phone: "+1 (555) 123-4567",
  address: "123 Financial District, New York, NY 10004",
  revenue: "$50M",
  valuation: "$500M",
}

const departments = [
  {
    id: 1,
    name: "Engineering",
    head: "Alice Johnson",
    headAvatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/375238645_11475210.jpg-lU8bOe6TLt5Rv51hgjg8NT8PsDBmvN.jpeg",
    employees: 45,
    budget: "$2.5M",
    description: "Responsible for product development, infrastructure, and technical innovation",
  },
  {
    id: 2,
    name: "Product",
    head: "Bob Smith",
    headAvatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/375238208_11475222.jpg-poEIzVHAGiIfMFQ7EiF8PUG1u0Zkzz.jpeg",
    employees: 25,
    budget: "$1.8M",
    description: "Product strategy, design, and user experience optimization",
  },
  {
    id: 3,
    name: "Sales & Marketing",
    head: "Charlie Brown",
    headAvatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dd.jpg-4MCwPC2Bec6Ume26Yo1kao3CnONxDg.jpeg",
    employees: 35,
    budget: "$3.2M",
    description: "Customer acquisition, brand management, and revenue growth",
  },
  {
    id: 4,
    name: "Operations",
    head: "Diana Martinez",
    headAvatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9334178.jpg-Y74tW6XFO68g7N36SE5MSNDNVKLQ08.jpeg",
    employees: 30,
    budget: "$2.1M",
    description: "Business operations, compliance, and process optimization",
  },
  {
    id: 5,
    name: "Finance",
    head: "Ethan Williams",
    headAvatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5295.jpg-fLw0wGGZp8wuTzU5dnyfjZDwAHN98a.jpeg",
    employees: 20,
    budget: "$1.5M",
    description: "Financial planning, accounting, and investment management",
  },
  {
    id: 6,
    name: "Human Resources",
    head: "Fiona Garcia",
    headAvatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9720029.jpg-Yf9h2a3kT7rYyCb648iLIeHThq5wEy.jpeg",
    employees: 15,
    budget: "$1.2M",
    description: "Talent acquisition, employee development, and workplace culture",
  },
]

const achievements = [
  {
    title: "Best FinTech Startup 2023",
    organization: "TechCrunch",
    date: "2023-06-15",
    description: "Recognized for innovation in financial technology",
  },
  {
    title: "ISO 27001 Certification",
    organization: "International Organization for Standardization",
    date: "2023-03-20",
    description: "Information security management system certification",
  },
  {
    title: "Series B Funding",
    organization: "Venture Capital",
    date: "2023-01-10",
    description: "Raised $50M in Series B funding round",
  },
]

const goals = [
  {
    title: "Expand to European Markets",
    target: "Q4 2024",
    progress: 35,
    description: "Launch services in UK, Germany, and France",
  },
  {
    title: "Reach 1M Active Users",
    target: "Q2 2024",
    progress: 68,
    description: "Grow user base to 1 million active monthly users",
  },
  {
    title: "Achieve Carbon Neutrality",
    target: "Q3 2024",
    progress: 45,
    description: "Implement sustainable practices across all operations",
  },
]

export default function OrganizationPage() {
  const [isEditing, setIsEditing] = useState(false)
  const [orgData, setOrgData] = useState(organizationInfo)

  const totalEmployees = departments.reduce((sum, dept) => sum + dept.employees, 0)
  const totalBudget = departments.reduce(
    (sum, dept) => sum + Number.parseFloat(dept.budget.replace("$", "").replace("M", "")),
    0,
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Organization</h1>
        <Button onClick={() => setIsEditing(!isEditing)}>
          <Edit className="mr-2 h-4 w-4" />
          {isEditing ? "Save Changes" : "Edit Organization"}
        </Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="departments">Departments</TabsTrigger>
          <TabsTrigger value="goals">Goals</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Organization Header */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center">
                  <Building2 className="h-10 w-10 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      {isEditing ? (
                        <Input
                          value={orgData.name}
                          onChange={(e) => setOrgData({ ...orgData, name: e.target.value })}
                          className="text-2xl font-bold mb-2"
                        />
                      ) : (
                        <h2 className="text-2xl font-bold">{orgData.name}</h2>
                      )}
                      <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center">
                          <Briefcase className="mr-1 h-3 w-3" />
                          {orgData.industry}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="mr-1 h-3 w-3" />
                          Founded {orgData.founded}
                        </span>
                        <span className="flex items-center">
                          <Users className="mr-1 h-3 w-3" />
                          {orgData.employees} employees
                        </span>
                      </div>
                    </div>
                  </div>
                  {isEditing ? (
                    <Textarea
                      value={orgData.description}
                      onChange={(e) => setOrgData({ ...orgData, description: e.target.value })}
                      rows={3}
                    />
                  ) : (
                    <p className="text-muted-foreground">{orgData.description}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Metrics */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalEmployees}</div>
                <p className="text-xs text-muted-foreground">Across {departments.length} departments</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Annual Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{orgData.revenue}</div>
                <p className="text-xs text-muted-foreground">+20% from last year</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Company Valuation</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{orgData.valuation}</div>
                <p className="text-xs text-muted-foreground">Post Series B funding</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Departments</CardTitle>
                <Building2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{departments.length}</div>
                <p className="text-xs text-muted-foreground">${totalBudget.toFixed(1)}M total budget</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="mr-3 h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Headquarters</p>
                    <p className="text-sm text-muted-foreground">{orgData.address}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-3 h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">{orgData.phone}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="mr-3 h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">{orgData.email}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Globe className="mr-3 h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Website</p>
                    <p className="text-sm text-muted-foreground">{orgData.website}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="departments" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Departments</h2>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Department
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {departments.map((department) => (
              <Card key={department.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{department.name}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{department.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Department Head</span>
                    <div className="flex items-center">
                      <Avatar className="h-6 w-6 mr-2">
                        <AvatarImage src={department.headAvatar || "/placeholder.svg"} alt={department.head} />
                        <AvatarFallback className="text-xs">{department.head.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{department.head}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Employees</span>
                    <span className="text-sm font-medium">{department.employees}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Budget</span>
                    <span className="text-sm font-medium">{department.budget}</span>
                  </div>

                  <Button variant="outline" className="w-full">
                    View Department
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="goals" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Strategic Goals</h2>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Goal
            </Button>
          </div>

          <div className="grid gap-6">
            {goals.map((goal, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{goal.title}</h3>
                      <p className="text-muted-foreground">{goal.description}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline">
                        <Target className="mr-1 h-3 w-3" />
                        {goal.target}
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{goal.progress}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${goal.progress}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Achievements & Awards</h2>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Achievement
            </Button>
          </div>

          <div className="grid gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{achievement.title}</h3>
                      <p className="text-muted-foreground mb-2">{achievement.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{achievement.organization}</span>
                        <span className="text-sm text-muted-foreground">{achievement.date}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Organization Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium">Organization Name</label>
                  <Input value={orgData.name} onChange={(e) => setOrgData({ ...orgData, name: e.target.value })} />
                </div>
                <div>
                  <label className="text-sm font-medium">Industry</label>
                  <Input
                    value={orgData.industry}
                    onChange={(e) => setOrgData({ ...orgData, industry: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Website</label>
                  <Input
                    value={orgData.website}
                    onChange={(e) => setOrgData({ ...orgData, website: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Phone</label>
                  <Input value={orgData.phone} onChange={(e) => setOrgData({ ...orgData, phone: e.target.value })} />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Description</label>
                <Textarea
                  value={orgData.description}
                  onChange={(e) => setOrgData({ ...orgData, description: e.target.value })}
                  rows={3}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Address</label>
                <Textarea
                  value={orgData.address}
                  onChange={(e) => setOrgData({ ...orgData, address: e.target.value })}
                  rows={2}
                />
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
