import PaddingBox from "@/components/Containers/PaddingBox";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

type MakeQuestionProps = {
  onSubmit: (question: string) => void;
  short?: boolean;
};

const MakeQuestion = ({ onSubmit, short = false }: MakeQuestionProps) => {
  const form = useForm<{ question: string }>({
    defaultValues: {
      question: "",
    },
  });

  const submit = ({ question }: { question: string }) => {
    onSubmit(question);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submit)}>
        <PaddingBox>
          <FormField
            control={form.control}
            name="question"
            rules={{
              required: "Debes escribir una pregunta",
              maxLength: {
                value: 300,
                message: "La pregunta no puede tener más de 300 caracteres",
              },
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pregunta</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Escribe aquí tu consulta"
                    className="resize-none"
                    rows={short ? 3 : 6}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </PaddingBox>
        <PaddingBox>
          <Button type="submit">Enviar</Button>
        </PaddingBox>
      </form>
    </Form>
  );
};

export default MakeQuestion;
