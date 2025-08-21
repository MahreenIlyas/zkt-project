import React from 'react';
import { Search, Copy, Users, Vote, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import MetricCard from '@/components/ui/metric-card';
import Sidebar from '@/components/Sidebar';

const DAO: React.FC = () => {
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
              <h1 className="text-2xl font-bold">DAO Governance</h1>
              <Button className="bg-primary hover:bg-primary-hover">
                Create Proposal
              </Button>
            </div>

            {/* DAO Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              <MetricCard 
                title="Total Members"
                value="1,247"
                icon={Users}
                iconColor="primary"
              />
              <MetricCard 
                title="Active Proposals"
                value="8"
                icon={Vote}
                iconColor="warning"
              />
              <MetricCard 
                title="Treasury Value"
                value="$45.2M"
                icon={TrendingUp}
                iconColor="success"
              />
            </div>

            {/* DAO Request Cards */}
            <div className="card-elegant p-6">
              <h3 className="text-xl font-semibold mb-6">DAO Requests</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((request) => (
                  <div key={request} className="card-elegant p-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-lg mb-2">
                          Update zakat slider %age from 0.5 to 1 %
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Update zakat slider %age from 0.5 to 1 %
                        </p>
                      </div>

                      <div className="flex gap-3">
                        <Button 
                          className="flex-1 bg-success hover:bg-success/90 text-success-foreground"
                          size="sm"
                        >
                          Accept
                        </Button>
                        <Button 
                          className="flex-1 bg-destructive hover:bg-destructive/90 text-destructive-foreground"
                          size="sm"
                        >
                          Reject
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Governance Stats */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-elegant p-6">
                <h3 className="text-lg font-semibold mb-4">Your Voting Power</h3>
                <div className="text-3xl font-bold mb-2">2,450 ZKTC</div>
                <p className="text-muted-foreground text-sm">
                  Based on your token holdings and delegation
                </p>
              </div>
              
              <div className="card-elegant p-6">
                <h3 className="text-lg font-semibold mb-4">Participation Rate</h3>
                <div className="text-3xl font-bold mb-2">67%</div>
                <p className="text-muted-foreground text-sm">
                  Community participation in governance
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DAO;