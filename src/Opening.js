export default function Opening(props) {
  return (
    <div class="jumbotron text-center">
      <h1>Ticket Form</h1>
      <p>This form will take you through a process of ordering a ticket</p>
      <button onClick={props.onNext} class="btn btn-primary">
        Next
      </button>
    </div>
  );
}
