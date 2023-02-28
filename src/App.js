import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id='app-container' data-bs-theme="dark">
      <header>
        <nav>
          <ul>
            <li>
              <a href='#'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shield-check" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 12l2 2l4 -4" />
                  <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                </svg>

                <span>Status</span>
              </a></li>

            <li><a href='#'>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-rotate-clockwise-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 4.55a8 8 0 0 1 6 14.9m0 -4.45v5h5" />
                <line x1="5.63" y1="7.16" x2="5.63" y2="7.17" />
                <line x1="4.06" y1="11" x2="4.06" y2="11.01" />
                <line x1="4.63" y1="15.1" x2="4.63" y2="15.11" />
                <line x1="7.16" y1="18.37" x2="7.16" y2="18.38" />
                <line x1="11" y1="19.94" x2="11" y2="19.95" />
              </svg>

              <span>Activity</span>

            </a></li>

            <li>
              <a href='#'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-2fa" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 16h-4l3.47 -4.66a2 2 0 1 0 -3.47 -1.54" />
                  <path d="M10 16v-8h4" />
                  <line x1="10" y1="12" x2="13" y2="12" />
                  <path d="M17 16v-6a2 2 0 0 1 4 0v6" />
                  <line x1="17" y1="13" x2="21" y2="13" />
                </svg>

                <span>Code</span>
              </a></li>
          </ul>
        </nav>
      </header>

      <div className='waves'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#635eff" fill-opacity="1" d="M0,224L7.3,240C14.5,256,29,288,44,282.7C58.2,277,73,235,87,213.3C101.8,192,116,192,131,208C145.5,224,160,256,175,234.7C189.1,213,204,139,218,133.3C232.7,128,247,192,262,202.7C276.4,213,291,171,305,160C320,149,335,171,349,154.7C363.6,139,378,85,393,64C407.3,43,422,53,436,64C450.9,75,465,85,480,117.3C494.5,149,509,203,524,234.7C538.2,267,553,277,567,245.3C581.8,213,596,139,611,117.3C625.5,96,640,128,655,122.7C669.1,117,684,75,698,85.3C712.7,96,727,160,742,186.7C756.4,213,771,203,785,170.7C800,139,815,85,829,96C843.6,107,858,181,873,202.7C887.3,224,902,192,916,160C930.9,128,945,96,960,96C974.5,96,989,128,1004,144C1018.2,160,1033,160,1047,144C1061.8,128,1076,96,1091,112C1105.5,128,1120,192,1135,192C1149.1,192,1164,128,1178,122.7C1192.7,117,1207,171,1222,208C1236.4,245,1251,267,1265,250.7C1280,235,1295,181,1309,149.3C1323.6,117,1338,107,1353,117.3C1367.3,128,1382,160,1396,149.3C1410.9,139,1425,85,1433,58.7L1440,32L1440,0L1432.7,0C1425.5,0,1411,0,1396,0C1381.8,0,1367,0,1353,0C1338.2,0,1324,0,1309,0C1294.5,0,1280,0,1265,0C1250.9,0,1236,0,1222,0C1207.3,0,1193,0,1178,0C1163.6,0,1149,0,1135,0C1120,0,1105,0,1091,0C1076.4,0,1062,0,1047,0C1032.7,0,1018,0,1004,0C989.1,0,975,0,960,0C945.5,0,931,0,916,0C901.8,0,887,0,873,0C858.2,0,844,0,829,0C814.5,0,800,0,785,0C770.9,0,756,0,742,0C727.3,0,713,0,698,0C683.6,0,669,0,655,0C640,0,625,0,611,0C596.4,0,582,0,567,0C552.7,0,538,0,524,0C509.1,0,495,0,480,0C465.5,0,451,0,436,0C421.8,0,407,0,393,0C378.2,0,364,0,349,0C334.5,0,320,0,305,0C290.9,0,276,0,262,0C247.3,0,233,0,218,0C203.6,0,189,0,175,0C160,0,145,0,131,0C116.4,0,102,0,87,0C72.7,0,58,0,44,0C29.1,0,15,0,7,0L0,0Z"></path></svg>

        <h1>Welcome, Agus! 👋</h1>
      </div>

      <div className='d-flex flex-column align-items-center'>
        <div className='status'>

          <svg width="150" height="150" class="m-3 mb-2" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M39.2763 8.85311L25.285 4.19324C24.8939 4.06132 24.484 3.99771 24.0764 4.00006C23.6689 3.99771 23.2589 4.06132 22.8655 4.19324L8.87649 8.85311C7.15908 9.42558 6 11.0323 6 12.8439V27.6104L6.01885 27.6646C6.29448 31.6271 16.5872 41.3567 24.0034 44H24.1495C31.5657 41.3567 41.8607 31.6271 42.134 27.6646L42.1505 27.6104V12.8439C42.1505 11.0323 40.9938 9.42558 39.2763 8.85311Z" fill="#D0CEFF" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M33.5611 20.4227L22.1069 31.8768L19.082 28.8519L30.5362 17.3978C31.3725 16.5614 32.7271 16.5614 33.5611 17.3978C34.3974 18.2341 34.3974 19.5887 33.5611 20.4227Z" fill="#635DFF" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.414 25.1674L22.1163 31.8698L25.0776 28.9085L18.3753 22.2061C17.5578 21.3886 16.2314 21.3886 15.414 22.2061C14.5965 23.0235 14.5965 24.3499 15.414 25.1674Z" fill="#635DFF" />
          </svg>

        </div>

        <h2 class="mt-4">All Safe ✅</h2>

        <div className='d-flex justify-content-between align-items-center gap-5 mt-4'>

          <button type="button" class="btn btn-outline-secondary">Get 2FA code</button>
          <button type="button" class="btn btn-primary">Approve Activity</button>

        </div>

      </div>

      <div className='d-flex flex-column justify-content-start align-items-start mt-5 gap-4 pb-5 mb-5'>
        <h3>Recent Activity</h3>

        <div class="alert alert-dark" role="alert">
          <h5 class="card-title fw-bold">Instagram | Login 🔓</h5>
          <h6 class="card-subtitle mb-3 mt-1 text-muted">Today, 06:28 pm</h6>
          <p class="card-text">OS: Windows 11 [AgusM]</p>
          <p class="card-text mt-2">Near: Buenos Aires, Argentina.</p>
          <p class="card-text mt-2">IP: 112.127.293.182</p>
        </div>

        <div class="alert alert-info" role="alert">
          <h5 class="card-title text-info fw-bold">Google | Login Corrected ⚠️</h5>
          <h6 class="card-subtitle mb-3 mt-1 text-muted">Wednesday, 03:12 am</h6>
          <p class="card-text">The last login from Google has been marked as unussual by AgusM.</p>
          <p class="card-text mt-2">For your safety, the session has been closed.</p>
        </div>

        <div class="alert alert-danger" role="alert">
          <h5 class="card-title text-danger fw-bold">Google | Login 🚨</h5>
          <h6 class="card-subtitle mb-3 mt-1 text-muted">Wednesday, 03:12 am</h6>
          <p class="card-text">Windows 10 [DESKTOP-ISBX827]</p>
          <p class="card-text mt-2">Near Agra, India.</p>
          <p class="card-text mt-2 mb-2">IP: 146.379.198.462</p>
          <span class="text-muted">Corrected at: 03:16 am</span>
        </div>

        <div class="alert alert-info" role="alert">
          <h5 class="card-title text-info fw-bold">Apple | Login Corrected ⚠️</h5>
          <h6 class="card-subtitle mb-3 mt-1 text-muted">Wednesday, 03:12 am</h6>
          <p class="card-text">The last login from Apple has been marked as own by AgusM.</p>
        </div>

        <div class="alert alert-primary" role="alert">
          <h5 class="card-title text-primary fw-bold">Apple | Login 💠</h5>
          <h6 class="card-subtitle mb-3 mt-1 text-muted">Monday, 03:12 am</h6>
          <p class="card-text">Windows 11 [DESKTOP-HENVY63]</p>
          <p class="card-text mt-2">Near Entre Rios, Argentina.</p>
          <p class="card-text mt-2 mb-2">IP: 134.015.928.002</p>
          <span class="text-muted">Corrected at: 03:16 am</span>
        </div>

      </div>

    </div>
  );
}

export default App;
