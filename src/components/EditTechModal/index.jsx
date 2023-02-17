import { EditModal } from "../../page/DashboardPage/style";
import { Header } from "../Header";
import { MainForm } from "../../page/DashboardPage/style";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputTitle } from "../../page/DashboardPage/style";
import Input from "../Input";
import { SelectTitle } from "../../page/DashboardPage/style";
import { SelectModal } from "../../page/DashboardPage/style";
import { ButtonAlign } from "../../page/DashboardPage/style";
import { Button } from "../Button";

export function EditTechModal() {
  const { editTech, deleteTechRequest, editTechRequest, closeEditModal } =
    useContext(TechContext);

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

  return (
    <>
      <EditModal>
        <Header
          styled="HeaderModal"
          click={closeEditModal}
          textTitle="Tecnologia Detalhes"
        ></Header>
        <MainForm>
          <form onSubmit={handleSubmit(editTechRequest)}>
            <InputTitle>Nome do projeto</InputTitle>
            <Input
              disabled={true}
              inputValue={editTech.title}
              {...register("title")}
              placeholder={editTech.title}
            />

            <SelectTitle>Status</SelectTitle>
            <SelectModal {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </SelectModal>
            <ButtonAlign>
              <Button
                styled="ButtonSaveTechChange"
                type="submit"
                text="Salvar Alterações"
              ></Button>
              <Button
                styled="ButtonTechDelete "
                click={deleteTechRequest}
                text="Excluir"
              ></Button>
            </ButtonAlign>
          </form>
        </MainForm>
      </EditModal>
    </>
  );
}
