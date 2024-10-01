import MainPaper from "@/components/Containers/MainPaper";
import LongTextField from "@/components/Inputs/LongTextField";
import Markdown from "@/components/Text/Markdown";
import {
  Button,
  FormControlLabel,
  Grid,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import useEditSaint from "./useEditSaint";

const EditSaintPage = () => {
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    text,
    onReplaceAllNumbersClick,
    onReplaceAllNextLineClick,
  } = useEditSaint();

  return (
    <MainPaper>
      <Typography variant="h3" marginBottom={3}>
        Editar Santo
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledBox>
          <TextField
            fullWidth
            {...register("name", { required: "Este campo es requerido" })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <LongTextField
            error={!!errors.text}
            helperText={errors.text?.message}
            {...register("text", { required: "Este campo es requerido" })}
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
              <div style={{ display: "flex", gap: 8 }}>
                <Button variant="outlined" onClick={onReplaceAllNumbersClick}>
                  Reemplazar todos los números por superíndices
                </Button>
                <Button variant="outlined" onClick={onReplaceAllNextLineClick}>
                  Reemplazar todos los saltos de línea por dos espacios
                </Button>
              </div>
            </Grid>
          </Grid>
          <TextField
            fullWidth
            label="Mes"
            type="number"
            {...register("month", { required: "Este campo es requerido" })}
            error={!!errors.month}
            helperText={errors.month?.message}
          />
          <FormControlLabel
            control={<input type="checkbox" {...register("isMain")} />}
            label="Principal"
          />
          <Button fullWidth type="submit" variant="contained">
            Guardar
          </Button>
        </StyledBox>
      </form>
      <Markdown children={text} />
    </MainPaper>
  );
};

export default EditSaintPage;

const StyledBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));
