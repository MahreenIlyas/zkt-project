import React from 'react';
import { Search, Copy, Trophy, Medal, Award, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Sidebar from '@/components/Sidebar';

const Rewards: React.FC = () => {
  const rewards = [
    { 
      tier: 'Bronze', 
      progress: 100, 
      days: '30 Days', 
      icon: Medal,
      color: 'bg-orange-500',
      textColor: 'text-orange-500',
      bgColor: 'bg-orange-500/10'
    },
    { 
      tier: 'Silver', 
      progress: 70, 
      days: '185 Days', 
      icon: Award,
      color: 'bg-gray-400',
      textColor: 'text-gray-400',
      bgColor: 'bg-gray-400/10'
    },
    { 
      tier: 'Gold', 
      progress: 25, 
      days: '365 Days', 
      icon: Trophy,
      color: 'bg-yellow-500',
      textColor: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10'
    },
    { 
      tier: 'Platinum', 
      progress: 5, 
      days: '365 Days', 
      icon: Star,
      color: 'bg-slate-300',
      textColor: 'text-slate-300',
      bgColor: 'bg-slate-300/10'
    },
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
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Rewards & Progress</h1>
              <Button variant="outline">
                View History
              </Button>
            </div>

            {/* Rewards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {rewards.map((reward, index) => (
                <div key={index} className="card-elegant p-6 transition-smooth hover:scale-[1.02]">
                  <div className={`w-12 h-12 ${reward.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                    <reward.icon className={`w-6 h-6 ${reward.textColor}`} />
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2">{reward.tier}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{reward.progress}% Complete</p>
                  <p className="text-sm font-medium mb-4">{reward.days}</p>
                  
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${reward.color} transition-all duration-500`}
                      style={{ width: `${reward.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Detailed Progress */}
            <div className="card-elegant p-6">
              <h3 className="text-xl font-semibold mb-6">Detailed Progress</h3>
              
              <div className="space-y-4">
                {rewards.map((reward, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 ${reward.bgColor} rounded-lg flex items-center justify-center`}>
                          <reward.icon className={`w-4 h-4 ${reward.textColor}`} />
                        </div>
                        <div>
                          <h4 className="font-medium">{reward.tier} Tier</h4>
                          <p className="text-sm text-muted-foreground">Target: {reward.days}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{reward.progress}%</div>
                        <div className="text-sm text-muted-foreground">Complete</div>
                      </div>
                    </div>
                    
                    <div className="w-full bg-muted rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full ${reward.color} transition-all duration-700`}
                        style={{ width: `${reward.progress}%` }}
                      ></div>
                    </div>
                    
                    {reward.progress === 100 && (
                      <Badge className="mt-3 bg-success text-success-foreground">
                        Completed ✓
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Achievement Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card-elegant p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">1</h3>
                <p className="text-muted-foreground">Achievements Unlocked</p>
              </div>
              
              <div className="card-elegant p-6 text-center">
                <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-warning" />
                </div>
                <h3 className="text-2xl font-bold mb-2">3</h3>
                <p className="text-muted-foreground">In Progress</p>
              </div>
              
              <div className="card-elegant p-6 text-center">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Medal className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-2">30</h3>
                <p className="text-muted-foreground">Total Days</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Rewards;