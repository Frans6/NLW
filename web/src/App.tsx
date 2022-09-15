interface ButtonProps{
  title: string;
}

function Button (props: ButtonProps){
  return (
    <button>
      {props.title}
    </button>
  )
}

function App() {
  return (
    <div>
      <Button title="Envia 1" />
      <Button title="Envia 2" />
      <Button title="Envia 3" />
    </div>
  )
}

export default App
