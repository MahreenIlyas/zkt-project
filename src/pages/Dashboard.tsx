import React from 'react';
import { Search, Copy, TrendingUp, TrendingDown, Clock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import MetricCard from '@/components/ui/metric-card';
import Sidebar from '@/components/Sidebar';

const Dashboard: React.FC = () => {
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
            {/* Token Balance Section */}
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="card-elegant p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold">ZKTC Token</h2>
                    <Badge variant="outline">1 ZKTC=$67399.41 SOL</Badge>
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2">$1320.40</div>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="space-y-4">
                <MetricCard 
                  title="ZKL 5.500.000"
                  value="Total Earnings"
                  icon={TrendingUp}
                  iconColor="success"
                />
                <MetricCard 
                  title="ZKL 3.250.000" 
                  value="Total Spendings"
                  icon={TrendingDown}
                  iconColor="warning"
                />
              </div>
            </div>

            {/* Secondary Stats */}
            <div className="grid lg:grid-cols-2 gap-6">
              <MetricCard 
                title="ZKL 99.000.000"
                value="Monthly Transactions"
                icon={Clock}
                iconColor="primary"
              />
              <MetricCard 
                title="ZKL 4.000.000"
                value="Estimated Zakat"
                icon={DollarSign}
                iconColor="muted"
              />
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Recent Activity */}
              <div className="lg:col-span-2">
                <div className="card-elegant p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold">Recent Activity</h3>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Mar 2025
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      { date: '22 Mar, 2025', hash: '12412984ndqus..', time: '12:30 +5 GMT', type: 'Transferred', amount: '-ZKTC50.000', isNegative: true },
                      { date: '22 Mar, 2025', hash: '54212984ndqus..', time: '12:30 +5 GMT', type: 'Received', amount: '+ZKTC250.000', isNegative: false },
                      { date: '22 Mar, 2025', hash: '54212984ndqus..', time: '12:30 +5 GMT', type: 'Received', amount: '+ZKTC250.000', isNegative: false },
                      { date: '21 Mar, 2025', hash: '22212984ndqus..', time: '12:30 +5 GMT', type: 'Received', amount: '+ZKTC250.000', isNegative: false },
                    ].map((transaction, index) => (
                      <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                            <Copy className="w-4 h-4 text-muted-foreground" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-sm font-medium">{transaction.hash}</span>
                              <Badge 
                                variant={transaction.isNegative ? "destructive" : "secondary"}
                                className="h-5 text-xs"
                              >
                                {transaction.type}
                              </Badge>
                            </div>
                            <div className="text-xs text-muted-foreground">{transaction.time}</div>
                          </div>
                        </div>
                        <div className={`font-medium ${transaction.isNegative ? 'text-destructive' : 'text-success'}`}>
                          {transaction.amount}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Progress & Rewards */}
              <div>
                <div className="card-elegant p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold">Progress & Reward</h3>
                    <Button variant="ghost" size="sm" className="text-primary">
                      View All
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {[
                      { tier: 'Bronze', progress: '100% Complete', days: '30 Days', color: 'bg-orange-500' },
                      { tier: 'Silver', progress: '70% Complete', days: '185 Days', color: 'bg-gray-400' },
                      { tier: 'Gold', progress: '25% Complete', days: '365 Days', color: 'bg-yellow-500' },
                      { tier: 'Platinum', progress: '5% Complete', days: '365 Days', color: 'bg-slate-300' },
                    ].map((reward, index) => (
                      <div key={index} className="card-elegant p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-3 h-3 rounded-full ${reward.color}`}></div>
                          <span className="font-medium text-foreground">{reward.tier}</span>
                        </div>
                        <div className="text-sm text-muted-foreground mb-2">{reward.progress}</div>
                        <div className="text-sm font-medium">{reward.days}</div>
                        <div className="w-full bg-muted rounded-full h-2 mt-2">
                          <div 
                            className={`h-2 rounded-full ${reward.color}`}
                            style={{ width: reward.progress }}
                          ></div>
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
  );
};

export default Dashboard;