import PaddingBox from "@/components/Containers/PaddingBox";
import ButtonText from "@/components/Text/ButtonText";
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
                value: 1000,
                message: "La pregunta no puede tener más de 1000 caracteres",
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
          <Button className="w-full" type="submit">
            <ButtonText>Enviar</ButtonText>
          </Button>
        </PaddingBox>
      </form>
    </Form>
  );
};

export default MakeQuestion;
