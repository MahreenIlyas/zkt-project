import React from 'react';
import { Search, Copy, TrendingUp, TrendingDown, Clock, DollarSign, ArrowUpRight, ArrowDownLeft, Sparkles, Crown, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import MetricCard from '@/components/ui/metric-card';
import Sidebar from '@/components/Sidebar';
import AnimatedBackground from '@/components/AnimatedBackground';

const Dashboard: React.FC = () => {
  return (
    <AnimatedBackground>
      <div className="flex h-screen bg-background/80 backdrop-blur-sm">
        <Sidebar />
      
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Enhanced Header */}
          <header className="bg-card/90 backdrop-blur-sm border-b border-border p-4 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center flex-1 max-w-lg">
                <div className="relative flex-1 group">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 transition-colors group-focus-within:text-primary" />
                  <Input
                    placeholder="Search transactions, rewards..."
                    className="pl-10 bg-muted/50 border-0 h-11 transition-all duration-300 focus:bg-background focus:shadow-lg"
                  />
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Badge variant="default" className="bg-gradient-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                  124@ki214838...
                  <Copy className="w-3 h-3 ml-2 hover:scale-110 transition-transform" />
                </Badge>
              </div>
            </div>
          </header>

          {/* Enhanced Main Content */}
          <main className="flex-1 overflow-auto p-6">
            <div className="space-y-8">
              {/* Enhanced Token Balance Section */}
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <div className="card-elegant p-8 relative overflow-hidden group hover:scale-[1.01] transition-all duration-300">
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
                            <Crown className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <div>
                            <h2 className="text-xl font-bold">ZKTC Token Balance</h2>
                            <p className="text-sm text-muted-foreground">Your digital zakat wallet</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="bg-card/50 backdrop-blur-sm px-3 py-1 font-medium">
                          1 ZKTC = $67,399.41 SOL
                        </Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-5xl font-black bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                          $1,320.40
                        </div>
                        <div className="flex items-center gap-2 text-success">
                          <ArrowUpRight className="w-4 h-4" />
                          <span className="text-sm font-medium">+12.5% this month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Quick Stats */}
                <div className="space-y-4">
                  <div className="group">
                    <MetricCard 
                      title="ZKL 5,500,000"
                      value="Total Earnings"
                      icon={TrendingUp}
                      iconColor="success"
                      className="hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-success/20"
                    />
                  </div>
                  <div className="group">
                    <MetricCard 
                      title="ZKL 3,250,000" 
                      value="Total Spendings"
                      icon={TrendingDown}
                      iconColor="warning"
                      className="hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-warning/20"
                    />
                  </div>
                </div>
              </div>

              {/* Enhanced Secondary Stats */}
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="group">
                  <MetricCard 
                    title="ZKL 99,000,000"
                    value="Monthly Transactions"
                    icon={Clock}
                    iconColor="primary"
                    className="hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-primary/20"
                  />
                </div>
                <div className="group">
                  <MetricCard 
                    title="ZKL 4,000,000"
                    value="Estimated Zakat"
                    icon={DollarSign}
                    iconColor="muted"
                    className="hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-muted/20"
                  />
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                {/* Enhanced Recent Activity */}
                <div className="lg:col-span-2">
                  <div className="card-elegant p-6 group hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                          <Sparkles className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Recent Activity</h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="hover:bg-primary/10 transition-colors">
                          Mar 2025
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {[
                        { date: '22 Mar, 2025', hash: '12412984ndqus..', time: '12:30 +5 GMT', type: 'Transferred', amount: '-ZKTC 50,000', isNegative: true, icon: ArrowDownLeft },
                        { date: '22 Mar, 2025', hash: '54212984ndqus..', time: '12:30 +5 GMT', type: 'Received', amount: '+ZKTC 250,000', isNegative: false, icon: ArrowUpRight },
                        { date: '22 Mar, 2025', hash: '54212984ndqus..', time: '12:30 +5 GMT', type: 'Received', amount: '+ZKTC 250,000', isNegative: false, icon: ArrowUpRight },
                        { date: '21 Mar, 2025', hash: '22212984ndqus..', time: '12:30 +5 GMT', type: 'Received', amount: '+ZKTC 250,000', isNegative: false, icon: ArrowUpRight },
                      ].map((transaction, index) => (
                        <div key={index} className="flex items-center justify-between p-4 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group/item">
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                              transaction.isNegative 
                                ? 'bg-destructive/10 group-hover/item:bg-destructive/20' 
                                : 'bg-success/10 group-hover/item:bg-success/20'
                            }`}>
                              <transaction.icon className={`w-5 h-5 ${
                                transaction.isNegative ? 'text-destructive' : 'text-success'
                              }`} />
                            </div>
                            <div>
                              <div className="flex items-center gap-3 mb-1">
                                <span className="text-sm font-semibold">{transaction.hash}</span>
                                <Badge 
                                  variant={transaction.isNegative ? "destructive" : "success"}
                                  className="h-6 text-xs font-medium"
                                >
                                  {transaction.type}
                                </Badge>
                              </div>
                              <div className="text-xs text-muted-foreground">{transaction.time}</div>
                            </div>
                          </div>
                          <div className={`font-bold text-lg ${transaction.isNegative ? 'text-destructive' : 'text-success'}`}>
                            {transaction.amount}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Enhanced Progress & Rewards */}
                <div>
                  <div className="card-elegant p-6 group hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center shadow-lg">
                          <Trophy className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <h3 className="text-xl font-bold">Progress & Rewards</h3>
                      </div>
                      <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10 transition-colors">
                        View All
                      </Button>
                    </div>

                    <div className="space-y-4">
                      {[
                        { tier: 'Bronze', progress: '100', days: '30 Days', color: 'bg-gradient-to-r from-orange-500 to-orange-600', textColor: 'text-orange-500', bgColor: 'bg-orange-500/10' },
                        { tier: 'Silver', progress: '70', days: '185 Days', color: 'bg-gradient-to-r from-gray-400 to-gray-500', textColor: 'text-gray-400', bgColor: 'bg-gray-400/10' },
                        { tier: 'Gold', progress: '25', days: '365 Days', color: 'bg-gradient-to-r from-yellow-500 to-yellow-600', textColor: 'text-yellow-500', bgColor: 'bg-yellow-500/10' },
                        { tier: 'Platinum', progress: '5', days: '365 Days', color: 'bg-gradient-to-r from-slate-300 to-slate-400', textColor: 'text-slate-300', bgColor: 'bg-slate-300/10' },
                      ].map((reward, index) => (
                        <div key={index} className="card-elegant p-4 hover:scale-[1.02] transition-all duration-300 group/reward">
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`w-4 h-4 rounded-full ${reward.color} shadow-lg`}></div>
                            <span className={`font-bold ${reward.textColor}`}>{reward.tier}</span>
                            {reward.progress === '100' && (
                              <Badge variant="success" className="ml-auto text-xs">
                                <Crown className="w-3 h-3 mr-1" />
                                Complete
                              </Badge>
                            )}
                          </div>
                          <div className="text-sm text-muted-foreground mb-2 font-medium">{reward.progress}% Complete</div>
                          <div className="text-sm font-semibold text-primary mb-3">{reward.days}</div>
                          <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                            <div 
                              className={`h-3 rounded-full ${reward.color} transition-all duration-700 relative`}
                              style={{ width: `${reward.progress}%` }}
                            >
                              <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </AnimatedBackground>
  );
};

export default Dashboard;