import { MainDashboardContainer } from "./style";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { TechContext } from "../../providers/TechContext";
import { AddTechModal } from "../../components/AddTechModal";
import { EditTechModal } from "../../components/EditTechModal";

export function DashboardPage() {
  const { userData, setUserData } = useContext(UserContext);
  const {
    editModal,
    editTech,
    createModal,
    showEditModal,
    logOut,
    createTechModal,
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

          {createModal ? <AddTechModal></AddTechModal> : <> </>}
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
