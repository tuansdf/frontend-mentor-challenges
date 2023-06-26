import { Attribution } from "~/components/attribution";
import classes from "./page.module.scss";
import { redirect } from "next/navigation";

export default function Home() {
  const handleSubmit = async (formData: FormData) => {
    "use server";

    const email = formData.get("email");
    redirect(`/thanks?email=${email}`);
  };

  return (
    <>
      <main className={classes["main"]}>
        <img
          src="/images/illustration-sign-up-mobile.svg"
          alt=""
          className={classes["image"]}
        />

        <div className={classes["body"]}>
          <h1 className={classes["title"]}>Stay updated!</h1>
          <p className={classes["subtitle"]}>
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className={classes["list"]}>
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>

          <form className={classes["form"]} action={handleSubmit}>
            <label>Email address</label>
            <input
              type="email"
              name="email"
              required
              placeholder="email@company.com"
            />
            <button>Subscribe to monthly newsletter</button>
          </form>
        </div>
      </main>

      <Attribution />
    </>
  );
}
