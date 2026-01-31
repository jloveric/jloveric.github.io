import React from 'react';
import './App.css';

function App() {
  const repositories = [
    {
      name: 'high-order-layers-torch',
      description: 'High order and sparse layers in pytorch. Lagrange Polynomial, Piecewise Lagrange Polynomial, Piecewise Discontinuous Lagrange Polynomial (Chebyshev nodes) and Fourier Series layers of arbitrary order.',
      url: 'https://github.com/jloveric/high-order-layers-torch',
      language: 'Python',
      stars: 44
    },
    {
      name: 'language-interpolation',
      description: 'Experiments in language interpolation with high order sparse neural networks',
      url: 'https://github.com/jloveric/language-interpolation',
      language: 'Python',
      stars: 1
    },
    {
      name: 'high-order-implicit-representation',
      description: 'Implicit representation of various things using PyTorch and high order layers',
      url: 'https://github.com/jloveric/high-order-implicit-representation',
      language: 'Python',
      stars: 9
    },
    {
      name: 'neural-network-pdes',
      description: 'Neural Network Implicit Representation of Partial Differential Equations',
      url: 'https://github.com/jloveric/neural-network-pdes',
      language: 'Python',
      stars: 6
    },
    {
      name: 'non-uniform-piecewise-layers',
      description: 'Adaptive neural networks using dynamic piecewise linear layers',
      url: 'https://github.com/jloveric/non-uniform-piecewise-layers',
      language: 'Python',
      stars: 0
    },
    {
      name: 'shapely-mojo',
      description: 'Mojo implementation of shapely',
      url: 'https://github.com/jloveric/shapely-mojo',
      language: 'Mojo',
      stars: 0
    }
  ];

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <h1 className="title">John Loverich</h1>
          <p className="subtitle">Computational Engineer</p>
          <div className="social-links">
            <a href="https://github.com/jloveric" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg height="24" width="24" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="container">
          <section className="intro">
            <h2>Hello</h2>
          </section>

          <div className="projects-grid">
            {repositories.map((repo, index) => (
              <a 
                key={index} 
                href={repo.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-card"
              >
                <div className="project-header">
                  <h3 className="project-name">{repo.name}</h3>
                  <div className="project-meta">
                    <span className="language">{repo.language}</span>
                    {repo.stars > 0 && (
                      <span className="stars">
                        <svg height="16" width="16" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"></path>
                        </svg>
                        {repo.stars}
                      </span>
                    )}
                  </div>
                </div>
                <p className="project-description">{repo.description}</p>
              </a>
            ))}
          </div>

          <section className="more-projects">
            <p>View all <a href="https://github.com/jloveric?tab=repositories" target="_blank" rel="noopener noreferrer">83 repositories</a> on GitHub</p>
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} John Loveric. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
