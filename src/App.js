import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id='app-container' data-bs-theme="light">


      <div id='contenido-violeta'>
        <header>
          <nav>
            <ul>
              <li>
                <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="7" r="4" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  </svg>
                </a></li>

              <li>
                <a data-bs-toggle="offcanvas" href="#offcanvasExample2" role="button" aria-controls="offcanvasExample2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-grid" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <rect x="4" y="4" width="6" height="6" rx="1" />
                    <rect x="14" y="4" width="6" height="6" rx="1" />
                    <rect x="4" y="14" width="6" height="6" rx="1" />
                    <rect x="14" y="14" width="6" height="6" rx="1" />
                  </svg>
                </a></li>
            </ul>
          </nav>
        </header>
      </div>

      <div id='contenido-blanco'>
        <div className='d-flex flex-column align-items-center pb-5'>

          <div className='status'>

            <svg width="150" height="150" className="m-3 mb-2" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M39.2763 8.85311L25.285 4.19324C24.8939 4.06132 24.484 3.99771 24.0764 4.00006C23.6689 3.99771 23.2589 4.06132 22.8655 4.19324L8.87649 8.85311C7.15908 9.42558 6 11.0323 6 12.8439V27.6104L6.01885 27.6646C6.29448 31.6271 16.5872 41.3567 24.0034 44H24.1495C31.5657 41.3567 41.8607 31.6271 42.134 27.6646L42.1505 27.6104V12.8439C42.1505 11.0323 40.9938 9.42558 39.2763 8.85311Z" fill="#D0CEFF" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M33.5611 20.4227L22.1069 31.8768L19.082 28.8519L30.5362 17.3978C31.3725 16.5614 32.7271 16.5614 33.5611 17.3978C34.3974 18.2341 34.3974 19.5887 33.5611 20.4227Z" fill="#635DFF" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.414 25.1674L22.1163 31.8698L25.0776 28.9085L18.3753 22.2061C17.5578 21.3886 16.2314 21.3886 15.414 22.2061C14.5965 23.0235 14.5965 24.3499 15.414 25.1674Z" fill="#635DFF" />
            </svg>

          </div>

          <h2 className="mt-4">All Safe ✅</h2>

          <div className='d-flex justify-content-between align-items-center gap-5 mt-5'>

            <button type="button" className="btn btn-outline-secondary rounded-5 ps-4 pe-4">Get 2FA code</button>
            <button type="button" className="btn btn-primary rounded-5 ps-4 pe-4">Approve Activity</button>

          </div>

        </div>
      </div>

      <div id='contenido-blanco2' className='p-3'>

        <div className='d-flex flex-column justify-content-start align-items-start gap-4 pb-5 mb-5'>
          <h3 className='text-dark fw-bold'>Recent Activity</h3>

          <div className="alert alert-secondary" role="alert">
            <h5 className="card-title text-success fw-bold">Instagram | Login 🔓</h5>
            <h6 className="card-subtitle mb-3 mt-1 text-muted">Today, 06:28 pm</h6>
            <p className="card-text">OS: Windows 11 [AgusM]</p>
            <p className="card-text mt-2">Near: Buenos Aires, Argentina.</p>
            <p className="card-text mt-2">IP: 112.127.293.182</p>
          </div>

          <div className="alert alert-secondary" role="alert">
            <h5 className="card-title fw-bold">Google | Login Corrected ⚠️</h5>
            <h6 className="card-subtitle mb-3 mt-1 text-muted">Wednesday, 03:12 am</h6>
            <p className="card-text">The last login from Google has been marked as unussual by AgusM.</p>
            <p className="card-text mt-2">For your safety, the session has been closed.</p>
          </div>

          <div className="alert alert-secondary" role="alert">
            <h5 className="card-title text-danger-emphasis fw-bold">Google | Login 🚨</h5>
            <h6 className="card-subtitle mb-3 mt-1 text-muted">Wednesday, 03:12 am</h6>
            <p className="card-text">Windows 10 [DESKTOP-ISBX827]</p>
            <p className="card-text mt-2">Near Agra, India.</p>
            <p className="card-text mt-2 mb-2">IP: 146.379.198.462</p>
            <span className="text-muted">Corrected at: 03:16 am</span>
          </div>

          <div className="alert alert-secondary" role="alert">
            <h5 className="card-title fw-bold">Apple | Login Corrected ⚠️</h5>
            <h6 className="card-subtitle mb-3 mt-1 text-muted">Wednesday, 03:12 am</h6>
            <p className="card-text">The last login from Apple has been marked as own by AgusM.</p>
          </div>

          <div className="alert alert-secondary" role="alert">
            <h5 className="card-title text-primary-emphasis fw-bold">Apple | Login 💠</h5>
            <h6 className="card-subtitle mb-3 mt-1 text-muted">Monday, 03:12 am</h6>
            <p className="card-text">Windows 11 [DESKTOP-HENVY63]</p>
            <p className="card-text mt-2">Near Entre Rios, Argentina.</p>
            <p className="card-text mt-2 mb-2">IP: 134.015.928.002</p>
            <span className="text-muted">Corrected at: 03:16 am</span>
          </div>

        </div>
      </div>

      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
          </div>
          <div class="dropdown mt-3">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
              Dropdown button
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample2" aria-labelledby="offcanvasExample2Label">
        <div class="offcanvas-header">
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas2" aria-label="Close"></button>
          <h5 class="offcanvas-title" id="offcanvas2ExampleLabel">Offcanvas</h5>
        </div>
        <div class="offcanvas-body">
          <div>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
          </div>
          <div class="dropdown mt-3">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
              Dropdown button
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
