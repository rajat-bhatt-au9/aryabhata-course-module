function App() {
  const setAppName = () => {
    localStorage.setItem('app_name','m-tube')
  }

  return (
    <div className="App">
      <button onClick={setAppName}>Set App Name</button>
    </div>
  );
}

export default App;
