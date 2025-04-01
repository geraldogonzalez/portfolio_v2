# 🧑 Portafolio Personal v2.0

Bienvenido a mi [portafolio personal](https://geraldog.dev/) en su versión 2 ([versión 1 aquí](https://github.com/geraldogonzalez/portafolio)), desarrollado con [Next.js](https://nextjs.org/) y [Tailwind CSS](https://tailwindcss.com/). En este portafolio tengo pensado mostrar algunos de mis proyectos, habilidades, experiencia como desarrollador web y, seguramente, algunas cosas más.

## 🚀 Tecnologías utilizadas

- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Remix Icon](https://remixicon.com/)
- [next-sitemap](https://github.com/iamvishnusankar/next-sitemap)

## 🌐 SEO y Accesibilidad

Este portafolio está optimizado para los motores de búsqueda y la accesibilidad. Algunas de las prácticas implementadas:

- Uso de etiquetas semánticas.
- Archivos `sitemap.xml` y `robots.txt` generados automáticamente para varios dominios.
- Componentes accesibles (nombres visibles o `aria-label`, navegación por teclado, etc.).
- Contraste adecuado y foco visible en elementos interactivos.

## 💻 Scripts disponibles

```bash
npm run dev           # Ejecuta el entorno de desarrollo
npm run build         # Compila el proyecto para producción y genera los sitemaps
npm run start         # Inicia el servidor de producción
npm run lint          # Ejecuta ESLint
npm run sitemap-dev   # Genera el sitemap para dominio de desarrollo
npm run sitemap-com   # Genera el sitemap para dominio principal
```

## 📁 Estructura del proyecto

```
├── 📁 app/
│   ├── 📁 _components/      # Componentes reutilizados.
│   ├── 📁 _context/         # Contiene los contextos globales de React (React Context API).
│   ├── 📁 _hooks/           # Hooks personalizados reutilizables para encapsular lógica.
│   └── 📁 _shared/          # Recursos compartidos (componentes, datos estáticos, interfaces TypeScript y layouts) que usaré en múltiples partes.
│       ├── 📁 components/
│       ├── 📁 data/
│       ├── 📁 interfaces/
│       └── 📁 layouts/
│   ├── 📁 about/            # Esta página comunicará quién soy, qué hago y qué me apasiona.
│   └── 📁 contact/          # Aquí incluiré un formulario para que puedan escribirme fácilmente reclutadores, colegas o clientes.
├── 📁 public/               # Archivos estáticos.
├── eslint.config.js         # Configuración de ESLint.
├── next-sitemap.config.*    # Archivos de configuración por dominio.
├── README.md                # Documenta la estructura, tecnologías, funcionalidades y objetivos de este proyecto.
```
