import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Link } from "@tanstack/react-router"
import z from "zod"
import { useAuth } from "@/hooks/auth-context"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export function LoginForm({ className, ...props }: React.ComponentProps<"form">) {
  const { signIn, signInWithGoogle, signInWithGithub, loading } = useAuth();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    signIn(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn("flex flex-col gap-6", className)} {...props}>
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to login to your account
          </p>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="m@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-3">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <div className="w-full flex justify-between items-center">
                      <Label htmlFor="password">Password</Label>
                      <a
                        href="/reset-pass"
                        className="ml-auto text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </FormLabel>
                  <FormControl>
                    <Input type="password" required {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full">
            {!loading ? (
              <span>
                Login
              </span>
            ) : (
              <Loader2 className="animate-spin" />
            )}
          </Button>
          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-background text-muted-foreground relative z-10 px-2">
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
            Login with Google
          </Button>

          <Button variant="outline" className="w-full" onClick={signInWithGithub} type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                fill="currentColor"
              />
            </svg>
            Login with Github
          </Button>
        </div>
        <div className="text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link to='/signup' className="underline underline-offset-4">
            Sign up
          </Link>
        </div>
      </form>
    </Form>

  )
}
