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

            {/* Active Proposals */}
            <div className="card-elegant p-6">
              <h3 className="text-xl font-semibold mb-6">Active Proposals</h3>
              
              <div className="space-y-4">
                {[
                  {
                    id: 'PROP-001',
                    title: 'Increase Zakat Distribution Rate',
                    description: 'Proposal to increase the automatic zakat distribution rate from 2.5% to 3% for enhanced charitable impact.',
                    author: 'zakah.eth',
                    timeLeft: '5 days left',
                    votes: { yes: 856, no: 124 },
                    status: 'active'
                  },
                  {
                    id: 'PROP-002', 
                    title: 'New Partnership with Islamic Relief',
                    description: 'Establish strategic partnership with Islamic Relief organization for expanded donation channels.',
                    author: 'community.eth',
                    timeLeft: '12 days left',
                    votes: { yes: 642, no: 89 },
                    status: 'active'
                  },
                  {
                    id: 'PROP-003',
                    title: 'Platform Fee Reduction',
                    description: 'Reduce platform operational fees from 1% to 0.5% to maximize charitable donations.',
                    author: 'governance.eth',
                    timeLeft: '2 days left',
                    votes: { yes: 1203, no: 156 },
                    status: 'passing'
                  }
                ].map((proposal, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg hover:border-primary/50 transition-smooth">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {proposal.id}
                          </Badge>
                          <Badge 
                            variant={proposal.status === 'passing' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {proposal.status === 'passing' ? 'Passing' : 'Active'}
                          </Badge>
                        </div>
                        <h4 className="font-semibold text-lg mb-2">{proposal.title}</h4>
                        <p className="text-muted-foreground text-sm mb-3">{proposal.description}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>By {proposal.author}</span>
                          <span>{proposal.timeLeft}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Voting Results */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Yes ({proposal.votes.yes} votes)</span>
                        <span>No ({proposal.votes.no} votes)</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="h-2 bg-success rounded-full transition-all duration-500"
                          style={{ 
                            width: `${(proposal.votes.yes / (proposal.votes.yes + proposal.votes.no)) * 100}%` 
                          }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end gap-2 mt-4">
                      <Button variant="outline" size="sm">
                        Vote No
                      </Button>
                      <Button size="sm" className="bg-primary hover:bg-primary-hover">
                        Vote Yes
                      </Button>
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