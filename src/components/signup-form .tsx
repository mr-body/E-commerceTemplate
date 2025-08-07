import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useAuth } from "@/hooks/auth-context";
import * as z from "zod";

const formSchema = z
  .object({
    email: z.string().email("E-mail inválido"),
    password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres"),
    confirmPassword: z.string().min(8, "A confirmação deve ter no mínimo 8 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

type SignUpFormValues = z.infer<typeof formSchema>;

export function SignUpForm({ className, ...props }: React.ComponentProps<"form">) {
  const { signUp, signInWithGoogle, loading } = useAuth();

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: SignUpFormValues) {
    const { email, password } = values;
    signUp({ email, password });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("flex flex-col gap-6", className)}
        {...props}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-muted-foreground text-sm">
            Enter your email below to create your account
          </p>
        </div>

        <div className="grid gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="m@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? <Loader2 className="animate-spin h-4 w-4" /> : "Sign Up"}
          </Button>

          <div className="relative text-center text-sm">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t" />
            </div>
            <span className="relative bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>

          <Button variant="outline" className="w-full" onClick={signInWithGoogle} type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20" height="20">
              <path fill="#EA4335" d="M24 9.5c3.36 0 6.21 1.15 8.52 3.05l6.34-6.34C34.65 2.57 29.71 0 24 0 14.61 0 6.65 5.74 2.67 13.94l7.93 6.14C12.32 14.11 17.7 9.5 24 9.5z" />
              <path fill="#4285F4" d="M46.1 24.5c0-1.7-.15-3.33-.43-4.9H24v9.3h12.4c-.54 2.82-2.12 5.2-4.5 6.83l7.05 5.49C43.59 37.45 46.1 31.45 46.1 24.5z" />
              <path fill="#FBBC05" d="M10.6 28.57a14.83 14.83 0 0 1 0-9.14l-7.93-6.14A24 24 0 0 0 0 24c0 3.9.94 7.57 2.67 10.71l7.93-6.14z" />
              <path fill="#34A853" d="M24 48c6.48 0 11.91-2.15 15.87-5.83l-7.05-5.49c-2.05 1.38-4.7 2.19-8.82 2.19-6.3 0-11.68-4.61-13.4-10.76l-7.93 6.14C6.65 42.26 14.61 48 24 48z" />
              <path fill="none" d="M0 0h48v48H0z" />
            </svg>
            Sign up with Google
          </Button>
        </div>

        {/* Link to login */}
        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="underline underline-offset-4">
            Login
          </Link>
        </div>
      </form>
    </Form>
  );
}
