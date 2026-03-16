import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Lightbulb, 
  DollarSign, 
  Mic2, 
  GraduationCap, 
  Heart, 
  Bell, 
  Search, 
  Calendar, 
  ChevronRight, 
  MoreVertical,
  Plus,
  CheckCircle2,
  Clock,
  AlertCircle,
  TrendingUp,
  Award as AwardIcon,
  Users,
  Settings,
  Shield,
  Trash2,
  RotateCcw,
  Linkedin,
  Instagram,
  Globe,
  ExternalLink,
  Download,
  Upload
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { motion, AnimatePresence } from 'motion/react';
import { 
  PUBLICATIONS as INITIAL_PUBLICATIONS, 
  PROJECTS as INITIAL_PROJECTS, 
  GRANTS as INITIAL_GRANTS, 
  CONFERENCES, 
  TASKS as INITIAL_TASKS, 
  ANALYTICS_DATA, 
  EDUCATION, 
  PROFESSIONAL_PROFILE,
  LEADERSHIP_ROLES,
  BEST_PRESENTER_AWARDS,
  STUDENT_PROJECTS,
  COURSES_TAUGHT,
  PERSONAL_GOALS as INITIAL_GOALS,
  AWARDS,
  COLLABORATIONS,
  REFERENCES
} from './constants';
import { Publication, Project, Grant, Conference, Task, LeadershipRole, BestPresenterAward, StudentProject, Award, Reference, Collaboration } from './types';
import { ManagementModal } from './components/ManagementModal';

