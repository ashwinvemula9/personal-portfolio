import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Real Time Music sequencer',
    description: 'A "Real Time Music Sequencer" is an interactive application that uses WebSockets for synchronized, collaborative music creation and live sequencing across multiple users.',
    image: 'https://producelikeapro.com/blog/wp-content/uploads/2022/03/The-5-Best-Online-Sequencer-Options-in-2022.jpg',
    tech: ['React', 'Typescript', 'Node.js', 'Websocket'],
    liveUrl: 'https://ashwinvemula9.github.io/music_seq_FE/',
    githubUrl: 'https://github.com/ashwinvemula9/music_seq_BE'
  },
  {
    title: 'Spotify clone with SDK',
    description: 'A "Spotify Clone" application leveraging the Spotify SDK to deliver seamless music streaming, playlist management, and user personalization.',
    image: 'https://storage.googleapis.com/pr-newsroom-wp/1/2023/12/Spotify_Logo_RGB_White-1.png',
    tech: ['React', 'Javascript', 'spotify SDK'],
    liveUrl: 'https://ashwinvemula9.github.io/spotify_clone/',
    githubUrl: 'https://github.com/ashwinvemula9/spotify_clone'
  },
  {
    title: 'Cricket real time score board',
    description: '"Cricket Real-Time Score Board" is a dynamic app leveraging "CricAPI" to provide live cricket scores and match updates instantly',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEhcZZHgK6-iP66wZBkT2N8Onxk5W4KEXJDA&s',
    tech: ['React','TypeScript',  'TailwindCSS'],
    liveUrl: 'https://ashwinvemula9.github.io/Cricket-real-time-score-board/',
    githubUrl: 'https://github.com/ashwinvemula9/Cricket-real-time-score-board'
  }
];

const Work = () => {
  return (
    <section id="work" className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;