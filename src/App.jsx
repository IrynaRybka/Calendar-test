function App() {
  return (
    <>
     <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <p>Calendar</p>
      <p>{import.meta.env.VITE_MESSAGING_SENDER_ID}</p>
    </>
  );
}

export default App;
