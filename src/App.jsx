import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/sidebar'

import styles from './App.module.css'
import './global.css'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/amanda.png',
      name: 'Diego Fernandes',
      role: 'CTO @RocketSeat'

    },
    content:[
      {type: 'paragraph', content:'Fala galeraa 👋' },      
      {type: 'paragraph', content:       'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'      },      
      {type:'link', content: '👉 <a href="">jane.design/doctorcare</a>'}
                          
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/lalinhos.png',
      name: 'Larissa Lima',
      role: 'Educator @RocketSeat'

    },
    content:[
      {type: 'paragraph', content:'Fala galeraa 👋' },      
      {type: 'paragraph', content:       'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'      },      
      {type:'link', content: '👉 <a href="">jane.design/doctorcare</a>'}
                          
    ],
    publishedAt: new Date('2022-05-02 20:00:00'),
  }
]


export default function App() {
  return (
    <div>
      <Header />
    
      <div className={styles.wrapper}>
        <Sidebar/>
        <main> 
           {posts.map(post =>{
            return (
            <Post
              author = {post.author}
              content = {post.content}
              publishedAt = {post.publishedAt}
            
            />
            )
           })}
        </main>
      </div>
    </div>
  )
}
