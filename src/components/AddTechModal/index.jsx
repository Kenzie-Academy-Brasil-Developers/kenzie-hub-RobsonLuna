import { CreateModal } from "../../page/DashboardPage/style"
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { Header } from "../Header";
import { MainForm } from "../../page/DashboardPage/style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputTitle } from "../../page/DashboardPage/style";
import Input from "../Input";
import { SelectTitle } from "../../page/DashboardPage/style";
import { SelectModal } from "../../page/DashboardPage/style";
import { Button } from "../Button";

export function AddTechModal(){



    const {
        createTechRequest,
        closeCreateModal,
      } = useContext(TechContext);

      const formSchema = yup.object().shape({
        status: yup.string().required("Informe seu status"),
        title: yup.string().required("Informe uma Tecnologia"),
      });
    
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(formSchema),
      });

    return(
        <>
        <CreateModal>
          <Header
            styled="HeaderModal"
            click={closeCreateModal}
            textTitle="Cadastar tecnologia"
          ></Header>

          <MainForm>
            <form onSubmit={handleSubmit(createTechRequest)}>
              <InputTitle>Nome</InputTitle>
              <Input
                styled="inputCreateTech"
                type="text"
                placeholder="Digite a tecnologia"
                {...register("title")}
                error={errors.title?.message}
              />
              <SelectTitle>Selecionar status</SelectTitle>
              <SelectModal {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </SelectModal>
              <Button
                styled="ButtonCreateTech"
                type="submit"
                text="Cadastrar tecnologia"
              ></Button>
            </form>
          </MainForm>
        </CreateModal>
      </>
    )
}