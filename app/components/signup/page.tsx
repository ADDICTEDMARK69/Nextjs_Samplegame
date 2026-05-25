"use client";
import { useRouter } from "next/navigation";
import { toast } from 'react-hot-toast';

const Signup=()=>{

    const router = useRouter();

  const signupFunc = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const password = form.get("password") as string;
    const retypePassword = form.get("retypePassword") as string;

    if (password !== retypePassword) {
      toast.error("Passwords do not match");
      return;
    }

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: form.get("username"),
        firstname: form.get("firstname"),
        lastname: form.get("lastname"),
        email: form.get("email"),
        password,
      }),
    });
    

    const data = await res.json();

    if (!res.ok) {
      toast.error(data.error ?? "Signup failed");
      return;
    }

    toast.success("You did it!");
  };

    return(
        <>

  <div className="bg-[url('/login_signup.jpg')] flex min-h-screen items-center justify-center bg-linear-to-br from-purple-500 to-blue-500 font-sans dark:bg-black">
        

    <div
      className="shadow-md w-[90vh] h-[690px] rounded-[120px] p-10 flex flex-col gap-y-3 items-center justify-start
  bg-white/20 backdrop-blur-md border border-white/30"
    >

    <h1 className="text-4xl font-bold italic">Signup</h1>

<form onSubmit={signupFunc}>
    <input
      name="username"
      type="text" 
      placeholder="Enter your username"
      className="w-full rounded-xl border border-white/30 bg-white/20 px-4 py-3 text-neutral-900 placeholder:text-neutral-600 shadow-sm outline-none backdrop-blur-md transition
                 focus:border-white/60 focus:ring-2 focus:ring-amber-400/60"
    />
     <input
      name="firstname"
      type="text" 
      placeholder="Enter your firstname"
      className="w-full rounded-xl border border-white/30 bg-white/20 px-4 py-3 text-neutral-900 placeholder:text-neutral-600 shadow-sm outline-none backdrop-blur-md transition
                 focus:border-white/60 focus:ring-2 focus:ring-amber-400/60"
    />
     <input
      name="lastname"
      type="text" 
      placeholder="Enter your lastname"
      className="w-full rounded-xl border border-white/30 bg-white/20 px-4 py-3 text-neutral-900 placeholder:text-neutral-600 shadow-sm outline-none backdrop-blur-md transition
                 focus:border-white/60 focus:ring-2 focus:ring-amber-400/60"
    />
     <input
      name="email"
      type="text" 
      placeholder="Enter your email"
      className="w-full rounded-xl border border-white/30 bg-white/20 px-4 py-3 text-neutral-900 placeholder:text-neutral-600 shadow-sm outline-none backdrop-blur-md transition
                 focus:border-white/60 focus:ring-2 focus:ring-amber-400/60"
    />

<input
      name="password"
      type="password" 
      placeholder="Enter your password"
      className="w-full rounded-xl border border-white/30 bg-white/20 px-4 py-3 text-neutral-900 placeholder:text-neutral-600 shadow-sm outline-none backdrop-blur-md transition
                 focus:border-white/60 focus:ring-2 focus:ring-amber-400/60"
    />

<input
      name="retypePassword"
      type="password" 
      placeholder="Enter your retype-password"
      className="w-full rounded-xl border border-white/30 bg-white/20 px-4 py-3 text-neutral-900 placeholder:text-neutral-600 shadow-sm outline-none backdrop-blur-md transition
                 focus:border-white/60 focus:ring-2 focus:ring-amber-400/60"
    />

<button
    type="submit"
    className="mt-2 h-16 w-[190px] rounded-2xl bg-neutral-900 text-white font-semibold shadow-md transition
               hover:bg-neutral-800 active:scale-[0.98]
               focus:outline-none focus:ring-2 focus:ring-amber-400/70 focus:ring-offset-2 focus:ring-offset-transparent"
  >
    SIGNUP
  </button>

  </form>
  <p className="text-sm text-neutral-700">
      Already have an Account?{" "}
      <button
        type="button"
        onClick={() => router.push("/")}
        className="font-semibold text-orange-600 hover:underline"
      >
        LOGIN
      </button>
      </p>
    </div>

  </div>
        </>
    );
};

export default Signup;