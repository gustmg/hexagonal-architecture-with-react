import { Card, CardContent, CardHeader } from "@mui/material";
import styles from "./BaseCard.module.css";
import { ReactElement } from "react";

interface Props {
  title: string;
  content: ReactElement;
}

function BaseCard({ title, content }: Readonly<Props>) {
  return (
    <Card className={styles.Card}>
      <CardHeader title={<strong>{title}</strong>} />
      <CardContent>{content}</CardContent>
    </Card>
  );
}

export default BaseCard;
