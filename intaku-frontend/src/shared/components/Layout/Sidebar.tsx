import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Briefcase, FileText, Palette, Megaphone, Settings, UserCog, X, Layers } from 'lucide-react';
import { useAuth } from '../../../features/auth/hooks/useAuth';
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose
}) => {
  const {
    user
  } = useAuth();
  const navItems = [{
    icon: LayoutDashboard,
    label: 'Dashboard',
    path: '/dashboard'
  }, {
    icon: Users,
    label: 'Clients',
    path: '/clients'
  }, {
    icon: Briefcase,
    label: 'Services',
    path: '/services'
  }, {
    icon: FileText,
    label: 'Form Builder',
    path: '/form-builder'
  }, {
    icon: Palette,
    label: 'Branding',
    path: '/branding'
  }, {
    icon: Megaphone,
    label: 'Announcements',
    path: '/announcements'
  }, {
    icon: UserCog,
    label: 'Users',
    path: '/users'
  }, {
    icon: Settings,
    label: 'Settings',
    path: '/settings'
  }];
  return <>
      {/* Mobile Overlay */}
      {isOpen && <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-20 lg:hidden" onClick={onClose} />}

      {/* Sidebar Container */}
      <aside className={`
        fixed top-0 left-0 z-30 h-full w-72 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out shadow-xl
        lg:translate-x-0 lg:static lg:h-[calc(100vh-4rem)] lg:shadow-none lg:w-64
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="h-full flex flex-col">
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-800 lg:hidden">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-blue-600 flex items-center justify-center text-white">
                <Layers className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Intaku
              </span>
            </div>
            <button onClick={onClose} className="p-2 text-slate-400 hover:bg-slate-800 rounded-md transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Desktop Logo Area (hidden on mobile since header handles it, but good for structure) */}
          <div className="hidden lg:flex items-center gap-2 px-6 py-6 mb-2">
            <div className="h-8 w-8 rounded bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-900/20">
              <Layers className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Intaku
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
            <div className="px-3 mb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Menu
            </div>
            {navItems.map(item => <NavLink key={item.path} to={item.path} onClick={() => window.innerWidth < 1024 && onClose()} className={({
            isActive
          }) => `
                  flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200
                  ${isActive ? 'bg-blue-600 text-white shadow-md shadow-blue-900/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}
                `}>
                <item.icon className={`
                  w-5 h-5 mr-3 flex-shrink-0 transition-colors
                  ${window.location.pathname === item.path ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'}
                `} />
                {item.label}
              </NavLink>)}
          </nav>

          {/* User Info Footer */}
          <div className="p-4 border-t border-slate-800 bg-slate-900/50">
            <div className="flex items-center p-2 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer">
              <div className="h-9 w-9 rounded-full bg-blue-900/50 border border-blue-700/50 flex items-center justify-center text-blue-400 font-bold text-sm">
                {user?.name?.charAt(0) || 'U'}
              </div>
              <div className="ml-3 overflow-hidden">
                <p className="text-sm font-medium text-white truncate">
                  {user?.name}
                </p>
                <p className="text-xs text-slate-400 capitalize truncate">
                  {user?.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>;
};