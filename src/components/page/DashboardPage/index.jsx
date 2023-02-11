import Logo from "../../img/logoKenzieHub.svg";
import { SectionUser } from "./style";
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";
import { EditModal } from "./style";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CreateModal } from "./style";

export function DashboardPage({ setUserData, userData }) {
  const [editModal, setEditModal] = useState(false);
  const [editTech, SetEditTech] = useState();
  const [createModal, setCreateModal] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    let userId = window.localStorage.getItem("@USERID");
    !userId && navigate("/");

    async function getUser() {
      try {
        userId = JSON.parse(userId);
        console.log(userId);

        const response = await api.get(`/users/${userId}`);

        console.log(response.data);
        // console.log(userData)
        setUserData(response.data);
      } catch (error) {}
    }
    getUser();
  }, []);

  const formSchema = yup.object().shape({
    status: yup.string().required("Informe seu status"),
    title: yup.string().required("Informe uma tecnologia"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function showEditModal(element) {
    // console.log(element);
    setEditModal(true);
    SetEditTech(element);
    console.log(editTech);
  }

  async function updateUser() {
    let userId = window.localStorage.getItem("@USERID");
    userId = JSON.parse(userId);
    try {
      console.log(userId);

      const response = await api.get(`/users/${userId}`);

      console.log(response.data);
      // console.log(userData)
      setUserData(response.data);
    } catch (error) {}
  }

  async function editTechRequest(data) {
    console.log("clicou");
    console.log(editTech);
    console.log(editTech.id);
    console.log(data);
    let token = window.localStorage.getItem("@TOKEN");
    token = JSON.parse(token);
    console.log(data);
    console.log(token);

    try {
      const response = await api.put(`/users/techs/${editTech.id}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      updateUser();
      toast.success("Alteração realizada com sucesso!");
    } catch (error) {}
  }

  async function deleteTechRequest() {
    // console.log(editTech);
    let token = window.localStorage.getItem("@TOKEN");
    token = JSON.parse(token);
    try {
      const response = await api.delete(`/users/techs/${editTech.id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Item deletado com sucesso!");
      updateUser();
      closeEditModal();
    } catch (error) {}
  }

  function createTechModal(data) {
    setCreateModal(true);
  }

  function closeEditModal() {
    setEditModal(false);
  }

  function closeCreateModal() {
    setCreateModal(false);
  }

  async function createTechRequest(data) {
    console.log(data);
    let token = window.localStorage.getItem("@TOKEN");
    token = JSON.parse(token);

    try {
      const response = await api.post("/users/techs", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Item Adicionado com sucesso!");
      updateUser();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  function logOut() {
    window.localStorage.clear();
    navigate("/");
  }

  return (
    <>
      {userData && (
        <main>
          <header>
            <img alt="Logo Kenzie Hub" src={Logo}></img>
            <button onClick={logOut}>Sair</button>
          </header>
          <SectionUser>
            <h2>Olá,{userData.name} </h2>

            <p>{userData.course_module}</p>
          </SectionUser>

          <section>
            <header>
              <h2>Tecnologias</h2>
              <button onClick={createTechModal}>+</button>
            </header>

            <ul>
              {userData.techs.map((element) => {
                return (
                  <li key={uuid()} onClick={() => showEditModal(element)}>
                    <p>{element.title}</p>
                    <p>{element.status}</p>
                  </li>
                );
              })}
            </ul>
          </section>

          {createModal ? (
            <>
              <CreateModal>
                <header>
                  <h2>Cadastrar tecnologia</h2>
                  <span onClick={closeCreateModal}>X</span>
                </header>
                <main>
                  <form onSubmit={handleSubmit(createTechRequest)}>
                    <p>Nome</p>
                    <input
                      type="text"
                      placeholder="Digite a tecnologia"
                      {...register("title")}
                    ></input>
                    <p>{errors.title?.message}</p>
                    <p>Selecionar status</p>
                    <select {...register("status")}>
                      <option value="Iniciante">Iniciante</option>
                      <option value="Intermediário">Intermediário</option>
                      <option value="Avançado">Avançado</option>
                    </select>
                    <button type="submit">Cadastrar tecnologia</button>
                  </form>
                </main>
              </CreateModal>
            </>
          ) : (
            <> </>
          )}
          {editModal ? (
            <>
              <EditModal>
                <header>
                  <h2>Tecnologia Detalhes</h2>
                  <span onClick={closeEditModal}>X</span>
                </header>
                <main>
                  <form onSubmit={handleSubmit(editTechRequest)}>
                    <p>Nome do projeto</p>
                    <input
                      value={editTech.title}
                      disabled={true}
                      {...register("title")}
                      placeholder={editTech.title}
                    />

                    <p>status</p>
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
      )}
    </>
  );
}
