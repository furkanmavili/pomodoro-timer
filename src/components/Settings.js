import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import SwitchButton from "./switchButton";
import Button from "./settingsButton";
const customStyles = {
  content: {
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    borderRadius: "10px",
    transform: "translate(-50%, -50%)",
    width: "400px",
    height: "700px",
    backgroundColor: "#ec9b87",
    position: "relative",
  },
};
const Container = styled.div`
  color: #fff;
  position: relative;
  height: 90%;
  section {
    display: flex;
    flex-direction: column;
    div {
      display: flex;
      align-items: center;
      h3 {
        flex: 1;
      }
      input {
        width: 70px;
        height: 30px;
      }
    }
  }
`;
function Settings({ settings, setSettings }) {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    subtitle.style.color = "#000";
  }
  function closeModal() {
    setIsOpen(false);
  }
  function handleChange(e) {
    e.preventDefault();
    const newForm = { ...settings };
    newForm[e.target.name] = e.target.value;
    setSettings(newForm);
  }

  return (
    <div>
      <button onClick={openModal}>Settings</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        closeTimeoutMS={500}
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Settings</h2>
        <Container>
          <section>
            <div>
              <h3>Pomodoro</h3>
              <input
                onChange={handleChange}
                name="pomodoro"
                value={settings.pomodoro}
                type="number"
                min="10"
                max="60"
              />
            </div>
            <div>
              <h3>Short Break</h3>
              <input
                onChange={handleChange}
                name="short"
                value={settings.short}
                type="number"
                min="1"
                max="20"
              />
            </div>
            <div>
              <h3>Long Break</h3>
              <input
                onChange={handleChange}
                name="long"
                value={settings.long}
                type="number"
                min="5"
                max="30"
              />
            </div>
            <div>
              <h3>AutoStart</h3>
              <SwitchButton
                isChecked={settings.autoStart}
                setSettings={setSettings}
              />
            </div>
            <Button type="submit" onClick={closeModal}>
              Save
            </Button>
          </section>
        </Container>
      </Modal>
    </div>
  );
}

export default Settings;
