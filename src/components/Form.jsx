export default function Form(props) {
  return (
    <section className="main__form">
      <form class="form" onSubmit={props.handleSubmit}>
        <h2>Tell us what you think about your rubber duck!</h2>

        <div class="form__group radio">
          <h3>How do you rate your rubber duck colour?</h3>
          <ul>
            <li>
              <input
                id="color-one"
                type="radio"
                name="color"
                value="1"
                checked={props.formData.colour === "1"}
                onChange={props.handleChange}
              />
              <label for="color-one">1</label>
            </li>
            <li>
              <input
                id="color-two"
                type="radio"
                name="color"
                value="2"
                checked={props.formData.colour === "2"}
                onChange={props.handleChange}
              />
              <label for="color-two">2</label>
            </li>
            <li>
              <input
                id="color-three"
                type="radio"
                name="color"
                value="3"
                checked={props.formData.colour === "3"}
                onChange={props.handleChange}
              />
              <label for="color-three">3</label>
            </li>
            <li>
              <input
                id="color-four"
                type="radio"
                name="color"
                value="4"
                checked={props.formData.colour === "4"}
                onChange={props.handleChange}
              />
              <label for="color-four">4</label>
            </li>
          </ul>
        </div>
        <div class="form__group">
          <h3>How do you like to spend time with your rubber duck</h3>
          <ul>
            <li>
              <label>
                <input
                  name="spend-time"
                  type="checkbox"
                  value="swimming"
                  checked={props.formData.activity.swimming}
                  onChange={props.handleChange}
                />
                Swimming
              </label>
            </li>
            <li>
              <label>
                <input
                  name="spend-time"
                  type="checkbox"
                  value="bathing"
                  checked={props.formData.activity.bathing}
                  onChange={props.handleChange}
                />
                Bathing
              </label>
            </li>
            <li>
              <label>
                <input
                  name="spend-time"
                  type="checkbox"
                  value="chatting"
                  checked={props.formData.activity.chatting}
                  onChange={props.handleChange}
                />
                Chatting
              </label>
            </li>
            <li>
              <label>
                <input
                  name="spend-time"
                  type="checkbox"
                  value="noTime"
                  checked={props.formData.activity.none}
                  onChange={props.handleChange}
                />
                I don't like to spend time with it
              </label>
            </li>
          </ul>
        </div>
        <label>
          What else have you got to say about your rubber duck?
          <textarea
            name="review"
            cols="30"
            rows="10"
            onChange={props.handleChange}
            value={props.formData.review}
          ></textarea>
        </label>
        <label>
          Put your name here (if you feel like it):
          <input
            type="text"
            name="username"
            onChange={props.handleChange}
            value={props.formData.name}
          />
        </label>
        <label>
          Leave us your email pretty please??
          <input
            type="email"
            name="email"
            onChange={props.handleChange}
            value={props.formData.email}
          />
        </label>
        <input class="form__submit" type="submit" value="Submit Survey!" />
      </form>
    </section>
  );
}
