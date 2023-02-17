import { SelectTitle } from "./style";
import { EditModal } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  CreateModal,
  MainDashboardContainer,
  MainForm,
  InputTitle,
  SelectModal,
  ButtonAlign,
} from "./style";
import Input from "../../components/Input";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { TechContext } from "../../providers/TechContext";
import { AddTechModal } from "../../components/AddTechModal";
import { EditTechModal } from "../../components/EditTechModal";


export function DashboardPage() {
  const formSchema = yup.object().shape({
    status: yup.string().required("Informe seu status"),
    title: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { userData, setUserData } = useContext(UserContext);
  const {
    editModal,
    setEditModal,
    editTech,
    setEditTech,
    createModal,
    setCreateModal,
    showEditModal,
    logOut,
    createTechRequest,
    createTechModal,
    deleteTechRequest,
    editTechRequest,
    closeEditModal,
    closeCreateModal,
  } = useContext(TechContext);

  return (
    <>
      {userData && (
        <MainDashboardContainer>
          <Header styled="HeaderDashboard" logOut={logOut}></Header>
          <Section userData={userData} styled="UserInfo"></Section>

          <Section
            userData={userData}
            styled="TechList"
            showEditModal={showEditModal}
            createTechModal={createTechModal}
          ></Section>

          {createModal ? (
            <AddTechModal></AddTechModal>
        
          ) : (
            <> </>
          )}
          {editModal && editTech.title ? (
            <EditTechModal></EditTechModal>
          ) : (
            <></>
          )}
        </MainDashboardContainer>
      )}
    </>
  );
}
