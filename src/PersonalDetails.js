export default function PersonalDetails(props) {
  return (
    <div class="container">
      <br />
      <br />
      <form onSubmit={props.onNext}>
        <div class="form-group">
          <label for="exampleInputName">Name</label>
          <input
            type="name"
            class="form-control"
            id="exampleInputName"
            placeholder="Enter name"
            value={props.name}
            onChange={props.onNameChange}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputSurname">Surname</label>
          <input
            type="name"
            class="form-control"
            id="exampleInputSurname"
            placeholder="Surname"
            value={props.surname}
            onChange={props.onSurnameChange}
          />
        </div>
        <button class="btn btn-primary float-right">Next</button>
      </form>
    </div>
  );
}
