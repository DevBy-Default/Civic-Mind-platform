"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Shield, LinkIcon, Clock, CheckCircle, Hash, Database, Eye, Copy, Search, Zap } from "lucide-react"

// Mock blockchain data
const mockBlockchainData = {
  "CIV-001234": {
    complaintId: "CIV-001234",
    blockHash: "0x7d865e959b2466918c9863afca942d0fb89d7c9ac0c99bafc3749504ded97730",
    transactionHash: "0xa1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456",
    blockNumber: 15847392,
    timestamp: "2025-01-15T10:30:00Z",
    gasUsed: "21000",
    confirmations: 1247,
    immutableRecord: {
      description: "Broken streetlight on Main Street causing safety concerns",
      location: "Main Street, Block A",
      category: "streetlight",
      priority: "High",
      submittedBy: "0x742d35Cc6634C0532925a3b8D4C9db96590c4C87",
      validatedBy: "AI_VALIDATOR_v2.1",
      ipfsHash: "QmYwAPJzv5CZsnA625s3Xf2nemtYgPpHdWEz79ojWnPbdG",
    },
    timeline: [
      {
        step: "Submission",
        timestamp: "2025-01-15T10:30:00Z",
        txHash: "0xa1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456",
        status: "Confirmed",
        description: "Complaint data encrypted and submitted to blockchain",
      },
      {
        step: "AI Validation",
        timestamp: "2025-01-15T10:31:15Z",
        txHash: "0xb2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456a1",
        status: "Confirmed",
        description: "AI validation result recorded with confidence score",
      },
      {
        step: "Department Assignment",
        timestamp: "2025-01-15T14:20:00Z",
        txHash: "0xc3d4e5f6789012345678901234567890abcdef1234567890abcdef123456a1b2",
        status: "Confirmed",
        description: "Assignment to Public Works Department recorded",
      },
      {
        step: "Status Update",
        timestamp: "2025-01-16T09:15:00Z",
        txHash: "0xd4e5f6789012345678901234567890abcdef1234567890abcdef123456a1b2c3",
        status: "Confirmed",
        description: "Field inspection results and progress update logged",
      },
    ],
  },
}

