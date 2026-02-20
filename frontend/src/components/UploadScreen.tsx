import { Upload, TrendingUp, Clock, Award } from 'lucide-react';

interface DashboardHomeProps {
  onUploadClick: () => void;
}

export default function DashboardHome({ onUploadClick }: DashboardHomeProps) {
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Good morning, Alex 👋</h1>
        <p className="text-gray-600 text-lg">Here's what's happening with your cash flow today.</p>
      </div>

      {/* 4 Stat Cards — build these nicely! */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Card 1: Total Advanced */}
        {/* Card 2: Pending Invoices */}
        {/* Card 3: Avg Approval Time */}
        {/* Card 4: This Month Saved */}
      </div>

      {/* Big Upload Button */}
      <div>
        <button
          onClick={onUploadClick}
          className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold px-12 py-6 rounded-3xl flex items-center gap-4 shadow-xl shadow-blue-200 hover:scale-105 transition-all"
        >
          <Upload size={28} />
          Upload New Invoices
        </button>
      </div>
    </div>
  );
}