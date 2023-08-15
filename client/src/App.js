import Button from './components/atoms/button';

function App() {
  const clickEvent = () => {
    console.log('hero hamda');
  };

  return (
    <div>
      <h3>Micheal Weaver</h3>
      <p>hero hamda</p>
      <Button onClick={clickEvent} outlined>
        Skip
      </Button>
    </div>
  );
}

export default App;
