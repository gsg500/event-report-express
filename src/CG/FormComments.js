import { useState } from "react";
import axios from "axios";
import FormFieldComments from "./FormFieldComments";
import SelectInput from "./SelectInput";

function FormComments() {
  const [formData, setFormData] = useState({ 
    chave: "999",
    nome: "",
    email: "",
    tipo: "Sujestão",
    texto: ""
  });
  const [isSending, setIsSending] = useState(false);
  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsSending(true);

    axios
      .post("https://ironrest.herokuapp.com/commentEventREP2", formData)
      .then((response) => {
        setIsSending(false);
      })
      .catch((err) => {
        setIsSending(false);
      });
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      {/* Input Email */}
      <FormFieldComments
        label="Email"
        id="exampleInputEmail1"
        type="email"
        name="email"         
        onChange={handleChange}
        value={formData.email}
      />

      {/* Input senha */}
      <FormFieldComments
        label="Nome"
        id="exampleInputName"
        type="text"
        name="nome"
        onChange={handleChange}
        value={formData.nome}            
      />
  
      {/* Input Campus */}
      <SelectInput
        label="Tipo"
        id="exampleInputTipo"
        name="tipo"
        onChange={handleChange}
        value={formData.tipo}
      >
        <option value="Sujestao">Sujestão</option>
        <option value="Reclamacao">Reclamação</option>
        <option value="Elogio">Elogio</option>
      </SelectInput>

      <FormFieldComments
        label="Mensagem"
        id="exampleInputMensagem"
        name="texto" 
        onChange={handleChange}
        value={formData.texto}
        required 
      />

     
      {/* botão 'submit' */}
      <div className="mt-3 text-end">
        <button disabled={isSending} type="submit" className="btn btn-primary">
          {isSending ? (
            <span
              className="spinner-border spinner-border-sm me-2"
              role="status"
              aria-hidden="true"
            ></span>
          ) : null}
          Enviar
        </button>
      </div>
    </form>
    </div>
  );
}

export default FormComments;