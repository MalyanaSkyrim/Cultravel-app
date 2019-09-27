import React from "react";
import "./Contactus-style.scss";
import Button from "../../kit/CustomForm/Button/Button";
import Input from "../../kit/CustomForm/Input/Input";
import TextArea from "../../kit/CustomForm/TextArea/TextArea";
import Form from "../../kit/CustomForm/Form/Form";

const Contactus = () => {
  return (
    <div className="contactus">
      <div className="contactus__container">
        <div className="contactus__form-links">
          <div className="contactus__form">
            <Form>
              <Input id="username" label="Username : " required></Input>
              <Input id="email" type="email" label="Email : " required></Input>
              <TextArea label="Text us :"></TextArea>
              <Button type="secondary">Send</Button>
            </Form>
          </div>
          <div className="contactus__social-links"></div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
