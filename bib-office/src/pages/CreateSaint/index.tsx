import MainPaper from "@/components/Containers/MainPaper";
import LongTextField from "@/components/Inputs/LongTextField";
import { ForwardSelect } from "@/components/Inputs/Select";
import Markdown from "@/components/Text/Markdown";
import { months } from "@/utils/calendar";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import useCreateSaint from "./useCreateSaint";

const CreateSaintPage = () => {
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    text,
    onReplaceAllNumbersClick,
    onReplaceAllNextLineClick,
  } = useCreateSaint();
  return (
    <MainPaper>
      <Typography variant="h3" marginBottom={3}>
        Crear Santo
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledBox>
          <TextField
            fullWidth
            label="Nombre"
            {...register("name", { required: "Este campo es requerido" })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <LongTextField
            {...register("text", { required: "Este campo es requerido" })}
            error={!!errors.text}
            helperText={errors.text?.message}
          />

          <Grid
            container
            spacing={2}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid item xs={3}>
              <TextField
                fullWidth
                label="Día"
                type="number"
                {...register("day", { required: "Este campo es requerido" })}
                error={!!errors.day}
                helperText={errors.day?.message}
              />
            </Grid>
            <Grid item xs={9}>
              <ForwardSelect
                options={months}
                {...register("month", {
                  required: "Este campo es requerido",
                  valueAsNumber: true,
                })}
                error={!!errors.month}
                helperText={errors.month?.message}
              />
            </Grid>
          </Grid>
          <div style={{ display: "flex", gap: 8 }}>
            <Button variant="outlined" onClick={onReplaceAllNumbersClick}>
              Reemplazar todos los números por superíndices
            </Button>
            <Button variant="outlined" onClick={onReplaceAllNextLineClick}>
              Reemplazar todos los saltos de línea por dos espacios
            </Button>
          </div>
          <FormControlLabel
            control={<Checkbox {...register("isMain")} />}
            label="Principal"
          />
          <Button fullWidth type="submit" variant="contained">
            Crear Santo
          </Button>
        </StyledBox>
      </form>
      <Markdown children={text} />
    </MainPaper>
  );
};

export default CreateSaintPage;

const StyledBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));
