import React from 'react';
import { Search, Copy, TrendingUp, DollarSign, Activity, Calendar, Clock, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import MetricCard from '@/components/ui/metric-card';
import Sidebar from '@/components/Sidebar';
import './NGODashboard.css';

const NGODashboard: React.FC = () => {
  const transactions = [
    { id: '124256#endqun...', type: 'Transferred', amount: '-ZKTC30,000', time: '12:00, 14 SOUT', status: 'negative' },
    { id: '542256#endqun...', type: 'Received', amount: '+ZKTC200,000', time: '12:00, 14 SOUT', status: 'positive' },
    { id: '632256#endqun...', type: 'Received', amount: '+ZKTC200,000', time: '12:00, 14 SOUT', status: 'positive' },
  ];

  const donationActivity = [
    { id: '124256#endqun...', type: 'Transferred', amount: '-ZKTC30,000', time: '12:00, 14 SOUT', status: 'negative' },
    { id: '542256#endqun...', type: 'Received', amount: '+ZKTC200,000', time: '12:00, 14 SOUT', status: 'positive' },
    { id: '632256#endqun...', type: 'Received', amount: '+ZKTC200,000', time: '12:00, 14 SOUT', status: 'positive' },
  ];

  return (
    <div className="ngo-dashboard">
      <Sidebar />
      
      <div className="ngo-main-content">
        {/* Header */}
        <header className="ngo-header">
          <div className="ngo-header-content">
            <div className="ngo-search-container">
              <div className="ngo-search-wrapper">
                <Search className="ngo-search-icon" />
                <Input
                  placeholder="Type something..."
                  className="ngo-search-input"
                />
              </div>
            </div>
            
            <div className="ngo-user-info">
              <Badge className="ngo-user-badge">
                2x151-0043994-
                <Copy className="ngo-copy-icon" />
              </Badge>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="ngo-content">
          {/* Ultra Compact Top Metrics Row */}
          <div className="ngo-ultra-compact-metrics">
            {/* ZKTC Token Card */}
            <div className="ngo-mini-card">
              <div className="ngo-mini-label">ZKTC Token</div>
              <div className="ngo-mini-value">$1320.40</div>
              <div className="ngo-mini-change">+0.78% decrease in 24h</div>
            </div>

            {/* Stats & Chart Card */}
            <div className="ngo-mini-card ngo-wide-card">
              <div className="ngo-tabs-row">
                <button className="ngo-mini-tab active">Daily</button>
                <button className="ngo-mini-tab">Weekly</button>
                <button className="ngo-mini-tab">Monthly</button>
              </div>
              <div className="ngo-values-row">
                <span className="ngo-mini-amount">ZK31,000</span>
                <span className="ngo-mini-amount">ZK251,000</span>
                <span className="ngo-mini-amount">ZK915,200</span>
              </div>
              <div className="ngo-bottom-row">
                <div className="ngo-zakat-label">
                  <span className="ngo-mini-dot"></span>
                  Zakat's
                </div>
                <div className="ngo-mini-chart">
                  <div className="ngo-mini-donut">
                    <div className="ngo-mini-center">
                      <div className="ngo-chart-label">Activities</div>
                      <div className="ngo-chart-value">ZKTC26,000</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Crescent Badges Card */}
            <div className="ngo-mini-card">
              <div className="ngo-mini-label">Your Crescent Badges</div>
              <div className="ngo-mini-crescents">
                <span className="ngo-mini-crescent">🌙</span>
                <span className="ngo-mini-crescent">🌙</span>
                <span className="ngo-mini-crescent">🌙</span>
                <span className="ngo-mini-crescent">🌙</span>
                <span className="ngo-mini-crescent">🌙</span>
              </div>
              <div className="ngo-mini-count">6/6</div>
            </div>
          </div>

          {/* Transaction Sections */}
          <div className="ngo-sections">
            {/* 2mcx1 Section */}
            <div className="ngo-section">
              <div className="ngo-section-header">
                <h2 className="ngo-section-title">2mcx1</h2>
                <div className="ngo-section-date">
                  <Calendar className="ngo-date-icon" />
                  <span>Mar, 2025</span>
                  <Button size="sm" className="ngo-view-all-btn">
                    View all
                  </Button>
                </div>
              </div>
              
              <div className="ngo-transaction-list">
                <div className="ngo-transaction-date">22 Mar, 2025</div>
                {transactions.map((transaction, index) => (
                  <div key={index} className="ngo-transaction-item">
                    <div className="ngo-transaction-left">
                      <div className="ngo-transaction-icon">
                        {transaction.status === 'positive' ? 
                          <ArrowDownRight className="ngo-icon-positive" /> : 
                          <ArrowUpRight className="ngo-icon-negative" />
                        }
                      </div>
                      <div className="ngo-transaction-info">
                        <div className="ngo-transaction-id">{transaction.id}</div>
                        <div className="ngo-transaction-time">{transaction.time}</div>
                      </div>
                      <div className="ngo-transaction-type">
                        <Badge className={`ngo-transaction-badge ngo-${transaction.type.toLowerCase()}`}>
                          {transaction.type}
                        </Badge>
                      </div>
                    </div>
                    <div className={`ngo-transaction-amount ngo-amount-${transaction.status}`}>
                      {transaction.amount}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Donations Activity Section */}
            <div className="ngo-section">
              <div className="ngo-section-header">
                <h2 className="ngo-section-title">Donations Activity</h2>
                <div className="ngo-section-date">
                  <Calendar className="ngo-date-icon" />
                  <span>Mar, 2025</span>
                  <Button size="sm" className="ngo-view-all-btn">
                    View all
                  </Button>
                </div>
              </div>
              
              <div className="ngo-transaction-list">
                <div className="ngo-transaction-date">22 Mar, 2025</div>
                {donationActivity.map((transaction, index) => (
                  <div key={index} className="ngo-transaction-item">
                    <div className="ngo-transaction-left">
                      <div className="ngo-transaction-icon">
                        {transaction.status === 'positive' ? 
                          <ArrowDownRight className="ngo-icon-positive" /> : 
                          <ArrowUpRight className="ngo-icon-negative" />
                        }
                      </div>
                      <div className="ngo-transaction-info">
                        <div className="ngo-transaction-id">{transaction.id}</div>
                        <div className="ngo-transaction-time">{transaction.time}</div>
                      </div>
                      <div className="ngo-transaction-type">
                        <Badge className={`ngo-transaction-badge ngo-${transaction.type.toLowerCase()}`}>
                          {transaction.type}
                        </Badge>
                      </div>
                    </div>
                    <div className={`ngo-transaction-amount ngo-amount-${transaction.status}`}>
                      {transaction.amount}
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

export default NGODashboard;