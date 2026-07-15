/*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Website-by-JesusMolina/',
  plugins: [react()],
})*/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', //Se coloca de esta manera la base ya que esto permite que el proyecto ejecute en cualquier navegador sin restricciones
  plugins: [react()],
})