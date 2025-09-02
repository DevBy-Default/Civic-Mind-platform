"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  Search,
  MapPin,
  Clock,
  CheckCircle,
  AlertTriangle,
  FileText,
  Calendar,
  User,
  Building,
  Zap,
} from "lucide-react"

// Mock complaint data
const mockComplaintData = {
  "CIV-001234": {
    id: "CIV-001234",
    description: "Broken streetlight on Main Street causing safety concerns",
    category: "streetlight",
    location: "Main Street, Block A",
    coordinates: "40.7128, -74.0060",
    priority: "High",
    status: "In Progress",
    submittedBy: "John Doe",
    submittedAt: "2025-01-15T10:30:00Z",
    assignedTo: "Public Works Department",
    estimatedResolution: "2025-01-20T18:00:00Z",
    progress: 65,
    updates: [
      {
        timestamp: "2025-01-15T10:30:00Z",
        status: "Submitted",
        description: "Complaint submitted and validated by AI system",
        department: "System",
      },
      {
        timestamp: "2025-01-15T14:20:00Z",
        status: "Assigned",
        description: "Complaint assigned to Public Works Department",
        department: "Admin",
      },
      {
        timestamp: "2025-01-16T09:15:00Z",
        status: "In Progress",
        description: "Field inspection completed. Replacement parts ordered.",
        department: "Public Works",
      },
      {
        timestamp: "2025-01-17T11:30:00Z",
        status: "Update",
        description: "Parts received. Repair scheduled for January 19th.",
        department: "Public Works",
      },
    ],
  },
  "CIV-001235": {
    id: "CIV-001235",
    description: "Garbage not collected for 3 days in residential area",
    category: "garbage",
    location: "Green Valley, Sector 12",
    coordinates: "40.7589, -73.9851",
    priority: "High",
    status: "Resolved",
    submittedBy: "Sarah Wilson",
    submittedAt: "2025-01-14T14:20:00Z",
    assignedTo: "Sanitation Department",
    estimatedResolution: "2025-01-16T12:00:00Z",
    progress: 100,
    updates: [
      {
        timestamp: "2025-01-14T14:20:00Z",
        status: "Submitted",
        description: "Complaint submitted and validated by AI system",
        department: "System",
      },
      {
        timestamp: "2025-01-14T16:45:00Z",
        status: "Assigned",
        description: "Urgent complaint assigned to Sanitation Department",
        department: "Admin",
      },
      {
        timestamp: "2025-01-15T08:30:00Z",
        status: "In Progress",
        description: "Collection truck dispatched to location",
        department: "Sanitation",
      },
      {
        timestamp: "2025-01-15T11:15:00Z",
        status: "Resolved",
        description: "Garbage collected. Regular schedule resumed.",
        department: "Sanitation",
      },
    ],
  },
}

