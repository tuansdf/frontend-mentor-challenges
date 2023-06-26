import Link from "next/link";
import classes from "./page.module.scss";

type Props = {
  searchParams: {
    email?: string;
  };
};
export default function Page({ searchParams: { email } }: Props) {
  return (
    <main className={classes["main"]}>
      <div className={classes["body"]}>
        <img src="/images/icon-success.svg" alt="success icon" />
        <h1 className={classes["title"]}>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to{" "}
          <span className={classes["email"]}>
            {email || "ash@loremcompany.com"}
          </span>
          . Please open it and click the button inside to confirm your
          subscription.
        </p>
      </div>
      <Link href="/" className="button">
        Dismiss message
      </Link>
    </main>
  );
}
