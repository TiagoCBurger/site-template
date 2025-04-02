import { useState } from 'react'
import { ThemeProvider } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from '@/components/theme-provider'

function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <MoonIcon className="h-[1.2rem] w-[1.2rem]" /> : <SunIcon className="h-[1.2rem] w-[1.2rem]" />}
    </Button>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="min-h-screen p-4 md:p-8 bg-background text-foreground">
        <header className="container flex items-center justify-between py-4">
          <h1 className="text-2xl font-bold">Vite + React + shadcn/ui</h1>
          <ModeToggle />
        </header>
        
        <main className="container py-6">
          <div className="flex flex-col items-center justify-center space-y-8">
            <p className="text-lg text-center text-muted-foreground">
              Start building your application with shadcn/ui components
            </p>
            
            <div className="flex flex-col items-center space-y-4">
              <Button onClick={() => setCount((count) => count + 1)}>
                Count is {count}
              </Button>
              <p className="text-sm text-muted-foreground">
                Edit <code className="font-mono bg-muted px-1 py-0.5 rounded">src/App.tsx</code> and save to test HMR
              </p>
            </div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
