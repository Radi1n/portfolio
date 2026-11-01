import type { Tool } from '@/types'

const logo = (file: string) => `/logos/${file}.svg`

export const tools: Tool[] = [
  { name: 'Python', src: logo('python') },
  { name: 'JavaScript', src: logo('javascript') },
  { name: 'TypeScript', src: logo('typescript') },
  { name: 'Java', src: logo('java') },
  { name: 'PHP', src: logo('php') },
  { name: 'Dart', src: logo('dart') },
  { name: 'HTML', src: logo('html') },
  { name: 'CSS', src: logo('css') },
  { name: 'React', src: logo('react') },
  { name: 'Next.js', src: logo('nextjs'), srcDark: logo('nextjs-dark') },
  { name: 'Laravel', src: logo('laravel') },
  { name: 'FastAPI', src: logo('fastapi') },
  { name: 'Node.js', src: logo('nodejs') },
  { name: 'CodeIgniter', src: logo('codeigniter') },
  { name: 'Flutter', src: logo('flutter') },
  { name: 'MySQL', src: logo('mysql') },
  { name: 'PostgreSQL', src: logo('postgresql') },
  { name: 'Firebase', src: logo('firebase') },
  { name: 'Git', src: logo('git') },
  { name: 'GitHub', src: logo('github'), srcDark: logo('github-dark') },
  { name: 'VS Code', src: logo('vscode') },
  { name: 'OpenCV', src: logo('opencv') },
]
