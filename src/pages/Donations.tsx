import React, { useState } from 'react';
import { Search, Copy, Clock, TrendingUp, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Sidebar from '@/components/Sidebar';

const Donations: React.FC = () => {
  const [selectedDuration, setSelectedDuration] = useState<'360' | '180' | '90' | '30'>('360');
  const [holdAmount, setHoldAmount] = useState('');

  const durations = [
    { value: '360', label: '360 Days', apy: '+12% APY' },
    { value: '180', label: '180 Days', apy: '+8% APY' },
    { value: '90', label: '90 Days', apy: '+5% APY' },
    { value: '30', label: '30 Days', apy: '+2% APY' },
  ];

  const currentHoldings = [
    { 
      amount: '1,000 ZKTC', 
      duration: '180 Days', 
      remaining: '99 days remaining', 
      rewards: '40 ZKTC',
      progress: 45 
    },
    { 
      amount: '500 ZKTC', 
      duration: '90 Days', 
      remaining: '18 days remaining', 
      rewards: '20 ZKTC',
      progress: 80 
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
              <Clock className="w-6 h-6 text-primary" />
              <div>
                <h1 className="text-2xl font-bold">Hold to Give</h1>
                <p className="text-muted-foreground">Lock your tokens and earn rewards while supporting charity</p>
              </div>
            </div>

            {/* Start New Hold */}
            <div className="card-elegant p-6">
              <h3 className="text-xl font-semibold mb-2">Start New Hold</h3>
              <p className="text-muted-foreground mb-6">Choose duration and amount to start earning rewards</p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                {durations.map((duration) => (
                  <button
                    key={duration.value}
                    onClick={() => setSelectedDuration(duration.value as any)}
                    className={`
                      p-4 rounded-lg border-2 text-center transition-smooth
                      ${selectedDuration === duration.value 
                        ? 'border-primary bg-primary/10' 
                        : 'border-border hover:border-primary/50'
                      }
                    `}
                  >
                    <div className="font-semibold text-lg">{duration.label}</div>
                    <div className="text-sm text-primary font-medium">{duration.apy}</div>
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-medium">Amount (ZKTC)</label>
                <Input
                  placeholder="Enter amount to hold"
                  value={holdAmount}
                  onChange={(e) => setHoldAmount(e.target.value)}
                  className="h-12"
                />
                <Button className="w-full bg-primary hover:bg-primary-hover h-12">
                  <Lock className="w-4 h-4 mr-2" />
                  Start Hold
                </Button>
              </div>
            </div>

            {/* Current Holdings */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">Current Holdings</h3>
              </div>
              <p className="text-muted-foreground">Track your active holds and earned rewards</p>

              <div className="space-y-4">
                {currentHoldings.map((holding, index) => (
                  <div key={index} className="card-elegant p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Lock className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-lg">{holding.amount}</div>
                          <div className="text-sm text-muted-foreground">• {holding.duration}</div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Details
                      </Button>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{holding.remaining} • Rewards: {holding.rewards}</span>
                        <span className="font-medium">Progress</span>
                        <span className="font-semibold">{holding.progress}%</span>
                      </div>
                      <Progress value={holding.progress} className="h-2" />
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

export default Donations;