"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  ArrowLeft,
  Search,
  MoreHorizontal,
  AlertTriangle,
  Clock,
  CheckCircle,
  FileText,
  TrendingUp,
  MapPin,
  Calendar,
} from "lucide-react"

// Mock data for complaints
const mockComplaints = [
  {
    id: "CIV-001234",
    description: "Broken streetlight on Main Street causing safety concerns",
    category: "streetlight",
    location: "Main Street, Block A",
    priority: "High",
    status: "Pending",
    submittedBy: "John Doe",
    submittedAt: "2025-01-15T10:30:00Z",
    assignedTo: "Public Works Dept",
  },
  {
    id: "CIV-001235",
    description: "Garbage not collected for 3 days in residential area",
    category: "garbage",
    location: "Green Valley, Sector 12",
    priority: "High",
    status: "In Progress",
    submittedBy: "Sarah Wilson",
    submittedAt: "2025-01-14T14:20:00Z",
    assignedTo: "Sanitation Dept",
  },
  {
    id: "CIV-001236",
    description: "Pothole on highway causing vehicle damage",
    category: "road",
    location: "Highway 101, Mile 15",
    priority: "Medium",
    status: "In Progress",
    submittedBy: "Mike Johnson",
    submittedAt: "2025-01-14T09:15:00Z",
    assignedTo: "Road Maintenance",
  },
  {
    id: "CIV-001237",
    description: "Water supply disruption in apartment complex",
    category: "water",
    location: "Sunrise Apartments, Unit 45",
    priority: "High",
    status: "Resolved",
    submittedBy: "Lisa Chen",
    submittedAt: "2025-01-13T16:45:00Z",
    assignedTo: "Water Authority",
  },
  {
    id: "CIV-001238",
    description: "Noise pollution from construction site after hours",
    category: "other",
    location: "Downtown Plaza",
    priority: "Low",
    status: "Pending",
    submittedBy: "Robert Brown",
    submittedAt: "2025-01-13T11:30:00Z",
    assignedTo: "Environmental Dept",
  },
  {
    id: "CIV-001239",
    description: "Damaged sidewalk creating accessibility issues",
    category: "road",
    location: "Park Avenue, Near School",
    priority: "Medium",
    status: "Resolved",
    submittedBy: "Emma Davis",
    submittedAt: "2025-01-12T13:20:00Z",
    assignedTo: "Public Works Dept",
  },
]

export default function AdminDashboard() {
  const [complaints, setComplaints] = useState(mockComplaints)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [priorityFilter, setPriorityFilter] = useState("all")

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-destructive/10 text-destructive"
      case "Medium":
        return "bg-chart-4/10 text-chart-4"
      case "Low":
        return "bg-muted text-muted-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-chart-4/10 text-chart-4"
      case "In Progress":
        return "bg-accent/10 text-accent"
      case "Resolved":
        return "bg-primary/10 text-primary"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Pending":
        return <Clock className="h-3 w-3" />
      case "In Progress":
        return <AlertTriangle className="h-3 w-3" />
      case "Resolved":
        return <CheckCircle className="h-3 w-3" />
      default:
        return <Clock className="h-3 w-3" />
    }
  }

  const updateComplaintStatus = (id: string, newStatus: string) => {
    setComplaints((prev) =>
      prev.map((complaint) => (complaint.id === id ? { ...complaint, status: newStatus } : complaint)),
    )
  }

  const filteredComplaints = complaints
    .filter((complaint) => {
      const matchesSearch =
        complaint.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        complaint.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        complaint.location.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesStatus = statusFilter === "all" || complaint.status === statusFilter
      const matchesPriority = priorityFilter === "all" || complaint.priority === priorityFilter
      return matchesSearch && matchesStatus && matchesPriority
    })
    .sort((a, b) => {
      // Sort by priority: High > Medium > Low
      const priorityOrder = { High: 3, Medium: 2, Low: 1 }
      return (
        priorityOrder[b.priority as keyof typeof priorityOrder] -
        priorityOrder[a.priority as keyof typeof priorityOrder]
      )
    })

  const stats = {
    total: complaints.length,
    pending: complaints.filter((c) => c.status === "Pending").length,
    inProgress: complaints.filter((c) => c.status === "In Progress").length,
    resolved: complaints.filter((c) => c.status === "Resolved").length,
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary">Admin Dashboard</Badge>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Government Dashboard</h1>
          <p className="text-muted-foreground">Manage and track civic complaints across all departments</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Complaints</p>
                  <p className="text-2xl font-bold text-foreground">{stats.total}</p>
                </div>
                <FileText className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending</p>
                  <p className="text-2xl font-bold text-chart-4">{stats.pending}</p>
                </div>
                <Clock className="h-8 w-8 text-chart-4" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">In Progress</p>
                  <p className="text-2xl font-bold text-accent">{stats.inProgress}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Resolved</p>
                  <p className="text-2xl font-bold text-primary">{stats.resolved}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Complaint Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search complaints by ID, description, or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                  <SelectItem value="Resolved">Resolved</SelectItem>
                </SelectContent>
              </Select>
              <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priority</SelectItem>
                  <SelectItem value="High">High Priority</SelectItem>
                  <SelectItem value="Medium">Medium Priority</SelectItem>
                  <SelectItem value="Low">Low Priority</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Complaints Table */}
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Complaint ID</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Assigned To</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredComplaints.map((complaint) => (
                    <TableRow key={complaint.id}>
                      <TableCell className="font-mono text-sm">{complaint.id}</TableCell>
                      <TableCell className="max-w-xs">
                        <div className="truncate" title={complaint.description}>
                          {complaint.description}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">by {complaint.submittedBy}</div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-1 text-sm">
                          <MapPin className="h-3 w-3 text-muted-foreground" />
                          <span className="truncate max-w-32" title={complaint.location}>
                            {complaint.location}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getPriorityColor(complaint.priority)}>{complaint.priority}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={`${getStatusColor(complaint.status)} flex items-center space-x-1 w-fit`}>
                          {getStatusIcon(complaint.status)}
                          <span>{complaint.status}</span>
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm">{complaint.assignedTo}</TableCell>
                      <TableCell className="text-sm">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3 text-muted-foreground" />
                          <span>{new Date(complaint.submittedAt).toLocaleDateString()}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => updateComplaintStatus(complaint.id, "Pending")}>
                              Set as Pending
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => updateComplaintStatus(complaint.id, "In Progress")}>
                              Set as In Progress
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => updateComplaintStatus(complaint.id, "Resolved")}>
                              Mark as Resolved
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {filteredComplaints.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No complaints found matching your criteria.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
