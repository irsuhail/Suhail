

import './App.css'

function App() {
return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/quizsetup" element={<QuizSetup/>}/>
          <Route path="/quiz" element={<Quiz/>}/>
          <Route path="/leaderboard" element={<Leaderboard/>}/>
        </Routes>

      </div>
    </Router>
  );
}

export default App
