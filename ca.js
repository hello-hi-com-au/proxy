body {
  background-color: var(--page);
  font-family: Arial, sans;
  color: #f0f0f0;
  margin: 0;
  padding: 0;
  letter-spacing: 0px;
}

.settings-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20% 20px 20px 20px;
}

.settings-title {
  display: block;
  font-size: 70px;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.settings-card {
  background-color: var(--block);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 400px;
  transition: all 0.3s ease;
}

.settings-card:hover {
  transform: translatey(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.settings-card h3 {
  margin-top: 0;
  color: var(--text-primary);
}

.settings-card p {
  color: var(--text-secondary);
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider-round {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;
}

.slider-round:before {
  position: absolute;
  content: '';
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider-round {
  background-color: #4caf50;
}

input:checked + .slider-round:before {
  transform: translateX(26px);
}

input {
  padding: 15px;
  width: 93%;
  border-radius: 5px;
  background: var(--background-secondary);
  text-align: center;
  font-size: 24px;
  border: none;
  outline: none;
  color: var(--text-primary);
}

.key-form {
  padding: 15px;
  width: 93%;
  border-radius: 5px;
  background: var(--block-buttons);
  text-align: center;
  font-size: 24px;
  border: none;
  outline: none;
  color: var(--text-primary);
  margin-top: 10px;
}

.key-button {
  cursor: pointer;
  border: 2px;
  transition: 0.2s;
  margin-top: 10px;
  background-color: var(--block-buttons);
  padding: 0.5rem;
  border-radius: 0.375rem;
  color: var(--text-primary);
  height: 50px;
  width: 49%;
  padding: 10px;
  text-align: center;
}

button {
  cursor: pointer;
  border: 2px;
  transition: 0.2s;
  margin-top: 10px;
  background-color: var(--block-buttons);
  padding: 0.5rem;
  border-radius: 0.375rem;
  color: var(--text-primary);
  height: 50px;
  width: 35%;
  padding: 10px;
  text-align: center;
}

select {
  padding: 20px;
  border-radius: 5px;
  background: var(--block-buttons);
  color: var(--text-primary);
  font-size: 20px;
  border: 0px;
  outline: none;
}

@media screen and (max-width: 768px) {
  .settings-container {
    padding: 25% 20px 20px 20px;
  }
  .settings-card {
    width: 100%;
    max-width: 400px;
  }

  .settings-title {
    font-size: 40px;
  }

  input,
  .key-form {
    width: 90%;
  }

  button,
  .key-button {
    width: 100%;
    max-width: 200px;
  }
}

@media screen and (max-width: 500px) {
  .settings-container {
    padding-top: 35%;
  }
}

@media screen and (min-width: 1000px) {
  .settings-container {
    padding-top: 10%;
  }
}

#last-updated {
  margin-top: -3%;
}
