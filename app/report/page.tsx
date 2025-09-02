"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Upload, MapPin, FileText, Shield, CheckCircle, Loader2, Camera, Video, Zap } from "lucide-react"

export default function ReportIssuePage() {
  const [formData, setFormData] = useState({
    description: "",
    category: "",
    location: "",
    files: [] as File[],
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [isValidated, setIsValidated] = useState(false)
  const [progress, setProgress] = useState(0)
  const [complaintId, setComplaintId] = useState("")

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    setFormData((prev) => ({ ...prev, files: [...prev.files, ...files] }))
  }

  const detectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setFormData((prev) => ({
            ...prev,
            location: `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`,
          }))
        },
        () => {
          setFormData((prev) => ({
            ...prev,
            location: "Location access denied - using approximate location",
          }))
        },
      )
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setProgress(0)

    // Simulate form submission
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsSubmitting(false)
          setIsAnalyzing(true)
          startAIAnalysis()
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  const startAIAnalysis = () => {
    // Generate complaint ID
    const id = `CIV-${Date.now().toString().slice(-6)}`
    setComplaintId(id)

    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false)
      setIsValidated(true)
    }, 3000)
  }

  if (isValidated) {
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

        {/* Success Page */}
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-2xl font-bold text-foreground mb-4">
                Complaint Successfully Submitted and Validated by AI
              </h1>
              <p className="text-muted-foreground mb-6">
                Your complaint has been processed and validated by our AI system. It has been assigned to the
                appropriate department for resolution.
              </p>
              <div className="bg-card rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Complaint ID:</span>
                  <Badge variant="secondary" className="font-mono">
                    {complaintId}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-muted-foreground">Status:</span>
                  <Badge className="bg-primary/10 text-primary">Validated & Assigned</Badge>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href={`/track?id=${complaintId}`}>Track This Complaint</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/report">Report Another Issue</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
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

      {/* Report Form */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Report a Civic Issue</h1>
          <p className="text-muted-foreground">
            Help improve your community by reporting issues. Our AI will validate and route your complaint
            automatically.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-primary" />
              <span>Issue Details</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isSubmitting && (
              <div className="mb-6 p-4 bg-primary/5 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Loader2 className="h-4 w-4 animate-spin text-primary" />
                  <span className="text-sm font-medium">Submitting complaint...</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            )}

            {isAnalyzing && (
              <div className="mb-6 p-4 bg-accent/5 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Zap className="h-4 w-4 text-accent animate-pulse" />
                  <span className="text-sm font-medium">AI analyzing complaint...</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Validating content, categorizing issue, and assigning priority...
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* File Upload */}
              <div className="space-y-2">
                <Label htmlFor="files">Upload Photos/Videos</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                  <input
                    id="files"
                    type="file"
                    multiple
                    accept="image/*,video/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <label htmlFor="files" className="cursor-pointer">
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-1">Click to upload or drag and drop</p>
                    <p className="text-xs text-muted-foreground">Images and videos up to 10MB each</p>
                  </label>
                </div>
                {formData.files.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {formData.files.map((file, index) => (
                      <Badge key={index} variant="secondary" className="flex items-center space-x-1">
                        {file.type.startsWith("image/") ? (
                          <Camera className="h-3 w-3" />
                        ) : (
                          <Video className="h-3 w-3" />
                        )}
                        <span className="text-xs">{file.name}</span>
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <div className="flex space-x-2">
                  <Input
                    id="location"
                    placeholder="Location will be auto-detected"
                    value={formData.location}
                    onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
                    className="flex-1"
                  />
                  <Button type="button" variant="outline" onClick={detectLocation}>
                    <MapPin className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Category */}
              <div className="space-y-2">
                <Label htmlFor="category">Issue Category</Label>
                <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select issue category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="road">Road & Infrastructure</SelectItem>
                    <SelectItem value="garbage">Garbage & Sanitation</SelectItem>
                    <SelectItem value="streetlight">Street Lighting</SelectItem>
                    <SelectItem value="water">Water Supply</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Complaint Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the issue in detail. Include any relevant information that might help resolve the problem..."
                  value={formData.description}
                  onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                  rows={4}
                  required
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isSubmitting || isAnalyzing || !formData.description || !formData.category}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Shield className="h-4 w-4 mr-2" />
                    Submit for AI Validation
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
