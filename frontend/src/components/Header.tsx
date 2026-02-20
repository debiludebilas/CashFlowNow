export default function Header() {
  return (
    <header className="h-16 border-b bg-white px-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-semibold text-gray-800">Welcome back, Alex</h2>
      </div>

      <div className="flex items-center gap-6">
        <div className="text-sm text-gray-500">Today: 19 Feb 2026</div>
        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer">
          👤
        </div>
      </div>
    </header>
  );
}