export default function BlockchainTransparencyPage() {
  const [searchId, setSearchId] = useState("")
  const [selectedComplaint, setSelectedComplaint] = useState<any>(null)
  const [copiedHash, setCopiedHash] = useState("")

  const handleSearch = () => {
    const data = mockBlockchainData[searchId as keyof typeof mockBlockchainData]
    if (data) {
      setSelectedComplaint(data)
    } else {
      setSelectedComplaint(null)
    }
  }

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopiedHash(type)
    setTimeout(() => setCopiedHash(""), 2000)
  }

  const truncateHash = (hash: string) => {
    return `${hash.slice(0, 10)}...${hash.slice(-8)}`
  }

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
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Blockchain Transparency</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Every complaint is recorded as an immutable record on the blockchain, ensuring complete transparency and
            accountability in civic governance.
          </p>
        </div>

        {/* Search Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Search className="h-5 w-5" />
              <span>Verify Complaint on Blockchain</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Label htmlFor="searchId" className="sr-only">
                  Complaint ID
                </Label>
                <Input
                  id="searchId"
                  placeholder="Enter complaint ID to view blockchain record"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                />
              </div>
              <Button onClick={handleSearch}>
                <Eye className="h-4 w-4 mr-2" />
                View Blockchain Record
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Try: CIV-001234</p>
          </CardContent>
        </Card>

        {/* Blockchain Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Immutable Records</h3>
              <p className="text-sm text-muted-foreground">
                Once recorded, complaint data cannot be altered or deleted, ensuring permanent accountability.
              </p>
            </CardContent>
          </Card>

          <Card className="border-accent/20 bg-accent/5">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Public Verification</h3>
              <p className="text-sm text-muted-foreground">
                Anyone can verify complaint authenticity and track progress using blockchain transaction hashes.
              </p>
            </CardContent>
          </Card>

          <Card className="border-chart-2/20 bg-chart-2/5">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-chart-2/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="h-6 w-6 text-chart-2" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Decentralized Storage</h3>
              <p className="text-sm text-muted-foreground">
                Complaint data is distributed across multiple nodes, preventing single points of failure.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Blockchain Record Details */}
        {selectedComplaint && (
          <div className="space-y-6">
            {/* Transaction Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Blockchain Transaction Details</span>
                  <Badge className="bg-primary/10 text-primary">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Confirmed
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm text-muted-foreground">Complaint ID</Label>
                    <p className="font-mono text-sm">{selectedComplaint.complaintId}</p>
                  </div>
                  <div>
                    <Label className="text-sm text-muted-foreground">Block Number</Label>
                    <p className="font-mono text-sm">{selectedComplaint.blockNumber.toLocaleString()}</p>
                  </div>
                  <div>
                    <Label className="text-sm text-muted-foreground">Confirmations</Label>
                    <p className="font-mono text-sm">{selectedComplaint.confirmations.toLocaleString()}</p>
                  </div>
                  <div>
                    <Label className="text-sm text-muted-foreground">Gas Used</Label>
                    <p className="font-mono text-sm">{selectedComplaint.gasUsed}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <Label className="text-sm text-muted-foreground">Block Hash</Label>
                    <div className="flex items-center space-x-2 mt-1">
                      <code className="text-xs bg-muted px-2 py-1 rounded flex-1 break-all">
                        {selectedComplaint.blockHash}
                      </code>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(selectedComplaint.blockHash, "block")}
                      >
                        {copiedHash === "block" ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm text-muted-foreground">Transaction Hash</Label>
                    <div className="flex items-center space-x-2 mt-1">
                      <code className="text-xs bg-muted px-2 py-1 rounded flex-1 break-all">
                        {selectedComplaint.transactionHash}
                      </code>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(selectedComplaint.transactionHash, "tx")}
                      >
                        {copiedHash === "tx" ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm text-muted-foreground">IPFS Content Hash</Label>
                    <div className="flex items-center space-x-2 mt-1">
                      <code className="text-xs bg-muted px-2 py-1 rounded flex-1 break-all">
                        {selectedComplaint.immutableRecord.ipfsHash}
                      </code>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(selectedComplaint.immutableRecord.ipfsHash, "ipfs")}
                      >
                        {copiedHash === "ipfs" ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Immutable Record Data */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Database className="h-5 w-5" />
                  <span>Immutable Record Data</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm">
                  <pre className="whitespace-pre-wrap text-foreground">
                    {JSON.stringify(selectedComplaint.immutableRecord, null, 2)}
                  </pre>
                </div>
              </CardContent>
            </Card>

            {/* Blockchain Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <LinkIcon className="h-5 w-5" />
                  <span>Blockchain Transaction Timeline</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {selectedComplaint.timeline.map((entry: any, index: number) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          {entry.status === "Confirmed" ? (
                            <CheckCircle className="h-5 w-5 text-primary" />
                          ) : (
                            <Clock className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>
                        {index < selectedComplaint.timeline.length - 1 && <div className="w-px h-12 bg-border mt-2" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-sm font-medium text-foreground">{entry.step}</h4>
                          <Badge className="bg-primary/10 text-primary text-xs">{entry.status}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{entry.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{new Date(entry.timestamp).toLocaleString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Hash className="h-3 w-3" />
                            <span className="font-mono">{truncateHash(entry.txHash)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Verification Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href={`/track?id=${selectedComplaint.complaintId}`}>Track This Complaint</Link>
              </Button>
              <Button variant="outline" onClick={() => setSelectedComplaint(null)}>
                Search Another Record
              </Button>
            </div>
          </div>
        )}

        {/* How It Works */}
        {!selectedComplaint && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="h-5 w-5" />
                <span>How Blockchain Transparency Works</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Data Recording Process</h3>
                  <ol className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mt-0.5">
                        1
                      </span>
                      <span>Complaint submitted and validated by AI system</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mt-0.5">
                        2
                      </span>
                      <span>Data encrypted and stored on IPFS for decentralized access</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mt-0.5">
                        3
                      </span>
                      <span>Transaction hash recorded on blockchain with timestamp</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mt-0.5">
                        4
                      </span>
                      <span>All status updates create new blockchain transactions</span>
                    </li>
                  </ol>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Verification Benefits</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Tamper-proof records ensure data integrity</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Public verification builds citizen trust</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Decentralized storage prevents data loss</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Transparent audit trail for accountability</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
