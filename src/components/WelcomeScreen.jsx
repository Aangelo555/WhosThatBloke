function WelcomeScreen({ onStart }) {
  return (
    <div className="welcome">
      <div className="welcome-bg"></div>
      <div className="welcome-overlay"></div>

      <div className="welcome-content">
        <span className="welcome-label">Manchester United Edition</span>
        <h1>Who's That Bloke?</h1>
        <p>8 players. Name them all.</p>
        <button onClick={onStart}>Start →</button>
      </div>
    </div>
  )
}

export default WelcomeScreen