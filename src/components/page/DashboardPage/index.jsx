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
import { CreateModal, MainDashboardContainer } from "./style";
import Input from "../../Input";
import { Header } from "../../Header";
import { Section } from "../../Section";


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
    console.log(element);
    console.log(editTech);
    SetEditTech(element);
    console.log(editTech);
    setEditModal(true);
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
    // SetEditTech(editTech)
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
        <MainDashboardContainer>
          <Header styled="HeaderDashboard" logOut={logOut}>
           
          </Header>
          <Section userData={userData} styled="UserInfo">
            
          </Section>

           

          <Section userData={userData} styled="TechList" showEditModal={showEditModal} createTechModal={createTechModal}>
      
          </Section>

          {createModal ? (
            <>
              <CreateModal>
              {/* <Header styled="HeaderModal" click={closeCreateModal} textTitle="Cadastar tecnologia">
                  
                  </Header> */}
                <header>
                  <h2>Cadastrar tecnologia</h2>
                  <span onClick={closeCreateModal}>X</span>
                </header>
                <main>
                  <form onSubmit={handleSubmit(createTechRequest)}>
                    <p>Nome</p>
                    <Input
                      type="text"
                      placeholder="Digite a tecnologia"
                      {...register("title")}
                      error={errors.title?.message}
                    ></Input>
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
          {editModal && editTech.title ? (
            <>
              <EditModal>
                <Header styled="HeaderModal" click={closeEditModal} textTitle="Tecnologia Detalhes">
                  
                </Header>
                <main>
                  <form onSubmit={handleSubmit(editTechRequest)}>
                    <p>Nome do projeto</p>
                    <Input
                      // readOnly={true}
                      disabled={true}
                     
                      value={editTech.title}
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
        </MainDashboardContainer>
      )}
    </>
  );
}
