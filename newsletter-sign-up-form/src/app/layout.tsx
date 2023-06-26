import { PropsWithChildren } from "react";
import { primaryFont } from "~/app/fonts";
import "~/styles/index.scss";

export const metadata = {
  title: "Next Site",
  description: "Next Site",
};

type Props = PropsWithChildren;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={primaryFont.className}>{children}</body>
    </html>
  );
}
