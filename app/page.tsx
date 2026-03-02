'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Home, FolderKanban, Calendar, BarChart3, Settings, Search, Terminal, User, Sparkles, Star, GitFork, ExternalLink, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

// Sample Data
const projects = [
  { id: 1, title: 'CloudSync Platform', desc: 'Real-time collaboration platform with AI-powered code suggestions.', stars: 1247, forks: 189, tags: ['Next.js', 'AI', 'Postgres'], featured: true },
  { id: 2, title: 'Neural Analytics', desc: 'ML-powered analytics for predictive insights.', stars: 892, forks: 134, tags: ['Python', 'TensorFlow'], featured: true },
  { id: 3, title: 'DevFlow CLI', desc: 'Developer productivity toolkit with AI-assisted generation.', stars: 567, forks: 78, tags: ['Go', 'Rust'], featured: false },
]
const metrics = { commits: 1284, prs: 156, stars: 2706, streak: 47 }

export default function Dashboard() {
  const [active, setActive] = useState('home')
  const dockItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'projects', icon: FolderKanban, label: 'Projects' },
    { id: 'timeline', icon: Calendar, label: 'Timeline' },
    { id: 'metrics', icon: BarChart3, label: 'Metrics' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ]

  return (
    <main className="min-h-screen overflow-hidden relative p-4">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,hsl(262_83%_58%_/_20%),transparent_50%)]" />
      
      {/* User Info */}
      <div className="fixed top-4 right-4 z-50">
        <Button variant="ghost" className="gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center"><User className="w-4 h-4" /></div>
          <span className="hidden md:inline">Alex Dev</span>
        </Button>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto mt-16 mb-24">
        {active === 'home' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
              <div className="flex-1 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" /> Available for work
                </div>
                <h1 className="text-5xl font-bold neon-text">Alex Developer</h1>
                <p className="text-xl text-muted-foreground">Full-Stack Engineer & Cloud Architect</p>
                <div className="flex gap-3 pt-4">
                  <Button variant="neon">View Projects <ArrowRight className="ml-2 w-4 h-4"/></Button>
                  <Button variant="outline">Download CV</Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { l: 'Years Exp', v: '6+' }, { l: 'Projects', v: '50+' }, { l: 'Stars', v: '2.7K' }, { l: 'Coffee', v: '∞' }
                ].map(s => (
                  <Card key={s.l} className="glass text-center p-4"><div className="text-2xl font-bold neon-text">{s.v}</div><div className="text-xs text-muted-foreground">{s.l}</div></Card>
                ))}
              </div>
            </div>
            
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-4"><Sparkles className="text-primary"/> Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {projects.filter(p => p.featured).map((p, i) => (
                <Card key={p.id} className="glass hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg">{p.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{p.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex gap-2 flex-wrap">
                    {p.tags.map(t => <span key={t} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">{t}</span>)}
                  </CardContent>
                  <CardFooter className="justify-between">
                    <div className="flex gap-2 text-muted-foreground text-sm"><Star className="w-4 h-4 text-yellow-500"/>{p.stars}</div>
                    <Button size="sm" variant="ghost">Details <ExternalLink className="ml-1 w-3 h-3"/></Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </motion.div>
        )}

        {active === 'projects' && (
           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
             <h2 className="text-2xl font-bold neon-text mb-6">All Projects</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map(p => (
                 <Card key={p.id} className="glass">
                   <CardHeader><CardTitle>{p.title}</CardTitle><CardDescription>{p.desc}</CardDescription></CardHeader>
                   <CardContent className="flex gap-2">{p.tags.map(t => <span key={t} className="px-2 py-1 text-xs bg-muted rounded">{t}</span>)}</CardContent>
                 </Card>
              ))}
             </div>
           </motion.div>
        )}

        {active === 'metrics' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-2xl font-bold neon-text mb-6">Activity Metrics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { l: 'Commits', v: metrics.commits, c: 'text-green-500' },
                { l: 'PRs', v: metrics.prs, c: 'text-purple-500' },
                { l: 'Stars', v: metrics.stars, c: 'text-yellow-500' },
                { l: 'Streak', v: metrics.streak, c: 'text-orange-500' },
              ].map(m => (
                <Card key={m.l} className="glass">
                  <CardContent className="p-4"><p className="text-xs text-muted-foreground">{m.l}</p><p className={cn("text-3xl font-bold", m.c)}>{m.v}</p></CardContent>
                </Card>
              ))}
            </div>
            <Card className="glass p-6"><div className="text-muted-foreground text-sm">Commit Activity Graph (Visual Placeholder)</div></Card>
          </motion.div>
        )}

        {active === 'timeline' && (
           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
             <h2 className="text-2xl font-bold neon-text mb-6">Timeline</h2>
             <div className="relative border-l-2 border-primary/50 pl-6 space-y-8">
               {[
                 { t: 'Senior Engineer @ TechCorp', d: '2023', desc: 'Leading cloud-native development.' },
                 { t: 'CloudSync Launch', d: '2023', desc: 'Open source project hit 1k stars.' },
                 { t: 'CS Degree', d: '2020', desc: 'Graduated with honors.' },
               ].map(e => (
                 <div key={e.t} className="relative">
                   <div className="absolute -left-8 w-4 h-4 rounded-full bg-primary" />
                   <p className="text-sm text-primary">{e.d}</p>
                   <h3 className="text-lg font-semibold">{e.t}</h3>
                   <p className="text-muted-foreground">{e.desc}</p>
                 </div>
               ))}
             </div>
           </motion.div>
        )}

        {active === 'settings' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Card className="glass max-w-lg">
              <CardHeader><CardTitle>Settings</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                 <div><label className="text-sm text-muted-foreground">Name</label><input className="w-full mt-1 p-2 bg-muted/50 rounded" defaultValue="Alex Dev" /></div>
                 <div><label className="text-sm text-muted-foreground">GitHub</label><input className="w-full mt-1 p-2 bg-muted/50 rounded" defaultValue="alexdev" /></div>
                 <Button>Save</Button>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>

      {/* Dock */}
      <motion.div initial={{ y: 100 }} animate={{ y: 0 }} className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 glass rounded-2xl px-2 py-2 flex items-center gap-1">
        {dockItems.map(item => {
          const Icon = item.icon
          return (
            <button key={item.id} onClick={() => setActive(item.id)} className={cn("relative p-3 rounded-xl transition-colors group", active === item.id ? "bg-primary/20 text-primary" : "hover:bg-muted")}>
              <Icon className="w-5 h-5" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-popover text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">{item.label}</span>
            </button>
          )
        })}
        <div className="w-px h-8 bg-border mx-1" />
        <button className="p-3 rounded-xl hover:bg-muted"><Search className="w-5 h-5" /></button>
        <button className="p-3 rounded-xl hover:bg-muted"><Terminal className="w-5 h-5" /></button>
      </motion.div>
    </main>
  )
}
