import React, { useState } from 'react';
import { Search, Copy, Calculator, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import Sidebar from '@/components/Sidebar';

const UserTriggeredGiving: React.FC = () => {
  const [zakatPercentage, setZakatPercentage] = useState([2.5]);

  const recentPurchases = [
    {
      address: '12412984ndqus..',
      time: '12:30 +5 GMT',
      amount: 'ZKTC50.000',
      zakatPercent: 0.5,
      zakatAmount: 'ZKTC10.000'
    },
    {
      address: '12412984ndqus..',
      time: '12:30 +5 GMT', 
      amount: 'ZKTC50.000',
      zakatPercent: 2.5,
      zakatAmount: 'ZKTC50.000'
    }
  ];

  const calculatedZakatAmount = 320.40;

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
            <h1 className="text-2xl font-bold">User Triggered Giving</h1>

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
                      <th className="text-left p-4 font-medium text-primary">Amount</th>
                      <th className="text-left p-4 font-medium text-primary">Zakat %</th>
                      <th className="text-left p-4 font-medium text-primary">Zakat Amount</th>
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
                        <td className="p-4 font-medium">{purchase.amount}</td>
                        <td className="p-4 font-medium">{purchase.zakatPercent}%</td>
                        <td className="p-4 font-medium text-primary">{purchase.zakatAmount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Zakat Percentage Slider */}
            <div className="card-elegant p-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Zakat Percentage</h3>
                  <span className="text-2xl font-bold text-primary">{zakatPercentage[0]}%</span>
                </div>

                <div className="space-y-4">
                  <Slider
                    value={zakatPercentage}
                    onValueChange={setZakatPercentage}
                    max={10}
                    min={0.1}
                    step={0.1}
                    className="w-full"
                  />
                  
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>0.10%</span>
                    <span>2.5% (Traditional)</span>
                    <span>10%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Zakat Amount Calculator */}
            <div className="card-elegant p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Zakat Amount</h3>
                  <p className="text-sm text-muted-foreground mb-4">Amount in ZKTC</p>
                  <div className="text-4xl font-bold text-primary mb-6">
                    {calculatedZakatAmount.toFixed(2)}
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary-hover h-12">
                    Donate now
                  </Button>
                </div>
              </div>

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

export default UserTriggeredGiving;