import { useState } from "react";

import AnswersList from "./AnswersList";
import Form from "./Form";

const initialData = {
  colour: "",
  activity: {
    swimming: false,
    bathing: false,
    chatting: false,
    none: false,
  },
  review: "",
  name: "",
  email: "",
};

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [formData, setFormData] = useState(initialData);
  const [listOfAnswers, setlistOfAnswers] = useState([]);

  const handleChange = (event) => {
    const { type, name, value, checked } = event.target;

    if (type === "radio" && name === "color") {
      setFormData({ ...formData, colour: value });
    }
    if (name === "spend-time" && value === "swimming") {
      setFormData({
        ...formData,
        activity: { ...formData.activity, swimming: checked },
      });
    }
    if (name === "spend-time" && value === "bathing") {
      setFormData({
        ...formData,
        activity: { ...formData.activity, bathing: checked },
      });
    }
    if (name === "spend-time" && value === "chatting") {
      setFormData({
        ...formData,
        activity: { ...formData.activity, chatting: checked },
      });
    }
    if (name === "spend-time" && value === "noTime") {
      setFormData({
        ...formData,
        activity: { ...formData.activity, none: checked },
      });
    }
    if (name === "review") {
      setFormData({ ...formData, review: value });
    }
    if (name === "username") {
      setFormData({ ...formData, name: value });
    }
    if (name === "email") {
      setFormData({ ...formData, email: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setlistOfAnswers([...listOfAnswers, formData]);
    console.log("LIST OF ANSWERS: ", listOfAnswers);
    setFormData(initialData);
    console.log("FORM DATA: ", formData);
  };

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList />
      </section>
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formData={formData}
      />
    </main>
  );
}

export default Main;
