import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Shield,
  Users,
  Globe,
  Zap,
  Heart,
  Target,
  Award,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link href="/" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Shield className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">About CivicMind</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Revolutionizing civic engagement through AI-powered validation and blockchain transparency, inspired by
            global initiatives for cleaner, more responsive communities.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-6 w-6 text-primary" />
                <span>Our Mission</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To bridge the gap between citizens and government by creating a transparent, efficient, and accountable
                platform for civic issue resolution. We believe every voice matters and every complaint deserves a
                timely, transparent response.
              </p>
            </CardContent>
          </Card>

          <Card className="border-accent/20 bg-accent/5">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="h-6 w-6 text-accent" />
                <span>Our Vision</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                A world where civic governance is completely transparent, where citizens can trust that their concerns
                are heard and addressed, and where technology serves as a bridge to build stronger, more responsive
                communities.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Inspiration Section */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-chart-4" />
              <span>Our Inspiration</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Badge className="bg-chart-4/10 text-chart-4">India</Badge>
                  <h3 className="text-lg font-semibold text-foreground">Swachh Bharat Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Inspired by India's transformative Swachh Bharat (Clean India) Mission, we recognize the power of
                  citizen participation in creating cleaner, healthier communities. Just as Swachh Bharat mobilized
                  millions of citizens to take ownership of cleanliness, CivicMind empowers citizens to take ownership
                  of all civic issues.
                </p>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Award className="h-4 w-4" />
                  <span>World's largest cleanliness drive with 600+ million participants</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Badge className="bg-accent/10 text-accent">United Kingdom</Badge>
                  <h3 className="text-lg font-semibold text-foreground">FixMyStreet Platform</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Drawing from the UK's pioneering FixMyStreet platform, we've learned the importance of making civic
                  reporting simple, transparent, and effective. FixMyStreet's success in connecting citizens with local
                  authorities has shown us the potential of technology-driven civic engagement.
                </p>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <ExternalLink className="h-4 w-4" />
                  <span>Over 500,000 issues reported and resolved since 2007</span>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">Building on Global Success</h4>
              <p className="text-muted-foreground leading-relaxed">
                CivicMind combines the grassroots engagement spirit of Swachh Bharat with the technological innovation
                of FixMyStreet, enhanced by cutting-edge AI validation and blockchain transparency. We're not just
                reporting problems – we're building trust through technology.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Technology Stack */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-primary" />
              <span>Our Technology</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">AI Validation</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced machine learning algorithms automatically validate, categorize, and prioritize complaints for
                  faster resolution.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Blockchain Security</h3>
                <p className="text-sm text-muted-foreground">
                  Immutable blockchain records ensure complete transparency and prevent tampering with complaint data
                  and resolutions.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-chart-2/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-chart-2" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Citizen-Centric Design</h3>
                <p className="text-sm text-muted-foreground">
                  User-friendly interface designed for accessibility, making it easy for all citizens to report and
                  track issues.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Impact & Goals */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle>Our Impact Goals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Immediate Goals</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Reduce average complaint resolution time by 60%</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Achieve 95% citizen satisfaction rate</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Connect 50+ cities in the first year</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Process 100,000+ complaints transparently</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Long-term Vision</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span>Become the global standard for civic engagement platforms</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span>Enable predictive governance through AI insights</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span>Foster stronger citizen-government relationships worldwide</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span>Create a template for transparent digital governance</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact & Get Involved */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>Get In Touch</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm">contact@civicmind.gov</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm">+1 (555) 123-CIVIC</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm">Digital Governance Center, Tech District</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Join Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Be part of the civic technology revolution. Whether you're a citizen, developer, or government official,
                there's a place for you in building better communities.
              </p>
              <div className="flex flex-col space-y-2">
                <Button asChild>
                  <Link href="/report">Report Your First Issue</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/admin">Government Partnership</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
