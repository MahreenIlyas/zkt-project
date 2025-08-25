import React, { useState } from 'react';
import { Search, Copy, QrCode, Camera, Star, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Sidebar from '@/components/Sidebar';

const ScanToGive: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);

  const verifiedNgos = [
    {
      id: 'children-relief',
      name: 'Children Relief Foundation',
      description: 'Providing education and healthcare to underprivileged children worldwide',
      logo: '🏫',
      rating: 4.8,
      location: 'Global',
      donors: '15,420 donors',
      totalRaised: '2.4M ZKTC'
    },
    {
      id: 'clean-water',
      name: 'Clean Water Initiative',
      description: 'Building wells and water purification systems in rural communities',
      logo: '💧',
      rating: 4.9,
      location: 'Africa',
      donors: '12,330 donors',
      totalRaised: '1.8M ZKTC'
    },
    {
      id: 'food-security',
      name: 'Food Security Network',
      description: 'Fighting hunger through sustainable food programs and emergency relief',
      logo: '🍽️',
      rating: 4.7,
      location: 'Asia',
      donors: '18,750 donors',
      totalRaised: '3.1M ZKTC'
    }
  ];

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-card border-b border-border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center flex-1 max-w-lg">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Type something..."
                  className="pl-10 bg-muted border-0 h-10"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-primary text-primary-foreground px-3 py-1">
                124@ki214838...
                <Copy className="w-3 h-3 ml-2" />
              </Badge>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center gap-3">
              <QrCode className="w-6 h-6 text-primary" />
              <div>
                <h1 className="text-2xl font-bold">Scan to Give</h1>
                <p className="text-muted-foreground">Scan QR codes to donate to verified NGOs instantly</p>
              </div>
            </div>

            {/* QR Scanner Section */}
            <div className="card-elegant p-6">
              <h3 className="text-xl font-semibold mb-2">QR Code Scanner</h3>
              <p className="text-muted-foreground mb-6">Point your camera at an NGO's QR code to start donating</p>
              
              <div className="flex justify-center mb-6">
                <div className="relative w-80 h-80 bg-muted rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                  {!isScanning ? (
                    <div className="text-center">
                      <Camera className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground mb-4">Click to start scanning</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="w-48 h-48 bg-card rounded-lg border-2 border-primary animate-pulse mb-4"></div>
                      <p className="text-primary font-medium">Scanning...</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="text-center">
                <Button 
                  onClick={() => setIsScanning(!isScanning)}
                  className="bg-primary hover:bg-primary-hover"
                  size="lg"
                >
                  {isScanning ? 'Stop Scanning' : 'Start Scanning'}
                </Button>
              </div>
            </div>

            {/* Verified NGOs */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <QrCode className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">Verified NGOs</h3>
              </div>
              <p className="text-muted-foreground">Browse and donate to verified charitable organizations</p>

              {/* Search NGOs */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search NGOs..."
                  className="pl-10 bg-muted border-0"
                />
              </div>

              <div className="space-y-4">
                {verifiedNgos.map((ngo) => (
                  <div key={ngo.id} className="card-elegant p-6 hover:border-primary/50 transition-smooth">
                    <div className="flex items-start gap-4">
                      {/* NGO Icon */}
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">{ngo.logo}</span>
                      </div>
                      
                      {/* NGO Info */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-lg">{ngo.name}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{ngo.description}</p>
                          </div>
                          <Button className="bg-primary hover:bg-primary-hover">
                            Donate
                          </Button>
                        </div>
                        
                        {/* Stats */}
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="font-medium">{ngo.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{ngo.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{ngo.donors}</span>
                          </div>
                        </div>
                        
                        <div className="mt-2 text-sm">
                          <span className="text-muted-foreground">Total raised: </span>
                          <span className="font-semibold text-primary">{ngo.totalRaised}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ScanToGive;