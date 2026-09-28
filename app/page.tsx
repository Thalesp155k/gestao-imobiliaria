 "use client"
  import { useState } from 'react'
  import { supabase } from '@/lib/supabase'
  import { Lock, Mail } from 'lucide-react'

  export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    async function handleLogin(e: React.FormEvent) {
      e.preventDefault()
      setLoading(true)
      setMessage('')

      const { error } = await supabase.auth.signInWithPassword({ email, password })

      if (error) {
        setMessage('Erro ao entrar: ' + error.message)
      } else {
        window.location.href = '/dashboard'
      }
      setLoading(false)
    }

    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-800">Gestão Imobiliária</h1>
            <p className="text-slate-500 mt-2">Bem-vindo ao seu painel de controle</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-slate-400 size-5" />
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500
  outline-none transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 text-slate-400 size-5" />
              <input
                type="password"
                placeholder="Sua senha"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500
  outline-none transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {message && <p className="text-red-500 text-sm text-center">{message}</p>}

            <button
              disabled={loading}
              className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 rounded-lg transition-all
  shadow-lg shadow-brand-500/30 disabled:bg-slate-400"
            >
              {loading ? 'Entrando...' : 'Entrar no Sistema'}
            </button>
          </form>
        </div>
      </div>
    )
              />
            </div>

            {message && <p className="text-red-500 text-sm text-center">{message}</p>}

            <button
              disabled={loading}
              className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 rounded-lg transition-all shadow-lg shadow-brand-500/30
  disabled:bg-slate-400"
            >
              {loading ? 'Entrando...' : 'Entrar no Sistema'}
            </button>
          </form>
        </div>
      </div>
    )
  }