export default function TrackComplaintPage() {
  const searchParams = useSearchParams()
  const [complaintId, setComplaintId] = useState(searchParams?.get("id") || "")
  const [complaint, setComplaint] = useState<any>(null)
  const [isSearching, setIsSearching] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    if (searchParams?.get("id")) {
      handleSearch()
    }
  }, [])

  const handleSearch = async () => {
    if (!complaintId.trim()) {
      setError("Please enter a complaint ID")
      return
    }

    setIsSearching(true)
    setError("")

    // Simulate API call
    setTimeout(() => {
      const foundComplaint = mockComplaintData[complaintId as keyof typeof mockComplaintData]
      if (foundComplaint) {
        setComplaint(foundComplaint)
        setError("")
      } else {
        setComplaint(null)
        setError("Complaint not found. Please check your complaint ID and try again.")
      }
      setIsSearching(false)
    }, 1000)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Submitted":
        return "bg-muted text-muted-foreground"
      case "Assigned":
        return "bg-chart-4/10 text-chart-4"
      case "In Progress":
        return "bg-accent/10 text-accent"
      case "Resolved":
        return "bg-primary/10 text-primary"
      case "Update":
        return "bg-chart-2/10 text-chart-2"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Submitted":
        return <FileText className="h-4 w-4" />
      case "Assigned":
        return <User className="h-4 w-4" />
      case "In Progress":
        return <AlertTriangle className="h-4 w-4" />
      case "Resolved":
        return <CheckCircle className="h-4 w-4" />
      case "Update":
        return <Zap className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

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

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link href="/" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Track Your Complaint</h1>
          <p className="text-muted-foreground">
            Enter your complaint ID to view real-time status updates and progress information.
          </p>
        </div>

        {/* Search Form */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Label htmlFor="complaintId" className="sr-only">
                  Complaint ID
                </Label>
                <Input
                  id="complaintId"
                  placeholder="Enter your complaint ID (e.g., CIV-001234)"
                  value={complaintId}
                  onChange={(e) => setComplaintId(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                />
              </div>
              <Button onClick={handleSearch} disabled={isSearching}>
                {isSearching ? (
                  <>
                    <Clock className="h-4 w-4 mr-2 animate-spin" />
                    Searching...
                  </>
                ) : (
                  <>
                    <Search className="h-4 w-4 mr-2" />
                    Track Complaint
                  </>
                )}
              </Button>
            </div>
            {error && <p className="text-destructive text-sm mt-2">{error}</p>}
          </CardContent>
        </Card>

        {/* Complaint Details */}
        {complaint && (
          <div className="space-y-6">
            {/* Status Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Complaint Details</span>
                  <Badge className={getStatusColor(complaint.status)}>{complaint.status}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm text-muted-foreground">Complaint ID</Label>
                    <p className="font-mono text-sm">{complaint.id}</p>
                  </div>
                  <div>
                    <Label className="text-sm text-muted-foreground">Priority</Label>
                    <Badge className={getPriorityColor(complaint.priority)}>{complaint.priority}</Badge>
                  </div>
                  <div>
                    <Label className="text-sm text-muted-foreground">Submitted By</Label>
                    <p className="text-sm">{complaint.submittedBy}</p>
                  </div>
                  <div>
                    <Label className="text-sm text-muted-foreground">Assigned To</Label>
                    <p className="text-sm">{complaint.assignedTo}</p>
                  </div>
                </div>

                <div>
                  <Label className="text-sm text-muted-foreground">Description</Label>
                  <p className="text-sm">{complaint.description}</p>
                </div>

                <div>
                  <Label className="text-sm text-muted-foreground">Location</Label>
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{complaint.location}</span>
                    <span className="text-muted-foreground">({complaint.coordinates})</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <Label className="text-sm text-muted-foreground">Progress</Label>
                    <span className="text-sm font-medium">{complaint.progress}%</span>
                  </div>
                  <Progress value={complaint.progress} className="h-2" />
                </div>

                {complaint.estimatedResolution && (
                  <div>
                    <Label className="text-sm text-muted-foreground">Estimated Resolution</Label>
                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{new Date(complaint.estimatedResolution).toLocaleString()}</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Location Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Location Map</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Interactive map showing complaint location</p>
                    <p className="text-sm text-muted-foreground mt-2">Coordinates: {complaint.coordinates}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Progress Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {complaint.updates.map((update: any, index: number) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`p-2 rounded-full ${getStatusColor(update.status)}`}>
                        {getStatusIcon(update.status)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-foreground">{update.status}</p>
                          <p className="text-xs text-muted-foreground">{new Date(update.timestamp).toLocaleString()}</p>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{update.description}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <Building className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{update.department}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/report">Report Another Issue</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        )}

        {/* Sample IDs for testing */}
        {!complaint && !error && (
          <Card>
            <CardHeader>
              <CardTitle>Try These Sample Complaint IDs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="font-mono text-sm mb-2">CIV-001234</p>
                  <p className="text-xs text-muted-foreground">Streetlight repair (In Progress)</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="font-mono text-sm mb-2">CIV-001235</p>
                  <p className="text-xs text-muted-foreground">Garbage collection (Resolved)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
