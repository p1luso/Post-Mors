import { defineConfig } from 'astro/config';

export default defineConfig({
    base: '/Post-Mors/', // Reemplaza con el nombre de tu repositorio
    // otras configuraciones
    server: {
        // Configurar Astro para servir recursos estáticos desde la carpeta 'assets'
        static: {
          '/public': './public' // Ruta de acceso a la carpeta de recursos estáticos
        }
    }
    
  });