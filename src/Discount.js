export default function Discount(props) {
  return (
    <div class="container">
      <br />
      <br />
      <form onSubmit={props.onNext}>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Select your discount</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>child</option>
            <option>pensioner</option>
            <option>gamer</option>
          </select>
        </div>
        <button class="btn btn-primary float-right">Next</button>
      </form>
    </div>
  );
}
