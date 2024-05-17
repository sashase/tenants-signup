import { ConfigEnv, defineConfig, loadEnv, } from "vite"
import react from "@vitejs/plugin-react"

export default ({ mode, }: ConfigEnv,) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(),), }

  return defineConfig({
    plugins: [react(),],
    server: {
      port: parseInt(process.env.VITE_PORT ?? "8000",),
    },
  },)
}