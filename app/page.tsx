import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, MapPin, Shield, Zap, Users, TrendingUp } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">CivicMind</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/track" className="text-muted-foreground hover:text-foreground transition-colors">
                Track Complaint
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/admin" className="text-muted-foreground hover:text-foreground transition-colors">
                Admin
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <Zap className="h-4 w-4 mr-2" />
              Powered by AI & Blockchain
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              AI + Blockchain for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent block">
                Transparent Civic Governance
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Report civic issues, track progress in real-time, and ensure accountability through AI-powered validation
              and blockchain transparency. Building better communities together.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button asChild size="lg" className="w-full sm:w-auto text-lg px-8 py-6">
                <Link href="/report">
                  <FileText className="h-5 w-5 mr-2" />
                  Report an Issue
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-6 bg-transparent">
                <Link href="/track">
                  <MapPin className="h-5 w-5 mr-2" />
                  Track Complaint
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto text-lg px-8 py-6">
                <Link href="/admin">
                  <Users className="h-5 w-5 mr-2" />
                  Government Dashboard
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How CivicMind Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform combines cutting-edge technology with civic engagement to create a transparent and efficient
              complaint resolution system.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">AI-Powered Validation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Submit complaints with photos and location data. Our AI instantly validates and categorizes issues for
                  faster processing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Blockchain Transparency</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every complaint is recorded on an immutable blockchain ledger, ensuring complete transparency and
                  accountability.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-chart-4/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-chart-4" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Real-Time Tracking</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Track your complaint status in real-time with live updates, location mapping, and progress
                  notifications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2,847</div>
              <div className="text-muted-foreground">Issues Resolved</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">98.5%</div>
              <div className="text-muted-foreground">AI Accuracy</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-chart-4 mb-2">24hrs</div>
              <div className="text-muted-foreground">Avg Response Time</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-chart-2 mb-2">15</div>
              <div className="text-muted-foreground">Cities Connected</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold text-foreground">CivicMind</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2025 CivicMind. Building transparent governance for all.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