const SidebarItem = ({ icon: Icon, label, active, onClick }: { icon: any, label: string, active: boolean, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
      active ? 'bg-navy text-white shadow-lg' : 'text-navy/60 hover:bg-navy/5 hover:text-navy'
    }`}
  >
    <Icon size={20} />
    <span className="font-medium">{label}</span>
  </button>
);

const StatCard = ({ label, value, trend, icon: Icon }: { label: string, value: string, trend: string, icon: any }) => (
  <div className="bg-white p-6 rounded-2xl border border-navy/5 shadow-sm">
    <div className="flex justify-between items-start mb-4">
      <div className="p-2 bg-navy/5 rounded-lg text-navy">
        <Icon size={24} />
      </div>
      <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
        <TrendingUp size={12} /> {trend}
      </span>
    </div>
    <h3 className="text-navy/60 text-sm font-medium">{label}</h3>
    <p className="text-2xl font-bold text-navy mt-1">{value}</p>
  </div>
);

const ProgressBar = ({ progress, color = 'bg-navy' }: { progress: number, color?: string }) => (
  <div className="w-full bg-navy/5 rounded-full h-2 overflow-hidden">
    <motion.div 
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`${color} h-full rounded-full`}
    />
  </div>
);

const SectionHeader = ({ title, subtitle, icon: Icon }: { title: string, subtitle?: string, icon?: any }) => (
  <div className="mb-6">
    <div className="flex items-center gap-2 mb-1">
      {Icon && <Icon size={20} className="text-gold" />}
      <h3 className="text-xl font-bold text-navy">{title}</h3>
    </div>
    {subtitle && <p className="text-sm text-navy/60">{subtitle}</p>}
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [isManagementMode, setIsManagementMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'Publication' | 'Project' | 'Grant' | 'Task' | 'Goal'>('Publication');

  // Data State
  const [publications, setPublications] = useState<Publication[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [grants, setGrants] = useState<Grant[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [goals, setGoals] = useState<any[]>([]);

  // Load Data
  useEffect(() => {
    const savedPubs = localStorage.getItem('publications');
    const savedProjects = localStorage.getItem('projects');
    const savedGrants = localStorage.getItem('grants');
    const savedTasks = localStorage.getItem('tasks');
    const savedGoals = localStorage.getItem('goals');

    setPublications(savedPubs ? JSON.parse(savedPubs) : INITIAL_PUBLICATIONS);
    setProjects(savedProjects ? JSON.parse(savedProjects) : INITIAL_PROJECTS);
    setGrants(savedGrants ? JSON.parse(savedGrants) : INITIAL_GRANTS);
    setTasks(savedTasks ? JSON.parse(savedTasks) : INITIAL_TASKS);
    setGoals(savedGoals ? JSON.parse(savedGoals) : INITIAL_GOALS);
  }, []);

  // Save Data
  useEffect(() => {
    if (publications.length > 0) localStorage.setItem('publications', JSON.stringify(publications));
    if (projects.length > 0) localStorage.setItem('projects', JSON.stringify(projects));
    if (grants.length > 0) localStorage.setItem('grants', JSON.stringify(grants));
    if (tasks.length > 0) localStorage.setItem('tasks', JSON.stringify(tasks));
    if (goals.length > 0) localStorage.setItem('goals', JSON.stringify(goals));
  }, [publications, projects, grants, tasks, goals]);

  const handleSave = (type: string, data: any) => {
    switch (type) {
      case 'Publication': setPublications(prev => [data, ...prev]); break;
      case 'Project': setProjects(prev => [data, ...prev]); break;
      case 'Grant': setGrants(prev => [data, ...prev]); break;
      case 'Task': setTasks(prev => [data, ...prev]); break;
      case 'Goal': setGoals(prev => [data, ...prev]); break;
    }
  };

  const updateStatus = (type: string, id: string, newStatus: string) => {
    switch (type) {
      case 'Publication':
        setPublications(prev => prev.map(p => p.id === id ? { ...p, status: newStatus as any } : p));
        break;
      case 'Project':
        setProjects(prev => prev.map(p => p.id === id ? { ...p, status: newStatus as any } : p));
        break;
      case 'Grant':
        setGrants(prev => prev.map(p => p.id === id ? { ...p, status: newStatus as any } : p));
        break;
      case 'Task':
        setTasks(prev => prev.map(p => p.id === id ? { ...p, status: newStatus as any } : p));
        break;
    }
  };

  const deleteItem = (type: string, id: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    switch (type) {
      case 'Publication': setPublications(prev => prev.filter(p => p.id !== id)); break;
      case 'Project': setProjects(prev => prev.filter(p => p.id !== id)); break;
      case 'Grant': setGrants(prev => prev.filter(p => p.id !== id)); break;
      case 'Task': setTasks(prev => prev.filter(p => p.id !== id)); break;
      case 'Goal': setGoals(prev => prev.filter(p => p.id !== id)); break;
    }
  };

  const resetData = () => {
    if (!confirm('This will reset all data to defaults. Continue?')) return;
    localStorage.clear();
    window.location.reload();
  };

  const exportData = () => {
    const data = {
      publications,
      projects,
      grants,
      tasks,
      goals,
      exportDate: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `dr-habsah-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const importData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target?.result as string);
        if (json.publications) setPublications(json.publications);
        if (json.projects) setProjects(json.projects);
        if (json.grants) setGrants(json.grants);
        if (json.tasks) setTasks(json.tasks);
        if (json.goals) setGoals(json.goals);
        alert('Data imported successfully!');
      } catch (err) {
        alert('Error importing data. Please ensure the file is a valid JSON export.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="min-h-screen bg-academic-grey flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-navy/5 p-6 flex flex-col gap-8 sticky top-0 h-screen">
        <div className="flex items-center gap-3 px-2">
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm border border-navy/10 bg-navy flex items-center justify-center text-white font-bold text-sm">
            DH
          </div>
          <div>
            <h1 className="font-bold text-navy leading-tight">Dr Habsah</h1>
            <p className="text-[10px] uppercase tracking-widest text-gold font-bold">Innovation Hub</p>
          </div>
        </div>

        <div className="px-2 flex gap-2">
          <a href={PROFESSIONAL_PROFILE.links.googleScholar} target="_blank" rel="noopener noreferrer" title="Google Scholar" className="p-2 bg-navy/5 rounded-lg text-navy/60 hover:text-navy hover:bg-navy/10 transition-all">
            <GraduationCap size={16} />
          </a>
          <a href={PROFESSIONAL_PROFILE.links.researchGate} target="_blank" rel="noopener noreferrer" title="ResearchGate" className="p-2 bg-navy/5 rounded-lg text-navy/60 hover:text-navy hover:bg-navy/10 transition-all">
            <BookOpen size={16} />
          </a>
          <a href={PROFESSIONAL_PROFILE.links.linkedIn} target="_blank" rel="noopener noreferrer" title="LinkedIn" className="p-2 bg-navy/5 rounded-lg text-navy/60 hover:text-navy hover:bg-navy/10 transition-all">
            <Linkedin size={16} />
          </a>
          <a href={PROFESSIONAL_PROFILE.links.instagram} target="_blank" rel="noopener noreferrer" title="Instagram" className="p-2 bg-navy/5 rounded-lg text-navy/60 hover:text-navy hover:bg-navy/10 transition-all">
            <Instagram size={16} />
          </a>
          <a href={PROFESSIONAL_PROFILE.links.googleSite} target="_blank" rel="noopener noreferrer" title="e-UPIK Google Site" className="p-2 bg-navy/5 rounded-lg text-navy/60 hover:text-navy hover:bg-navy/10 transition-all">
            <Globe size={16} />
          </a>
        </div>

        <nav className="flex flex-col gap-2 overflow-y-auto pr-2 custom-scrollbar">
          <SidebarItem icon={LayoutDashboard} label="Overview" active={activeTab === 'Overview'} onClick={() => setActiveTab('Overview')} />
          <SidebarItem icon={Users} label="Profile & CV" active={activeTab === 'Profile'} onClick={() => setActiveTab('Profile')} />
          <SidebarItem icon={BookOpen} label="Publications" active={activeTab === 'Publications'} onClick={() => setActiveTab('Publications')} />
          <SidebarItem icon={Lightbulb} label="Innovation" active={activeTab === 'Innovation'} onClick={() => setActiveTab('Innovation')} />
          <SidebarItem icon={DollarSign} label="Grants" active={activeTab === 'Grants'} onClick={() => setActiveTab('Grants')} />
          <SidebarItem icon={Mic2} label="Conferences" active={activeTab === 'Conferences'} onClick={() => setActiveTab('Conferences')} />
          <SidebarItem icon={GraduationCap} label="Teaching" active={activeTab === 'Teaching'} onClick={() => setActiveTab('Teaching')} />
          <SidebarItem icon={Heart} label="Personal" active={activeTab === 'Personal'} onClick={() => setActiveTab('Personal')} />
          
          <div className="mt-4 pt-4 border-t border-navy/5">
            <button 
              onClick={() => setIsManagementMode(!isManagementMode)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isManagementMode ? 'bg-gold text-navy shadow-lg' : 'text-navy/60 hover:bg-navy/5 hover:text-navy'
              }`}
            >
              <Shield size={20} />
              <span className="font-medium">{isManagementMode ? 'Exit Management' : 'Management Mode'}</span>
            </button>
            {isManagementMode && (
              <div className="space-y-2 mt-2">
                <button 
                  onClick={exportData}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-navy/60 hover:bg-navy/5 hover:text-navy transition-all"
                >
                  <Download size={20} />
                  <span className="font-medium text-sm">Download Data</span>
                </button>
                
                <label className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-navy/60 hover:bg-navy/5 hover:text-navy transition-all cursor-pointer">
                  <Upload size={20} />
                  <span className="font-medium text-sm">Upload Data</span>
                  <input type="file" accept=".json" onChange={importData} className="hidden" />
                </label>

                <button 
                  onClick={resetData}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-rose-500 hover:bg-rose-50 transition-all"
                >
                  <RotateCcw size={20} />
                  <span className="font-medium text-sm">Reset All Data</span>
                </button>
              </div>
            )}
          </div>
        </nav>

        <div className="mt-auto p-4 bg-navy/5 rounded-2xl">
          <p className="text-xs font-semibold text-navy/40 uppercase mb-2">Next Deadline</p>
          <div className="flex items-start gap-2">
            <Clock size={14} className="text-gold mt-0.5" />
            <div>
              <p className="text-xs font-bold text-navy line-clamp-1">T-ARGS Grant Report</p>
              <p className="text-[10px] text-navy/60">Due Mar 25</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-navy">Welcome back, Dr. Habsah</h2>
            <p className="text-navy/60">Head of Research, Innovation & Commercialization at Politeknik Mukah Sarawak.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-navy/40" size={18} />
              <input 
                type="text" 
                placeholder="Search research..." 
                className="pl-10 pr-4 py-2 bg-white border border-navy/5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-navy/10 w-64"
              />
            </div>
            <button className="p-2 bg-white border border-navy/5 rounded-xl text-navy/60 hover:text-navy transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-gold rounded-full border-2 border-white"></span>
            </button>
            <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm overflow-hidden bg-navy flex items-center justify-center text-white font-bold text-xs">
              DH
            </div>
          </div>
        </header>

        <AnimatePresence mode="wait">
          {activeTab === 'Overview' && (
            <motion.div 
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard label="Total Citations" value="1,284" trend="+15%" icon={AwardIcon} />
                <StatCard label="Active Grants" value={grants.filter(g => g.status === 'awarded').length.toString()} trend="+1" icon={DollarSign} />
                <StatCard label="Innovation Awards" value="12" trend="+3" icon={Lightbulb} />
                <StatCard label="H-Index" value="24" trend="+2" icon={BookOpen} />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Analytics Chart */}
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-navy/5 shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-navy">Research Impact Growth</h3>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-navy"></span>
                      <span className="text-xs font-bold text-navy/60">Citations</span>
                    </div>
                  </div>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={ANALYTICS_DATA}>
                        <defs>
                          <linearGradient id="colorCitations" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#002147" stopOpacity={0.1}/>
                            <stop offset="95%" stopColor="#002147" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#002147', fontSize: 12}} dy={10} />
                        <YAxis axisLine={false} tickLine={false} tick={{fill: '#002147', fontSize: 12}} />
                        <Tooltip 
                          contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                        />
                        <Area type="monotone" dataKey="citations" stroke="#002147" strokeWidth={3} fillOpacity={1} fill="url(#colorCitations)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Deadline Reminders */}
                <div className="bg-white p-6 rounded-2xl border border-navy/5 shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-navy">Upcoming Deadlines</h3>
                    <button 
                      onClick={() => { setModalType('Task'); setIsModalOpen(true); }}
                      className="text-gold hover:text-navy transition-colors"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                  <div className="space-y-4">
                    {tasks.map((task) => (
                      <div key={task.id} className="flex items-start gap-3 p-3 rounded-xl hover:bg-navy/5 transition-colors group">
                        <div className={`mt-1 w-2 h-2 rounded-full ${
                          task.priority === 'high' ? 'bg-rose-500' : task.priority === 'medium' ? 'bg-gold' : 'bg-emerald-500'
                        }`} />
                        <div className="flex-1">
                          <p className="text-sm font-bold text-navy group-hover:text-navy transition-colors">{task.title}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Calendar size={12} className="text-navy/40" />
                            <span className="text-[10px] font-bold text-navy/40 uppercase">{task.deadline}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {isManagementMode && (
                            <button 
                              onClick={() => deleteItem('Task', task.id)}
                              className="text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <Trash2 size={16} />
                            </button>
                          )}
                          <button 
                            onClick={() => updateStatus('Task', task.id, task.status === 'completed' ? 'todo' : 'completed')}
                            className={`${task.status === 'completed' ? 'text-emerald-500' : 'text-navy/20'} hover:text-navy`}
                          >
                            <CheckCircle2 size={18} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Monthly KPI Overview */}
                <div className="bg-white p-6 rounded-2xl border border-navy/5 shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-navy flex items-center gap-2">
                      <TrendingUp size={18} className="text-gold" />
                      Monthly KPI Overview
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      { label: 'Publication Target', current: 5, target: 8, unit: 'papers' },
                      { label: 'Grant Submissions', current: 2, target: 4, unit: 'proposals' },
                      { label: 'Student Mentorship', current: 15, target: 20, unit: 'hours' },
                    ].map((kpi, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between text-xs font-bold">
                          <span className="text-navy/60">{kpi.label}</span>
                          <span className="text-navy">{kpi.current}/{kpi.target} {kpi.unit}</span>
                        </div>
                        <ProgressBar progress={(kpi.current / kpi.target) * 100} color="bg-gold" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Publication Tracker */}
                <div className="bg-white p-6 rounded-2xl border border-navy/5 shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-navy flex items-center gap-2">
                      <BookOpen size={18} className="text-gold" />
                      Recent Publications
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-navy/40">{publications.length} Total</span>
                      {isManagementMode && (
                        <button 
                          onClick={() => { setModalType('Publication'); setIsModalOpen(true); }}
                          className="text-gold hover:text-navy"
                        >
                          <Plus size={16} />
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="space-y-6">
                    {publications.slice(0, 3).map(pub => (
                      <div key={pub.id} className="space-y-2 group">
                        <div className="flex justify-between items-start">
                          <p className="text-sm font-bold text-navy line-clamp-1">{pub.title}</p>
                          <div className="flex items-center gap-2">
                            {isManagementMode && (
                              <button 
                                onClick={() => deleteItem('Publication', pub.id)}
                                className="text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <Trash2 size={14} />
                              </button>
                            )}
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                              pub.status === 'published' ? 'bg-emerald-100 text-emerald-700' : 'bg-gold/10 text-gold'
                            }`}>
                              {pub.status}
                            </span>
                          </div>
                        </div>
                        <ProgressBar progress={pub.status === 'published' ? 100 : 50} color={pub.status === 'published' ? "bg-emerald-500" : "bg-gold"} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Grant Pipeline */}
                <div className="bg-white p-6 rounded-2xl border border-navy/5 shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-navy flex items-center gap-2">
                      <DollarSign size={18} className="text-gold" />
                      Grant Pipeline
                    </h3>
                    <div className="flex items-center gap-2">
                      {isManagementMode && (
                        <button 
                          onClick={() => { setModalType('Grant'); setIsModalOpen(true); }}
                          className="text-gold hover:text-navy"
                        >
                          <Plus size={16} />
                        </button>
                      )}
                      <TrendingUp size={18} className="text-emerald-500" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    {grants.slice(0, 4).map(grant => (
                      <div key={grant.id} className="flex items-center justify-between p-3 rounded-xl bg-academic-grey/50 group">
                        <div className="flex-1">
                          <p className="text-sm font-bold text-navy line-clamp-1">{grant.title}</p>
                          <p className="text-xs text-navy/60">RM {grant.amount.toLocaleString()}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {isManagementMode && (
                            <button 
                              onClick={() => deleteItem('Grant', grant.id)}
                              className="text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <Trash2 size={14} />
                            </button>
                          )}
                          <button 
                            disabled={!isManagementMode}
                            onClick={() => {
                              const statuses: Grant['status'][] = ['prospect', 'applied', 'awarded', 'rejected'];
                              const nextIdx = (statuses.indexOf(grant.status) + 1) % statuses.length;
                              updateStatus('Grant', grant.id, statuses[nextIdx]);
                            }}
                            className={`text-[10px] font-bold px-2 py-1 rounded-lg uppercase transition-all ${
                              grant.status === 'awarded' ? 'bg-emerald-500 text-white' : 
                              grant.status === 'applied' ? 'bg-navy text-white' : 'bg-white text-navy/40 border border-navy/5'
                            } ${isManagementMode ? 'cursor-pointer hover:scale-105' : ''}`}
                          >
                            {grant.status}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Innovation Projects Tracker */}
                <div className="bg-white p-6 rounded-2xl border border-navy/5 shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-navy flex items-center gap-2">
                      <Lightbulb size={18} className="text-gold" />
                      Innovation Projects Tracker
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-navy/40">{projects.filter(p => p.status === 'active').length} Active</span>
                    </div>
                  </div>
                  <div className="space-y-6">
                    {projects.slice(0, 3).map(project => (
                      <div key={project.id} className="space-y-2">
                        <div className="flex justify-between items-start">
                          <p className="text-sm font-bold text-navy line-clamp-1">{project.name}</p>
                          <span className="text-[10px] font-bold text-navy/40">{project.progress}%</span>
                        </div>
                        <ProgressBar progress={project.progress} color="bg-navy" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'Profile' && (
            <motion.div 
              key="profile"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  <div className="bg-white p-8 rounded-2xl border border-navy/5 shadow-sm">
                    <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                      <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg border-4 border-academic-grey shrink-0 bg-navy flex items-center justify-center text-white font-bold text-4xl">
                        DH
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <SectionHeader title="Professional Profile" icon={Users} />
                          <div className="flex gap-2">
                            <a 
                              href={PROFESSIONAL_PROFILE.links.googleScholar} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-3 py-1.5 bg-navy/5 rounded-lg text-xs font-bold text-navy hover:bg-navy/10 transition-all"
                            >
                              <GraduationCap size={14} /> Scholar
                            </a>
                            <a 
                              href={PROFESSIONAL_PROFILE.links.researchGate} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-3 py-1.5 bg-navy/5 rounded-lg text-xs font-bold text-navy hover:bg-navy/10 transition-all"
                            >
                              <BookOpen size={14} /> ResearchGate
                            </a>
                            <a 
                              href={PROFESSIONAL_PROFILE.links.linkedIn} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-3 py-1.5 bg-navy/5 rounded-lg text-xs font-bold text-navy hover:bg-navy/10 transition-all"
                            >
                              <Linkedin size={14} /> LinkedIn
                            </a>
                            <a 
                              href={PROFESSIONAL_PROFILE.links.instagram} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-3 py-1.5 bg-navy/5 rounded-lg text-xs font-bold text-navy hover:bg-navy/10 transition-all"
                            >
                              <Instagram size={14} /> Instagram
                            </a>
                            <a 
                              href={PROFESSIONAL_PROFILE.links.googleSite} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-3 py-1.5 bg-navy/5 rounded-lg text-xs font-bold text-navy hover:bg-navy/10 transition-all"
                            >
                              <Globe size={14} /> e-UPIK
                            </a>
                          </div>
                        </div>
                        <p className="text-navy/70 leading-relaxed italic">
                          "{PROFESSIONAL_PROFILE.summary}"
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xs font-bold text-gold uppercase tracking-wider mb-4">Core Competencies</h4>
                        <ul className="space-y-3">
                          {PROFESSIONAL_PROFILE.competencies.map(skill => (
                            <li key={skill} className="flex items-center gap-3 text-sm text-navy/80">
                              <CheckCircle2 size={16} className="text-emerald-500" />
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-gold uppercase tracking-wider mb-4">International Collaborations</h4>
                        <div className="space-y-4">
                          {COLLABORATIONS.map(collab => (
                            <div key={collab.id} className="p-4 bg-navy/5 rounded-xl">
                              <p className="text-sm font-bold text-navy mb-2">{collab.partner}</p>
                              <ul className="space-y-1">
                                {collab.projects.map((p, i) => (
                                  <li key={i} className="text-[11px] text-navy/60 flex items-start gap-2">
                                    <ChevronRight size={10} className="mt-1 shrink-0" />
                                    {p}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-2xl border border-navy/5 shadow-sm">
                    <SectionHeader title="Academic Qualifications" icon={GraduationCap} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {EDUCATION.map((edu, i) => (
                        <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-navy/5 transition-colors">
                          <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center text-navy shrink-0">
                            <GraduationCap size={24} />
                          </div>
                          <div>
                            <h4 className="font-bold text-navy text-sm">{edu.degree}</h4>
                            <p className="text-xs text-navy/60">{edu.institution}</p>
                            <p className="text-[10px] font-bold text-gold mt-1">{edu.year}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="bg-navy text-white p-8 rounded-2xl shadow-xl">
                    <SectionHeader title="Awards & Honors" icon={AwardIcon} />
                    <div className="space-y-6">
                      {AWARDS.map((award) => (
                        <div key={award.id} className="border-l-2 border-gold/30 pl-4">
                          <h4 className="font-bold text-sm">{award.title}</h4>
                          <p className="text-xs text-white/60 mt-1">{award.body}</p>
                          {award.significance && <p className="text-[10px] text-white/40 mt-1 italic">{award.significance}</p>}
                          <p className="text-[10px] font-bold text-gold mt-1">{award.year}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-2xl border border-navy/5 shadow-sm">
                    <SectionHeader title="Professional References" icon={Users} />
                    <div className="space-y-4">
                      {REFERENCES.map(ref => (
                        <div key={ref.id} className="text-sm">
                          <p className="font-bold text-navy">{ref.name}</p>
                          <p className="text-xs text-navy/60">{ref.position}</p>
                          <p className="text-xs text-navy/60">{ref.institution}</p>
                          <p className="text-[11px] text-gold mt-1">{ref.email}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'Publications' && (
            <motion.div 
              key="publications"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="bg-white p-8 rounded-2xl border border-navy/5 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <SectionHeader 
                    title="Comprehensive Publication Record" 
                    subtitle="Refereed Journal Articles (Indexed & Institutional)"
                    icon={BookOpen} 
                  />
                  {isManagementMode && (
                    <button 
                      onClick={() => { setModalType('Publication'); setIsModalOpen(true); }}
                      className="flex items-center gap-2 px-4 py-2 bg-gold text-navy rounded-xl text-sm font-bold hover:bg-gold/90 transition-colors"
                    >
                      <Plus size={18} />
                      Add Publication
                    </button>
                  )}
                </div>
                <div className="space-y-4">
                  {publications.map((pub, i) => (
                    <div key={pub.id} className="flex gap-6 p-4 rounded-xl hover:bg-navy/5 transition-all group border-b border-navy/5 last:border-0">
                      <span className="text-2xl font-bold text-navy/10 group-hover:text-gold transition-colors">{(i + 1).toString().padStart(2, '0')}</span>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="font-bold text-navy mb-1">{pub.title}</h4>
                          {isManagementMode && (
                            <button 
                              onClick={() => deleteItem('Publication', pub.id)}
                              className="text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-rose-50 rounded-lg"
                            >
                              <Trash2 size={18} />
                            </button>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                          <span className="text-xs text-navy/60 font-medium">{pub.journal}</span>
                          <span className="text-xs text-gold font-bold">{pub.year}</span>
                          {pub.indexing && <span className="text-[10px] bg-navy/5 text-navy/40 px-2 py-0.5 rounded uppercase font-bold">{pub.indexing}</span>}
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                            pub.status === 'published' ? 'bg-emerald-100 text-emerald-700' : 'bg-gold/10 text-gold'
                          }`}>
                            {pub.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'Innovation' && (
            <motion.div 
              key="innovation"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="flex justify-between items-center">
                <SectionHeader title="Innovation & Commercialization" subtitle="Research projects, IP, and commercial ventures" icon={Lightbulb} />
                {isManagementMode && (
                  <button 
                    onClick={() => { setModalType('Project'); setIsModalOpen(true); }}
                    className="flex items-center gap-2 px-4 py-2 bg-gold text-navy rounded-xl text-sm font-bold hover:bg-gold/90 transition-colors"
                  >
                    <Plus size={18} />
                    Add Project
                  </button>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map(project => (
                  <div key={project.id} className="bg-white p-8 rounded-2xl border border-navy/5 shadow-sm hover:shadow-md transition-shadow group relative">
                    {isManagementMode && (
                      <button 
                        onClick={() => deleteItem('Project', project.id)}
                        className="absolute top-4 right-4 text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-rose-50 rounded-xl"
                      >
                        <Trash2 size={20} />
                      </button>
                    )}
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-navy/5 rounded-xl text-navy">
                        <Lightbulb size={24} />
                      </div>
                      <button 
                        disabled={!isManagementMode}
                        onClick={() => {
                          const statuses: Project['status'][] = ['active', 'completed', 'on-hold'];
                          const nextIdx = (statuses.indexOf(project.status) + 1) % statuses.length;
                          updateStatus('Project', project.id, statuses[nextIdx]);
                        }}
                        className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase transition-all ${
                          project.status === 'active' ? 'bg-emerald-100 text-emerald-700' : 'bg-navy text-white'
                        } ${isManagementMode ? 'cursor-pointer hover:scale-105' : ''}`}
                      >
                        {project.status}
                      </button>
                    </div>
                    <h4 className="text-xl font-bold text-navy mb-2">{project.name}</h4>
                    <p className="text-sm text-navy/60 leading-relaxed mb-6">{project.description}</p>
                    
                    <div className="space-y-4">
                      {project.funding && (
                        <div className="flex items-center gap-2 text-xs">
                          <DollarSign size={14} className="text-gold" />
                          <span className="font-bold text-navy/40 uppercase">Funding:</span>
                          <span className="text-navy">{project.funding}</span>
                        </div>
                      )}
                      {project.award && (
                        <div className="flex items-center gap-2 text-xs">
                          <AwardIcon size={14} className="text-gold" />
                          <span className="font-bold text-navy/40 uppercase">Award:</span>
                          <span className="text-navy">{project.award}</span>
                        </div>
                      )}
                      <div className="space-y-1">
                        <div className="flex justify-between text-[10px] font-bold uppercase text-navy/40">
                          <span>Development Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <ProgressBar progress={project.progress} color="bg-navy" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'Grants' && (
            <motion.div 
              key="grants"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="flex justify-between items-center">
                <SectionHeader title="Research Grants & Funding" subtitle="External and internal funding sources" icon={DollarSign} />
                {isManagementMode && (
                  <button 
                    onClick={() => { setModalType('Grant'); setIsModalOpen(true); }}
                    className="flex items-center gap-2 px-4 py-2 bg-gold text-navy rounded-xl text-sm font-bold hover:bg-gold/90 transition-colors"
                  >
                    <Plus size={18} />
                    Add Grant
                  </button>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {grants.map(grant => (
                  <div key={grant.id} className="bg-white p-6 rounded-2xl border border-navy/5 shadow-sm hover:shadow-md transition-all group relative">
                    {isManagementMode && (
                      <button 
                        onClick={() => deleteItem('Grant', grant.id)}
                        className="absolute top-4 right-4 text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-rose-50 rounded-xl"
                      >
                        <Trash2 size={18} />
                      </button>
                    )}
                    <div className="flex justify-between items-center mb-4">
                      <div className="p-2 bg-gold/10 rounded-lg text-gold">
                        <DollarSign size={20} />
                      </div>
                      <span className="text-xs font-bold text-navy/40">{grant.year}</span>
                    </div>
                    <h4 className="font-bold text-navy mb-1">{grant.title}</h4>
                    <p className="text-xs text-navy/60 mb-4">{grant.agency}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-navy">RM {grant.amount.toLocaleString()}</span>
                      <button 
                        disabled={!isManagementMode}
                        onClick={() => {
                          const statuses: Grant['status'][] = ['prospect', 'applied', 'awarded', 'rejected'];
                          const nextIdx = (statuses.indexOf(grant.status) + 1) % statuses.length;
                          updateStatus('Grant', grant.id, statuses[nextIdx]);
                        }}
                        className={`text-[10px] font-bold px-2 py-1 rounded uppercase transition-all ${
                          grant.status === 'awarded' ? 'bg-emerald-500 text-white' : 'bg-navy/5 text-navy/40'
                        } ${isManagementMode ? 'cursor-pointer hover:scale-105' : ''}`}
                      >
                        {grant.status}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'Conferences' && (
            <motion.div 
              key="conferences"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-2xl border border-navy/5 shadow-sm">
                <SectionHeader title="International Keynote Addresses" icon={Mic2} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {CONFERENCES.map(conf => (
                    <div key={conf.id} className="p-6 rounded-2xl bg-academic-grey/50 border border-navy/5">
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-xs font-bold text-gold uppercase tracking-widest">{conf.role}</span>
                        <span className="text-xs font-bold text-navy/40">{conf.year}</span>
                      </div>
                      <h4 className="text-lg font-bold text-navy mb-2">{conf.name}</h4>
                      <p className="text-sm text-navy/60">{conf.location}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-navy/5 shadow-sm">
                <SectionHeader title="Best Presenter Awards" icon={AwardIcon} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {BEST_PRESENTER_AWARDS.map(award => (
                    <div key={award.id} className="p-6 rounded-2xl bg-gold/5 border border-gold/10">
                      <div className="flex justify-between items-center mb-4">
                        <AwardIcon size={20} className="text-gold" />
                        <span className="text-xs font-bold text-navy/40">{award.year}</span>
                      </div>
                      <h4 className="font-bold text-navy mb-2">{award.conference}</h4>
                      <p className="text-[11px] text-navy/60 italic leading-relaxed">"{award.paperTitle}"</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-navy/5 shadow-sm">
                <SectionHeader title="Conference Leadership & Organization" icon={Users} />
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-navy/5">
                        <th className="pb-4 text-xs font-bold text-navy/40 uppercase">Role</th>
                        <th className="pb-4 text-xs font-bold text-navy/40 uppercase">Conference</th>
                        <th className="pb-4 text-xs font-bold text-navy/40 uppercase">Venue</th>
                        <th className="pb-4 text-xs font-bold text-navy/40 uppercase text-right">Year</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-navy/5">
                      {LEADERSHIP_ROLES.map(role => (
                        <tr key={role.id} className="group hover:bg-navy/5 transition-colors">
                          <td className="py-4 text-sm font-bold text-navy">{role.role}</td>
                          <td className="py-4 text-sm text-navy/60">{role.conference}</td>
                          <td className="py-4 text-sm text-navy/60">{role.venue}</td>
                          <td className="py-4 text-sm font-bold text-gold text-right">{role.year}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'Teaching' && (
            <motion.div 
              key="teaching"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-2xl border border-navy/5 shadow-sm">
                <SectionHeader title="Educational Philosophy" subtitle="Learning Through Innovation" icon={GraduationCap} />
                <p className="text-navy/70 leading-relaxed italic mb-8">
                  "{PROFESSIONAL_PROFILE.philosophy}"
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {PROFESSIONAL_PROFILE.teachingPrinciples.map((principle, i) => (
                    <div key={i} className="flex gap-4 p-6 rounded-2xl bg-academic-grey/50 border border-navy/5">
                      <span className="text-3xl font-bold text-gold/20">{(i + 1).toString().padStart(2, '0')}</span>
                      <p className="text-sm font-bold text-navy leading-snug">{principle}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl border border-navy/5 shadow-sm">
                  <SectionHeader title="Courses Taught" icon={BookOpen} />
                  <div className="space-y-3">
                    {COURSES_TAUGHT.map(course => (
                      <div key={course} className="flex items-center gap-3 p-3 rounded-xl bg-academic-grey/50 text-navy font-medium text-sm">
                        <CheckCircle2 size={16} className="text-emerald-500" />
                        {course}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-navy/5 shadow-sm">
                  <SectionHeader title="Student Innovation Projects" icon={Lightbulb} />
                  <div className="space-y-4">
                    {STUDENT_PROJECTS.map(project => (
                      <div key={project.id} className="p-4 rounded-xl border border-navy/5 hover:bg-navy/5 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-navy text-sm">{project.name}</h4>
                          <span className="text-[10px] font-bold text-gold">{project.year}</span>
                        </div>
                        <p className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                          <AwardIcon size={12} /> {project.award}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-navy text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold mb-6">Mentorship Approach</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-3">
                    <h4 className="font-bold text-gold text-sm uppercase">Individual Development</h4>
                    <p className="text-xs text-white/60 leading-relaxed">Customized trajectory based on career aspirations (academic, industry, or entrepreneurship).</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-gold text-sm uppercase">Research Apprenticeship</h4>
                    <p className="text-xs text-white/60 leading-relaxed">Progression from data collection assistants to co-authors over a 3-year cycle.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-gold text-sm uppercase">Industry Bridging</h4>
                    <p className="text-xs text-white/60 leading-relaxed">Active networks with tourism boards and tech firms for market validation.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'Personal' && (
            <motion.div 
              key="personal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl border border-navy/5 shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <SectionHeader title="Family & Personal Planner" icon={Heart} />
                    {isManagementMode && (
                      <button 
                        onClick={() => { setModalType('Goal'); setIsModalOpen(true); }}
                        className="text-gold hover:text-navy"
                      >
                        <Plus size={20} />
                      </button>
                    )}
                  </div>
                  <div className="space-y-4">
                    {goals.map(goal => (
                      <div key={goal.id} className="flex items-center justify-between p-4 rounded-xl bg-academic-grey/50 group relative">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-gold" />
                          <div>
                            <p className="text-sm font-bold text-navy">{goal.title || goal.goal}</p>
                            <p className="text-[10px] text-navy/40 uppercase font-bold">{goal.deadline || goal.category}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          {isManagementMode && (
                            <button 
                              onClick={() => deleteItem('Goal', goal.id)}
                              className="text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <Trash2 size={16} />
                            </button>
                          )}
                          <span className="text-[10px] font-bold px-2 py-1 rounded bg-white text-navy/60 border border-navy/5 uppercase">
                            {goal.status || `${goal.progress}%`}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-navy text-white p-8 rounded-2xl shadow-xl">
                  <h3 className="text-xl font-bold mb-6">Weekly Personal Routine</h3>
                  <div className="space-y-4">
                    {[
                      { day: 'Mon-Fri', activity: 'Morning Exercise & Meditation', time: '6:30 AM' },
                      { day: 'Wednesdays', activity: 'Family Dinner Night', time: '7:30 PM' },
                      { day: 'Weekends', activity: 'Leisure Reading & Gardening', time: 'Flexible' },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-white/10 pb-3 last:border-0">
                        <div>
                          <p className="text-sm font-bold text-gold">{item.day}</p>
                          <p className="text-xs text-white/60">{item.activity}</p>
                        </div>
                        <span className="text-[10px] font-bold text-white/40">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <ManagementModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          onSave={handleSave} 
          type={modalType} 
        />
      </main>
    </div>
  );
}
