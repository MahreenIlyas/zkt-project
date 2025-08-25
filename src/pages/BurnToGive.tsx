import React, { useState } from 'react';
import { Search, Copy, Flame, ToggleLeft, ToggleRight, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Sidebar from '@/components/Sidebar';

const BurnToGive: React.FC = () => {
  const [burnAmount, setBurnAmount] = useState('');
  const [currency, setCurrency] = useState('ZKTC');

  const recentPurchases = [
    {
      address: '12412984ndqus..',
      time: '12:30 +5 GMT',
      burnAmount: 'ZKTC50.000',
      zakatPercent: 0.5,
      mirror: 'enabled'
    },
    {
      address: '12412984ndqus..',
      time: '12:30 +5 GMT',
      burnAmount: 'ZKTC50.000', 
      zakatPercent: 2.5,
      mirror: 'disabled'
    },
    {
      address: '12412984ndqus..',
      time: '12:30 +5 GMT',
      burnAmount: 'ZKTC50.000',
      zakatPercent: 0.5,
      mirror: 'enabled'
    },
    {
      address: '12412984ndqus..',
      time: '12:30 +5 GMT',
      burnAmount: 'ZKTC50.000',
      zakatPercent: 2.5,
      mirror: 'disabled'
    }
  ];

  const toggleMirror = (index: number) => {
    // Toggle mirror status (in real app this would update the state)
    console.log(`Toggle mirror for item ${index}`);
  };

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
            <h1 className="text-2xl font-bold">Burn To Give</h1>

            {/* Recent Purchases Table */}
            <div className="card-elegant overflow-hidden">
              <div className="p-6 border-b border-border">
                <h3 className="text-xl font-semibold">Recent Purchases</h3>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted/30">
                      <th className="text-left p-4 font-medium text-primary">Wallet Address</th>
                      <th className="text-left p-4 font-medium text-primary">Burn Amount</th>
                      <th className="text-left p-4 font-medium text-primary">Zakat %</th>
                      <th className="text-left p-4 font-medium text-primary">Mirror</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentPurchases.map((purchase, index) => (
                      <tr key={index} className="border-b border-border last:border-0 hover:bg-muted/20 transition-smooth">
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                              <Wallet className="w-4 h-4 text-muted-foreground" />
                            </div>
                            <div>
                              <div className="font-medium">{purchase.address}</div>
                              <div className="text-sm text-muted-foreground">{purchase.time}</div>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 font-medium">{purchase.burnAmount}</td>
                        <td className="p-4 font-medium">{purchase.zakatPercent}%</td>
                        <td className="p-4">
                          <button 
                            onClick={() => toggleMirror(index)}
                            className="flex items-center gap-2 text-sm font-medium transition-smooth hover:opacity-80"
                          >
                            {purchase.mirror === 'enabled' ? (
                              <>
                                <ToggleRight className="w-5 h-5 text-success" />
                                <span className="text-success">Enable</span>
                              </>
                            ) : (
                              <>
                                <ToggleLeft className="w-5 h-5 text-destructive" />
                                <span className="text-destructive">Disable</span>
                              </>
                            )}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Enter Burn Amount */}
            <div className="card-elegant p-6">
              <h3 className="text-xl font-semibold mb-6">Enter Burn Amount</h3>
              
              <div className="flex gap-3">
                <div className="flex-1">
                  <Input
                    placeholder="Enter Amount in ZKTC"
                    value={burnAmount}
                    onChange={(e) => setBurnAmount(e.target.value)}
                    className="h-12 text-lg"
                  />
                </div>
                <Select value={currency} onValueChange={setCurrency}>
                  <SelectTrigger className="w-32 h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ZKTC">ZKTC</SelectItem>
                    <SelectItem value="ETH">ETH</SelectItem>
                    <SelectItem value="SOL">SOL</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full mt-6 bg-primary hover:bg-primary-hover h-12">
                <Flame className="w-5 h-5 mr-2" />
                Burn now
              </Button>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  And establish prayer and give zakah and bow with those who bow [Al Quran].{' '}
                  <span className="arabic-text">وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَارْكَعُوا مَعَ الرَّاكِعِينَ</span>
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BurnToGive;