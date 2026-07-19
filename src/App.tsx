function App() {
  const name = "Hendrick";
  const yearsExperience = 5;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-2 bg-white text-slate-900">
      <h1 className="text-3xl font-semibold">Hello, {name}!</h1>
      <p className="text-slate-600">I have {yearsExperience} years of experience.</p>
    </div>
  );
}

export default App;