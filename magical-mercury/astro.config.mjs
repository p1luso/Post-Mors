import { defineConfig } from 'astro/config';

export default defineConfig({
    base: '/Post-Mors/', // Reemplaza con el nombre de tu repositorio
    // otras configuraciones
    middleware: [
      {
        name: 'php',
        async handler(request, response) {
          if (request.url.endsWith('.php')) {
            const phpPath = `./pages${request.url}`;
            return response.send(await runPhp(phpPath, request));
          }
          return response.next();
        },
      },
    ],
  });

  async function runPhp(phpPath, request) {
    const php = require('php-parser');
    const phpCode = await fs.readFile(phpPath, 'utf8');
    const phpOutput = await php.execute(phpCode, {
      request: request,
    });
    return phpOutput;
  }