import React, { useState } from 'react';
import { Search, Copy, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Sidebar from '@/components/Sidebar';

const Donations: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState<'30' | '90' | '180' | '360'>('90');

  const durations = [
    { value: '360', label: '360 Days' },
    { value: '180', label: '180 Days' },
    { value: '90', label: '90 Days' },
    { value: '30', label: '30 Days' },
  ];

  const holdToGiveData = [
    { address: '12412984ndqus..', time: '12:30 +5 GMT', holdAmount: 'ZKTC50.000', holdTime: '30 days', donation: '10 ZKTC' },
    { address: '12412984ndqus..', time: '12:30 +5 GMT', holdAmount: 'ZKTC50.000', holdTime: '30 days', donation: '10 ZKTC' },
    { address: '12412984ndqus..', time: '12:30 +5 GMT', holdAmount: 'ZKTC50.000', holdTime: '30 days', donation: '10 ZKTC' },
    { address: '12412984ndqus..', time: '12:30 +5 GMT', holdAmount: 'ZKTC50.000', holdTime: '30 days', donation: '10 ZKTC' },
    { address: '12412984ndqus..', time: '12:30 +5 GMT', holdAmount: 'ZKTC50.000', holdTime: '30 days', donation: '10 ZKTC' },
    { address: '12412984ndqus..', time: '12:30 +5 GMT', holdAmount: 'ZKTC50.000', holdTime: '30 days', donation: '10 ZKTC' },
    { address: '12412984ndqus..', time: '12:30 +5 GMT', holdAmount: 'ZKTC50.000', holdTime: '30 days', donation: '10 ZKTC' },
    { address: '12412984ndqus..', time: '12:30 +5 GMT', holdAmount: 'ZKTC50.000', holdTime: '30 days', donation: '10 ZKTC' },
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
            {/* Hold to Give Section */}
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Hold to Give</h1>
              <Button 
                onClick={() => setIsModalOpen(true)}
                className="bg-primary hover:bg-primary-hover text-primary-foreground"
              >
                Hold to Give
              </Button>
            </div>

            {/* Sidebar Navigation */}
            <div className="flex gap-4">
              {['HTG', 'STG', 'UTG', 'BTG'].map((category) => (
                <button 
                  key={category}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Hold to Give Table */}
            <div className="card-elegant overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-medium text-primary">Wallet Address</th>
                      <th className="text-left p-4 font-medium text-primary">Hold Amount</th>
                      <th className="text-left p-4 font-medium text-primary">Hold Time</th>
                      <th className="text-left p-4 font-medium text-primary">Donation Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {holdToGiveData.map((item, index) => (
                      <tr key={index} className="border-b border-border last:border-0">
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                              <Copy className="w-4 h-4 text-muted-foreground" />
                            </div>
                            <div>
                              <div className="font-medium">{item.address}</div>
                              <div className="text-sm text-muted-foreground">{item.time}</div>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 font-medium">{item.holdAmount}</td>
                        <td className="p-4 font-medium">{item.holdTime}</td>
                        <td className="p-4 font-medium text-primary">{item.donation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Duration Selection Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">Select Duration Of Hold</DialogTitle>
          </DialogHeader>
          
            {/* Enhanced Hold to Give Modal */}
            <div className="py-6 space-y-6">
              <div className="grid grid-cols-4 gap-4 mb-8">
                {durations.map((duration) => (
                  <button
                    key={duration.value}
                    onClick={() => setSelectedDuration(duration.value as any)}
                    className={`
                      px-6 py-3 rounded-full border-2 font-medium transition-smooth
                      ${selectedDuration === duration.value 
                        ? 'bg-primary text-primary-foreground border-primary' 
                        : 'border-primary text-primary hover:bg-primary/10'
                      }
                    `}
                  >
                    {duration.label}
                  </button>
                ))}
              </div>

              {/* Enter Zakat Amount */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Enter Zakat Amount in ZKTC</h4>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Amount in ZKTC</p>
                  <div className="text-3xl font-bold text-primary mb-4">320.40</div>
                </div>
              </div>

              <p className="text-center text-muted-foreground mb-8">
                Select a hold duration that feels right for you—the longer you hold, the greater the impact of your giving
              </p>

              <Button 
                onClick={() => setIsModalOpen(false)}
                className="w-full bg-primary hover:bg-primary-hover text-primary-foreground h-12"
              >
                Lock Amount
              </Button>
            </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Donations;