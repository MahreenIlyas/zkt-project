import React from 'react';
import { Search, Copy, Trophy, Medal, Award, Star, CheckCircle, Crown, Gem, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Sidebar from '@/components/Sidebar';
import AnimatedBackground from '@/components/AnimatedBackground';

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
    <AnimatedBackground>
      <div className="flex h-screen bg-background/80 backdrop-blur-sm">
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

            {/* Enhanced Rewards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {rewards.map((reward, index) => (
                <div key={index} className="card-elegant p-6 transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl group relative overflow-hidden">
                  {/* Glow effect */}
                  <div className={`absolute inset-0 ${reward.bgColor} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg`}></div>
                  
                  <div className={`w-16 h-16 ${reward.bgColor} rounded-2xl flex items-center justify-center mb-4 relative z-10 transition-all duration-300 group-hover:scale-110 shadow-lg`}>
                    <reward.icon className={`w-8 h-8 ${reward.textColor} transition-all duration-300 group-hover:drop-shadow-lg`} />
                    {reward.progress === 100 && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-success-foreground" />
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 relative z-10">{reward.tier}</h3>
                  <p className="text-sm text-muted-foreground mb-4 relative z-10">{reward.progress}% Complete</p>
                  <p className="text-sm font-medium mb-4 relative z-10 text-primary">{reward.days}</p>
                  
                  <div className="w-full bg-muted rounded-full h-3 relative z-10 overflow-hidden">
                    <div 
                      className={`h-3 rounded-full ${reward.color} transition-all duration-700 shadow-sm relative`}
                      style={{ width: `${reward.progress}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  {reward.progress === 100 && (
                    <Badge variant="success" className="mt-3 animate-bounce">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Achieved!
                    </Badge>
                  )}
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

            {/* Enhanced Achievement Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'First Donation', description: 'Made your very first charitable donation', rarity: 'Common', earned: true, icon: Trophy },
                { name: 'Zakat Master', description: 'Completed 100 consecutive days of giving', rarity: 'Legendary', earned: true, icon: Crown },
                { name: 'Generous Heart', description: 'Donated over 1000 ZKTC in total', rarity: 'Common', earned: true, icon: Medal },
                { name: 'Community Builder', description: 'Invited 10 friends to join the platform', rarity: 'Common', earned: true, icon: Star },
                { name: 'Diamond Giver', description: 'Reached Platinum tier status', rarity: 'Rare', earned: false, icon: Gem },
                { name: 'Early Adopter', description: 'Joined during the beta launch', rarity: 'Common', earned: true, icon: Award },
              ].map((achievement, index) => (
                <div key={index} className="card-elegant p-6 relative overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                  {/* Animated background based on rarity */}
                  {achievement.rarity === 'Legendary' && (
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/5 animate-pulse"></div>
                  )}
                  {achievement.rarity === 'Rare' && (
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/5"></div>
                  )}

                  {/* Enhanced Rarity Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <Badge 
                      variant={
                        achievement.rarity === 'Legendary' ? 'legendary' :
                        achievement.rarity === 'Rare' ? 'rare' : 'common'
                      }
                      className="font-bold shadow-lg"
                    >
                      {achievement.rarity === 'Legendary' && <Crown className="w-3 h-3 mr-1" />}
                      {achievement.rarity === 'Rare' && <Gem className="w-3 h-3 mr-1" />}
                      {achievement.rarity}
                    </Badge>
                  </div>

                  {/* Enhanced Achievement Icon */}
                  <div className={cn(
                    "w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 shadow-lg relative",
                    achievement.rarity === 'Legendary' && "bg-gradient-to-br from-yellow-500/20 to-orange-500/10 shadow-yellow-500/20",
                    achievement.rarity === 'Rare' && "bg-gradient-to-br from-purple-500/20 to-pink-500/10 shadow-purple-500/20",
                    achievement.rarity === 'Common' && "bg-primary/10 shadow-primary/20"
                  )}>
                    <achievement.icon className={cn(
                      "w-10 h-10 transition-all duration-300",
                      achievement.rarity === 'Legendary' && "text-yellow-500 drop-shadow-lg",
                      achievement.rarity === 'Rare' && "text-purple-500 drop-shadow-lg",
                      achievement.rarity === 'Common' && "text-primary"
                    )} />
                    
                    {achievement.earned && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full flex items-center justify-center shadow-lg animate-bounce">
                        <CheckCircle className="w-4 h-4 text-success-foreground" />
                      </div>
                    )}
                  </div>

                  {/* Enhanced Achievement Info */}
                  <div className="text-center space-y-3 relative z-10">
                    <h4 className="font-bold text-lg">{achievement.name}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
                  </div>

                  {/* Enhanced Status */}
                  <div className="mt-6 text-center">
                    {achievement.earned ? (
                      <div className="flex items-center justify-center gap-2 text-success font-medium">
                        <Sparkles className="w-4 h-4 animate-pulse" />
                        <span className="text-sm">Earned Today</span>
                      </div>
                    ) : (
                      <div className="text-sm text-muted-foreground font-medium opacity-75">
                        Not Earned Yet
                      </div>
                    )}
                  </div>

                  {/* Enhanced NFT Transfer Button */}
                  {achievement.earned && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full mt-4 text-xs font-medium bg-primary/5 border-primary/20 hover:bg-primary/10 transition-all duration-300"
                    >
                      <Gem className="w-3 h-3 mr-2" />
                      NFT Transferred →
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
    </AnimatedBackground>
  );
};

export default Rewards;