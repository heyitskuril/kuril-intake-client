import React, { useEffect, useState, useRef } from 'react';
import { Menu, Bell, Search, LogOut, User as UserIcon, Settings, Layers } from 'lucide-react';
import { useAuth } from '../../../features/auth/hooks/useAuth';
import { Button } from '../UI/Button';
interface HeaderProps {
  onMenuClick: () => void;
}
export function Header({
  onMenuClick
}: HeaderProps) {
  const {
    user,
    logout
  } = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return <header className="sticky top-0 z-20 bg-white border-b border-slate-200 h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick} className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-md transition-colors">
          <Menu className="h-6 w-6" />
        </button>

        {/* Search Bar - Hidden on mobile */}
        <div className="hidden md:flex items-center relative max-w-md w-full">
          <Search className="absolute left-3 h-4 w-4 text-slate-400" />
          <input type="text" placeholder="Search clients, services..." className="pl-10 pr-4 py-2 w-64 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all placeholder-slate-400 text-slate-700" />
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="relative" ref={dropdownRef}>
          <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="flex items-center gap-2 p-1 rounded-full hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200">
            <img src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.name || 'User'}&background=2563eb&color=fff`} alt={user?.name} className="h-8 w-8 rounded-full object-cover ring-2 ring-white shadow-sm" />
            <span className="hidden sm:block text-sm font-medium text-slate-700 pr-2">
              {user?.name}
            </span>
          </button>

          {isProfileOpen && <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-slate-100 py-1 animate-in fade-in slide-in-from-top-2 duration-200 ring-1 ring-black ring-opacity-5">
              <div className="px-4 py-3 border-b border-slate-100 bg-slate-50/50">
                <p className="text-sm font-medium text-slate-900">
                  {user?.name}
                </p>
                <p className="text-xs text-slate-500 truncate">{user?.email}</p>
              </div>

              <div className="py-1">
                <a href="/profile" className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">
                  <UserIcon className="h-4 w-4" />
                  Profile
                </a>
                <a href="/settings" className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">
                  <Settings className="h-4 w-4" />
                  Settings
                </a>
              </div>

              <div className="border-t border-slate-100 mt-1 py-1">
                <button onClick={logout} className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors">
                  <LogOut className="h-4 w-4" />
                  Sign out
                </button>
              </div>
            </div>}
        </div>
      </div>
    </header>;
}