import { SectionUserInfo, SectionUserName, SectionUserDescription, SectionTechList, TechHeaderItemAlign, TechTitle, TechList } from "./style";
import {v4 as uuid} from "uuid"
import { Button } from "../Button";

export function Section({ styled, userData, showEditModal,createTechModal }) {
  switch (styled) {
    case "UserInfo":
      return (
        <SectionUserInfo>
          <SectionUserName>Olá,{userData.name} </SectionUserName>

            <SectionUserDescription>{userData.course_module}</SectionUserDescription>
        </SectionUserInfo>
      );

      case "TechList":
        return (
            <SectionTechList>
            <TechHeaderItemAlign>
              <TechTitle>Tecnologias</TechTitle>
              <Button click={createTechModal} text="+"  styled="ButtonAddTech"></Button>
            </TechHeaderItemAlign>

            <TechList>
              {userData.techs.map((element) => {
                return (
                  <li key={uuid()} onClick={() => showEditModal(element)}>
                    <p>{element.title}</p>
                    <p>{element.status}</p>
                  </li>
                );
              })}
            </TechList>
          </SectionTechList>
        );


    default:
      return <section></section>;
  }
}
