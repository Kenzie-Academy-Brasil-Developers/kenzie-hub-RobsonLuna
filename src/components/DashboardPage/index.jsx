import Logo from "../img/logoKenzieHub.svg";
import { SectionUser } from "./style";
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";
import { EditModal } from "./style";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export function DashboardPage({ setUserdata, userData }) {
  const [editModal, setEditModal] = useState(false);
  const [editTech, SetEditTech] = useState();

  const formSchema = yup.object().shape({
    status: yup.string().required("Informe seu status"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function showEditModal(element) {
    console.log(element);
    setEditModal(true);
    SetEditTech(element);
  }

  async function editTechRequest(data) {
    // console.log(editTech)
    console.log(editTech.id);
    console.log(data);
    let token = window.localStorage.getItem("@TOKEN");
    token = JSON.parse(token);
    console.log(token);

    try {
      const response = await api.put(`/users/techs/${editTech.id}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Alteração realizada com sucesso!")
    } catch (error) {}
  }

  async function deleteTechRequest() {
    console.log(editTech);
    try {
      const reponse = await api.delete(`/users/techs/${editTech.id}`)
    } catch (error) {

    }
  }

  return (
    <>
    <main>

    
      <header>
        <img alt="Logo Kenzie Hub" src={Logo}></img>
        <button>Sair</button>
      </header>
      <SectionUser>
        <h2>Olá,{userData.user.name} </h2>
        <h2>Olá,{userData.user.name} </h2>

        <p>{userData.user.course_module}</p>
      </SectionUser>

      <section>
        <header>
          <h2>Tecnologias</h2>
          <button>+</button>
        </header>

        <ul>
          {userData.user.techs.map((element) => {
            return (
              <li key={uuid()} onClick={() => showEditModal(element)}>
                <p>{element.title}</p>
                <p>{element.status}</p>
              </li>
            );
          })}
        </ul>
      </section>

      {editModal ? (
        <>
          <EditModal>
            <header>
              <h2>Tecnologia Detalhes</h2>
              <span>X</span>
            </header>
            <main>
              <p>Nome do projeto</p>
              <p>{editTech.title}</p>
              <p>status</p>
              <form onSubmit={handleSubmit(editTechRequest)}>
                <select {...register("status")}>
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </select>
                <button type="submit">Salvar Alterações</button>
              </form>
              <button onClick={deleteTechRequest}>Excluir</button>
            </main>
          </EditModal>
        </>
      ) : (
        <> </>
      )}
      </main>
    </>
  );
}
