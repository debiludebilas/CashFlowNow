import { Upload, TrendingUp, Clock, Award } from "lucide-react";

interface DashboardHomeProps {
  onUploadClick: () => void;
}

export default function DashboardHome({ onUploadClick }: DashboardHomeProps) {
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Good morning, Alex 👋
        </h1>
        <p className="text-gray-600 text-lg">
          Here's what's happening with your cash flow today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Card 1: Total Advanced */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="text-gray-500 text-sm font-medium">
              TOTAL ADVANCED
            </div>
            <div className="text-emerald-500">
              <TrendingUp size={22} />
            </div>
          </div>
          <div className="text-4xl font-bold text-gray-900 mb-1">£24,850</div>
          <div className="text-emerald-600 text-sm font-medium">
            +£8,200 this week
          </div>
        </div>

        {/* Card 2: Pending Invoices */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="text-gray-500 text-sm font-medium">
              PENDING INVOICES
            </div>
            <div className="text-amber-500">
              <Clock size={22} />
            </div>
          </div>
          <div className="text-4xl font-bold text-gray-900 mb-1">12</div>
          <div className="text-amber-600 text-sm font-medium">
            Worth £31,450
          </div>
        </div>

        {/* Card 3: Avg Approval Time */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="text-gray-500 text-sm font-medium">
              AVG APPROVAL TIME
            </div>
            <div className="text-blue-500">
              <Award size={22} />
            </div>
          </div>
          <div className="text-4xl font-bold text-gray-900 mb-1">18s</div>
          <div className="text-blue-600 text-sm font-medium">AI powered</div>
        </div>

        {/* Card 4: This Month Saved */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="text-gray-500 text-sm font-medium">
              THIS MONTH SAVED
            </div>
            <div className="text-emerald-500">
              <TrendingUp size={22} />
            </div>
          </div>
          <div className="text-4xl font-bold text-gray-900 mb-1">£1,340</div>
          <div className="text-emerald-600 text-sm font-medium">
            vs traditional factoring
          </div>
        </div>
      </div>

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
