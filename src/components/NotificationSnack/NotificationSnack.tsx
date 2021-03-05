import React from "react"

interface NotificationSnackProps {
  type: "error" | "success"
}

export const NotificationSnack: React.FunctionComponent<NotificationSnackProps> = ({
  type,
  children,
}) => {
  const classes = [
    "notification-snack",
    type === "success"
      ? "notification-snack--success"
      : "notification-snack--error",
  ]

  return <div className={classes.join(" ")}>{children}</div>
}
