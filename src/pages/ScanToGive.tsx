import React, { useState } from 'react';
import { Search, Copy, QrCode, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Sidebar from '@/components/Sidebar';

const ScanToGive: React.FC = () => {
  const [selectedNgo, setSelectedNgo] = useState<string>('');

  const verifiedNgos = [
    {
      id: 'shukat-khanam',
      name: 'Shukat Khanam Trust Hospital.',
      address: '122341298 4ndqus..',
      logo: '🏥',
      country: 'PK'
    },
    {
      id: 'edhi-foundation', 
      name: 'Edhi Foundation',
      address: '452412298 4ndqus..',
      logo: '🏛️',
      country: 'PK'
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
            <h1 className="text-2xl font-bold">Scan to Give</h1>

            {/* QR Scanner Section */}
            <div className="card-elegant p-8">
              <div className="flex flex-col items-center space-y-6">
                {/* QR Code Display */}
                <div className="relative">
                  <div className="w-64 h-64 bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-primary/30">
                    {/* QR Code Placeholder */}
                    <div className="w-48 h-48 bg-foreground rounded-lg flex items-center justify-center">
                      <div className="grid grid-cols-8 gap-1">
                        {Array.from({ length: 64 }).map((_, i) => (
                          <div 
                            key={i} 
                            className={`w-2 h-2 ${Math.random() > 0.5 ? 'bg-background' : 'bg-foreground'}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* QR Scanner Corners */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-lg"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-lg"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-lg"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-lg"></div>
                </div>

                {selectedNgo ? (
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2">
                      {verifiedNgos.find(ngo => ngo.id === selectedNgo)?.name}
                    </h3>
                    <p className="text-muted-foreground">Verified NGO Selected</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <QrCode className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground">Scan QR code to select NGO</p>
                  </div>
                )}
              </div>
            </div>

            {/* Verified NGOs */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Verified NGO's</h3>
                <Button variant="ghost" className="text-primary">
                  View All
                </Button>
              </div>

              <div className="space-y-3">
                {verifiedNgos.map((ngo) => (
                  <div 
                    key={ngo.id}
                    className="card-elegant p-4 hover:border-primary/50 transition-smooth cursor-pointer"
                    onClick={() => setSelectedNgo(ngo.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">{ngo.logo}</span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold">{ngo.name}</h4>
                            <CheckCircle className="w-4 h-4 text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground">{ngo.address}</p>
                        </div>
                      </div>
                      
                      <Button 
                        size="sm"
                        className={selectedNgo === ngo.id ? "bg-primary hover:bg-primary-hover" : ""}
                        variant={selectedNgo === ngo.id ? "default" : "outline"}
                      >
                        {selectedNgo === ngo.id ? "Selected" : "Donate now"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center pt-4">
                <Button variant="ghost" disabled className="text-muted-foreground">
                  Previous
                </Button>
                <Button variant="ghost" className="text-primary">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ScanToGive;