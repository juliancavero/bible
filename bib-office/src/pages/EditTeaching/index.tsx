import MainPaper from "@/components/Containers/MainPaper";
import LongTextField from "@/components/Inputs/LongTextField";
import { ForwardSelect } from "@/components/Inputs/Select";
import Markdown from "@/components/Text/Markdown";
import { Button, Grid, styled, TextField, Typography } from "@mui/material";
import useEditTeaching from "./useEditTeaching";

const EditTeachingPage = () => {
  const {
    bibleBooks,
    register,
    handleSubmit,
    errors,
    onSubmit,
    text,
    onReplaceAllNumbersClick,
    onReplaceAllNextLineClick,
  } = useEditTeaching();

  return (
    <MainPaper>
      <Typography variant="h3" marginBottom={3}>
        Editar Enseñanza
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledBox>
          <ForwardSelect
            options={bibleBooks.map((book) => ({
              value: book.path,
              label: book.name,
            }))}
            {...register("book", { required: "Este campo es requerido" })}
            error={!!errors.book}
            helperText={errors.book?.message}
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
                label="Capítulo"
                type="number"
                {...register("chapter", {
                  required: "Este campo es requerido",
                })}
                error={!!errors.chapter}
                helperText={errors.chapter?.message}
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
          <LongTextField
            {...register("text", { required: "Este campo es requerido" })}
            error={!!errors.text}
            helperText={errors.text?.message}
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

export default EditTeachingPage;

const StyledBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));
